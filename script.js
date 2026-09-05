
let email = document.getElementById("email");

let password = document.getElementById("password");

let showHideBtn = document.getElementById("showHideBtn");

let submitBtn = document.getElementById("submitBtn");

let message = document.getElementById("message");




showHideBtn.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        showHideBtn.textContent = "Hide";

    } else {

        password.type = "password";

        showHideBtn.textContent = "Show";

    }

});

submitBtn.addEventListener("click", function () {

    let emailValue = email.value.trim();

    let passwordValue = password.value.trim();


    
    if (emailValue === "") {

        message.textContent = "❌ Please enter your email";

        message.style.color = "red";

        return;
    }


    

    if (emailValue !== "nayakbk7991@gmail.com") {

        message.textContent = "❌ Incorrect email";

        message.style.color = "red";

        return;
    }


    
    if (passwordValue === "") {

        message.textContent = "❌ Please enter your password";

        message.style.color = "red";

        return;
    }


    

    if (passwordValue !== "nayak@1234") {

        message.textContent = "❌ Incorrect password";

        message.style.color = "red";

        return;
    }


    

    message.textContent = "✅ Login successful!";

    message.style.color = "green";

});