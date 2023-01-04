import './app.css'
import BubbleButton from "./lib/BubbleButton.svelte";

if (process.env.NODE_ENV === 'development') {
    new BubbleButton({
        target: document.body,
        props: {
            botName: 'ViteBot',
        },
    });
} else {
    window.ChatBot = BubbleButton;
}
