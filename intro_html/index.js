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