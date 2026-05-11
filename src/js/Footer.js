import { footer, appicons } from "./constants/Footer.js";

const Footer = document.getElementById("footers");

function renderFooter() {
  Footer.innerHTML = `

<footer class="bg-[#f5f1ee] pt-24">

  <div class="max-w-7xl mx-auto">

    <div class="grid grid-cols-5 gap-16">

      <!-- LEFT -->
      <div class="space-y-5">

        <img
          src="../images/jewelry-4-logo.webp"
          class="w-[140px]"
        />

        <div class="flex flex-col space-y-1 text-gray-500">

          <p class="flex-1">
            <i class="fa-solid fa-location-dot text-[#b8957c]"></i>
            55 East 10th street, new york
          </p>

          <p>
            <i class="fa-solid fa-phone text-[#b8957c]"></i>
            + (220) 123 456 7890
          </p>

          <p class="flex items-center gap-2">
            <i class="fa-regular fa-envelope text-[#b8957c]"></i>
            demo123546@gmail.com
          </p>

        </div>

      </div>


      ${footer
        .map(
          (section) => `

        <div>

          <h2 class="text-xl font-semibold text-[#b8957c]">
            ${section.title}
          </h2>

          <div class="space-y-3">

            ${section.links
              .map(
                (link) => `

              <p class="text-gray-500 hover:text-black cursor-pointer transition">

                ${link}

              </p>

            `,
              )
              .join("")}

          </div>

        </div>

      `,
        )
        .join("")}

    </div>
      
    <div class="flex items-center justify-between mt-20 pb-10 ">
     
    ${appicons
      .map(
        (icon) => `
      <div class="w-10 h-10 rounded-full border flex items-center justify-center">
        <a href="#" class="text-gray-500 hover:text-black transition">
          <i class="${icon.icon} text-2xl"></i>
       
        </a>
         </div>

      `,
      )
      .join("")}
    
      <div class="flex items-center justify-center">

        <p class="text-[#b8957c] text-xl font-medium whitespace-nowrap">
          Subscribe and get 15% discount.
        </p>

        <div class="flex gap-4">

          <input
            type="text"
            placeholder="Enter your email"
            class="w-[450px] rounded-full border px-6 py-4 focus:outline-none"
          />

          <button
            class="bg-[#b8957c] text-white px-10 rounded-full font-semibold hover:opacity-90 transition"
          >
            SUBSCRIBE
          </button>

        </div>

      </div>

    </div>

  </div>

</footer>

`;
}

renderFooter();
