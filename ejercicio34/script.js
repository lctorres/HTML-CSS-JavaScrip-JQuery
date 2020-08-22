var arreglo = [];
var n = 19;

$(document).ready (function(){
    $("#boton2").hide();
    $("#boton3").hide();
    $("#boton4").hide();
    $("#boton5").hide();
});


$("#boton1").click (function(){
    $("#aqui2").html('');
    $("#aqui3").html('');
    $("#aqui4").html('');
    $("#aqui5").html('');
    $("#boton2").show();
    $("#boton3").show();
    $("#boton4").show();
    $("#boton5").show();
    
    var salida =[];
    for( var i = 0; i <= n; i++){
        arreglo[i] = Math.floor(Math.random() * 101);
        salida.push(arreglo[i] + " ");
    }

    $("#aqui").html("Números al azar: [ "+salida.join("] [ ")+"]");
    
    $("#boton2").click (function(){
        var impar=[];
        for(var i = 0; i<=n; i++){
            if((arreglo[i]) %2 != 0){
                console.log(impar.push(arreglo[i] + " "));
            }

        }
        
        $("#aqui2").html("Números Impares: [ "+impar.join("] [ ")+"]");

 
    });

    $("#boton3").click (function(){
        var par=[];
        for(var i = 0; i<=n; i++){
            if((arreglo[i]) %2 == 0){
                console.log(par.push(arreglo[i] + " "));
            }

        }
        
        $("#aqui3").html("Números Pares: [ "+par.join("] [ ")+"]");
        
    });

    function primo(numero) {
        if (numero===1 || numero===0) {
        return false;
        }
        else if(numero === 2) {
        return true;
        }
        else{
        for(var i = 2; i < numero; i++) {
        if(numero % i === 0) {
        return false;
        }
        }
        return true;  
        }
    };


    $("#boton4").click (function(){
        var primos=[];
        for(var i = 0; i<=n; i++){
            if(primo(arreglo[i]) === true){
            console.log(primos.push(arreglo[i] + " "));
            }

        }
        
        $("#aqui4").html("Números Primos[ "+primos.join("] [ ")+"]");
        
    });

    function compuesto(numero) {
        if (numero===1 || numero===0 || numero===2 || numero===3) {
        return false;
        }
        else{
        for(var i = 2; i < numero; i++) {
        if(numero % i === 0) {
        return true;
        }
        }
        return false;  
        }
    };

    $("#boton5").click (function(){
        var compuestos=[];
        for(var i = 0; i<=n; i++){
            if(compuesto(arreglo[i]) === true){
            console.log(compuestos.push(arreglo[i] + " "));
            }

        }
        
        $("#aqui5").html("Números Compuestos[ "+compuestos.join("] [ ")+"]");
        
    });


});
