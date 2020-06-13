        $(function() {
          $('#btn_magico').bind('click', function() {
            $.getJSON('/background_process_test',{},
                function(data) {
                $("#resultado").text(data.resultado)
            });
            return false;
          });
        });
