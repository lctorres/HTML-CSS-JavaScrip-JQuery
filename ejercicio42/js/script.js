$( function() {
    $( "#movible" ).draggable();
    $( "#pestanas" ).tabs();
    $( "#calificacion" ).selectmenu();
    $( ".widget input[type=submit]").button();
    $( "input" ).on("click", function(){
        alert($("#calificacion").val());
      } );

  } );

  
 
 