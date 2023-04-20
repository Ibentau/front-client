import "./app.css";
import BubbleButton from "./lib/BubbleButton.svelte";

new BubbleButton({
  target: document.body,
  props: {
    botName: "ICT4S Assistant",
    mainColor: "#337ab7",

  },

});
