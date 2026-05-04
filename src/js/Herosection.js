import { slides } from "./constants/Herosection.js";
import { HeroImages } from "./constants/Herosection.js";

const heroImage = document.getElementById("heroImage");
const heroTitle = document.getElementById("heroTitle");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nxtBtn");

let current = 0;
function renderslide(index) {
  heroImage.src = slides[index].img;
  heroTitle.innerHTML = slides[index].title;
}

// Next Btn
nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  renderslide(current);
});

//prevBtn
prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;

  renderslide(current);
});

renderslide(current);
function renderHeroImages() {
  const herosectionMenu = document.getElementById("HerosectionMenu");

  herosectionMenu.innerHTML = HeroImages.map((image) => {
    return `
      <div class="relative">

     
        <img src="${image.img}" class="w-full h-full object-cover" />

    
        <div class="absolute top-1/2 left-1/2  flex flex-col items-center justify-center text-center text-stone-500">

          <p class="text-sm md:text-lg">${image.Discount}</p>

          <h2 class="text-2xl md:text-4xl font-semibold mt-2 text-black">
            ${image.Description}
          </h2>

          <button class="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            ${image.Btn}
          </button>

        </div>

      </div>
    `;
  }).join("");
}
renderHeroImages()