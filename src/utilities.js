import API from './api.js';
import Comment from './comment.js';

const api = new API();
const comment = new Comment();

const popUp = (e) => {
  const mealID = e.target.dataset.id;
  const modal = document.getElementById('modal');
  modal.classList.toggle('hide');
  modal.innerHTML = '';
  api
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => {
      const details = `
        <div class="mx-auto p-0 bg-light w-75" id="details">
          <div class="container d-flex p-0">
            <div class="row">
              <div class="d-none d-md-block col-md-3 text-center">
                <img src="${res.meals[0].strMealThumb}" class="w-100 rounded-pill" alt="${res.meals[0].strMeal}" />
                <h6 class="py-2 m-0">${res.meals[0].strMeal}</h6>
                <div class="p-0 m-0">
                  <ul class="ingredients m-0 p-0">
                    <li>${res.meals[0].strIngredient1}</li>
                    <li>${res.meals[0].strIngredient2}</li>
                    <li>${res.meals[0].strIngredient3}</li>
                    <li>${res.meals[0].strIngredient4}</li>
                    <li>${res.meals[0].strIngredient5}</li>
                    <li>${res.meals[0].strIngredient6}</li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-12 col-md-9 d-flex">
                <div class="w-100">
                  <p id="error" class="text-danger fs-6 m-0 p-0"></p>
                  <div class="w-100">
                    <ul id="user-comments" class="p-0 m-0"></ul>
                  </div>
                  <form class="my-2 mx-1 text-center d-flex flex-wrap">
                    <input class="form-control" type="text" name="username" id="username" placeholder="Name" />
                    <input class="form-control my-1" type="text" name="message" id="message" placeholder="Comment"/>
                    <button type="button" class="btn-success" id="add-comment" data-commentID="${res.meals[0].idMeal}">Add comment</button>
                  </form>
                </div>
                <div class="text-end m-0 p-0">
                  <button type="button" class="like-button btn p-0 ms-1" id="close-modal">
                    <i class="bi bi-x-circle text-danger fs-4"></i>
                  </button>
                </div>
              </div>
              </div>
          </div>
        </div>`;
      modal.innerHTML += details;
      const addCommentButton = document.getElementById('add-comment');
      const closeModal = document.getElementById('close-modal');
      addCommentButton.addEventListener('click', comment.create);
      closeModal.addEventListener('click', () => {
        modal.classList.toggle('hide');
      });
    });
  comment.get(Number(mealID));
};

export { popUp as default };
