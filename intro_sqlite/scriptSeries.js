$(document).ready(function() {
    $("#send").click(function() {
        console.log("send");
        let idC;
        let NombreC;
        let EdadC;
        let InfoC;
        idC = $("#idnumber").val();
        NombreC = $("#ncreator").val();
        EdadC = $("#ecreator").val();
        InfoC = $("#icreator").val();

        valores = { "identifier": idC, "name": NombreC, "age": EdadC, "info": InfoC };
        $.post("http://127.0.0.1:5000/increador", valores, function(data, status){
            console.log(status);
            $("#result").text(data);
        });
    });
});