const dataFromClient = {
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

// const formCleanBtn = document.querySelector(".reservClean");

checkbox.addEventListener("change", checkboxAgree);
form.addEventListener("submit", sendFormToMail);
form.addEventListener("click", validateForm);
form.addEventListener("change", addData);

const hints = Array.from(document.querySelectorAll(".hint"));

function checkboxAgree(e) {
  const checkflag = checkbox.nextElementSibling.firstElementChild;
  if (!e.currentTarget.checked) {
    console.log("not checked");
    checkflag.classList.add("error");

    dataFromClient.agreement = false;
  } else if (e.currentTarget.checked) {
    console.log("checked");
    checkflag.classList.remove("error");
    dataFromClient.agreement = true;
  }
}

function addData(e) {
  if (e.target.id === "message") {
    dataFromClient.message = e.target.value;
  }
  if (e.target.id === "service") {
    dataFromClient.service = e.target.value;
  }
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
  if (
    dataFromClient.name !== "" &&
    dataFromClient.email !== "" &&
    dataFromClient.phone !== "" &&
    dataFromClient.agreement
  ) {
    console.log(dataFromClient);
  } else {
    console.log("EEEEEE");
  }
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
