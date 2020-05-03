$(function(){
    

    $("a").click(function(event){
        if (this.hash !== "") {
          event.preventDefault();
    
          var gato = this.hash;
    
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 800, function(){
            window.location.hash = gato;
          });
        }
      });
    
      $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })


      $('[data-toggle="popover"]').popover();

      $('.popover-dismiss').popover({
        trigger: 'focus'
      })      

    $('[data-toggle="tooltip"]').tooltip();
    


});