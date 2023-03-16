

// trigger
$('.title-section').click(function () {
  let target = `#${$(this).attr('data-target')}` // getting target 
  $(target).toggleClass('active') // toggle active class for target
  if ($(target).hasClass('active')) { // checking if active
    $('.target').slideUp().removeClass('active') // close all other 
    $(target).slideDown().addClass('active') // open the target
  }
  else {
    $('.target').slideUp() // close all 
  }
})
// navigation toggle
$('.toggler').click((e) => {
  $('nav').css('width', '25vw').addClass('ps-5') // open nav
  if ($(window).outerWidth() < 600) { // responsive
    $('nav').css('width', '50vw').addClass('ps-5')
  }
})
$('.close-nav').click((e) => { // close nav
  $('nav').css('width', '0',).removeClass('ps-5')
})


// limit the characters
$('textarea').keydown(function () {
  let length = $('textarea').val().length // get characters
  console.log(length);
  $('.characters-number').html(100 - length) // set the characters value
  if (length > 100) { // validate the characters length
    $('.characters-number').addClass('text-danger')
    $('.submit').addClass('disabled')
    $('.remaining').html('your limited characters is over')
  } else {
    $('.submit').removeClass('disabled')
    $('.characters-number').removeClass('text-danger')
    $('.remaining').html('Character Remaining')

  }
})

// countdown timer
function counter() {

  let currentDate = new Date().getTime();
  let eventDate = new Date('Dec 08 2023').getTime()
  let gap = eventDate - currentDate;
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  $('.days').html(Math.floor(gap / day))
  $('.hours').html(Math.floor(gap % day / hour))
  $('.minutes').html(Math.floor(gap % hour / minute))
  $('.seconds').html(Math.floor(gap % minute / second))
  // clear the interval in the end of the world!
  if (gap < 0) {
    clearInterval(countdown)
    $('.countdown').html('Welcome to our Event!')
  }
}
let countdown = setInterval(counter, 1000)