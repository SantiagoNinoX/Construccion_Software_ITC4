$(document).ready(function(){
    $("#infoNacho").hide();
    $("#infoGabo").hide();
    $("#infoOmar").hide();
    $("#listaMenu").hide();
    $("#fotoNacho").dblclick(function(){    
        $("#infoNacho").fadeIn(200);       
    });
    $("#fotoGabo").dblclick(function(){    
        $("#infoGabo").fadeIn(200);       
    });
    $("#fotoOmar").dblclick(function(){    
        $("#infoOmar").fadeIn(200);       
    });
    $("#maps").mouseleave(function(){
        $("#maps").hide();
    });
    // $("#botonSlide").click(function(){
    //     $("#listaMenu").slideDown();
    // });
    $("#botonSlide").click(function(){
        $.get("http://127.0.0.1:5000/hi", function(data, status){
            $("#resultadomenu").html(data);
            alert("Acaba de cargar el menu. Status: " + status);
        });
    });
    $("#botonNacho").click(function(){
        $.get("http://127.0.0.1:5000/cambiaNacho", function(data, status){
            $("#fotoNacho").attr("src", data);
            $("#fotoNacho").attr("height", 225);
            $("#fotoNacho").attr("width", 225);
            alert("Acaba de cambiar la foto de Nacho. Status: " + status);
        });
    });
});

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