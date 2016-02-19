$(document).ready(function(){
  var window_width = $(window).width();
  var window_height = $(window).height();
  $('.modal-window').each(function(){
    var modal_height = $(this).outerHeight();
    var modal_width = $(this).outerWidth();
    var top = (window_height -modal_height)/2;
    var left = (window_width - modal_width)/2;
    $(this).css({'top':top, 'left':left});
  });
  $('a.activate-modal').on('click', function(event){
    event.preventDefault()
  });
  $('.activate-modal').on('click', function(){
    showModal(this);
  });
  $('.close-modal').on('click', function(){
    hideModal()
  });
  backgroundCounter = 1
  setInterval(cycleBackgrounds, 5000)
  $(".indiv-project").mouseenter(
    function(event) {
      showDescription(event);
    }
  );
  $(".indiv-project").mouseleave(
    function(event){
      hideDescription(event)
    })
});

var showModal = function(modal){
  $('#dimmer').css({'display':'block', opacity: 0});
  $('#dimmer').fadeTo(500,0.8);
  $('#'+modal.name).fadeIn(500)
}

var hideModal = function(){
  $('#dimmer').fadeOut(500);
  $('.modal-window').fadeOut(500)
}

var cycleBackgrounds = function(){
  if(backgroundCounter===3){
    backgroundCounter = 1
  } else{
    backgroundCounter++
  }
  $('#background').attr('src', "./backgrounds/background"+backgroundCounter+".jpg")
}

var showDescription = function(event){
  console.log(event.target)
  $('[name="'+event.target.id+'"]').show()
}

var hideDescription = function(event){
  console.log("bye falicia")
  console.log(event.target)
  $('[name="'+event.target.id+'"]').hide()

}