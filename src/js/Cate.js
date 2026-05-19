import { sliders, CategoryItems } from "./constants/Category.js";

const Slider = document.getElementById("slider");
Slider.innerHTML = sliders
  .map(
    (item) =>
      `
     <div class="relative min-w-[33.33%]">
     <img src="${item.img}" class="w-full h-[500px] object-cover mt-10 px-7 hover:bg-white/50 cursor-pointer">

      <div class="absolute inset-0 bg-white/30 opacity-0 
              hover:opacity-100 transition duration-300">
      </div>
      <div class="absolute bg-white md:left-10 w-[70%] h-[25%] mb-7 flex flex-col items-center justify-center bottom-0 lg:left-20 space-y-2">
      
        <span class="text-gray-500 text-lg">${item.itms}</span>
        <h6 class="text-gray-900 text-3xl font-serif">${item.Type}</h6>
        <h1 class="underline decoration-stone-400 hover:text-stone-500 cursor-pointer" mt-2>${item.btn}</h1>
      </div>
</div> 
`,
  )
  .join("");

const iconContainer = document.getElementById("icons");

iconContainer.innerHTML = CategoryItems.map(
  (item) => `

<div class="group flex items-center justify-center py-10">
    <i class="${item.logo} text-stone-500 text-4xl transition duration-500 
        group-hover:-rotate-180 group-hover:scale-x-[-1]}"></i>
<div class="flex flex-col px-5 text-xl border-r-2">
    <p class="text-gray-900 font-medium">${item.description}</p>
    <p class="text-gray-500 font-sm">${item.subdescription}</p>
</div>

</div>
`,
).join("");

let index = 0;
const visibleItems = 3;

setInterval(() => {
  index += 1;

  if (index > sliders.length - visibleItems) {
    index = 0;
  }

  Slider.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
}, 3000);
