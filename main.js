
//1.2
let a = 5;
let b = 10;
let c = a + b;
console.log("La suma de a y b es:", c);

//1.3
let name = prompt("¿Cuál es su nombre?");

console.log("hola, " + name + "!");

//2.1
let a1 = 3
let b1 = 10
let c1 = 5 
if (a1 > b1 && a1 > c1) {
  console.log("El mayor de los tres números es: " + a1);
} else if (b1 > a1 && b1 > c1) {
  console.log("El mayor de los tres números es: " + b1);
} else {
  console.log("El mayor de los tres números es: " + c1);
}
//2.2
let numeroIngresado = prompt("Ingrese un numero y te dire si es par o impar");

if (numeroIngresado % 2 == 0 ){
  console.log("El número " + numeroIngresado + " es par");
}else {
  console.log("El número " + numeroIngresado + " es impar");
}

//3.1
let contador = 10;
while(contador > 0){
  console.log(contador);
  contador = contador - 1;
}

//3.2
let numero;
do (
  numero = prompt("Ingrese un numero mayor a 100:")
);while(numero < 100);

console.log("Ingresaste un numero mayor a 100: " + numero);

//4.1
function esPar(num){
  const esPar = num % 2 == 0
  if (esPar){
    console.log("El número " + num + " es par: " + esPar);
  }else {
    console.log("El número " + num + " es par: " + esPar);
  }

}
esPar(8);
esPar(7);

//4.2
function convertirCelsiusAFahrenheit(celcius){
  let fahrenheit = celcius * 1.8 + 32;
  console.log(celcius + "ºC son equivalentes a " + fahrenheit +"ºF");
}
convertirCelsiusAFahrenheit(30);

//5.1
const persona = {
  name: "ana",
  age:"30",
  ciudad:"buenos aires",
  cambiarCiudad: function(ciudad){
    this.ciudad = ciudad;
  }
};
console.log("Persona antes de cambiar ciudad: " + JSON.stringify(persona));

persona.cambiarCiudad("barcelona");

console.log("Persona despues de cambiar ciudad: " + JSON.stringify(persona));

//5.2
const libro = {
  nombre : "El quijote",
  autor : "Cervantes",
  año : 1605,
  antiguedad: function(añoActual){
    let anios = añoActual-this.año;
    let antiguo = anios>10
    if(antiguo)
      console.log("El libro " + this.nombre + " es antiguo: " + antiguo)
  }
}
libro.antiguedad(2024);


//6.1
const numeros = [1,2,3,4,5,6,7,8,9,10];
let result = numeros.map((item)=>{return item*2});
console.log("numeros:")
console.log(numeros);
console.log("numeros multiplicados por 2:")
console.log(result)

//6.2
let pares = [];
for(let i = 1; i<=20 ;i++){
  if(i%2 == 0){
    pares.push(i);
  }
}
console.log("primeros 10 numeros pares:")
console.log(pares)

//7.1
let parrafos = document.getElementsByTagName("p");

const cambiarColor = ()=>{
  for(let i = 0; i < parrafos.length; i++){
    parrafos[i].classList.add("blueParrafos");
  }
  
};

document.getElementById("button").addEventListener("click", ()=>{
  cambiarColor();
});

//7.2

document.getElementById("buttonAlert").addEventListener("click", ()=>{
  let input = document.getElementById("input").value;
  alert(input);
});

//8.1
let listElemetents = document.getElementsByTagName("li");

for(let i = 0; i < listElemetents.length; i++){
  listElemetents[i].addEventListener("click", ()=>{
    console.log(listElemetents[i].innerHTML);
  });
}

//8.2
document.getElementById("disable").addEventListener("click",()=>{
  document.getElementById("campo").disabled = true
})
document.getElementById("enable").addEventListener("click",()=>{
  document.getElementById("campo").disabled = false
})

//9.1
if(localStorage.getItem("email")){
  let result = localStorage.getItem("email")
  console.log(result)
  document.getElementById("correo").innerHTML = result
}


document.getElementById("buttonEmail").addEventListener("click",()=>{
  let email = document.getElementById("emailInput").value
  localStorage.setItem(
    "email",
    email
    )
})

document.getElementById("buttonDelete").addEventListener("click", ()=>{
  localStorage.removeItem("email");
});

