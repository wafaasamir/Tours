fetch("assets/data/blog.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsContainer = document.getElementById("cards-container");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const paginationContainer = document.querySelector(".pagination");

    const itemsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    function renderCards(page) {
      cardsContainer.innerHTML = "";

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      const paginatedData = data.slice(startIndex, endIndex);

      paginatedData.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.style.width = "335px";
        card.style.marginBlock = "5px";

        card.innerHTML = `
          <div>
              <img style="width: 100%; border-top-left-radius: 5px;
                    border-top-right-radius: 5px;" 
                    src="${item.img}" 
                    alt="${item.name}">
              <div style="display: inline-block;
                          width: 90px;
                          height: 35px;
                          text-align: center;
                          line-height: 2.4;
                          background-color: #ff6525;
                          color: #fff;
                          border-radius: 3px;
                          position: relative;
                          bottom: 80%;
                          font-size: 14px;
                          left: 9%;">${item.type}</div>
          </div>
          <div class="d-flex justify-content-around mb-3" style="color: #11bb67">
              <div>
                  ${item.info.left.icon}
                  <span class="mx-2" style="color: #6b6f6a">${item.info.left.date}</span>
              </div>
              <div>
                  ${item.info.right.icon}
                  <span class="mx-2" style="color: #6b6f6a">${item.info.right.comments}</span>
              </div>
          </div>
          <a class="description mx-3 fw-medium fs-6 text-decoration-none" style="cursor: pointer; color: black" onmouseover="this.style.color='#11bb67'" 
   onmouseout="this.style.color='black'">${item.description}</a>
          <div class="d-flex mx-3 gap-2" style="color: #11bb67">
            <a style="cursor: pointer; color: #11bb67" class="mb-3 text-decoration-none">${item.link.text}</a>
            ${item.link.icon}
          </div>
        `;

        cardsContainer.appendChild(card);
      });

      prevButton.disabled = page === 1;
      nextButton.disabled = page === totalPages;

      updatePaginationButtons();
    }

    function createPaginationButtons() {
      const existingButtons = paginationContainer.querySelectorAll(
        "button:not(#prev):not(#next)"
      );
      existingButtons.forEach((button) => button.remove());

      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;

        pageButton.classList.add("btn-style");

        pageButton.addEventListener("click", () => {
          currentPage = i;
          renderCards(currentPage);
        });
        paginationContainer.insertBefore(pageButton, nextButton);
      }
    }

    function updatePaginationButtons() {
      const buttons = paginationContainer.querySelectorAll("button");
      buttons.forEach((button) => {
        if (parseInt(button.textContent) === currentPage) {
          button.style.backgroundColor = "#11bb67";
          button.style.color = "black";
        } else {
          button.style.backgroundColor = "#f3f8f6";
          button.style.color = "black";
        }
      });
    }

    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderCards(currentPage);
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderCards(currentPage);
      }
    });

    createPaginationButtons();
    renderCards(currentPage);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
