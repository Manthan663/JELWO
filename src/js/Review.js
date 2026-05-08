import { testimonials } from "./constants/Review.js";

const Testimonials = document.getElementById("testimonials");
Testimonials.innerHTML = testimonials
  .map(
    (item) => `

<div class="relative min-w-[50%]">

<div class="flex flex-col  gap-1 mt-10">


  <div class="flex items-center gap-2 text-yellow-400 text-4xl leading-none">
    ${"*".repeat(5)}

     <span class="text-stone-900 text-sm">
    (${item.rating} Reviews)
  </span>
  </div>

<p class="text-lg text-stone-800 max-w-xl leading-relaxed">${item.review}</p>

<div class="flex items-center justify-between mt-18">
   <img src="${item.Image}" class="rounded-full w-20 h-20 object-cover">
   <span><i class="${item.logo} text-8xl text-stone-800"></i></span>
</div>
<div class="flex flex-col items-center text-gray-600 absolute bottom-0 left-20">
   <h1 class="ml-4 text-stone-500 text-xl">${item.name}</h1>
   <p class="ml-2">${item.occupation}</p>

</div>


</div>

</div>

`,
  )
  .join("");

let index = 0;
const visibleItems = 2;

setInterval(() => {
  index += 1;

  if (index > testimonials.length - visibleItems) {
    index = 0;
  }

  Testimonials.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
}, 3000);
