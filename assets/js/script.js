const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});


$('.lang-menu a').click(function(){
    $('.lang-menu a.active').removeClass('active');
    $(this).addClass('active');
});

