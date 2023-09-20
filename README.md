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

## PROJECT #2: Modal Window

### Limitations of `querySelector()` method

Whenever we use query selector with a selector, which actually matches multiple elements, only the first one will get selected.

**To Select all the matching elements use `querySelectorAll()`**

### To add or remove class(es) to a HTML Element

- First Select the HTML Element using a `querySelector()`

        const modal = document.querySelector(".modal");

-       modal.classList.remove("hidden");
        modal.classList.add("hidden");

### Handling an "Esc" Keypress Event

> keyboard events are so-called **global events**. Because they do not happen on one specific element. For global events like keyboard events we usually listen on the whole document.
>
> There are actually 3 types of events for the keyboard. There is the **keydown**, **keypress**, and **keyup**.
>
> 1. **keyup**, which only happens when we lift up finger off the key.
> 2. **keypress** is fired continuously as we keep our finger on a certain key.
> 3. **keydown** is fired as soon as we just press down the key.
