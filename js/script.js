// Generare una griglia 8x8 di 64 quadratini.
// Ogni quadratino ha un numero random unico da 1 a 64.
// Cliccando sul quadratino vedo il numero
// quelli pari sono verti quelli dispari sono rossi, 
//il numero non si ripete mai anche se sono tutti mischiati, 
//la posizione dei quadratini è sempre random ad ogni reset.

// 1 creare la struttura HTML / CSS
// 2 creare la griglia dinamicamente
// 3 numerare i quadratini
// 4 gestire il click del quadratino

//prendiamo il container per poter creare all'interno i quadrati dinamicamente
const container = document.querySelector('.container');
const elementsPerRow = 8;
//in questo array salvo tutti i miei id estratti per il controllo di univocità
const randomIds = [];

//al click del bottone start faccio comparire la mia griglia 
document.getElementById('start').addEventListener('click', function(){
  container.innerHTML = '';
  init(elementsPerRow);
})

/**
 * 
 * @param {number} numElements 
 */
function init(numElements) {
  const totalSquares = Math.pow(numElements, 2);
  console.log(totalSquares)
  for(let i = 0; i < totalSquares; i++) {
    createSquare(totalSquares);
  }
}


function createSquare(maxSquares) {
  //crea il quadratino 
  //lo valorizza
  //lo appende al container
  const square = document.createElement('div');
  square.className = 'square';
  //square.innerHTML = idSquare + 1;
  //creo una proprieta custom di square dove gli salvo il numero del quadratino, è come salvare informazioni all'interno di un'oggetto
  const randomId = getUniqueRandomNumber(maxSquares);
  square.idElement = randomId;
  //square.innerHTML = randomId;
  square.style.width = generateCalcCss();
  square.style.height = generateCalcCss();
  square.addEventListener('click', clickSquare)
  container.append(square);
}

//funzione per generare calcolo css
function generateCalcCss() {
  return `calc(100% / ${elementsPerRow})`
}

function clickSquare() {
  //la parola chiave this ci restituisce l'evento cliccato, il this deve essere all'interno di un listener di eventi 
  console.log(this.idElement);
  this.innerHTML = this.idElement;
  //con l'operatore ternario filtro la classe da aggiungere
  this.classList.add((this.idElement % 2) ? 'odd' : 'even');
}

//funzione per ottenere numeri unici senza doppioni, devo creare la mia logica per l'unicita

function getUniqueRandomNumber(numElements) {
  let randomId;

    do {
      randomId = getRandomNumber(1, numElements);
    }while(randomIds.includes(randomId));

    randomIds.push(randomId); 
    return randomId;
}


//funzione per ottenere numeri random
/**
 * Returns a random number between minimum and maximum
 * @param {number} min 
 * @param {number} max 
 * @returns Random number
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}