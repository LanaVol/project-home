const dataFromClient = {
  name: "",
  email: "",
  phone: "",
};

const form = document.querySelector(".form");
const requiredEls = Array.from(document.querySelectorAll(".reqEl"));
// const formCleanBtn = document.querySelector(".reservClean");

form.addEventListener("submit", sendFormToMail);
form.addEventListener("click", validateForm);

const hints = Array.from(document.querySelectorAll(".hint"));

// functions for validate form-input on blur
function validateForm() {
  requiredEls.forEach((el, index) => {
    el.addEventListener("blur", () => {
      let input = el;

      input.classList.remove("error");
      hints[index].style.display = "none";

      if (input.value === "") {
        input.classList.add("error");
      } else if (input.id === "name") {
        if (checkName(input)) {
          dataFromClient.name = input.value;
        } else {
          input.classList.add("error");
          hints[index].style.display = "block";
        }
      } else if (input.id === "email") {
        if (checkemail(input)) {
          dataFromClient.email = input.value;
        } else {
          input.classList.add("error");
          hints[index].style.display = "block";
        }
      } else if (input.id === "number") {
        if (checkNumber(input)) {
          dataFromClient.phone = input.value;
        } else {
          input.classList.add("error");
          hints[index].style.display = "block";
        }
      }
    });
  });
}

function sendFormToMail(e) {
  e.preventDefault();
  console.log(dataFromClient);
}

function checkName(input) {
  return /^[a-zA-Zа-яА-ЯіІїЇґҐєЄ\s]*$/.test(input.value);
}

function checkemail(input) {
  return /^[\w\-\.]+@([\w\-]+\.)+[\w]{2,4}$/.test(input.value);
}

function checkNumber(input) {
  const check = /^\+?[0-9]{1,15}$/.test(input.value);
  return check;
}
