$(document).ready(function () {
    $("#boton1").click(function () {
        alert($("p").text());
    });

    $("#boton2").click(function () {
        alert($("div").html());
    });

    $("#boton3").click(function () {
        alert($("#texto").val());
    });

    $("#boton4").click(function () {
        alert($("a").attr('href'));
    });

});


