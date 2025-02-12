const PasswordBox = document.getElementById("password");
const lenght = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!§$%&/()=?`+'*#°^@<>";

const allChars = UpperCase + LowerCase + number + symbols;

function CreatePassword() {
    let password = "";
    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    PasswordBox.value = password;
}

function CopyPassword() {
    navigator.clipboard.writeText(PasswordBox.value);
}
