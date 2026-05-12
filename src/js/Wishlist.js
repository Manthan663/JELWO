

window.gotoWishlist = function () {
  console.log("Navigating to wishlist...");
  window.location.href = "wishlist.html";
};

import { renderFooter } from "../js/Footer.js";

window.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = renderFooter();
  }
});

