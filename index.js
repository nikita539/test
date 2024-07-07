const plants = document.getElementsByClassName('plant')
const dropzone = document.getElementById('dropezone')

for (let i = 0; i < plants.length; i++) {
    plants[i].addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/html', event.target.outerHTML)
    })
}

dropzone.ondrop = function(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
}
dropzone.ondragover = function(event) {
    event.preventDefault()
}