import movie from '../data/list-movies.js'

const cardInfo = document.querySelector('.card-info')
const cardImage = document.querySelector('.card-image')
const cardTitle = document.querySelector('.card-title')
const heroImage = document.querySelector('.hero')
const movieWebsite = document.querySelector('.movie-website')


const data = movie.listMovies

const sizeData = data.length
let i = 0


export function removeLoading() {
    heroImage.classList.remove('loading')
}

export function visibleButton() {
    movieWebsite.hidden = false
}


export default function loadMovies() {
    if (i != sizeData) {
        const position = i++;

        removeLoading()
        visibleButton()
        cardTitle.innerText = '¡Disponible ahora!'
        cardImage.src = data[position]['logo-img-movie']
        cardImage.alt = data[position]['title']
        cardInfo.innerText = data[position]['description-movie']
        movieWebsite.href = data[position]['website-movie']

        if (window.matchMedia("(min-width: 1366px)").matches) {
            heroImage.style.backgroundImage = `url(${data[position]['banner-web-img-movie']})`
        } else {
            heroImage.style.backgroundImage = `url(${data[position]['banner-img-movie']})`
        }
    } else {
        i = 0
    }
}