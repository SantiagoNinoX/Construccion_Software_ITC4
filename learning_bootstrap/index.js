$(document).ready(function(){

    function animarTitulo(){
        $("#titulo").animate({fontSize: "3em"}, 100);
        $("#titulo").animate({fontSize: "2.9em"}, 100);
    }
    setInterval(animarTitulo, 1000);   //animacion c/seg

    $(".botonDia").click(function(){     //funcion optimizada para mostrar los platillos de cada dia.
        let dia = $(this).data("dia");
        $.get("http://127.0.0.1:5000/menu/" + dia, function(data, status){
            $("#infomenu").text(data.platillos)
            alert("Mostrando el menu del: " + dia + ". Status: " + status);
        });
    });

    $("#botonSlide").click(function(){     //funcion para mostrar el menu
        $.get("http://127.0.0.1:5000/hi", function(data, status){
            $("#resultadomenu").hide().html(data).slideDown();
            alert("Acaba de cargar el menu. Status: " + status);
        });
    });

    $("#hideMenu").click(function(){    //funcion para esconder menu
        $("#resultadomenu").hide();
    });

    $(".fotoGato").dblclick(function(){     //funcion optimizada para mostrar la info de los 3 gatos.
        let nombre = $(this).data("name");
        let idP = "#info" + nombre.charAt(0).toUpperCase() + nombre.slice(1);
        $.get("http://127.0.0.1:5000/info/" + nombre, function(data, status){
            $(idP).hide().text(data.descripcion).fadeIn(200);
        });
    });

    $(".botonGato").click(function(){     //funcion optimizada para cambiar la foto de los 3 gatos.
        let nombre = $(this).data("nombre");
        let idFoto = "#foto" + nombre.charAt(0).toUpperCase() + nombre.slice(1);
        $.get("http://127.0.0.1:5000/cambiaImagen/" + nombre, function(data, status){
            $(idFoto).attr("src", data.url);
            $(idFoto).attr("height", 225);
            $(idFoto).attr("width", 225);
            alert(`Acaba de cambiar la foto de ${nombre}. Status: ${status}`);
        });
    });

    $("#maps").mouseleave(function(){    //funcion para esconder el mapa
        $("#maps").hide();
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
