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

function criaPlayer() {
    const start   = document.querySelector('.S')
    const player  = document.createElement('div')
    player.id     = "player"

    const img  = document.createElement('img')
    img.src    = "./assets/img/pacman.png"

    player.appendChild(img)
    start.appendChild(player)
}
criaPlayer()

const jogador = [9,0] //o mesmo que x,y

let boxTop = 0
let boxLeft = 0

document.addEventListener('keydown', (event) => {
    
    const keyEvent = event.key;
    

    if(keyEvent === 'ArrowDown'){
        if(map[jogador[0]+1][jogador[1]] === '0'){
            jogador[0] +=1
            boxTop += 30
        }
    }

    if(keyEvent === 'ArrowUp'){
        if(map[jogador[0]-1][jogador[1]] === '0'){
            jogador[0] -=1
            boxTop -= 30
        }
    
    }

    if(keyEvent === 'ArrowRight'){
        if(map[jogador[0]][jogador[1]+1] === '0'){
            jogador[1] +=1
            boxLeft += 30
        }

        if(map[jogador[0]][jogador[1]+1] === 'F'){
            jogador[1] +=1
            boxLeft += 30
            alert('voce ganhou!')
        }
    }

    if(keyEvent === 'ArrowLeft'){
        if(map[jogador[0]][jogador[1]-1] === '0'){
            jogador[1] -=1
            boxLeft -= 30
        }
    }
        
    
  document.getElementById("player").style.top  = boxTop + "px";
  document.getElementById("player").style.left = boxLeft + "px";
});