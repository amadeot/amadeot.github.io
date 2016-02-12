console.log('hire me pls');

$(document).ready(function(){
  console.log('ready')
  var window_width = $(window).width();
  var window_height = $(window).height();
  $('.modal-window').each(function(){
    var modal_height = $(this).outerHeight();
    var modal_width = $(this).outerWidth();
    var top = (window_height -modal_height)/2;
    var left = (window_width - modal_width)/2;
    $(this).css({'top':top, 'left':left});
  });
  $('a').on('click', function(event){
    event.preventDefault()
  });
  $('.activate-modal').on('click', function(){
    console.log('hi')
    // console.log(this.name)
    showModal(this);
  });
  $('.close-modal').on('click', function(){
    hideModal()
  });

});

var showModal = function(modal){
  console.log(modal.name)
  $('#dimmer').css({'display':'block', opacity: 0});
  $('#dimmer').fadeTo(500,0.8);
  $('#'+modal.name).fadeIn(500)

}

var hideModal = function(){
  $('#dimmer').fadeOut(500);
  $('.modal-window').fadeOut(500)
}