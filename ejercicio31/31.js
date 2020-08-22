$(document).ready(function () {
  $("#rojo").val('0');
  $("#verde").val('0');
  $("#azul").val('0');

  $(".contenedor").css("background", "rgb(0, 0, 0)");

  $("#barra1, #barra2, #barra3").on('input', function () {
    var r = $("#barra1").val();
    var g = $("#barra2").val();
    var b = $("#barra3").val();

    $(".contenedor").css("background", "rgb(" + r + "," + g + "," + b + ")");
    $("#rojo").val(r);
    $("#verde").val(g);
    $("#azul").val(b);
  });
});

