const plants = document.getElementsByClassName('plant')

for (let i = 0; i <= plants.length; i++) {
    dragElement(plants[i])
}


function dragElement(element) {
    element.onclick = function(event) {
        console.log('Hello World !')
    }
}