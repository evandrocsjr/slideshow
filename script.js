'use strict'

const images = [
    { 'id': '1', 'url': './img/album1.jpg' },
    { 'id': '2', 'url': './img/album2.jpg' },
    { 'id': '3', 'url': './img/album3.jpg' },
    { 'id': '4', 'url': './img/album4.jpg' },
    { 'id': '5', 'url': './img/album5.jpg' }
]

const container = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML +=`
        <div class ="items">
            <img src="${image.url}">
        </div>
        `
    })
}

loadImages(images, container)