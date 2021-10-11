const map = [
    "111111111111111111111",
    "100010000010000010101",
    "101010111011111010101",
    "101010001000001010001",
    "101111111010111010101",
    "100000000010000010101",
    "101110111110111110101",
    "101000100010100000101",
    "10111110101010111010F",
    "S00000101010101010111",
    "111110101010101010101",
    "100000101010001010101",
    "101111111011111010101",
    "100000001000000010001",
    "111111111111111111111",
];

/* ----------------------------------------------- */
const container = document.querySelector('section')

function criaBLoco(){
    const divs = document.createElement('div')
    divs.className = 'wall'

    container.appendChild(divs)
}

function criaCaminho(){
    const divs = document.createElement('div')
    divs.className = 'space'

    container.appendChild(divs)
}

function criaChegada(){
    const divs = document.createElement('div')
    divs.className = 'F'

    container.appendChild(divs)
}

function criaLargada(){
    const divs = document.createElement('div')
    divs.className = 'S'

    container.appendChild(divs)
}

/* ------------------------------------------------- */

function labirinto(){

    
    let array = map.join()
    
    for(let i = 0; i < array.length; i++){

        if(array[i] == '0'){
            criaCaminho()
        }

        if(array[i] == '1'){
            criaBLoco()
        }

        if(array[i] == 'F'){
            criaChegada()
        }

        if(array[i] == 'S'){
            criaLargada()
        }

    }

    return array
}
labirinto()

/* ----------------------------------------------- */
const jogador = [9,0]



const start   = document.querySelector('.S')
const player  = document.createElement('div')
player.id     = "player"

const img  = document.createElement('img')
img.src    = "./assets/img/pacman.png"

player.appendChild(img)
start.appendChild(player)

let boxTop = 370;
let boxLeft = 0;


//esse listener só pode acontecer se a div tiver ID = 'S', 'F', 'space'
document.addEventListener('keydown', (event) => {
    
    const keyEvent = event.key;
    //const space = document.getElementsByClassName('.space')
    
    for (let i = 0; i < map.length; i++){

        for(j = 0; j < map[i].length; j++){
    
            if(keyEvent === 'ArrowDown'){
                if(map[jogador[0]+1][jogador[1]] !== 1){
                    jogador[0] +=1
                    boxTop += 10
                }

            }
        

            if(keyEvent === 'ArrowUp'){
                if(map[jogador[0]+1][jogador[1]] !== 1){
                    jogador[0] +=1
                    boxTop -= 10
                }
            
            }
        
            if(keyEvent === 'ArrowRight'){
                if(map[jogador[0]+1][jogador[1]] !== 1){
                    jogador[0] +=1
                    boxLeft += 10
                }
            }

            if(keyEvent === 'ArrowLeft'){
                if(map[jogador[0]+1][jogador[1]] !== 1){
                    jogador[0] +=1
                    boxLeft -= 10
                }
            }
        }
    }

  document.getElementById("player").style.top = boxTop + "px";
  document.getElementById("player").style.left = boxLeft + "px";
});

/* if(keyEvent === 'ArrowDown'){

          console.log(player.nextSibling)

      }
      if(keyEvent === 'ArrowUp'){
          
          console.log(player.nextSibling)
      } 
      
      if(keyEvent === 'ArrowRight'){
          if((arr[i] != 'W') && (arr[i] != ',') && (arr[i] != 'F') && (arr[i] != 'S')){ //comparar com a classe
              //console.log(start.nextSibling)
              start.nextSibling.appendChild(player)
          }
      
      } 
      if(keyEvent === 'ArrowLeft'){
        if((arr[i] != 'W') && (arr[i] != ',') && (arr[i] != 'F') && (arr[i] != 'S')){ //comparar com a classe
            console.log(player.nextSibling)
            //start.nextSibling.appendChild(player)
        }

      }
    } */

//O QUE FALTA:
/* quando a div 'player' colidir com a div 'W',
NÃO executar o listener 'keydown' */

/* quando a div player colidir com a div 'F', exibir
uma caixa de mensagem (não pode ser alert) */


//testes movimentação/bloqueio

/* let wallRect = document.querySelector('.wall').getBoundingClientRect()
console.log(wallRect)
//retorna um object:
DOMRect {
bottom: 129.875
height: 30
left: 28
right: 58
top: 99.875
width: 30
x: 28
y: 99.875}
let playerRect = document.querySelector('#player').getBoundingClientRect()
console.log(playerRect)
//retorna um object:
DOMRect {
bottom: 579.875
height: 30
left: 8
right: 31
top: 549.875
width: 23
x: 8
y: 549.875}

if (playerRect.x < wallRect.x + wallRect.width &&
    playerRect.x + playerRect.width > wallRect.x &&
    playerRect.y < wallRect.y + wallRect.height &&
    playerRect.y + playerRect.height > wallRect.y) {
    // collision detected!
    console.log('collision detected')
}

document.addEventListener("clique", function(){
    let wallRect = document.querySelector('.wall').getBoundingClientRect()
console.log(wallRect)
}) */