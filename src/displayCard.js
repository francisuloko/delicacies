import API from './api.js';
import Like from './like.js';
import popUp from './utilities.js';

const api = new API();
const like = new Like();

const displayCard = (res) => {
  const grid = document.getElementById('meals-grid');
  grid.innerHTML = '';
  for (let i = 0; i < 12; i += 1) {
    const card = document.createElement('div');
    card.setAttribute(
      'class',
      'card col-sm-3 shadow themed-grid-col m-2 p-0 d-flex flex-column justify-content-between',
    );
    card.innerHTML = `
      <img src="${res.meals[i].strMealThumb}" class="w-100" alt="sample image">
      <div class="my-1">
        <span class="fs-6 w-100">${res.meals[i].strMeal}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div class="m-0 p-0">
          <span id="meal-${res.meals[i].idMeal}-likes" class="d-flex align-items-center likes text-secondary">0</span>
          <span id="meal-${res.meals[i].idMeal}-comment" class="d-flex align-items-center comments text-secondary">0</span>
        </div>
        <div class="d-flex align-items-center">
          <button type="button" class="like-button btn text-primary">
            <i id="${res.meals[i].idMeal}" class="bi bi-heart-fill fs-4"></i>
          </button>
          <button type="button" id="comment" class="comment-button">
            <i data-id="${res.meals[i].idMeal}" data-modal-target="#modal" class="bi bi-chat-left-text-fill fs-4"></i>
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
  }

  const likeButtons = document.querySelectorAll('.like-button');
  const commentButtons = document.querySelectorAll('.comment-button');

  for (let i = 0; i < commentButtons.length; i += 1) {
    commentButtons[i].addEventListener('click', popUp);
    likeButtons[i].addEventListener('click', like.create);
  }

  for (let i = 0; i < 13; i += 1) {
    const comment = document.getElementById(`meal-${res.meals[i].idMeal}-comment`);
    api.get(api.urls.newComment + res.meals[i].idMeal).then((comments) => {
      comment.innerHTML = comments.length ? comments.length : 0;
    });
  }
};

export default displayCard;
