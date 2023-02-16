let h1 = document.querySelector('.h1');

let navigation = document.querySelector('#navigation img')


function showCoords(event) {
    let x = event.screenX;
    let y = event.screenY;
   
if(x > 730 && y < 590){
    h1.style.cssText = 'transform:translate(-4px, 1px)'
    
}

if(x < 570 && y < 590){
    h1.style.cssText = 'transform:translate(4px, 1px)'
    }

if(x < 575 && y > 716){
    h1.style.cssText = 'transform:translate(4px, -4px)'
    
}

if(x > 800 && y > 700){
    h1.style.cssText = 'transform:translate(-6px, -2px)'
    
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



 var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-36251023-1']);
 _gaq.push(['_setDomainName', 'jqueryscript.net']);
 _gaq.push(['_trackPageview']);

 (function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();




setTimeout(() => {
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach( entry => {
            const el = entry.target
            if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                counterUp( el, {
                    duration: 1000,
                    delay: 16,
                } )
                el.classList.add( 'is-visible' )
            }
        } )
    }
    
    const IO = new IntersectionObserver( callback, { threshold: 1 } )
    
    const el = document.querySelector( '.counter' )
    IO.observe( el )
     
}, 1000);

setTimeout(() => {
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach( entry => {
            const el = entry.target
            if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                counterUp( el, {
                    duration: 1000,
                    delay: 16,
                } )
                el.classList.add( 'is-visible' )
            }
        } )
    }
    
    const IO = new IntersectionObserver( callback, { threshold: 1 } )
    
    const el = document.querySelector( '.counter2' )
    IO.observe( el )
     
}, 1000);


setTimeout(() => {
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach( entry => {
            const el = entry.target
            if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                counterUp( el, {
                    duration: 1000,
                    delay: 16,
                } )
                el.classList.add( 'is-visible' )
            }
        } )
    }
    
    const IO = new IntersectionObserver( callback, { threshold: 1 } )
    
    const el = document.querySelector( '.counter3' )
    IO.observe( el )
     
}, 2000);

setTimeout(() => {
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach( entry => {
            const el = entry.target
            if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                counterUp( el, {
                    duration: 1000,
                    delay: 16,
                } )
                el.classList.add( 'is-visible' )
            }
        } )
    }
    
    const IO = new IntersectionObserver( callback, { threshold: 1 } )
    
    const el = document.querySelector( '.counter4' )
    IO.observe( el )
     
}, 2000);



document.body.classList.add('loaded')


  $(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('no-loaded');
      }, 500);
   
  });


  let preloader = document.getElementById('preloader')

  window.addEventListener('load', ()=>{
    preloader.style.cssText = 'display:none !important'
})




