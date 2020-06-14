$(function() {
    $('#btn_sv_dns').bind('click', function() {
       
        var mensaje=  $("form").serializeArray()[0] ;
        alert("Nuevo servidor dns: "+mensaje["value"])
      $.getJSON('/set_dns',mensaje,
          function(data) {
          $("#resultado_dns").text(data.resultado)
      });
      return false;
    });
  });
 