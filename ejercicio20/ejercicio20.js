function mostrarFecha(){
    var fechaActual = new Date();
    var diaDeLaSemana = new Array(7);
    diaDeLaSemana[0] = "domingo";
    diaDeLaSemana[1] = "lunes";
    diaDeLaSemana[2] = "martes";
    diaDeLaSemana[3] = "miércoles";
    diaDeLaSemana[4] = "jueves";
    diaDeLaSemana[5] = "viernes";
    diaDeLaSemana[6] = "sábado";
    document.getElementById("hoy").innerHTML = "<p> Hoy es " + diaDeLaSemana[fechaActual.getDay()] 
                + " " + fechaActual.getDate() + " de " + (fechaActual.getMonth() + 1 ) + " de " + fechaActual.getFullYear() + 
                " y son las " + fechaActual.getHours() + " horas, " + fechaActual.getMinutes() + " minutos con " + 
                fechaActual.getSeconds() + " segundos</p>";
}

    function seVieneElAnioNuevo(){
        var diferenciasFechas = new Date("Jan 1, 2021 00:00:00") - new Date (); //diferencia de fechas en milisegundos
        var conversionDias = diferenciasFechas/(1000*60*60*24); // diferencia de fechas, solo considerando los días
        var conversionHoras = (diferenciasFechas/(1000*60*60))%24; //diferencia de fechas, solo considerando las horas
        var conversionMinutos = (diferenciasFechas/(1000*60))%60; //diferencia de fechas, solo considerando los minutos
        var conversionSegundos = ((diferenciasFechas/1000)%60); //diferencia de fechas, solo considerando los segundos
        var diasRestantes = Math.floor(conversionDias);
        var horasRestantes = Math.floor(conversionHoras);
        var minutosRestantes = Math.floor(conversionMinutos);
        var segundosRestantes = Math.floor(conversionSegundos);
        document.getElementById("tiemporestante").innerHTML = "Quedan " + diasRestantes + " días, " 
        + " " + horasRestantes + " horas, " + " " + minutosRestantes + ", minutos y " 
        + segundosRestantes + " segundos para fin de año";
    }

    setInterval(mostrarFecha, 1000);
    setInterval(seVieneElAnioNuevo, 1000);
