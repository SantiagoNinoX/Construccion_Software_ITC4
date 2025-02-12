function miFuncion() {
    document.getElementById("id2").src="https://upload.wikimedia.org/wikipedia/commons/9/94/Gato_%282%29_REFON.jpg";
    document.getElementsByClassName("c1")[0].style.background = "darkblue";
    document.getElementsByClassName("c1")[0].style.color = "green";
    console.log("Todo va bien");
 }

 function funcionDark(){
    console.log("Dark mode activado");
    document.getElementsByClassName("nombre")[0].style.background = "blue";
    document.getElementsByClassName("nombre")[0].style.color = "white";
 }

 function infoNacho() {
    console.log("Estoy mostrando la información de Nacho")
    document.getElementById("espacioNacho").innerText="El es Nacho, un gato blanco, muy amable y cariñoso";
 }

 function menuLunes(){
   console.log("Mostrando el menu del Lunes");
   document.getElementById("infomenu").innerText="Sopa de letras, carne al pastor y un cheesecake de frambuesa";
 }