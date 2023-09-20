"use strict";

///////////////////////////////////////////
////// PROJECT #2: Modal Window //////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showModal = function () {
  // console.log(btnsShowModal[i].textContent);

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  /*
  // ALternate Way
  modal.style.display = "block";
  */
};
/*
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++)
console.log(btnsShowModal[i].textContent);
*/

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  /*
  console.log(`A Key is Pressed!`);
  console.log(e);
  console.log(e.key);
  console.log(typeof e.key);
  */
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
