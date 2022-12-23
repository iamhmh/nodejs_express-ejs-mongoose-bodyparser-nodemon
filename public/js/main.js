let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;