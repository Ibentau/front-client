<script lang="ts">
    export let isFromMe: boolean = true;
    export let mainColor;
    export let loading = false;

    export let sources: string[] = []

    $: processed_source = sources.map((source) => {
        // keep only the last part of the url
        return {text: source.split("/").pop(), url: source}
    })
</script>


<div>
    <div class={`chatbot-chat ${!isFromMe ? 'chatbot-chat-start' : 'chatbot-chat-end'}`}>
        <div style="background-color: {!isFromMe ? mainColor : ''};"
             class={`chatbot-chat-bubble ${loading ? 'chatbot-flex chatbot-space-x-2 chatbot-items-center' : ''}`}>

            {#if loading}
                <div
                        class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                        style="animation-delay: 0.1s;"></div>
                <div
                        class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                        style="animation-delay: 0.2s;"></div>
                <div
                        class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                        style="animation-delay: 0.3s;"></div>
            {:else}
                <slot></slot>
                {#if sources.length > 0}
                    <div class="chatbot-flex chatbot-gap-1 chatbot-mt-2 chatbot-items-center chatbot-flex-wrap">
                        <span>Sources:</span>
                        {#each processed_source as source}
                            <a href={source.url} class="chatbot-btn chatbot-btn-xs">/{source.text}</a>
                        {/each}
                    </div>
                {/if}
            {/if}
        </div>
    </div>
</div>


