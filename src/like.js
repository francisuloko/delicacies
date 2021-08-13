import API from './api.js';

const api = new API();
const likeButtons = document.querySelectorAll('.like-button');
export default class Like {
  create(e) {
    const meal = e.target;
    api.post(api.urls.likes, { item_id: meal.id })
      .then((saved) => saved)
      .catch((err) => err);
    const elem = document.getElementById(meal.id);
    const likes = Number(elem.parentNode.nextSibling.innerHTML) + 1;
    elem.parentNode.nextSibling.innerHTML = likes;
    likeButtons.forEach((button) => {
      button.addEventListener('click', this.create);
    });
  }

  get() {
    api.get(api.urls.likes).then((likes) => this.show(likes));
  }

  show(res) {
    this.res = res;
    const items = document.querySelectorAll('.likes');
    for (let i = 0; i < items.length; i += 1) {
      items[i].innerHTML = res[i].likes;
    }
  }
}
