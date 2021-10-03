// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const container = document.querySelector(".container");
// const pp = document.querySelectorAll(".paragraph");

// left.addEventListener("click", () => container.classList.add("hover-left"))
// left.addEventListener("mouseleave", () => container.classList.remove("hover-left"))
// right.addEventListener("click", () => container.classList.add("hover-right"))
// right.addEventListener("mouseleave", () => container.classList.remove("hover-right"))

var $container = $(".container");
var $left = $(".left");
var $right = $(".right");

$left.click(function (e) {
    e.preventDefault();
    $container.addClass("hover-left");
    isHover();
})
$left.mouseleave(function () {
    $container.removeClass("hover-left");
    isHover();
})
$right.click(function (e) {
    e.preventDefault();
    $container.addClass("hover-right");
    isHover();
})
$right.mouseleave(function () {
    $container.removeClass("hover-right");
    isHover();
})

function isHover() {
    if ($container.hasClass("hover-right")) {
        $(".paragraph-right").addClass("active");
        $(".price-right").addClass("on");
        $(".btn-right").addClass("on");
    } else if ($container.hasClass("hover-left")) {
        $(".paragraph-left").addClass("active");
        $(".price-left").addClass("on");
        $(".btn-left").addClass("on");

    } else {
        $(".paragraph-right").removeClass("active");
        $(".paragraph-left").removeClass("active");
        $(".price-right").removeClass("on");
        $(".btn-right").removeClass("on");
        $(".btn-left").removeClass("on");
    }

}
//section2
document.querySelector(".btn-right").addEventListener("click", () => {
    var location = document.querySelector(".shoppingList").offsetTop;
    window.scrollTo({ top: location, behavior: 'smooth' })

})
document.querySelector(".close").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

// shopping bag

const add = document.querySelector(".fa-plus");
const sub = document.querySelector(".fa-minus");
const countResult = document.querySelector(".count-result");

add.addEventListener("click", () => {
    countResult.innerHTML++;
})
sub.addEventListener("click", () => {
    countResult.innerHTML--;
    if (countResult <= 0) {
        countResult.innerHTML = 0;
    } else {
        countResult.innerHTML--;
    }
})
