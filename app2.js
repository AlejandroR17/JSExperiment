function displayInfoPanel(evt) {
    this.siblings(".menu-item-info").addClass("is-visible")
}

function hideInfoPanel(evt) {
    this.siblings(".menu-item-info").removeClass("is-visible")
}

$(".menu-item > a").on("mouseover", displayInfoPanel);
$(".menu-item > a").on("mouseout", hideInfoPanel);