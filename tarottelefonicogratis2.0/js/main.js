function showContent() {
    element = document.getElementById("content-hidden");
    check = document.getElementById("check");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    };
}

setTimein(3000, showContent);