function convertir(){
    //llama a validador.

    if (!validaDatos()){
        return;
    } 
    //bifurcación por tipo de cambio.
    
    let pesos = document.getElementById("txtPeso").value;
    if (document.getElementById("dolar").checked) {
        muestraResultado(convierteADolar(pesos));
    } else {
        if (document.getElementById("euro").checked){
            muestraResultado(convierteAEuro(pesos));
        } else {
            if (document.getElementById("mexico").checked){
                muestraResultado(convierteAMX(pesos));
            } else {
                if (document.getElementById("yen").checked){
                    muestraResultado(convierteAYEN(pesos));
                } else {
                    muestraResultado(convierteAPAR(pesos));
                }
            }
        }
    }
    document.getElementById("mensaje").innerHTML = "<p>Operación Realizada</p>";
    document.getElementById("mensaje").className = "info";
    //var convertido = convierteADolar(valor);

    //mostrar en pantalla el resultado;
}

function convierteADolar(valor){
    console.log(valor);
    return (valor / 778);
}
function convierteAEuro(valor){
    return (valor / 880);
}
function convierteAMX(valor){
    return (valor / 26);
}
function convierteAYEN(valor){
    return (valor / 7);
}
function convierteAPAR(valor){
    return (valor / 5);
}
function muestraResultado(resultado){
    document.getElementById("txtResultado").value = resultado;   
}
function validaDatos(){
    //valida ingreso de pesos.
    let pesos = document.getElementById("txtPeso").value;
    pesos = parseInt(pesos);
    if (isNaN(pesos)) {
        document.getElementById("mensaje").innerHTML = "<p>Ingresaste un texto en vez de pesos</p>";
        document.getElementById("mensaje").className = "error";
        return false;
    } 
    //validamos que se seleccione una divisa.
    if (!document.getElementById("dolar").checked && !document.getElementById("euro").checked && 
        !document.getElementById("mexico").checked && !document.getElementById("yen").checked &&
        !document.getElementById("argentina").checked){

            document.getElementById("mensaje").innerHTML = "<p>Debes seleccionar una divisa</p>";
            document.getElementById("mensaje").className = "error";
            return false;
    }

    if (pesos <=0){
        document.getElementById("mensaje").innerHTML = "<p>Debes ingresar un número positivo</p>";
        document.getElementById("mensaje").className = "error";
        return false;
    }
    //esta todo bien.
    return true;
}