const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const greetingTitle = greeting.querySelector("h1");
const logoutBtn = greeting.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    loginInput.value = "";
    printGreeting();
}

function handleLogoutBtn() {
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    readyForm();
}

function readyForm() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function printGreeting() {
    const localUsername = localStorage.getItem(USERNAME_KEY);
    greetingTitle.innerText =`Hello ${localUsername}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.addEventListener("click", handleLogoutBtn);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    readyForm()
}else {
    printGreeting();
}