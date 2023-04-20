<div
        class="chatbot-card chatbot-card-compact chatbot-bg-base-200 chatbot-shadow-xl chatbot-fixed chatbot-bottom-28 chatbot-right-5 chatbot-max-w-lg chatbot-font-sans">
    <div class="chatbot-card-body">
        <div class="chatbot-card-title">
            <div class:chatbot-online={online} class="chatbot-avatar chatbot-placeholder">
                <div class="chatbot-bg-neutral-focus chatbot-text-neutral-content chatbot-rounded-full chatbot-w-8">
                    <img alt="Bot Avatar" src="{botAvatar}"/>
                </div>
            </div>
            <span>{botName} is {online ? "online" : "offline"} !</span>
        </div>

        <div class="chatbot-h-60">
            <VirtualList bind:scrollToIndex items={messages} let:item>
                {#if item.loading}
                    <Bubble loading={true} mainColor={mainColor} isFromMe={false}></Bubble>
                {:else }
                    <Bubble sources={item.sources ?? []} mainColor={mainColor}
                            isFromMe={item.type === 'end'}>{item.text}</Bubble>
                {/if}

            </VirtualList>
        </div>


        <div class="chatbot-card-action chatbot-mt-2 chatbot-space-y-2 chatbot-w-full">
            <div class="chatbot-gap-2 chatbot-flex chatbot-flex-wrap">
                {#each suggestions as suggestion}
                    <button class="chatbot-btn chatbot-btn-outline chatbot-btn-xs chatbot-break-words chatbot-max-w-full"
                            on:click={() => currentMessage = suggestion}>{suggestion}</button>
                {/each}
            </div>
            <form on:submit|preventDefault={submitMessage}
                  class="chatbot-flex chatbot-items-center chatbot-space-x-2 chatbot-w-full">

                <input maxlength="200" bind:value={currentMessage} type="text" placeholder="Type here"
                       class="chatbot-input chatbot-w-full chatbot-max-w-full"/>

                <button disabled={loadingResponse} type="submit" class="chatbot-btn chatbot-btn-md">
                    <svg class="chatbot-h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                    </svg>
                </button>
            </form>

            <div class="chatbot-text-gray-500">
                <slot></slot>
            </div>


        </div>

    </div>
</div>

<script lang="ts">
    import VirtualList from "svelte-virtual-list-ce";
    import {onMount, tick} from "svelte";
    import Bubble from "./Bubble.svelte";

    export let endpoint;
    export let botName;
    export let botAvatar;
    export let mainColor;
    let loadingResponse = false;
    let scrollToIndex;

    let online = true;

    let suggestions: string[] = ["Where is the venue?", "Things to do"];

    onMount(() => {
        // load previous messages from local storage
        const previousMessages = localStorage.getItem("messages");
        if (previousMessages) {
            messages = JSON.parse(previousMessages);
        }
        // load previous suggestions from local storage
        const previousSuggestions = localStorage.getItem("suggestions");
        if (previousSuggestions) {
            suggestions = JSON.parse(previousSuggestions);
        }
    })

    async function submitMessage() {

        try {

            if (currentMessage.trim() === '') {
                return;
            }


            loadingResponse = true;
            messages = [...messages, {text: currentMessage, type: "end", sources: []}, {
                text: "...is writing",
                type: "start",
                loading: true, sources: []
            }];

            // scroll to bottom
            await tick();
            await tick();
            scrollToIndex(messages.length - 1);

            const savedCurrentMessages = currentMessage;
            currentMessage = "";
            const response = await fetch(endpoint, {
                body: JSON.stringify({text: savedCurrentMessages}),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });


            if (!response.ok) {
                messages[messages.length - 1] = {text: "I don't understand", type: "start", sources: []};
                return;
            }

            const responseJson = await response.json();
            messages[messages.length - 1] = {text: responseJson.text, type: "start", sources: responseJson.sources};
            suggestions = responseJson.suggestions;


            // save the conversation
            localStorage.setItem("messages", JSON.stringify(messages));
            // save the suggestions
            localStorage.setItem("suggestions", JSON.stringify(suggestions));
        } catch (e) {
            console.error(e);
            // remove loading message
            messages[messages.length - 1] = {
                text: "Humm 🤔... It seems that your message did not find the correct wire.",
                type: "start", sources: []
            };
            online = false;
        } finally {

            // scroll to bottom
            await tick();
            await tick();
            scrollToIndex(messages.length - 1);
            loadingResponse = false;
        }

    }

    let currentMessage = "";
    let messages: {
        text: string,
        type: "start" | "end",
        loading?: boolean
        sources: string[]
    }[] = [
        {
            "text": `Hello 👋 ! I'm ${botName} the bot! I can help you with your questions. Just ask me!`,
            "type": "start",
            "sources": []
        }

    ];
</script>
