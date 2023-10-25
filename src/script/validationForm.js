import { showModalWindowSuccess } from "./modalWindows";
import { showModalWindowError } from "./modalWindows";

let dataFromClient = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  agreement: false,
};

const form = document.querySelector(".form");
const requiredEls = Array.from(document.querySelectorAll(".reqEl"));
const checkbox = document.querySelector(".checkbox");
const message = document.getElementById("message");
const hints = Array.from(document.querySelectorAll(".hint"));

checkbox.addEventListener("change", checkboxAgree);
form.addEventListener("submit", sendFormToMail);
form.addEventListener("click", validateForm);
message.addEventListener("change", addMessage);

function checkboxAgree(e) {
  const checkflag = checkbox.nextElementSibling.firstElementChild;
  if (!e.currentTarget.checked) {
    checkflag.classList.add("error");

    dataFromClient.agreement = false;
  } else if (e.currentTarget.checked) {
    checkflag.classList.remove("error");
    dataFromClient.agreement = true;
  }
}

function addMessage(e) {
  dataFromClient.message = e.target.value;
}

// functions for validate form-input on blur
function validateForm(e) {
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
        if (checkEmail(input)) {
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
      } else if (input.id === "service") {
        if (checkName(input)) {
          dataFromClient.service = input.value;
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
  if (
    dataFromClient.name !== "" &&
    dataFromClient.email !== "" &&
    dataFromClient.phone !== "" &&
    dataFromClient.service !== "" &&
    dataFromClient.agreement
  ) {
    showModalWindowSuccess("Success");
    console.log(dataFromClient);
    clearForm();
    dataFromClient = {
      ...dataFromClient,
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      agreement: false,
    };
  } else {
    showModalWindowError(
      "Fill in the input fields correctly and add agree check"
    );
    clearForm();
  }
}

// clear form fields
function clearForm() {
  requiredEls.forEach((el) => (el.value = ""));
  message.value = "";
  checkbox.checked = false;
}

// validation check
function checkName(input) {
  return /^[a-zA-Zа-яА-ЯіІїЇґҐєЄ\s]*$/.test(input.value);
}

function checkEmail(input) {
  return /^[\w\-\.]+@([\w\-]+\.)+[\w]{2,4}$/.test(input.value);
}

function checkNumber(input) {
  const check = /^\+?[0-9]{1,15}$/.test(input.value);
  return check;
}
