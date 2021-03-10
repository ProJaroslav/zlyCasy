"use strict";
var paralax1 = document.querySelector("#paralax1");
var paralax2 = document.querySelector("#paralax2");
window.addEventListener("scroll", function () {
    var offset = window.pageYOffset;
    console.log(offset);
    paralax1.style.backgroundPositionY = offset * 0.5 + "px";
});
window.addEventListener("scroll", function () {
    var offset = window.pageYOffset;
    console.log(offset);
    paralax2.style.backgroundPositionY = offset * 0.3 + "px";
});
var hand = document.querySelector(".hours");
window.addEventListener("scroll", function () {
    // let offset = window.pageYOffset;
    // paralax.style.transform = "rotateZ(" + deg);
    console.log(window.pageYOffset);
    // console.log((window.pageYOffset - 253) * 0.78)
    hand.style.transform = "rotateZ(" + (window.pageYOffset * 0.4) + "deg)";
});
