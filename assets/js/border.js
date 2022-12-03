function addBorder() {
    let img = document.querySelector(".img-border");
    if (img.style.border == "2px solid red") {
        img.style.border = "none";
    } else {
        img.style.border = "2px solid red";
        img.style.borderRadius = "10px";
    }
}