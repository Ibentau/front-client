<div class="chatbot-card chatbot-card-compact chatbot-bg-base-200 chatbot-shadow-xl chatbot-fixed chatbot-bottom-28 chatbot-right-5 chatbot-max-w-lg chatbot-font-sans">
    <div class="chatbot-card-body">
        <h2 class="chatbot-card-title">
            <div class="chatbot-avatar chatbot-online chatbot-placeholder">
                <div class="chatbot-bg-neutral-focus chatbot-text-neutral-content chatbot-rounded-full chatbot-w-8">
                    <img alt="Bot Avatar" src="{botAvatar}"/>
                </div>
            </div>
            <span>{botName} is online !</span>
        </h2>

        <div class="chatbot-h-60">
            <VirtualList bind:scrollToIndex items={messages} let:item>
                {#if item.loading}
                    <div class="chatbot-chat chatbot-chat-start">
                        <div class="chatbot-chat-bubble chatbot-flex chatbot-space-x-2 chatbot-items-center">
                            <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                                 style="animation-delay: 0.1s;"></div>
                            <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                                 style="animation-delay: 0.2s;"></div>
                            <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                                 style="animation-delay: 0.3s;"></div>
                        </div>
                    </div>
                {:else }
                    <div class={`chatbot-chat chatbot-chat-${item.type}`}>
                        <div style="background-color: {item.type === 'end' ? mainColor : ''};" class={`chatbot-chat-bubble ${item.type === 'end' ? "" : ''}`}>{item.text}</div>
                    </div>
                {/if}

            </VirtualList>
        </div>


        <div class="chatbot-card-action chatbot-mt-2 chatbot-space-y-2 chatbot-w-full">
            <div class="chatbot-space-x-2">
                {#each suggestions as suggestion}
                    <button class="chatbot-btn chatbot-btn-outline chatbot-btn-xs"
                            on:click={() => currentMessage = suggestion}>{suggestion}</button>
                {/each}
            </div>
            <form on:submit|preventDefault={submitMessage}
                  class="chatbot-flex chatbot-items-center chatbot-space-x-2 chatbot-w-full">

                <input bind:value={currentMessage} type="text" placeholder="Type here"
                       class="chatbot-input chatbot-w-full chatbot-max-w-full"/>
                <button disabled={loadingResponse} type="submit" class="chatbot-btn chatbot-btn-md">
                    <svg class="chatbot-h-4" viewBox="0 0 24 24">
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
    export let mainColor;
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
