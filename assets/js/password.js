function pass() {
    let numberOne = document.querySelector("#numberOne").value;
    let numberTwo = document.querySelector("#numberTwo").value;
    let numberThree = document.querySelector("#numberThree").value;
    let verify = document.querySelector(".verify");
    const passwordOne = "911";
    const passwordTwo = "714";
    let currentPassword = numberOne + numberTwo + numberThree;
    if (currentPassword === passwordOne) {
        verify.innerHTML = "Contraseña 1 correcta!!";
    } else if (currentPassword === passwordTwo) {
        verify.innerHTML = "Contraseña 2 correcta!!";
    } else {
        verify.innerHTML = "Contraseña incorrecta!!";
    }
}
