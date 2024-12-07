const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

fetch("../../Data/tours.json")
  .then((response) => response.json())
  .then((data) => {
    const tours = data.filter((t) => (t.id = id));
    if (tours.length > 0) {
      const tour = tours[0];
      document.getElementById("tour-details").innerHTML = `
            <h1>${tour.name}</h1>
            <img src="${tour.img}" alt="${tour.name}">
            <p><strong>Price:</strong> $${tour.price}</p>
            <p><strong>Duration:</strong> ${tour.duration}</p>
            <p><strong>Rating:</strong> ${tour.rate} (${
        tour.reviwes
      } reviews)</p>
            <p><strong>Address:</strong> ${tour.address}</p>
            <p><strong>Overview:</strong> ${tour.overview}</p>
            <p><strong>Facilities:</strong> ${tour.facilities}</p>
            <p><strong>Includes:</strong> ${tour.include.join(", ")}</p>
            <p><strong>Excludes:</strong> ${tour.exclude.join(", ")}</p>
            <p><strong>Location:</strong> ${tour.info.location}</p>
            <p><strong>Min Age:</strong> ${tour.info.minAge}</p>
        `;
    } else {
      document.getElementById(
        "tour-details"
      ).innerHTML = `<p>Tour not found!</p>`;
    }
  })
  .catch((error) => console.error("Error loading data:", error));
