//selectors
const btn = document.querySelector(".next-btn");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");

const rqFullname = document.getElementById("reqName");
const rqEmail = document.getElementById("reqEmail");
const rqPhone = document.getElementById("reqPhone");
const rqAddress = document.getElementById("reqAddress");
const rqCity = document.getElementById("reqCity");
const rqState = document.getElementById("reqState");
const rqZip = document.getElementById("reqZip");

const inputsArr = Array.from(document.getElementsByTagName("input"));

//error message
const showError = (element, message) => {
  element.innerText = message;
};
//hidden error message
const hideError = (element) => {
  element.innerText = "";
};

let isValid;
const validation = () => {
  for (let i = 0; i < inputsArr.length; i++) {
    if (inputsArr[i].value == "") {
      isValid = false;
    } else {
      isValid = true;
    }
  }
  return isValid;
};

const checkInputs = (el, reqEl) => {
  if (el.value == "") {
    showError(reqEl, "Missing field");
    el.style.boxShadow = "0px 2px 3px 0px #ed4a66";
  } else {
    hideError(reqEl);
    el.style.boxShadow = "0px 2px 3px 0px #74DBA2";
  }
};

fullname.addEventListener("blur", () => {
  validation(fullname);
  checkInputs(fullname, rqFullname);
});

email.addEventListener("blur", () => {
  validation(email);
  checkInputs(email, rqEmail);
});

phone.addEventListener("blur", () => {
  validation(phone);
  checkInputs(phone, rqPhone);
});

address.addEventListener("blur", () => {
  validation(address);
  checkInputs(address, rqAddress);
});

city.addEventListener("blur", () => {
  validation(city);
  checkInputs(city, rqCity);
});

state.addEventListener("blur", () => {
  validation(state);
  checkInputs(state, rqZip);
});

zip.addEventListener("blur", () => {
  validation(zip);
  checkInputs(zip, rqZip);
});

const userInfo = () => {
  window.location.href = `/preferences.html?&fullname=${fullname.value}&email=${email.value}&phone=${phone.value}&address=${address.value}&city=${city.value}&state=${state.value}&zip=${zip.value}`;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (isValid) {
    userInfo();
  } else {
    alert("Fill all the fields!");
    checkInputs(fullname, rqFullname);
    checkInputs(email, rqEmail);
    checkInputs(phone, rqPhone);
    checkInputs(address, rqAddress);
    checkInputs(city, rqCity);
    checkInputs(state, rqState);
    checkInputs(zip, rqZip);
  }
});
