<div class="card card-compact bg-base-200 shadow-xl fixed bottom-28 right-5 max-w-lg font-sans">
    <div class="card-body">
        <h2 class="card-title">
            <div class="avatar online placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <img alt="Bot Avatar" src="{botAvatar}"/>
                </div>
            </div>
            <span>{botName} is online !</span>
        </h2>

        <div class="h-60">
            <VirtualList bind:scrollToIndex items={messages} let:item>
                {#if item.loading}
                    <div class="chat chat-start">
                        <div class="chat-bubble flex space-x-2 items-center">
                            <div class="bg-current h-2 aspect-square rounded-full animate-bounce"
                                 style="animation-delay: 0.1s;"></div>
                            <div class="bg-current h-2 aspect-square rounded-full animate-bounce"
                                 style="animation-delay: 0.2s;"></div>
                            <div class="bg-current h-2 aspect-square rounded-full animate-bounce"
                                 style="animation-delay: 0.3s;"></div>
                        </div>
                    </div>
                {:else }
                    <div class={`chat chat-${item.type}`}>
                        <div class={`chat-bubble ${item.type === 'end' ? "chat-bubble-primary" : ''}`}>{item.text}</div>
                    </div>
                {/if}

            </VirtualList>
        </div>


        <div class="card-action mt-2 space-y-2">
            <div class="space-x-2">
                {#each suggestions as suggestion}
                    <button class="btn btn-outline btn-xs"
                            on:click={() => currentMessage = suggestion}>{suggestion}</button>
                {/each}
            </div>
            <form on:submit|preventDefault={submitMessage} class="flex items-center space-x-2">

                <input bind:value={currentMessage} type="text" placeholder="Type here" class="input w-full"/>
                <button disabled={loadingResponse} type="submit" class="btn btn-md">
                    <svg class="h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                    </svg>
                </button>
            </form>


        </div>

    </div>
</div>

<script lang="ts">
    import VirtualList from 'svelte-virtual-list-ce';
    import {tick} from "svelte";

    export let endpoint;
    export let botName;
    export let botAvatar;
    let loadingResponse = false;
    let scrollToIndex;

    let suggestions: string[] = ["Where can I sleep ?", "Where can I eat ?", "How to go to the venue from the airport ?"];

    async function submitMessage() {
        try {
            loadingResponse = true;
            messages = [...messages, {text: currentMessage, type: 'end'}, {
                text: "...is writing",
                type: 'start',
                loading: true
            }];

            // scroll to bottom
            await tick();
            await tick();
            scrollToIndex(messages.length - 1);

            const response = await fetch(endpoint, {
                body: JSON.stringify({message: currentMessage}),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(value => value.json());

            console.log(response);

            currentMessage = '';

            if (response.length === 0) {
                messages[messages.length - 1] = {text: "I don't understand", type: 'start'};
            } else {
                messages[messages.length - 1] = {text: response[0].text, type: 'start'};
            }


            // scroll to bottom
            await tick();
            await tick();
            scrollToIndex(messages.length - 1);


        } catch (e) {
            console.log(e)
        } finally {
            loadingResponse = false;
        }
    }

    let currentMessage = "";
    let messages = [
        {
            "text": `Nyanpasu~ 👋 ! I'm ${botName} the bot! I can help you with your questions about the bot. Just ask me!`,
            "type": "start",
        }

    ];
</script>
