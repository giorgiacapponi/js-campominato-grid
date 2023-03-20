// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


const btnPlay = document.querySelector('.btn-play');
const container= document.querySelector('.container')
const select= document.querySelector('#level')

let num;
let singleCell;

// cosa succede al click su btn
btnPlay.addEventListener('click',totalCell)

// al click devo generare la griglia da 10
// mi serve un ciclo for da 1 a 100 ma dopo anche da 1 a 81 e uno da 1 49 quindi posso fare una funzione
// creazione grid nel dom
function totalCell(){
    const nTotCell =numberCell(num);
    container.classList.remove('hidden')
    
   
    for(i=1;i<=num;i++){
        
        singleCell = document.createElement('div');
        singleCell.classList.add('cell')
        if (num ==100){
            singleCell.style.width=(`calc(100%/10)`)
            singleCell.style.height=(`calc(100%/10)`)
        }else if(num ==81){
            singleCell.style.width= (`calc(100%/9)`)
            singleCell.style.height=(`calc(100%/9`)
        }else if (num==49){
            singleCell.style.width=(`calc(100%/7)`)
            singleCell.style.height= (`calc(100%/7)`)
        }
        singleCell.innerHTML = `${i}`;
        singleCell.addEventListener('click',colorCell)
        container.append(singleCell);
        
    }
    return singleCell;

} 


// cosa succede al click su una cella
function colorCell(){
    this.classList.add('green');
    console.log(parseInt(this.innerHTML) );
}


// ////////////////////////////////////////////////////////////////////////////////////////////////
// in base al livello cambio n celle
function numberCell(){
    if (select.value == 100){
        num=100
    }else if( select.value ==81){
        num=81;
    }else if (select.value == 49){
        num= 49;
    }
    return num;
}


