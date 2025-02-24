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
    $("#hideMenu").click(function(){   //Ya no me deja volver a mostrar.
        $("#resultadomenu").hide();
    })
    $("#botonNacho").click(function(){
        $.get("http://127.0.0.1:5000/cambiaNacho", function(data, status){
            $("#fotoNacho").attr("src", data);
            $("#fotoNacho").attr("height", 225);
            $("#fotoNacho").attr("width", 225);
            alert("Acaba de cambiar la foto de Nacho. Status: " + status);
        });
    });
    $("#botonGabo").click(function(){
        $.get("http://127.0.0.1:5000/cambiaGabo", function(data, status){
            $("#fotoGabo").attr("src", data);
            $("#fotoGabo").attr("height", 225);
            $("#fotoGabo").attr("width", 225);
            alert("Acaba de cambiar la foto de Gabo. Status: " + status);
        });
    });

    $("#botonOmar").click(function(){
        $.get("http://127.0.0.1:5000/cambiaOmar", function(data, status){
            $("#fotoOmar").attr("src", data);
            $("#fotoOmar").attr("height", 225);
            $("#fotoOmar").attr("width", 225);
            alert("Acaba de cambiar la foto de Omar. Status: " + status);
        });
    });
    $("#botonLunes").click(function(){
        $.get("http://127.0.0.1:5000/menuLunes", function(data, status){
            $("#infomenu").text(data)
            alert("Mostrando el menu del lunes. Status: " + status);
        });
    });
    $("#botonMartes").click(function(){
        $.get("http://127.0.0.1:5000/menuMartes", function(data, status){
            $("#infomenu").text(data)
            alert("Mostrando el menu del martes. Status: " + status);
        });
    });
    $("#botonMiercoles").click(function(){
        $.get("http://127.0.0.1:5000/menuMiercoles", function(data, status){
            $("#infomenu").text(data)
            alert("Mostrando el menu del miercoles. Status: " + status);
        });
    });
    $("#botonJueves").click(function(){
        $.get("http://127.0.0.1:5000/menuJueves", function(data, status){
            $("#infomenu").text(data)
            alert("Mostrando el menu del jueves. Status: " + status);
        });
    });
    $("#botonViernes").click(function(){
        $.get("http://127.0.0.1:5000/menuViernes", function(data, status){
            $("#infomenu").text(data)
            alert("Mostrando el menu del viernes. Status: " + status);
        });
    });
    $("#botonSabado").click(function(){
        $.get("http://127.0.0.1:5000/menuSabado", function(data, status){
            $("#infomenu").text(data)
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