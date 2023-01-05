import './style.css';
import getMovies, { getlikes } from './modules/apiController.js';
import commentPopup from './modules/getLikes.js';

const getLikesForMovie = (likes, id) => {
  for (let i = 0; i < likes.length; i += 1) {
    if (likes[i].item_id === id.toString()) {
      return likes[i].likes;
    }
  }
  return 0;
};

const rederMovies = async (genresType) => {
  let movies = await getMovies();
  movies = movies.filter((item) => item.genres.indexOf(genresType) !== -1);

  const likes = await getlikes();

  const mainSection = document.querySelector('.main');
  mainSection.innerHTML = '';
  for (let i = 0; i < movies.length; i += 1) {
    mainSection.innerHTML += `
        <div class="movie">
        <img src="${movies[i].image.medium}">
        <div class="name-add-like">
            <h2>${movies[i].name}</h2>
            <i class="far fa-heart fa-2x"></i>
        </div>
        <div>
            <p>${getLikesForMovie(likes, movies[i].id)} likes</p>
        </div>
        <div class="comment-btn-div">
            <button>Comments</button>
        </div>
        </div>`;
  }

  const commentButton = document.querySelectorAll('.comment-btn-div button');
  commentPopup(commentButton, movies);
};

rederMovies('Action');

const links = document.querySelectorAll('header li');

const resetLinks = () => {
  for (let i = 0; i < links.length; i += 1) {
    links[i].classList.remove('active');
  }
};

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    rederMovies(links[i].textContent);
    resetLinks();
    links[i].classList.add('active');
  });
}