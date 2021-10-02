// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const container = document.querySelector(".container");
// const pp = document.querySelectorAll(".paragraph");

// left.addEventListener("click", () => container.classList.add("hover-left"))
// left.addEventListener("mouseleave", () => container.classList.remove("hover-left"))
// right.addEventListener("click", () => container.classList.add("hover-right"))
// right.addEventListener("mouseleave", () => container.classList.remove("hover-right"))

var $container = $(".container");

$(".left").click(function (e) {
    e.preventDefault();
    $container.addClass("hover-left");
    isHover();
})
$(".left").mouseleave(function () {
    $container.removeClass("hover-left");
    isHover();
})
$(".right").click(function (e) {
    e.preventDefault();
    $container.addClass("hover-right");
    isHover();
})
$(".right").mouseleave(function () {
    $container.removeClass("hover-right");
    isHover();
})

// $(".paragraph-right").hide();
// $(".paragrap-left").hide();

function isHover() {
    if ($container.hasClass("hover-right")) {
        $(".paragraph-right").addClass("active");
        $(".price-right").addClass("on");
        $(".btn-right").addClass("on");
        // $(".paragraph-right").fadeIn("linear");
    } else if ($container.hasClass("hover-left")) {
        $(".paragraph-left").addClass("active");
        $(".price-left").addClass("on");
        $(".btn-left").addClass("on");
        // $(".paragraph-left").fadeIn("linear");


    } else {
        $(".paragraph-right").removeClass("active");
        $(".paragraph-left").removeClass("active");
        $(".price-right").removeClass("on");
        $(".btn-right").removeClass("on");
        $(".btn-left").removeClass("on");
    }

}
