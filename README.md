# Chatbot Embeddable Client

A simple, lightweight chatbot client built with the Svelte JavaScript framework. Easily embeddable on any website.

<p align="center"><img align="center" src="docs/preview.png"/></p>

## Features

- Responsive design for desktop and mobile devices
- Customizable style and branding
- User input validation
- Full-featured chatbot functionality

## Getting Started

1. Add the following script and link tag to the head of your HTML file:

```html
<script src="/path/to/chatbot-client.js"></script>
<link rel="stylesheet" href="/path/to/chatbot-client.css">
```

2. Add the following script tag at the end of your HTML file:

```html
<script>
    var chatbot = new ChatBot({
        target: document.body,
        props: {
            botName: 'ViteBot',
        },
    });
</script>
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
