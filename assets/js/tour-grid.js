const jsonFilePath = "../data/tours.json";
const itemsPerPage = 6;
let currentPage = 1;
let totalItems = 0;
let data = [];

function fetchDataAndRender() {
fetch(jsonFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((jsonData) => {
    data = jsonData;
    totalItems = data.length;
    renderPage();
  }).catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
}

function renderCards() {
    const cardContainer = document.getElementById("cards-container");
    cardContainer.innerHTML = "";
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentItems = data.slice(startIndex, endIndex);
    currentItems.forEach((tour) => {
      const { id, name, price, discount, featured, rate, reviwes, address, img } = tour;
      const divCard = document.createElement("div");
      divCard.classList.add("col-md-4", "mb-4");
      divCard.setAttribute("id", id);
      divCard.addEventListener("click",(e)=>{
        navigateToDetails(divCard.id);
      })
      divCard.innerHTML = `
          <div class="card d-flex flex-column justify-content-between">
            <div class="d-flex card-badges">
              ${discount > 0 ? `<span class="discount-badge badge text-bg-success m-2 p-2">${discount}% off</span>` : ""}
              ${featured ? `<span class="featured-badge badge m-2 p-2">Featured</span>` : ""}
            </div>
            <div class="card-info p-3">
              <p>
                <span class="green-color"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg></span>
                ${address}
              </p>
              <h3>${name}</h3>
              <div class=" d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar dollar-icon me-1" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                  </svg>
                  <p>From <span class="orange-color">$${(price - (price*discount/100)).toFixed(0)}.00</span> ${discount > 0 ? `<del>$${(price).toFixed(2)}</del>` : ""}</p>
                </div>
                <div class="d-flex align-items-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill m-1" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <p><span class="orange-color">${rate}</span> (${reviwes} reviews)</p>
                </div>
              </div>
            </div>
          </div>
      `;
      cardContainer.append(divCard);
    });
  }

  function navigateToDetails(id) {
    window.location.href = `../../tour-details.html?id=${id}`;
  }

  function renderPagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = ""; 
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.className = `btn mx-1 ${i === currentPage ? "active" : ""}`;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        renderPage();
      });
      paginationContainer.appendChild(pageButton);
    }
  }
  
  function renderPage() {
    renderCards();
    renderPagination();
  }
  
fetchDataAndRender();

// fetch("../../nav.html").then(response => response.text()).then(data => document.getElementById("nav").innerHTML = data);
// fetch("../../footer.html").then(response => response.text()).then(data => document.getElementById("footer").innerHTML = data);