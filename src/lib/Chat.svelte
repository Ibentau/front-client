<div
  class="chatbot-card chatbot-card-compact chatbot-bg-base-200 chatbot-shadow-xl chatbot-fixed chatbot-bottom-28 chatbot-right-5 chatbot-max-w-lg chatbot-font-sans">
  <div class="chatbot-card-body">
    <h2 class="chatbot-card-title">
      <div class:chatbot-online={online} class="chatbot-avatar chatbot-placeholder">
        <div class="chatbot-bg-neutral-focus chatbot-text-neutral-content chatbot-rounded-full chatbot-w-8">
          <img alt="Bot Avatar" src="{botAvatar}" />
        </div>
      </div>
      <span>{botName} is {online ? "online" : "offline"} !</span>
    </h2>

    <div class="chatbot-h-60">
      <VirtualList bind:scrollToIndex items={messages} let:item>
        {#if item.loading}
          <div class="chatbot-chat chatbot-chat-start">
            <div class="chatbot-chat-bubble chatbot-flex chatbot-space-x-2 chatbot-items-center">
              <div
                class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                style="animation-delay: 0.1s;"></div>
              <div
                class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                style="animation-delay: 0.2s;"></div>
              <div
                class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"
                style="animation-delay: 0.3s;"></div>
            </div>
          </div>
        {:else }
          <div>
            <div class={`chatbot-chat chatbot-chat-${item.type}`}>
              <div style="background-color: {item.type === 'end' ? mainColor : ''};"
                   class={`chatbot-chat-bubble ${item.type === 'end' ? "" : ''}`}>{item.text}</div>
            </div>
            {#if item.buttons}
              <div class="chatbot-flex chatbot-gap-2">
                {#each item.buttons as button}
                  <a style="background-color: {mainColor};" href="{button.value}" target="_blank" class="chatbot-btn chatbot-btn-sm chatbot-space-x-2">
                    <svg class="chatbot-h-4 chatbot-fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title>
                      <path
                        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg> <span>{button.text}</span></a>
                {/each}
              </div>
            {/if}
          </div>

        {/if}

      </VirtualList>
    </div>


    <div class="chatbot-card-action chatbot-mt-2 chatbot-space-y-2 chatbot-w-full">
      <div class="chatbot-gap-2 chatbot-flex">
        {#each suggestions as suggestion}
          <button class="chatbot-btn chatbot-btn-outline chatbot-btn-xs"
                  on:click={() => currentMessage = suggestion}>{suggestion}</button>
        {/each}
      </div>
      <form on:submit|preventDefault={submitMessage}
            class="chatbot-flex chatbot-items-center chatbot-space-x-2 chatbot-w-full">

        <input bind:value={currentMessage} type="text" placeholder="Type here"
               class="chatbot-input chatbot-w-full chatbot-max-w-full" />

        <button disabled={loadingResponse} type="submit" class="chatbot-btn chatbot-btn-md">
          <svg class="chatbot-h-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
      </form>


    </div>

  </div>
</div>

<script lang="ts">
  import VirtualList from "svelte-virtual-list-ce";
  import { onMount, tick } from "svelte";

  export let endpoint;
  export let botName;
  export let botAvatar;
  export let mainColor;
  let loadingResponse = false;
  let scrollToIndex;
  export let demo = false;

  let online = true;

  let suggestions: string[] = ["Where is the venue?", "Things to do"];


  async function submitMessage() {

    if (currentMessage.trim() === '') {
      return;
    }
    else{
      try {
      if (demo) {
        return;
      }
      loadingResponse = true;
      messages = [...messages, { text: currentMessage, type: "end" }, {
        text: "...is writing",
        type: "start",
        loading: true
      }];

      // scroll to bottom
      await tick();
      await tick();
      scrollToIndex(messages.length - 1);

      const response = await fetch(endpoint, {
        body: JSON.stringify({ message: currentMessage }),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(value => value.json());

      console.log(response);

      currentMessage = "";

      if (response.length === 0) {
        messages[messages.length - 1] = { text: "I don't understand", type: "start" };
      } else {
        let buttons = [];
        if (response.length > 1 && response[1].custom) {
          buttons = [
            {
              text: response[1].custom.button_name,
              value: response[1].custom.url
            }
          ];
        }
        messages[messages.length - 1] = { text: response[0].text, type: "start", buttons };
      }

      // scroll to bottom
      await tick();
      await tick();
      scrollToIndex(messages.length - 1);


    } catch (e) {
      console.error(e);
      // remove loading message
      messages[messages.length - 1] = {
        text: "Humm 🤔... It seems that your message did not find the correct wire.",
        type: "start"
      };
      online = false;
    } finally {
      loadingResponse = false;
    }
      
    }

  }

  let currentMessage = "";
  let messages: {
    text: string,
    type: "start" | "end",
    loading?: boolean
    buttons?: {
      text: string,
      value: string
    }[]
  }[] = [
    {
      "text": `Hello 👋 ! I'm ${botName} the bot! I can help you with your questions. Just ask me!`,
      "type": "start"
    }

  ];
</script>
