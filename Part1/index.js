console.log("working!!:)")

let board = []
let stopPlaying = false
let count = 0

const play = (clickedId) => {
    if(board[clickedId] === undefined && stopPlaying === false && count < 9){
        console.log('inside the function')
        //get the current player
        const playerSpan = document.querySelector('#player')

        //set the clicked square to the player value
        let clickedElement = document.getElementById(clickedId)
        clickedElement.innerText = playerSpan.innerText

        //set the internal board to the player value
        board[clickedId] = playerSpan.innerText

        //set a winner if there is one
        if((board[0] !== undefined && board[0] === board[1] && board[1] === board[2]) ||
            (board[3] !== undefined && board[3] === board[4] && board[4] === board[5]) ||
            (board[6] !== undefined && board[6] === board[7] && board[7] === board[8]) ||

            (board[0] !== undefined && board[0] === board[4] && board[4] === board[8]) ||
            (board[2] !== undefined && board[2] === board[4] && board[4] === board[6]) ||

            (board[0] !== undefined && board[0] === board[3] && board[3] === board[6]) ||
            (board[1] !== undefined && board[1] === board[4] && board[4] === board[7]) ||
            (board[2] !== undefined && board[2] === board[5] && board[5] === board[8])){

            alert(`${playerSpan.innerText} is the winner`)
            stopPlaying = true
        }
        count++
        //change to the other player's turn
        if(playerSpan.innerText === 'X') {playerSpan.innerText = 'O'}
        else {playerSpan.innerText = 'X'}
    } else if (count === 8) {
        alert(`Cat's game, there is no winner`)
    } else if (stopPlaying === true) {
        alert('You must reset the game to continue')
    } else {
        alert('Pick a different square')
    }
}

const resetBoard = () => {
    console.log("reseting the board")
    let tableDatas = document.getElementsByTagName('td')
    console.dir(tableDatas)
    for(let i = 0; i < tableDatas.length; i++){
        console.dir(tableDatas[0][i])
        tableDatas[i].innerText = ''
    }
    board = []
    stopPlaying = false
    count = 0
}