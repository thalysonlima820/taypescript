"use strict";
var size;
(function (size) {
    size["ca"] = "ca";
    size["da"] = "da";
    size["la"] = "la";
})(size || (size = {}));
const derivador = {
    nom: "tha",
    idade: 32,
    size: size.ca,
    varios: ["ola", "ula"]
};
console.log(derivador.varios[0] + " " + derivador.nom);
const date = new Date();
const dai = date.getDate();
console.log(dai);
document.addEventListener("DOMContentLoaded", function () {
    var tes = document.querySelector(".tes");
    if (tes) {
        tes.innerHTML = `${dai}`;
    }
});
