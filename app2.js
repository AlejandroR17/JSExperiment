/*function displayInfoPanel(evt) {
    $(this).siblings(".menu-item-info").addClass("is-visible")
}

function hideInfoPanel(evt) {
    $(this).siblings(".menu-item-info").removeClass("is-visible")
}*/

function toggleInfoPanel(evt) {
    $(this).siblings(".menu-item-info").toggleClass("is-visible")
}

$(".menu-item > a").on("mouseover", toggleInfoPanel);
$(".menu-item > a").on("mouseout", toggleInfoPanel);