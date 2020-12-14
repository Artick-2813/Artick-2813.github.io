jQuery('document').ready(function(){
    

jQuery('.burger').click(function(){
   jQuery('.menu-2').toggleClass('show-menu');
   jQuery('.menu-2').toggleClass('hide-menu');
    
   jQuery('#welcome').toggleClass('mt');
   jQuery('#button-1').toggleClass('mt-btn-1');
   jQuery('#header').toggleClass('height-change');
   jQuery('#services').toggleClass('mt-services'); 
   jQuery('#meet').toggleClass('mt-meet');
   jQuery('#skills').toggleClass('mt-skills');
   jQuery('#portfolio').toggleClass('mt-portfolio');
   jQuery('#reg').toggleClass('mt-reg');
   jQuery('#footer').toggleClass('mt-footer');
});

$(window).resize(function () {
    if($(window).width() > 540){
    jQuery('#welcome').removeClass('mt');
    jQuery('#button-1').removeClass('mt-btn-1');
    jQuery('#header').removeClass('height-change');
    jQuery('#services').removeClass('mt-services');
    jQuery('#meet').removeClass('mt-meet');
    jQuery('#skills').removeClass('mt-skills');
    jQuery('#portfolio').removeClass('mt-portfolio');
    jQuery('#reg').removeClass('mt-reg');
    jQuery('#footer').removeClass('mt-footer');

    jQuery('.menu-2').removeClass('show-menu');
    jQuery('.menu-2').addClass('hide-menu');
    }   
});

jQuery('#link1').click(function(){
  jQuery(this).removeClass('blue-color');
  jQuery(this).addClass('color-red');
});
jQuery('#link2').click(function(){
  jQuery(this).removeClass('blue-color');
  jQuery(this).addClass('color-red');
});
jQuery('#link3').click(function(){
  jQuery(this).removeClass('blue-color');
  jQuery(this).addClass('color-red');
});
jQuery('#link4').click(function(){
  jQuery(this).removeClass('blue-color');
  jQuery(this).addClass('color-red');
});
});







/*let menu_burger=document.querySelector('.burger');

let link1=document.getElementById('link1');
let link2=document.getElementById('link2');
let link3=document.getElementById('link3');
let link4=document.getElementById('link4');

menu_burger.addEventListener('click',function(){
   elem1=document.getElementById('menu-2');
   
   elem3=document.getElementById('welcome');
   elem4=document.getElementById('button-1');
   elem5=document.getElementById('header');
   services=document.getElementById('services');
   meet=document.getElementById('meet');
   skills=document.getElementById('skills');
   portfolio=document.getElementById('portfolio');
   reg=document.getElementById('reg')
   footer=document.getElementById('footer');
   
   
   elem1.classList.toggle('show-menu');
   elem1.classList.toggle('hide-menu');
   
   elem3.classList.toggle('mt');
   elem4.classList.toggle('mt-btn-1');
   elem5.classList.toggle('height-change');
   services.classList.toggle('mt-services');
   meet.classList.toggle('mt-meet');
   skills.classList.toggle('mt-skills');
   portfolio.classList.toggle('mt-portfolio');
   reg.classList.toggle('mt-reg');
   footer.classList.toggle('mt-footer');
})

link1.addEventListener('click',function(){
    link1.classList.remove('blue-color');
    link1.classList.add('color-red');
})
link2.addEventListener('click',function(){
    link2.classList.remove('blue-color');
    link2.classList.add('color-red');
})
link3.addEventListener('click',function(){
    link3.classList.remove('blue-color');
    link3.classList.add('color-red');
})
link4.addEventListener('click',function(){
    link4.classList.remove('blue-color');
    link4.classList.add('color-red');
})*/
