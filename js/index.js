// console.log('asdasd')

import movie from '../data/list-movies.js'

const cardInfo = document.querySelector('.card-info')
const cardImage = document.querySelector('.card-image')
const heroImage = document.querySelector('.hero')

const data = movie.listMovies

const sizeData = data.length
let i = 0

function ad() {
    if (i != sizeData) {
        const position = i++
            // console.log(data[position])
            cardImage.src = data[position]['title-img-movie']
        cardInfo.innerText = data[position]['description-movie']

        if (window.matchMedia("(min-width: 1366px)").matches) {
            heroImage.style.backgroundImage = `url(${data[position]['banner-web-img-movie']})`
        } else {
            heroImage.style.backgroundImage = `url(${data[position]['banner-img-movie']})`
        }
    } else {
        i = 0
    }
}

setInterval(ad, 3000)