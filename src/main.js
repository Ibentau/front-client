import "./app.css";
import BubbleButton from "./lib/BubbleButton.svelte";

if (process.env.NODE_ENV === "development") {
  new BubbleButton({
    target: document.body,
    props: {
      botName: "ICT4S Assistant",
      mainColor: "#337ab7"
    },
  });
} else {
  window.ChatBot = BubbleButton;
}
