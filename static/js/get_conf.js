        $(function() {
          $('#btn_sv_conf').bind('click', function() {
            var html_progress =  
            ' <div class="preloader-wrapper active "> \
            <div class="spinner-layer spinner-red-only"> \
              <div class="circle-clipper left"> \
                <div class="circle"></div> \
              </div><div class="gap-patch"> \
                <div class="circle"></div> \
              </div><div class="circle-clipper right"> \
                <div class="circle"></div> \
              </div> \
            </div> \
          </div> ';
    
          
            $("#resultado").html(html_progress);
            $.getJSON('/background_process_test',{},
                function(data) {
                $("#resultado").text(data.resultado)
            });
            return false;
          });
        });
