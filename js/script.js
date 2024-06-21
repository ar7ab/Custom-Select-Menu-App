let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrow");
let options = document.getElementsByClassName("options");

selectField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}