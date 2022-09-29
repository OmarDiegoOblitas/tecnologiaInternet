const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// window.addEventListener("load", () => {
//   let baseDatos;
//   let solicitudConexion = indexedDB.open("registro", 1);

//   solicitudConexion.onsuccess = function (evento) {
//     baseDatos = evento.target.result;
//   };
//   solicitudConexion.onerror = function (evento) {
//     document.querySelector(
//       "#resultado"
//     ).innerText = `Error al abrir la dataBase: ${evento.target.errorCode}`;
//   };
//   solicitudConexion.onupgradeneeded = function (evento) {
//     baseDatos = event.target.result;
//     let notas = baseDatos.createObjectStore("registrados", {
//       autoIncrement: true,
//     });
//   };
//   document.querySelector("#login").addEventListener("click", function (evento) {
//     let contenido = document.querySelector("#contenido").value;
//   });
// });

const logoutButton = document.querySelectorAll(".fa-sign-out-alt");
const auth = localStorage.getItem("auth");
logoutButton.forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });
  if (!auth) {
    button.style.display = "none";
  }
});
