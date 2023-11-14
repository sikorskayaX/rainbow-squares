const board = document.querySelector('#board')
const colors = ['#f7d1e8', '#f8b5dd', '#f795d0', '#f77fc7', '#fc67c0', '#fd4db7',
 '#ff30ac', '#ff0e9e', '#ff0099']
const SQUARES_NUMBER = 1600


for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square) 
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square) 
    })

    board.append(square)
}

function setColor(element){
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 1px ${color}, 0 0 8px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#353535'
    element.style.boxShadow = `0 0 1px #353535`
}

function getColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}