export default function displayCard(meals) {
  const grid = document.getElementById('meals-grid');
  grid.innerHTML = '';
  meals.forEach((meal) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'col-sm-4 themed-grid-col');
    card.innerHTML = `
      <img src="${meal}" alt="sample image">
      <div class="d-flex justify-content-between">
        <h3 class="w-100">${meal}</h3>
        <button type="button" id="like">Like</button>
      </div>
      <p class="counter">Counter</p>
      <button type="button" id="comment">Comment</button>`;
    grid.appendChild(card);
  });
}
