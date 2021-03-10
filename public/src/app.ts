const paralax1 = document.querySelector("#paralax1") as HTMLDivElement;
const paralax2 = document.querySelector("#paralax2") as HTMLDivElement;

window.addEventListener("scroll", function () {
    let offset: number = window.pageYOffset;
    console.log(offset);
    paralax1.style.backgroundPositionY = offset * 0.5 + "px";
})

window.addEventListener("scroll", function () {
    let offset: number = window.pageYOffset;
    console.log(offset);
    paralax2.style.backgroundPositionY = offset * 0.3 + "px";
})

let hand = document.querySelector(".hours") as HTMLDivElement;

window.addEventListener("scroll", function () {
    // let offset = window.pageYOffset;
    // paralax.style.transform = "rotateZ(" + deg);
    console.log(window.pageYOffset);
    // console.log((window.pageYOffset - 253) * 0.78)
    hand.style.transform = "rotateZ(" + (window.pageYOffset * 0.4) + "deg)"
})