$(document).ready (function(){
    $("#cuadrado").offset({top: 0, left: 0});
});

$("#arriba").click(function(){
    $("#cuadrado").animate({
        top: "-=10px"
    }, "fast", function(){

    });
});

$("#abajo").click(function(){
    $("#cuadrado").animate({
        top: "+=10px"
    }, "fast", function(){

    });
});

$("#izquierda").click(function(){
    $("#cuadrado").animate({
        left: "-=10px"
    }, "fast", function(){

    });
});

$("#derecha").click(function(){
    $("#cuadrado").animate({
        left: "+=10px"
    }, "fast", function(){

    });
});

$("#reset").click(function(){
    $("#cuadrado").offset({top: 0, left: 0});
})