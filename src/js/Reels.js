import { Videos } from "./constants/Reels.js";

const Reels = document.getElementById("reels");

Reels.innerHTML = Videos.map(
  (item) =>
    `
    <div class="group relative overflow-hidden w-[450px] min-w-[19.15%] mt-10 cursor-pointer">
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
  <div class="w-16 h-16 bg-white">
    <img src="${item.img}" class="w-16 h-16 object-contain textg-white">
  </div>

  <div class="text-white flex flex-col justify-between">
    <h3 class="text-lg font-semibold leading-tight">${item.name}</h3>
    <span class="text-lg font-semibold leading-tight">${item.price}</span>
  </div>
</div>
<button  class="absolute bottom-3 left-16 bg-stone-700 text-white  px-10 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300">
      ADD TO CART
</button>
</div>
`,
).join("");

