let showPassword = false;
let password;
let passwordEye;

function passwordToggle(id) {
        password = document.getElementById(id);
        passwordEye = document.getElementById(id + "Eye");
        if(showPassword) {
            password.setAttribute("type", "password");
            passwordEye.setAttribute("src", "./../assests/icons/eye.png");
        } else {
            password.setAttribute("type", "text");
            passwordEye.setAttribute("src", "./../assests/icons/hidden.png");
        }
        showPassword = !showPassword;
}