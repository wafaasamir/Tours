fetch("../../../pages/Nav/nav.html").then(response => response.text()).then(data => document.getElementById("nav").innerHTML = data);
      fetch("../../../pages/Footer/footer.html").then(response => response.text()).then(data => document.getElementById("footer").innerHTML = data);