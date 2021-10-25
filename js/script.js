//Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

//1 - variabile row ok
//2 - creare il ciclo da 1 a 100 ok
//3 - variabile box -> dentro il ciclo ok
//se -> !(i % 3) allora green
//invece se -> !(i % 5) allora yellow
//se (!(i % 3) && !(i % 5)) allora red

const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.className = 'box';
  row.append(box);
  box.innerHTML = i;
  
  if(!(i % 3) && !(i % 5)){
    box.classList.add('red');
    box.innerHTML = 'fizzbuzz';
  } else if(!(i % 3)){
    box.classList.add('green');
    box.innerHTML = 'fizz';
  } else if(!(i % 5)){
    box.classList.add('yellow');
    box.innerHTML = 'buzz';
  }
  

}