// APPROFONDIMENTO FUNZIONI E ALGORITMI

// BINARY SEARCH ALGORITHM
/*
- serve a trovare uno specifico elemento all'interno di array
- funziona solo in array ordinate (numeri, ordine crescente)
- molto più efficiente di un for loop che applica una ricerca lineare - cerca secondo la logica "dividing and conquering"
*/

function binarySearch(array, target) {
  // definiamo indice iniziale e indice finale
  var startIndex = 0;
  var endIndex = array.length - 1;

  // fino a che l'indice iniziale è minore o uguale all'indice finale
  while (startIndex <= endIndex) {
    
    // definiamo l'indice centrale, quello che taglia in due l'array (questo cambierà nel confronto)
    var middleIndex = Math.floor((startIndex + endIndex) / 2); // vengono sommati end e start perché vengo riassegnati man mano

    // confrontiamo l'indice centrale con l'elemento target per vedere se c'è match
    if (target === array[middleIndex]) {
      return console.log("Target trovato alla posizione " + middleIndex);
    }

    // cerchiamo nella parte destra dell'array
    if (target > array[middleIndex]) {
      console.log("cerchiamo nella parte destra dell'array");
      // riassegniamo lo startIndex restringendo l'intervallo - in pratica dimezzandosi perché risulta vero che il target si trova a destra del middleIndex
      startIndex = middleIndex + 1;
    }

    // cerchiamo nella parte sinistra dell'array
    if (target < array[middleIndex]) {
      console.log("cerchiamo nella parte sinistra dell'array");
      // riassegniamo l'endIndex restringendo l'intervallo - in pratica dimezzandosi perché risulta vero che il target si trova a sinistra del middleIndex
      endIndex = middleIndex - 1;
    }

    // non viene trovato in questa iterazione, altra iterazione
    else {
      console.log("non è stato trovato in questa iterazione, altro giro");
    }
  }

  // se il target non viene trovato
  console.log("Target non trovato all'interno dell'array");
}

var example = [2, 5, 6, 8, 9, 12, 14, 15, 16, 23, 28, 32, 35, 38, 39, 42, 45, 47, 48, 50, 61, 64, 69, 75];

console.log(binarySearch(example, 16));

console.log('....................................................');

// BUBBLE SORT ALGORITHM
/*
- 
*/




