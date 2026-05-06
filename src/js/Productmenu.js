import { productMenu } from "./constants/ProductMenu.js";

const productmenu = document.getElementById("ProductMenu");

productmenu.innerHTML = productMenu
  .map(
    (item, index) =>
      `
    <div class="relative ${index === 0 ? "w-[60%] h-[500px]" : "w-[30%] h-[500px]"} p-1">

    <img src="${item.img}" class="h-full mt-10">
     ${
       index === 0
         ? `
        
          <span class="absolute top-1/4 max-w-sm left-1/2 text-black text-5xl font-serif">
            ${item.description}
          </span>
          <span class="absolute top-1/2 right-16 max-w-sm text-gray-400 text-xl font-serif">
            ${item.subDescription}
          </span>

          <div class="absolute bg-stone-500 hover:bg-black text-white text-center px-2 py-2 rounded-full w-[150px] bottom-10 right-1/4">${item.btn}</div>


          `
         : ""
     }
     ${
       index === 1
         ? `
        
        <div class="absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2">
        <span class="bg-white rounded-full px-8 py-6"><i class="fas fa-play text-stone-500"></i></span>
        </div>

          `
         : ""
     }
    
    </div>

    `,
  )
  .join("");
