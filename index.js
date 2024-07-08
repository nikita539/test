const plants = document.getElementsByClassName('plant')
const plantsPlaces = document.getElementsByClassName('plant_container')
const dropzone = document.getElementById('dropezone')

for (let i = 0; i < plants.length; i++) {
    plants[i].addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', event.target.id)
    })
}

for (let i = 0; i < plantsPlaces.length; i++) {
    plantsPlaces[i].ondrop = function(event) {
        event.preventDefault()

        const elem = document.getElementById(event.dataTransfer.getData('text/plain'))
        event.target.appendChild(elem)
    }

    plantsPlaces[i].ondragover = function(event) {
        event.preventDefault()
    }
}

dropzone.ondrop = function(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
    const elem = document.getElementById(event.dataTransfer.getData('text/plain'))
    event.target.appendChild(elem)
}

dropzone.ondragover = function(event) {
    event.preventDefault()
    console.log('dropzoneondragover')
}