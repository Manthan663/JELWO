import { News } from "./constants/News.js";

const news = document.getElementById("News");
console.log(news);
news.innerHTML = News.map(
  (item) =>
    `
<div class="group relative overflow-hidden w-[450px] min-w-[32.33%] mt-10 cursor-pointer"> 
 <img src="${item.img}" class="object-cover w-full transition duration-500 group-hover:brightness-50">

 <div class="absolute inset-0 flex top-1/4 left-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
 <span class="bg-white px-3 py-4 rounded-full h-10 flex items-center justify-center">
    <i class="fa-solid fa-arrow-right text-xl text-stone-500"></i>
 </span>
 </div>

 <div class="flex items-center justify-center gap-5 mt-4">
    <span class="text-2xl text-stone-500">${item.date}</span>
    <span>|</span>
    <span class="text-2xl text-stone-500">${item.Author}</span>
 </div>

 <div class="text-center text-gray-500 text-xl ml-7 mt-5 w-[80%]">
   <span class="">${item.description}</span>
 </div>
<div class="flex items-center justify-center mt-5">
  <span class="bg-stone-800 text-white rounded-full px-5 py-3 hover:bg-black">${item.button}</span>
</div>
</div>
 

`,
).join("");

let index = 0;
const visibleItems = 3;

setInterval(() => {
  index += 1;

  if (index > News.length - visibleItems) {
    index = 0;
  }

  news.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
}, 3000);
