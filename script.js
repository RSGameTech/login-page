let login = document.querySelector("#login");

const username = document.querySelector("#username");
const password = document.querySelector("#password");

const login_msg = document.querySelector(".container");

login.addEventListener("click", () => {
    if (username.value == "a" && password.value == "a") {
        login_msg.innerHTML += "<h3>You have logged in</h3>";
    } else {
        login_msg.innerHTML += "<h3>Incorrect Login Details</h3>";
    }
});
