//Identifier l'élèment
const navbar = document.querySelector(".navbar-container");
const navContent = document.getElementById("nav-content");
//Repérer la position de départ de l'élèpment
const initialPosition = navbar.offsetTop;
//Fonction pour donner une class"Fixed" une fois le haut de l'écran atteint
window.onscroll = function () {
  if (window.scrollY >= initialPosition) {
    navbar.classList.add("fixed");

    // Ajouter un logo lorsqu'elle devient fixe
    if (!document.getElementById("logo")) {
      const logo =
        '<img src="https://p.ventesprivees-fr.com/jet-tours.png" alt="Logo" id="logo">';
      navContent.innerHTML = logo + navContent.innerHTML;
    }
  } else {
    navbar.classList.remove("fixed");

    // Supprimer le logo lorsqu'elle n'est plus fixe
    const logoElement = document.getElementById("logo");
    if (logoElement) {
      logoElement.remove();
    }
  }
};
