let btnEnviar = document.getElementById("btnEnviar");
let inputNumero1 = <HTMLInputElement>document.getElementById("Numero1");
let inputNumero2 = <HTMLInputElement>document.getElementById("Numero2");
let inputNumero3 = <HTMLInputElement>document.getElementById("Numero3");
let numeromayor = document.getElementById("numeromayor");

btnEnviar.addEventListener("click", () => {
  let numero1 = Number(inputNumero1.value);
  let numero2 = Number(inputNumero2.value);
  let numero3 = Number(inputNumero3.value);

  if (numero1 > numero2 && numero1 > numero3) {
    console.log("El numero mayor es " + numero1);
    numeromayor.innerHTML = "El numero mayor es " + numero1;
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El numero mayor es " + numero2);
    numeromayor.innerHTML = "El numero mayor es " + numero2;
  } else if (numero3 > numero2 && numero3 > numero1) {
    console.log("El numero mayor es " + numero3);
    numeromayor.innerHTML = "El numero mayor es " + numero3;
  } else if (numero1 === numero2 && numero1 === numero3) {
    console.log("Los numeros son iguales");
    numeromayor.innerHTML = "Los numeros son iguales";
  }
});
