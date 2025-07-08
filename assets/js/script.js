//Funcion Usada en el ejercicio #1
let imagen = document.querySelector("#imagenBorder");
imagen.style.border = "0px solid red";
function borders() {
  if (imagen.style.border == "0px solid red") {
    imagen.style.border = "2px solid red";
  } else {
    imagen.style.border = "0px solid red";
  }
}

//Funcion Usada en el ejercicio #2
function verificar() {
  let input1 = document.querySelector("#input1").value;
  let input2 = document.querySelector("#input2").value;
  let input3 = document.querySelector("#input3").value;
  let stiker1 = Number(input1);
  let stiker2 = Number(input2);
  let stiker3 = Number(input3);
  let total = stiker1 + stiker2 + stiker3;
  if (total > 10) {
    document.querySelector("#parrafo").innerHTML = "Llevas Demaciados Stikers";
  } else {
    document.querySelector("#parrafo").innerHTML =
      "El total de los Stiker es de " + total;
  }
}

//Funcion Usada en el ejercicio #3
function ingresar() {
  let codigo1 = document.querySelector("#codigo1").value;
  let codigo2 = document.querySelector("#codigo2").value;
  let codigo3 = document.querySelector("#codigo3").value;
  let codigoFinal = codigo1 + codigo2 + codigo3;
  if (codigoFinal == 911) {
    document.querySelector("#resultado").innerHTML = "Password Correcto";
  } else if (codigoFinal == 714) {
    document.querySelector("#resultado").innerHTML = "Password Correcto #2";
  } else {
    document.querySelector("#resultado").innerHTML = "Password Incorrecto";
  }
}
