import { menuItems } from "./constants/menu.js";
function renderMenu(items, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = items
    .map((item) => {
      const hasDropdown = item.items && item.items?.length > 0;
      const hasMegaMenu = item.megaMenu?.columns?.length > 0;
      const hassmallMenu = item.smallMenu?.columns?.length > 0;
      const productMenu = item.Menu?.columns?.length > 0;

      return `
      <li class="relative group ">

        <a href="${item.link}" class="nav-link hover:text-stone-400 uppercase">
          ${item.name}
        </a>

        ${
          hasDropdown
            ? `
        <div class="fixed top-[145px] left-0  w-screen bg-white shadow-xl 
        opacity-0 invisible group-hover:visible group-hover:opacity-100 
        transition duration-300 z-50">

          <div class=" max-w-7xl mx-auto py-8 flex  gap-10">

            ${item.items
              .map(
                (sub) => `
              <div class="flex flex-col items-center gap-2">
              <div class="overflow-hidden">
                <img src="${sub.img}" class="w-48 rounded-md object-cover transition-transform duration-300 ease-out hover:scale-110 cursor-pointer" />
                
                </div>
                <span class="text-sm text-gray-500 mt-4">${sub.name || ""}</span>
              </div>
            `,
              )
              .join("")}

          </div>
        </div>
        `
            : ""
        }
${
  hasMegaMenu
    ? `
<div class="fixed top-[145px] left-0 w-screen bg-white shadow-xl 
opacity-0 invisible group-hover:visible group-hover:opacity-100 
transition duration-300 z-50">

  <div class="max-w-7xl mx-auto py-8 grid grid-cols-5 gap-10">

    ${item.megaMenu.columns
      .map(
        (col) => `
      <div>
        <h4 class=" mb-4 text-lg">${col.title}</h4>

        <ul class="space-y-6 border-r-2">
          ${col.items
            .map(
              (text) => `
            <li class="text-gray-500 cursor-pointer text-lg hover:text-stone-400">
              ${text}
            </li>
          `,
            )
            .join("")}
        </ul>
      </div>
    `,
      )
      .join("")}

    <div class="overflow-hidden">
      <img src="${item.megaMenu.banner}" class=" rounded-md hover:scale-110 transition-transform ease-out duration-300"/>
    </div>

  </div>
</div>
`
    : ""
}
${
  hassmallMenu
    ? ` <div class="fixed top-[145px] w-[200px]  bg-white shadow-xl 
opacity-0 invisible group-hover:visible group-hover:opacity-100 
transition duration-300 z-50">

  <div class="max-w-xl mx-auto py-8 flex items-center justify-center gap-10">
     ${item.smallMenu.columns
       .map(
         (p) =>
           `
      <div>
      <ul class="space-y-6">
         ${p.items
           .map(
             (texts) =>
               `
          <li class="text-gray-500 cursor-pointer text-lg hover:text-stone-400">
          ${texts}
          </li>
          `,
           )
           .join("")}
      </ul>
      </div>
      `,
       )
       .join("")}
  </div>
  </div>
`
    : ""
}
${
  productMenu
    ? `
<div class="fixed left-0 w-screen bg-white 
opacity-0 invisible group-hover:visible group-hover:opacity-100 
top-[145px] transition duration-300 z-50">

  <div class="max-w-7xl mx-auto py-8 grid grid-cols-5 gap-10">

    ${item.Menu.columns
      .map(
        (col) => `
      <div>

        <h4 class="mb-4 text-lg">${col.title}</h4>

        <ul class="space-y-6 border-r pr-6">
          ${col.items
            .map(
              (txt) => `
            <li class="text-gray-500 cursor-pointer text-lg hover:text-stone-400">
              ${txt}
            </li>
          `,
            )
            .join("")}
        </ul>

      </div>
    `,
      )
      .join("")}


${item.Menu.banners.map(
  (banner) =>
    `
  <div>
<div class="flex justify-between gap-5">
    <h4 class="mb-4 text-lg">${banner.title}</h4>
  <div class="py-1">
    <span><i class="fa fa-arrow-left"></i></span>
    <span><i class="fa fa-arrow-right"></i></span>
  </div>
 </div>


    <div class="grid grid-cols-2 gap-6">
      
      ${banner.Img.map(
        (product) => `
        
        <div class="w-[300px]">
          <img src="${product.img}" 
            class="w-40  rounded-md hover:scale-110 transition-transform duration-300" />
          
          <p class="text-sm mt-2 text-gray-500">
            ${product.price || ""}
          </p>
        </div>

      `,
      ).join("")}
  `,
)}
</div>

  </div>

</div>
`
    : ""
}

      </li>
      `;
    })
    .join("");
}
renderMenu(menuItems, "navMenu");
