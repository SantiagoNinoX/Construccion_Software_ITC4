function miFuncion() {
    document.getElementById("id2").src="https://upload.wikimedia.org/wikipedia/commons/9/94/Gato_%282%29_REFON.jpg";
   //  document.getElementsByClassName("c1")[0].style.background = "darkblue";
   //  document.getElementsByClassName("c1")[0].style.color = "green";
    console.log("Todo va bien");
 }

 function funcionDark(){
    console.log("Dark mode activado");
    let divs = document.querySelectorAll("div");
    document.body.style.backgroundColor = "#1B4F72";
    document.body.style.color = "white"; 
    document.getElementsByClassName("nombre")[0].style.background = "linear-gradient(to right, darkcyan, blue)";
    document.getElementsByClassName("nombre")[0].style.color = "white";
    document.getElementById("descripcion").style.background = "steelblue";
    document.getElementById("descripcion").style.color = "orange";
    document.getElementsByClassName("container")[0].style.background = "royalblue";
    let menu = document.querySelector(".menu");   //Una alternativa, usar queryselector y no el [0]. Funciona.
    menu.style.backgroundColor = "#7d6608";
    menu.style.color = "white";
    document.getElementsByClassName("c1")[0].style.background = "rgb(95,158,160)";
    document.getElementsByClassName("c1")[0].style.color = "#FFCCFF";
    document.getElementById("id1").style.background = "#01263a";
    document.getElementById("id1").style.color = "#ffabaf";
    document.getElementsByClassName("ubiYhora")[0].style.background = "#993366";
    document.getElementsByClassName("ubiYhora")[0].style.color = "white";
    let botonesGatos = document.querySelectorAll(".infoCat");
    botonesGatos.forEach(boton => {
        boton.style.backgroundColor = "grey";
        boton.style.color = "whitesmoke"; 
        boton.style.border = "1px solid white"; 
    });
 }

 function infoGatos(gato){
   if (gato === "nacho"){
      console.log("Estoy mostrando la información de Nacho")
      document.getElementById("espacioNacho").innerText="El es Nacho, un gato blanco, muy amable y cariñoso.";
   }
   if (gato === "gabo"){
      console.log("Estoy mostrando la información de Gabo")
      document.getElementById("espacioGabo").innerText="El es Gabriel, un gato naranja muy violento e inteligente.";
   }
   if (gato === "omar"){
      console.log("Estoy mostrando la información de Omar")
      document.getElementById("espacioOmar").innerText="El es Omar, un gato negro muy tenebroso y kawai.";
   }
 }

 function menus(dia){
   if (dia === "lunes"){
      console.log(`Mostrando menu del dia ${dia}`);
      document.getElementById("infomenu").innerText="Sopa de letras, nachos con queso, carne al pastor, agua de limón y un cheesecake de frambuesa.";
   }
   if (dia === "martes"){
      console.log(`Mostrando menu del dia ${dia}`);
      document.getElementById("infomenu").innerText="Arroz rojo, tostadas preparadas, pechugas rellenas, agua de jamaica y gelatina de rompope.";
   }
   if (dia === "miercoles"){
      console.log(`Mostrando menu del dia ${dia}`);
      document.getElementById("infomenu").innerText="Consome de pollo, arroz blanco, enchiladas suizas, agua de horchata y arroz con leche.";
   }
   if (dia === "jueves"){
      console.log(`Mostrando menu del dia ${dia}`);
      document.getElementById("infomenu").innerText="Ensalada rusa, pozole rojo, picadillo de res, agua de fresa y pastel de chocolate.";
   }
   if (dia === "viernes"){
      console.log(`Mostrando menu del dia ${dia}`);
      document.getElementById("infomenu").innerText="Pasta boloñesa, pan de ajo, pizza de peperoni, sodas italianas y tiramisú.";
   }
   if (dia === "sabado"){
      console.log(`Mostrando menu del dia ${dia}`);
      document.getElementById("infomenu").innerText="Arroz blanco, camarones, tacos dorados, agua de rompope y pay de limon.";
   }
 }

 function gatitoAscii(){
   const gato = [
      [' ', '/', '\\', '_', '/', '\\', ' '],
      ['(', ' ', 'o', '.', 'o', ' ', ')'],
      [' ', '>', ' ', '^', ' ', '<', ' ']
  ];
  
  gato.forEach(fila => {
      let linea = '';
      fila.forEach(caracter => {
          linea += caracter;
      });
      console.log(linea);
  });
 }