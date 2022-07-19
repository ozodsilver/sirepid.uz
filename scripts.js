let h1 = document.querySelector('.h1');
let knopka = document.querySelector('.knopka')
let navigation = document.querySelector('#navigation img')


function showCoords(event) {
    let x = event.screenX;
    let y = event.screenY;
   
if(x > 730 && y < 590){
    h1.style.cssText = 'transform:translate(-10px, 5px)'
    knopka.style.cssText = 'transform:translate(-8px, 2px)'
}

if(x < 570 && y < 590){
    h1.style.cssText = 'transform:translate(20px, 5px)'
    knopka.style.cssText = 'transform:translate(10px, 2px)'
}

if(x < 575 && y > 716){
    h1.style.cssText = 'transform:translate(30px, -10px)'
    knopka.style.cssText = 'transform:translate(10px, -4px)'
}

if(x > 800 && y > 700){
    h1.style.cssText = 'transform:translate(-10px, -5px)'
    knopka.style.cssText = 'transform:translate(7px, -10px)'
}

  }

  document.addEventListener('scroll', ()=>{
    let offsetY = window.pageYOffset;
for(let i=0; i<=20; i++){
    if(offsetY>0){
       
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





  