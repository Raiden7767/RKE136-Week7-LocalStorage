const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieDate = document.querySelector('.movieDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieDateToDisplay = document.querySelector('.movieDateTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let movieDateInStorage = localStorage.getItem('movieDate')

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieDateToDisplay.textContent = movieDateInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.467), rgba(0, 0, 0, 0.423)), 
    url('${imageUrlInStorage}')`;
}

console.log(titleInStorage);
console.log(imageUrlInStorage);

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieDateInput = movieDate.value;
    console.log(movieTitleInput);
    console.log(posterUrlInput);
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('movieDate', movieDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieDateToDisplay.textContent = movieDateInput;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.467), rgba(0, 0, 0, 0.423)), 
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieDate.value = '';
});