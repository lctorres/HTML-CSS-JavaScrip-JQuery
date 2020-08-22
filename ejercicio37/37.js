$(document).ready(function(){

    $('canvas').drawArc({
        draggable: true,
        fillStyle: "green",
        x: 100, y: 100,
        radius: 50,
        mouseover: function(layer) {
            $(this).animateLayer(layer, {
              fillStyle: function(layer){
                var r = 255*Math.random()|0,
                g = 255*Math.random()|0,
                b = 255*Math.random()|0;
                return 'rgb(' + r + ',' + g + ',' + b + ')';
              },
            }, 500);
            
          },
          mouseout: function(layer) {
            $(this).animateLayer(layer, {
              fillStyle: "green"
            }, 500);
        }
      })
    
        .drawPolygon({
        draggable: true,
        fillStyle: "red",
        x: 250, y: 100,
        radius: 100, sides: 3,
        mouseover: function(layer) {
            $(this).animateLayer(layer, {
              fillStyle: function(layer){
                var r = 255*Math.random()|0,
                g = 255*Math.random()|0,
                b = 255*Math.random()|0;
                return 'rgb(' + r + ',' + g + ',' + b + ')';
              },
            }, 500);
            
          },
          mouseout: function(layer) {
            $(this).animateLayer(layer, {
              fillStyle: "red"
            }, 500);
        }
        
      })
    
        .drawPolygon({
        draggable: true,
        fillStyle: "blue",
        x: 400, y: 100,
        radius: 75, sides: 4,
        mouseover: function(layer) {
            $(this).animateLayer(layer, {
              fillStyle: function(layer){
                var r = 255*Math.random()|0,
                g = 255*Math.random()|0,
                b = 255*Math.random()|0;
                return 'rgb(' + r + ',' + g + ',' + b + ')';
              },
            }, 500);
            
          },
          mouseout: function(layer) {
            $(this).animateLayer(layer, {
              fillStyle: "blue"
            }, 500);
        }
      });

});
