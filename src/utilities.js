
import API from "./api.js";
import Comment from "./comment.js";

const api = new API()
const comment = new Comment();

export function popUp(e) {
  const mealID = e.target.dataset.id;
  let modal = document.getElementById('modal');
  modal.classList.toggle('hide')
  modal.innerHTML = '';
  api.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res => {
      const details = `
        <div class="w-25 mx-auto p-2 bg-primary text-white">
          <button type="button" class="btn btn-danger my-2" id="close-modal">close</button>
          <img src="${res.meals[0].strMealThumb}" class="w-100" alt="${res.meals[0].strMeal}" />
          <p class="py-2 m-0 text-center fs-6">${res.meals[0].strMeal}</p>
          <div class="container p-0 m-0">
            <div class="row text-center p-0 m-0">
              <div class="col-sm-12 themed-grid-col text-center p-0 m-0"><p class="p-0 m-0">Ingredients</p></div>
                <div class="col-sm-6 themed-grid-col my-0">${res.meals[0].strIngredient1}</div>
                <div class="col-sm-6 themed-grid-col my-0">${res.meals[0].strIngredient2}</div>
                <div class="col-sm-6 themed-grid-col">${res.meals[0].strIngredient3}</div>
                <div class="col-sm-6 themed-grid-col">${res.meals[0].strIngredient4}</div>
              </div>
            </div>
          <div class="">
            <p class="comment-count text-center my-1 p-0"></p>
            <ul id="user-comments" class="p-0 m-0">
            </ul>
          </div>
          <form class="w-100 mx-auto my-2">
              <input class="form-control" type="text" name="username" id="username" placeholder="Name" />
              <input class="form-control my-2" type="text" name="message" id="message" placeholder="Comment"/>
              <button type="button" class="btn btn-success form-control" id="add-comment" data-commentID="${res.meals[0].idMeal}">Add comment</button>
          </form>
        </div>`;
      modal.innerHTML += details
      const addCommentButton = document.getElementById('add-comment')
      const closeModal = document.getElementById('close-modal');
      addCommentButton.addEventListener('click', comment.create);
      closeModal.addEventListener('click', () => { modal.classList.toggle('hide')});
    }))
  comment.get(Number(mealID));
  
}
