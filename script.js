"use strict";

///////////////////////////////////
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// CLOSURE: After IIFE executes, the EventListner Function can access it's Birth place Variable Environment.
