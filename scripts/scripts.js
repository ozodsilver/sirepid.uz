let h1 = document.querySelector('.h1');
let knopka = document.querySelector('.knopka')
let navigation = document.querySelector('#navigation img')


function showCoords(event) {
    let x = event.screenX;
    let y = event.screenY;
   
if(x > 730 && y < 590){
    h1.style.cssText = 'transform:translate(-7px, 3px)'
    knopka.style.cssText = 'transform:translate(-5px, 2px)'
}

if(x < 570 && y < 590){
    h1.style.cssText = 'transform:translate(10px, 4px)'
    knopka.style.cssText = 'transform:translate(7px, 2px)'
}

if(x < 575 && y > 716){
    h1.style.cssText = 'transform:translate(10px, -10px)'
    knopka.style.cssText = 'transform:translate(10px, -4px)'
}

if(x > 800 && y > 700){
    h1.style.cssText = 'transform:translate(-6px, -2px)'
    knopka.style.cssText = 'transform:translate(7px, -7px)'
}

  }

  document.addEventListener('scroll', ()=>{
    let offsetY = window.pageYOffset;
for(let i=0; i<=3; i++){
    if(offsetY<40){
       
        h1.style.cssText = `margin-top:${pageYOffset}px`
    }
   

    if(offsetY==0){
setTimeout(() => {
    navigation.style.cssText = 'transform:scale(0.99);  ' 
}, 10);

setTimeout(() => {
    navigation.style.cssText = 'transform:scale(1.05);  ' 
}, 300);

setTimeout(() => {
    navigation.style.cssText = 'transform:scale(1);' 
}, 800);
    }
}
  })



  window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(10,1);
    $("#num2").countMe(5,1);
    $("#num3").countMe(5, 1);
    $("#num4").countMe(5,1); 
 }


 var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-36251023-1']);
 _gaq.push(['_setDomainName', 'jqueryscript.net']);
 _gaq.push(['_trackPageview']);

 (function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();


 var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    center:true,
    touchDrag:true,
    margin:-50,
    autoplay:true,
       info:true,
       rewind:true,
       nav:true,
      lazyLoad:true,
      fluidSpeed:true,
    dots:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

