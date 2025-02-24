$(document).ready(function() {
    $("#suma").click(function() {
        let first = 0;
        let second = 0;
        first = Number($("#fnumber").val());
        second = Number($("#snumber").val());
        valores = {"first": first, "second": second}
        $.post("http://127.0.0.1:5000/suma", valores, function(data, status){
            console.log("Estado: " + status);
            $("#result").text(data);
        });
    });
    $("#resta").click(function() {
        let first = 0;
        let second = 0;
        first = Number($("#fnumber").val());
        second = Number($("#snumber").val());
        valores = {"first": first, "second": second}
        $.post("http://127.0.0.1:5000/resta", valores, function(data, status){
            console.log("Estado: " + status);
            $("#result").text(data);
        });
    });
    $("#multi").click(function() {
        let first = 0;
        let second = 0;
        first = Number($("#fnumber").val());
        second = Number($("#snumber").val());
        valores = {"first": first, "second": second}
        $.post("http://127.0.0.1:5000/multi", valores, function(data, status){
            console.log("Estado: " + status);
            $("#result").text(data);
        });
    });
    $("#div").click(function() {
        let first = 0;
        let second = 0;
        first = Number($("#fnumber").val());
        second = Number($("#snumber").val());
        valores = {"first": first, "second": second}
        $.post("http://127.0.0.1:5000/div", valores, function(data, status){
            console.log("Estado: " + status);
            $("#result").text(data);
        });
    });
});