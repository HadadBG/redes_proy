
$(document).ready(function(){
   
    $('.collapsible').collapsible({
        onOpenEnd : function(arg){
            alert (arg.value);
        }
    });
  });
