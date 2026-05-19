import { products } from "./constants/Products.js";
import { products2 } from "./constants/Products2.js";

const mainProducts = products;
const allProducts = [...products, ...products2];

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let Cart = JSON.parse(localStorage.getItem("Cart")) || [];

const Jewelerys = document.getElementById("jewellerys");
const searchInput = document.getElementById("searchInput");
const searchDropdown = document.getElementById("search-dropdown");

function renderProducts(data) {
  Jewelerys.innerHTML = data
    .map(
      (item) => `
    <div class="bg-gray-50 p-10 relative group hover:shadow-lg transition">
    <div class="absolute inset-0 bg-[#b8957c] opacity-0 
                group-hover:opacity-60 group-hover:w-full transition duration-500 overflow-hidden">
    </div>
    <div class="relative">
      
    <img src="${item.img}" class="w-full object-cover transition duration-500 group-hover:opacity-30">

      <div class="absolute inset-0 flex items-center justify-center gap-4 
                opacity-0 group-hover:opacity-100 transition duration-300 z-20 pointer-events-none">

      <div data-id="${item.id}" class="wishlist-btn w-12 h-12 border rounded-full flex items-center justify-center text-white pointer-events-auto z-50  cursor-pointer">
        <i class="fa-regular fa-heart text-lg"></i>
      </div>

      <div class="w-12 h-12 border rounded-full flex items-center justify-center text-white hover:bg-black cursor-pointer">
        <i class="fa fa-eye text-lg"></i>
      </div>
    </div>

    ${item.discount ? `<div class="absolute top-7 left-5 text-white bg-green-500 px-1 rounded text-lg">${item.discount}</div>` : ""}

    </div>

    <div class="timer-section bg-white p-2 flex justify-around text-center text-xs shadow
        transition-all duration-300 group-hover:translate-y-full group-hover:opacity-0">
       <div class="days"><p class="font-bold">1577</p><span>DAY</span></div>
       <div class="hours"><p class="font-bold">12</p><span>HRS</span></div>
       <div class="minutes"><p class="font-bold">25</p><span>MIN</span></div>
       <div class="seconds"><p class="font-bold">20</p><span>SEC</span></div>
    </div>
    <div class="h-[1.5px] bg-gray-300 mx-auto mt-7"></div>

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
      <span data-id="${item.id}" class="add-to-cart flex items-center justify-center text-stone-500 underline text-xl cursor-pointer">ADD TO CART</span>
    </div>

  </div>
      `,
    )
    .join("");
  
  if (data.length === 0) {
    Jewelerys.innerHTML = `<p class="text-center text-gray-400 text-xl col-span-full mt-10">No products found.</p>`;
  }
}

renderProducts(mainProducts);


searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();

  if (query === "") {
    searchDropdown.classList.add("hidden");
    searchDropdown.innerHTML = "";
    return;
  }

  const filtered = allProducts.filter((item) =>
    item.Name.toLowerCase().includes(query),
  );
  searchDropdown.classList.remove("hidden");

  if (filtered.length === 0) {
    searchDropdown.innerHTML = `<p class="text-gray-500 text-center py-5">No Product Found</p>`;
    return;
  }

  searchDropdown.innerHTML = filtered
    .map(
      (item) =>
        `
      <div class="group flex flex-col gap-4 p-2 border-b">
      
      <img src="${item.img}" class="object-cover w-[200px] h-[200px] rounded">
      <div class="flex-1">
        <p class="text-gray-400 text-xs uppercase">${item.Type}</p>
        <p class="text-black font-semibold">${item.Name}</p>
      ${
        item.oldPrice
          ? `<span class="font-semibold text-stone-700">${item.Price}</span>
            <span class="font-semibold line-through text-gray-400">${item.oldPrice}</span>`
          : `<span class="font-semibold  text-stone-700">${item.Price}</span>`
      }
   </div>
</div>`,
    )
    .join("");
});

