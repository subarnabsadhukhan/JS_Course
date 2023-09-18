# JavaScript in the Browser: DOM and Events Fundamentals

## PROJECT #1: Guess My Number!

### How to Select an Element from Web Page?

    console.log(document.querySelector(".message"));

    console.log(document.querySelector(".message").textContent);
    //Start guessing...

### What's the DOM and DOM Manipulation

> **document** is a special **object** that we have access to in JavaScript. And this object serves as an entry point into the DOM.
>
> The rule is that whatever is in the HTML document also has to be in the **DOM**. And so, the DOM really is a complete representation of the HTML document.
>
> Follow this [PDF](./readme-assets/DOM.pdf).

### Selecting and Manipulating Elements

    document.querySelector(".message").textContent = "🎉 Correct Number!";

    console.log(document.querySelector(".message").textContent);
    //🎉 Correct Number!

### Handling Click Event

    document.querySelector(".guess").addEventListener("click", function () {
        // Function Body
    });

### Manipulating CSS Styles

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

- use `.style` after selecting elements.
- for CSS styles with more than 1 word (ex. `background-color`), use camelCase version in JS.
- write property values inside `" "`.
