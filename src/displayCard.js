import Like from './like.js'

function countMeal(res) {
  return res.meals.length
}

export default function displayCard(res) {
  const mealsCount = countMeal(res);
  const like = new Like();
  const grid = document.getElementById('meals-grid');
  grid.innerHTML = '';
  for(let i=0; i < 8; i+=1 ){
      const card = document.createElement('div')
      card.setAttribute('class', 'col-sm-3 themed-grid-col bg-light m-2 p-0 border d-flex flex-column justify-content-between')
      card.innerHTML = `
      <img src="${res.meals[i].strMealThumb}" class="w-100" alt="sample image">
      <div class="d-flex justify-content-between p-1">
        <span class="w-100">${res.meals[i].strMeal}</span>
        <button id="${res.meals[i].idMeal}" type="button" class="like-button btn text-primary">Like</button>
      </div><span class="likes p-2 text-secondary fs-6"></span>
      <button type="button" id="comment" class="w-100 btn-primary">Comment</button>`;
      grid.appendChild(card)
  };
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((button) => {
    button.addEventListener('click', like.create);
  });
}
