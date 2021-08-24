$('.black').animate({
  height: '338px'
},60000, 'linear').animate({
  height: '0px'
},60000, 'linear')

setTimeout(function() {
  $('.number').text('1')
}, 60000); 
setTimeout(function() {
  $('.number').text('0')
}, 120000); 