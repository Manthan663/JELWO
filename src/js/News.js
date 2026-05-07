import { News } from "./constants/News.js"

const news = document.getElementById("News");
console.log(news)
news.innerHTML = News.map((item)=>
    `
<div>
 <img src="${item.img}" class="object-cover w-[450px] mt-10">

 <div class="flex items-center justify-center gap-5 mt-4">
    <span class="text-2xl text-stone-500">${item.date}</span>
    <span class="text-2xl text-stone-500">${item.Author}</span>
 </div>

 <div class="flex flex-col">
   <span class="">${item.description}</span>
 </div>
</div>
 

`).join("")