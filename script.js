let login = document.querySelector("#login");

const username = document.querySelector("#username");
const password = document.querySelector("#password");

const login_msg = document.querySelector(".container");
const changeBgButton = document.querySelector(".settings button");

const backgrounds = ["assets/bg1.jpg", "assets/bg2.jpg", "assets/bg3.jpg", "assets/bg4.jpg"];
let currentBgIndex = localStorage.getItem("bgIndex") ? parseInt(localStorage.getItem("bgIndex")) : 0;
document.body.style.backgroundImage = `url(${backgrounds[currentBgIndex]})`;

login.addEventListener("click", () => {
    if (username.value == "a" && password.value == "a") {
        login_msg.innerHTML += "<h3>You have logged in</h3>";
    } else {
        login_msg.innerHTML += "<h3>Incorrect Login Details</h3>";
    }
});

changeBgButton.addEventListener("click", () => {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentBgIndex]})`;
    localStorage.setItem("bgIndex", currentBgIndex);
});
