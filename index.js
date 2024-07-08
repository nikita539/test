const plants = document.getElementsByClassName('plant')
const dropzone = document.getElementById('dropezone')

for (let i = 0; i < plants.length; i++) {
    plants[i].addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', event.target.id)
    })
}

dropzone.ondrop = function(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
    const elem = document.getElementById(event.dataTransfer.getData('text/plain'))
    event.target.appendChild(elem)
}

dropzone.ondragover = function(event) {
    event.preventDefault()
}