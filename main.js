let face = document.querySelector(".face");
let tongue = document.querySelector(".tongue");
let leftHand = document.querySelector(".hand--left");
let rightHand = document.querySelector(".hand--right");
let username = document.querySelector(".username");
let password = document.querySelector(".password");
let showBTN = document.querySelector(".password-button");
let submit = document.querySelector(".login-button");
username.addEventListener("input", rotateface);
username.addEventListener("focus", rotateface);
username.addEventListener("blur", ()=> {
    face.style.transform = `rotate(0deg)`;
});
function rotateface() {
  let usernameLength = username.value.length;
  if (usernameLength > 40) {
    return;
  }
  face.style.transform = `rotate(${20 - usernameLength}deg)`;
}
function removeFunc() {
    leftHand.classList.remove("hide")
    rightHand.classList.remove("hide")
}
function addFunc() {
    leftHand.classList.add("hide")
    rightHand.classList.add("hide")
}
password.addEventListener("input", addFunc);
password.addEventListener("focus", addFunc);
password.addEventListener("blur", removeFunc);
showBTN.addEventListener("mousedown", () => {
    removeFunc();
    tongue.classList.add("breath")
    leftHand.classList.remove("peek");
    rightHand.classList.remove("peek");
    password.type = "text";
});
showBTN.addEventListener("mouseup", () => {
    addFunc();
    tongue.classList.add("breath")
    leftHand.classList.remove("peek");
    rightHand.classList.remove("peek");
    password.type = "password";
});
showBTN.addEventListener("blur", () => {
    removeFunc();
    leftHand.classList.remove("peek");
    rightHand.classList.remove("peek");
    password.type = "password";
});
submit.addEventListener("click", ()=> {
    document.location.reload();
})