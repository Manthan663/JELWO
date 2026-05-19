import { mobileMenuData } from "./constants/mobile.js";

const MobileMenuContainer = document.getElementById("mobileMenuContainer");

MobileMenuContainer.innerHTML = mobileMenuData
  .map((menu) => `
    <div class="border-b pb-3">
      <div class="flex justify-between items-center">
        <span class="text-black font-medium">${menu.title}</span>
        ${menu.items.length > 0
          ? `<i class="fa-solid fa-plus cursor-pointer" onclick="toggleMenu('${menu.id}')"></i>`
          : ""}
      </div>

      ${menu.items.length > 0 ? `
        <div id="${menu.id}" class="hidden pl-3 mt-3 space-y-2">
          ${menu.items.map((item) => `
            <div class="border-b pb-2">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">${item.label}</span>
                ${item.subItems.length > 0
                  ? `<i class="fa-solid fa-plus text-sm cursor-pointer" onclick="toggleMenu('${item.id}')"></i>`
                  : ""}
              </div>
              ${item.subItems.length > 0 ? `
                <div id="${item.id}" class="hidden pl-4 mt-2 space-y-1">
                  ${item.subItems.map((sub) => `
                    <p class="text-gray-400 text-sm py-1">${sub}</p>
                  `).join("")}
                </div>
              ` : ""}
            </div>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `).join("");


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const SideMenu = document.getElementById("sideMenu");
const ClsBtn = document.getElementById("closeBtn");
const Overlay = document.getElementById("overlay");
const Cartsidebar = document.getElementById("cartSidebar");

mobileMenuBtn.addEventListener("click", () => {
  SideMenu.classList.remove("-translate-x-full");
});

ClsBtn.addEventListener("click", () => {
  SideMenu.classList.add("-translate-x-full");
});

window.openCart = function () {
  Cartsidebar.classList.remove("translate-x-full");
  Overlay.classList.remove("hidden");
};

window.closeCart = function () {
  Cartsidebar.classList.add("translate-x-full");
  Overlay.classList.add("hidden");
};

window.toggleMenu = function (id) {
  const menu = document.getElementById(id);
  menu.classList.toggle("hidden");
};