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

//funzione di inizializzazione di tutto
init(elementsPerRow);

function init(numElements) {
  const totalSquares = Math.pow(numElements, 2);
  console.log(totalSquares)
  for(let i = 0; i < totalSquares; i++) {
    createSquare(i)
  }
}

function createSquare(idSquare) {
  //crea il quadratino 
  //lo valorizza
  //lo appende al container
  const square = document.createElement('div');
  square.className = 'square';
  square.innerHTML = idSquare + 1;
  container.append(square);
}
