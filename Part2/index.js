console.log('The house always wins!')
let firstClick = true

const setCard = () => {
    const idInput = document.getElementById('idInput').value
    const colorInput = document.getElementById('colorInput').value 

    if(firstClick === true){
        document.getElementById('diamonds').style.color = "red"
        document.getElementById('hearts').style.color = "red"
        document.getElementById('clubs').style.color = "black"
        document.getElementById('spades').style.color = "black"
        firstClick = false
    }

    document.getElementById(idInput).style.color = colorInput

}

const reset = () => {
    document.getElementById('diamonds').style.color = "red"
    document.getElementById('hearts').style.color = "red"
    document.getElementById('clubs').style.color = "black"
    document.getElementById('spades').style.color = "black"
}