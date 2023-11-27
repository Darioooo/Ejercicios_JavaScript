let mySounds = {
   tom1 : new Audio('./sounds/tom-1.mp3'),
   tom2 : new Audio('./sounds/tom-2.mp3'),
   tom3 : new Audio('./sounds/tom-3.mp3'),
   tom4 : new Audio('./sounds/tom-4.mp3'),
   snare : new Audio('./sounds/snare.mp3'),
   kick : new Audio('./sounds/kick.mp3'),
   crash : new Audio('./sounds/crash.mp3'),
}
/* const datos = [
  {key: "w", sound: }
] */
let soundRelation = {
    w: mySounds.tom1,
    a: mySounds.tom2,
    s: mySounds.tom3,
    d: mySounds.tom4,
    j: mySounds.snare,
    k: mySounds.crash,
    l: mySounds.kick,
}

let myButtons = document.querySelectorAll('.drum');
let sonidoEnUso;

myButtons.forEach(button => {
  if (button) {
    button.addEventListener('click', () => {
      console.log('click');
      button.style.color = 'white';
      for (letter in soundRelation){
        console.log('letter',letter);
          if (letter == button.classList[0]){
            soundRelation[letter].play();
          }
      }
      setTimeout(() => {
        button.style.color = '#DA0463';
      }, 50);
    });
    
  }
})


document.addEventListener('keydown', (event) => {
  console.log(event);
  for( letter in soundRelation){
    if (event.key == letter ) {
      let button = document.querySelector(`.${letter}`);
      button.style.color = 'white';
      soundRelation[letter].play();
      setTimeout(() => {
        button.style.color = '#DA0463';
      }, 50);
    }

  }
  
})




