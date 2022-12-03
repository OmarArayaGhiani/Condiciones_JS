function verificar() {
    let stickerOne = parseInt(document.querySelector("#stickerOne").value);
    let stickerTwo = parseInt(document.querySelector("#stickerTwo").value);
    let stickerThree = parseInt(document.querySelector("#stickerThree").value);
    let cantidad = document.querySelector(".cantidad");
    let total = stickerOne + stickerTwo + stickerThree;
    if (total == 0) {
        cantidad.innerHTML = "No llevas ningún sticker"; 
    }else if (total <= 10) {
        cantidad.innerHTML = "LLevas " + total + " stickers";
    }
    else {
        cantidad.innerHTML = "Llevas muchos stickers (" + total + ")";
    }
}
