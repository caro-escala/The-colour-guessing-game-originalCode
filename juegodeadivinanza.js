let nivel;
let pickedColor;
let colours = [];
let cuadrados = document.querySelectorAll(".square");
let clickedColor;
let cuerpo = document.querySelector("body");
let mensaje = document.querySelector("#message");
let titulo = document.querySelector(".title");
let refrescarColores = document.querySelector("#refresh");
let imagen = document.querySelector("img")
let fuegos = document.querySelector("#artificiales")
let nuevo = document.querySelector("#again")
let final = document.querySelector("#congrats")

document.querySelector("#facil").addEventListener("click", function () {
  document.querySelector("#facil").classList.add("selected");
  nivel = 3;
});

document.querySelector("#dificil").addEventListener("click", function () {
  document.querySelector("#dificil").classList.add("selected");
  nivel = 6;
});

document.querySelector("#muyDificil").addEventListener("click", function () {
  document.querySelector("#muyDificil").classList.add("selected");
  nivel = 9;
});

let siguiente = document.querySelector("#juego")

function play (){
  generateRamdomColors(nivel);
  let indice = Math.ceil(Math.random() * (nivel - 1));
  pickedColor = colours[indice];
  for (i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colours[i];  
  };
  for (i = 8; i >= colours.length; i--){
    cuadrados[i].classList.add("desaparece");
  }
  document.querySelector("#colorDisplay").textContent = pickedColor;
  for (i = 0; i < cuadrados.length; i++) {
    cuadrados[i].addEventListener("click", function (i) {
      clickedColor = this.style.backgroundColor;
      if (clickedColor == pickedColor) {
        mensaje.textContent = "Correct!!!!!";
        titulo.style.color = pickedColor;
        mensaje.style.color = pickedColor;
        changeColor(cuadrados, clickedColor);
        setInterval(function(){
          fuegos.classList.remove("noAnimacion");
          nuevo.classList.remove("noAnimacion");
          final.classList.remove("noAnimacion");
          siguiente.classList.add("part2");
        },1000);
      } else {
        this.style.backgroundColor = cuerpo.style.backgroundColor;
        mensaje.textContent = "Try again!!!!!";
      }
    });
  }
}

let intro = document.querySelector(".presentacion")
let intro2 = document.querySelector(".presentacion2")

document.querySelector("#ir").addEventListener("click", function () {
  siguiente.classList.remove("part2");
  play();
  intro.classList.add("desaparece");
  intro2.classList.add("desaparece");
})

let compA;
let compB;
let compC;
let componente;


function randomColor() {
  compA = Math.ceil(Math.random() * 225) + ", ";
  compB = Math.ceil(Math.random() * 225) + ", ";
  compC = Math.ceil(Math.random() * 225);
  componente = "rgb(" + compA + compB + compC + ")";
  return componente;
}

randomColor();

function generateRamdomColors(nivel) {
  while (colours.length < nivel) {
    colours.push(randomColor());
  }
}

function changeColor() {
  for (i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = clickedColor;
  }
}

refrescarColores.addEventListener("click", function () {
  compA = "";
  compB = "";
  compC = "";
  componente = "";
  mensaje.textContent =
  colours = [];
  play()
});

let aboutMe = document.querySelector(".cierre")
let infoCreation = document.querySelector("#otro")
let bla = document.querySelector("#main3")

aboutMe.addEventListener("mouseover", function(){
  infoCreation.classList.toggle("noAnimacion");
})

setInterval(function(){
  bla.classList.toggle("resaltado");
},0500);

console.log("Mensaje secreto: Gracias a mi esposo YR por dedicar una par de tardes a introducirme en este mundo de la programacion, por regalarme nuevos desafios para entretener mi inquieta mente y por inspirarme -siempre- a ser cada dia mejor. <3")