document.addEventListener("click", function (e) {
  const wishlistBtn = e.target.classList.contains("wishlist-btn")

    ? e.target
    : e.target.closest(".wishlist-btn");

  if (!wishlistBtn) return;

  const productId = Number(wishlistBtn.dataset.id);
  console.log(productId)

  const product = allProducts.find(
    (item) => Number(item.id) === Number(productId),
  );

  const index = wishlist.findIndex((item) => item.id === productId);

  if (index === -1) {
    wishlist.push(product);
    wishlistBtn.classList.add("bg-red-500", "text-white");
    wishlistBtn.classList.remove("bg-black");
    console.log("added");
  } else {
    wishlist.splice(index, 1);
    wishlistBtn.classList.remove("bg-red-500", "text-white");
    console.log("Removed");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  updateWishlistCount();
});
document.addEventListener("click", function (e) {
  const addtocartbtn = e.target.closest(".add-to-cart");
  if (!addtocartbtn) return;

  const ProductId = Number(addtocartbtn.dataset.id);

  const product = allProducts.find((item) => item.id === ProductId);
  const exisitingProduct = Cart.find((item) => item.id === ProductId);

  if (exisitingProduct) {
    exisitingProduct.quantity += 1;
  } else {
    Cart.push({
      ...product,
      quantity: 1,
    });
  }
  refreshCart();
});

function updateCartItems() {
  const cartcount = document.getElementById("cartcount");

  const totalItem = Cart.reduce((total, item) => total + item.quantity, 0);
  cartcount.innerHTML = `<i class="fa fa-shopping-bag"></i>(${totalItem})`;
}

function renderCartItems() {
  const CartItems = document.getElementById("cartItems");
  if (!CartItems) return;

  if (Cart.length === 0) {
    CartItems.innerHTML = `
    <span><i class="ri-shopping-bag-line text-3xl"></i></span>
    <p class="text-gray-600 p-5 flex items-center justify-center">Your Cart is Empty</p>
    <button class="px-4 py-2 bg-stone-600 rounded-full text-white">Continue Shopping</button>`;
    return;
  }
  CartItems.innerHTML = Cart.map(
    (item) => `
  <div class="relative flex items-center justify-between gap-4 p-5 border-b">
  <img src="${item.img}" class="w-24 h-24 object-cover flex items-start">


  <div>
    <h3 class="font-semibold">${item.Name}</h3>
     ${
       item.oldPrice
         ? `<span class="font-semibold text-stone-700">${item.Price}</span>
            <span class="font-semibold line-through text-gray-400">${item.oldPrice}</span>`
         : `<span class="font-semibold  text-stone-700">${item.Price}</span>`
     }

     <div class="flex items-center justify-between border px-3 text-sm w-[100px] h-8 mt-3">
          <button class="decrease" data-id="${item.id}">-</button>
          <button>${item.quantity}</button>
          <button class="increase" data-id="${item.id}">+</button>
        </div>
  </div>
   <div data-id="${item.id}" class="remove-from-cart
   absolute right-4 bottom-7  text-sm text-white bg-red-600 px-1 cursor-pointer">
<i class="fa fa-trash"></i></div>
 </div>


  `,
  ).join("");
}

renderCartItems();
updateWishlistCount();


function updateTotal() {
  const totalprice = Cart.reduce((sum, item) => {
    return (
      sum +
      item.Price * item.quantity
    );
  }, 0);

  document.getElementById("cartTotal").innerText = `Rs.${totalprice}`;
}

updateCartItems();

document.addEventListener("click", function (e) {
  const incBtn = e.target.closest(".increase");
  const decBtn = e.target.closest(".decrease");

  if (incBtn) {
    const id = Number(incBtn.dataset.id);
    Cart = Cart.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });
    refreshCart();
  }
  if (decBtn) {
    const id = Number(decBtn.dataset.id);
    Cart = Cart.map((item) => {
      if (item.id === id) {
        item.quantity -= 1;
      }
      return item;
    }).filter((item) => item.quantity > 0);
    refreshCart();
  }
});

document.addEventListener("click", function (e) {
  const remBtn = e.target.closest(".remove-from-cart");
  if (!remBtn) return;
  const ProductId = Number(remBtn.dataset.id);
  Cart = Cart.filter((item) => item.id !== ProductId);
  refreshCart();
});

function updateWishlistCount() {
  const wishlistcount = document.getElementById("wishlist-count");
  wishlistcount.innerHTML = `<i class="fas fa-heart"></i>(${wishlist.length})`;
}
updateWishlistCount();

function saveCart() {
  localStorage.setItem("Cart", JSON.stringify(Cart));
}
function refreshCart() {
  saveCart();
  renderCartItems();
  updateCartItems();
  updateTotal();
};
