var $menuLinks = document.querySelectorAll(".menu-item a");

function getInfoPanelForElement(element) {
  var $infoPanel = element.parentNode.querySelector(".menu-item-info");
  return $infoPanel
}


function displayInfoPanelForElement(event) {
  var $anchor = event.target;
  getInfoPanelForElement($anchor).classList.add("is-visible");
}

function hideInfoPanelForElement(event) {
  var $anchor = event.target;
  getInfoPanelForElement($anchor).classList.remove("is-visible");
}

for (var i=0; i < $menuLinks.length; i++) {
  var $anchor = $menuLinks[i];
  $anchor.addEventListener("mouseover", displayInfoPanelForElement);
  $anchor.addEventListener("mouseout", hideInfoPanelForElement);
}