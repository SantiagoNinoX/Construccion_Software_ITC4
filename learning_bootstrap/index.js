$(document).ready(function(){

    function animarTitulo(){
        $("#titulo").animate({fontSize: "3em"}, 100);
        $("#titulo").animate({fontSize: "2.9em"}, 100);
    }
    setInterval(animarTitulo, 1000);   //animacion c/seg

    $("#fotoNacho").dblclick(function(){
        $.get("http://127.0.0.1:5000/info/nacho", function(data){
            $("#infoNacho").hide().text(data.descripcion).fadeIn(200);
        });
    });

    $("#fotoGabo").dblclick(function(){
        $.get("http://127.0.0.1:5000/info/gabo", function(data){
            $("#infoGabo").hide().text(data.descripcion).fadeIn(200);
        });
    });

    $("#fotoOmar").dblclick(function(){
        $.get("http://127.0.0.1:5000/info/omar", function(data){
            $("#infoOmar").hide().text(data.descripcion).fadeIn(200);
        });
    });

    $("#maps").mouseleave(function(){
        $("#maps").hide();
    });

    $("#botonSlide").click(function(){
        $.get("http://127.0.0.1:5000/hi", function(data, status){
            $("#resultadomenu").hide().html(data).slideDown();
            alert("Acaba de cargar el menu. Status: " + status);
        });
    });

    $("#hideMenu").click(function(){   //Ya no me deja volver a mostrar.
        $("#resultadomenu").hide();
    });

    $("#botonNacho").click(function(){
        $.get("http://127.0.0.1:5000/cambiaImagen/nacho", function(data, status){
            $("#fotoNacho").attr("src", data.url);
            $("#fotoNacho").attr("height", 225);
            $("#fotoNacho").attr("width", 225);
            alert("Acaba de cambiar la foto de Nacho. Status: " + status);
        });
    });

    $("#botonGabo").click(function(){
        $.get("http://127.0.0.1:5000/cambiaImagen/gabo", function(data, status){
            $("#fotoGabo").attr("src", data.url);
            $("#fotoGabo").attr("height", 225);
            $("#fotoGabo").attr("width", 225);
            alert("Acaba de cambiar la foto de Gabo. Status: " + status);
        });
    });

    $("#botonOmar").click(function(){
        $.get("http://127.0.0.1:5000/cambiaImagen/omar", function(data, status){
            $("#fotoOmar").attr("src", data.url);
            $("#fotoOmar").attr("height", 225);
            $("#fotoOmar").attr("width", 225);
            alert("Acaba de cambiar la foto de Omar. Status: " + status);
        });
    });

    $("#botonLunes").click(function(){
        $.get("http://127.0.0.1:5000/menu/lunes", function(data, status){
            $("#infomenu").text(data.platillos)
            alert("Mostrando el menu del lunes. Status: " + status);
        });
    });

    $("#botonMartes").click(function(){
        $.get("http://127.0.0.1:5000/menu/martes", function(data, status){
            $("#infomenu").text(data.platillos)
            alert("Mostrando el menu del martes. Status: " + status);
        });
    });

    $("#botonMiercoles").click(function(){
        $.get("http://127.0.0.1:5000/menu/miercoles", function(data, status){
            $("#infomenu").text(data.platillos)
            alert("Mostrando el menu del miercoles. Status: " + status);
        });
    });

    $("#botonJueves").click(function(){
        $.get("http://127.0.0.1:5000/menu/jueves", function(data, status){
            $("#infomenu").text(data.platillos)
            alert("Mostrando el menu del jueves. Status: " + status);
        });
    });

    $("#botonViernes").click(function(){
        $.get("http://127.0.0.1:5000/menu/viernes", function(data, status){
            $("#infomenu").text(data.platillos)
            alert("Mostrando el menu del viernes. Status: " + status);
        });
    });

    $("#botonSabado").click(function(){
        $.get("http://127.0.0.1:5000/menu/sabado", function(data, status){
            $("#infomenu").text(data.platillos)
            alert("Mostrando el menu del sabado. Status: " + status);
        });
    });
});

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
