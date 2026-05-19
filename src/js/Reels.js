import { Videos } from "./constants/Reels.js";

const Reels = document.getElementById("reels");

Reels.innerHTML = Videos.map(
  (item) =>
    `
    <div class="group relative overflow-hidden w-[450px] lg:min-w-[19.15%] md:min-w-[33.99%] mt-10 cursor-pointer">
    <video 
      class="w-full p-3 h-[500px] object-cover rounded-lg"
      muted 
      loop 
      playsinline
      autoplay
      preload="none"
    >
      <source src="${item.video}" type="video/mp4" />
    </video>

  <div class="absolute inset-0"></div>
<div class="absolute bottom-16 left-4 right-4 flex items-end gap-16">
  <div class="w-16 h-16  bg-white">
    <img src="${item.img}" class="lg:w-16 lg:h-16 md:w-full md:h-full object-contain  rounded-full" ">
  </div>

  <div class="text-white flex flex-col justify-between">
    <h3 class="text-lg font-semibold leading-tight">${item.name}</h3>
    <span class="text-lg font-semibold leading-tight">${item.price}</span>
  </div>
</div>
<button class="absolute bottom-3 left-1/2 -translate-x-1/2 lg:w-[130px] h-10 flex items-center justify-center bg-stone-700 text-white rounded-full text-xs font-medium hover:bg-black transition duration-300">
  ADD TO CART
</button>
</div>
`,
).join("");

const nextBtn = document.getElementById("nexBtn");
const prevBtn = document.getElementById("preBtn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  if (currentIndex < Videos.length - 1) {
    currentIndex++;
    Reels.style.transform = `translateX(-${currentIndex * 23}%)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    Reels.style.transform = `translateX(-${currentIndex * 23}%)`;
  }
});


