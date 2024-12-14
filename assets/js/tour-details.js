const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const tourPageTitle = document.getElementById('tour-details-page-title');
const tourAddress = document.getElementById("tour-address");
const tourRate = document.getElementById("tour-rate");
const tourReviews = document.getElementById("tour-review");
const tourName = document.getElementById("tour-name");
const tourPrice = document.getElementById("tour-price");
const tourDuration = document.getElementById("tour-duration");
const tourType = document.getElementById("tour-type");
const tourOverview = document.getElementById("tour-overview");
const tourFacilities = document.getElementById("tour-facilities");
const tourChallenges = document.getElementById("tour-challenge");
const tourInclude = document.getElementById("tour-include");
const tourExclude = document.getElementById("tour-exclude");
const tourGuests = document.getElementById("tour-guest");
const tourAge = document.getElementById("tour-age");
const tourLocation = document.getElementById("tour-location");
const tourLanguages = document.getElementById("tour-language");
const lastDealsCard = document.getElementById('last-deals-card');

fetch("../data/tours.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const tours = data.filter((t) => t.id === id);
    if (tours.length > 0) {
      const tour = tours[0];
      console.log(tour);
      tourAddress.textContent = `${tour.address}`;
      tourRate.textContent = `${tour.rate}`;
      tourReviews.textContent = `${tour.reviwes}`;
      tourName.textContent = `${tour.name}`;
      tourPageTitle.textContent = `${tour.name}`;
      tourPrice.textContent = `${(
        tour.price -
        tour.price * (tour.discount / 100)
      ).toFixed(0)}.00`;
      tourDuration.textContent = `${tour.duration}`;
      tourType.textContent = `${tour.type}`;
      tourOverview.textContent = `${tour.overview}`;
      tourFacilities.textContent = `${tour.facilities}`;
      tourChallenges.textContent = `${tour.challenge}`;
      tour.include.map((inc) => {
        const li = document.createElement("li");
        li.innerHTML = inc;
        tourInclude.appendChild(li);
      });
      tour.exclude.map((exc) => {
        const li = document.createElement("li");
        li.innerHTML = exc;
        tourExclude.appendChild(li);
      });
      tourGuests.textContent = `${tour.info.maxGuests}`;
      tourAge.textContent = `${tour.info.minAge}+`;
      tourLocation.textContent = `${tour.info.location}`;
      tourLanguages.textContent = `${tour.info.language}`;
      
      const lastThreeTours = data.slice(-3);
      lastThreeTours.forEach((tour) => {
        const tourCard = document.createElement('div');
        tourCard.classList.add('tour-card', 'col-12');
        const tourCardRow = document.createElement('div');
        tourCardRow.classList.add('row');
        const tourImgDiv = document.createElement('div');
        tourImgDiv.classList.add('col-4', 'tour-img');
        const img = document.createElement('img');
        img.src = tour.img; 
        img.alt = tour.name;
        img.classList.add('img-fluid');
        tourImgDiv.appendChild(img);
        const tourInfoDiv = document.createElement('div');
        tourInfoDiv.classList.add('col-8', 'tour-info');
        const lastDealsRate = document.createElement('div');
        lastDealsRate.classList.add('d-flex', 'last-deals-rate');
        for (let i = 0; i < 5; i++) {
          const star = document.createElement("span");
          star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`;
          lastDealsRate.appendChild(star);
        }
        const tourLink = document.createElement('a');
        tourLink.href = `tour-details.html?id=${tour.id}`;
        const tourName = document.createElement('h6');
        tourName.textContent = tour.name;
        tourLink.appendChild(tourName);
        const tourPrice = document.createElement('p');
        tourPrice.textContent = `From $${tour.price}`;
        tourInfoDiv.appendChild(lastDealsRate);
        tourInfoDiv.appendChild(tourLink);
        tourInfoDiv.appendChild(tourPrice);
        tourCardRow.appendChild(tourImgDiv);
        tourCardRow.appendChild(tourInfoDiv);
        tourCard.appendChild(tourCardRow);
        lastDealsCard.appendChild(tourCard);
    });
    } else {
      document.getElementById(
        "tour-details"
      ).innerHTML = `<p>Tour not found!</p>`;
    }
  })
  .catch((error) => console.error("Error loading data:", error));


  document.querySelectorAll('.btn-decrease, .btn-increase').forEach(button => {
    button.addEventListener('click', (e) => {
      const button = e.target;
      const targetInputId = button.getAttribute('data-target');
      const inputElement = document.getElementById(targetInputId);
  
      let currentValue = parseInt(inputElement.value);
      if (button.classList.contains('btn-decrease')) {
        if (currentValue > 0) {
          inputElement.value = currentValue - 1;
        }
      } else if (button.classList.contains('btn-increase')) {
        inputElement.value = currentValue + 1;
      }
      calculateTotal();
    });
  })
  document.querySelector('.package-form').addEventListener('change', () => {
    calculateTotal();
  });
  const calculateTotal = () => {
    const adults = parseInt(document.getElementById('adults').value) || 0;
    const kids = parseInt(document.getElementById('kids').value) || 0;
    const children = parseInt(document.getElementById('children').value) || 0;
    const guideService = document.getElementById('guide').checked ? 120 : 0;
    const internetService = document.getElementById('internet').checked ? 120 : 0;
    const photographyService = document.getElementById('photography').checked ? 120 : 0;
    const totalForAdults = adults * 120;
    const totalForKids = kids * 120;
    const totalForChildren = children * 120;
    const totalServices = guideService + internetService + photographyService;
    const totalCost = totalForAdults + totalForKids + totalForChildren + totalServices;
    document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2)}`;
  };

document.querySelector('.package-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert('Form is valid. Proceeding with booking.');
    window.location.href = "../../booking.html"
  }
});
const validateForm = () => {
  let isValid = true;
  const dateInput = document.getElementById('date');
  const adultsInput = document.getElementById('adults');
  const kidsInput = document.getElementById('kids');
  const childrenInput = document.getElementById('children');
  clearValidationErrors();
  let errorMessage = '';
  if (!dateInput.value) {
    errorMessage += 'Date is required.\n';
    isValid = false;
  }
  if (adultsInput.value < 1) {
    errorMessage += 'At least one adult is required.\n';
    isValid = false;
  }
  if (kidsInput.value < 0) {
    errorMessage += 'Number of kids cannot be negative.\n';
    isValid = false;
  }
  if (childrenInput.value < 0) {
    errorMessage += 'Number of children cannot be negative.\n';
    isValid = false;
  }
  if (!isValid) {
    showError(errorMessage);
  }
  return isValid;
};
const showError = (message) => {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message;
  errorMessageElement.classList.remove('d-none');
};
const clearValidationErrors = () => {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.classList.add('d-none');
  errorMessageElement.textContent = '';
};

// fetch("../../nav.html").then(response => response.text()).then(data => document.getElementById("nav").innerHTML = data);
// fetch("../../footer.html").then(response => response.text()).then(data => document.getElementById("footer").innerHTML = data);