import { products } from "./constants/Products.js";

const Jewelerys = document.getElementById("jewellerys");

Jewelerys.innerHTML = products
  .map(
    (item) => `
    <div class="bg-gray-50 p-10 relative group hover:shadow-lg transition">
    <div class="absolute inset-0 bg-[#b8957c] opacity-0 
                group-hover:opacity-60 group-hover:w-full transition duration-500 overflow-hidden">
    </div>
    <div class="relative">
      
    <img src="${item.img}" class="w-full  object-cover transition duration-500 group-hover:opacity-30">

      <div class="absolute inset-0 flex items-center justify-center gap-4 
                opacity-0 group-hover:opacity-100 transition duration-300 z-20">

      <div class="w-12 h-12 border rounded-full flex items-center justify-center text-white hover:bg-black hover:text-white  cursor-pointer">
        <i class="fa-regular fa-heart text-lg"></i>
      </div>

      <div class="w-12 h-12 border rounded-full flex items-center justify-center text-white hover:bg-black  cursor-pointer">
        <i class="fa fa-eye text-lg"></i>
      </div>
    </div>

    ${
      item.discount
        ? `
        <div class="absolute top-7 left-5 text-white bg-green-500 px-1 rounded text-lg">${item.discount}</div>

        `
        : ""
    }
</div>

    <div class="timer-section bg-white p-2 flex justify-around text-center text-xs shadow
        transition-all duration-300 group-hover:translate-y-full group-hover:opacity-0">
       <div class="days"><p class="font-bold">1577</p><span>DAY</span></div>
       <div class="hours"><p class="font-bold">12</p><span>HRS</span></div>
       <div class="minutes"><p class="font-bold">25</p><span>MIN</span></div>
       <div class="seconds"><p class="font-bold">20</p><span>SEC</span></div>
    </div>
    <div class=" h-[1.5px] bg-gray-300 mx-auto mt-7"></div>

    <div class="text-center mt-4 flex flex-col">
    <p class="text-gray-400 text-lg">${item.Type}</p>

    <h3 class="text-black text-lg font-semibold">${item.Name}</h3>

    ${
      item.oldPrice && item.Price
        ? `<div class="flex items-center justify-center gap-5 mt-2">
          <span class="text-stone-600 font-semibold text-lg">${item.Price}</span>
          <span class="text-gray-300 font-semibold line-through text-lg">${item.oldPrice}</span>
        </div>`
        : ""
    }
    </div>
    <div class="absolute bottom-0 left-0 w-full bg-gray-50 p-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
<div class="flex justify-between mb-5">
    <select class="border w-[100px] py-1 text-lg text-gray-500">
        <option>Gold</option>
        <option>Silver</option>
        <option>Brown</option>
    </select>

        <div class="flex items-center justify-between border px-3 text-sm w-[100px]">
            <button>-</button>
            <button>1</button>
            <button>+</button>
        </div>
</div>
          <span class="flex items-center justify-center text-stone-500 underline text-xl">ADD TO CART</span>
    </div>

</div>
    `,
  )
  .join("");

