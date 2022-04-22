import API from './api.js';

const api = new API();
export default class Like {
  create(e) {
    this.meal = e.target;
    const likesCount = document.getElementById(`meal-${this.meal.id}-likes`);
    api
      .post(api.urls.likes, { item_id: this.meal.id })
      .then((saved) => saved)
      .catch((err) => err);
    likesCount.innerHTML = +likesCount.innerHTML + 1;
  }

  get() {
    api.get(api.urls.likes).then((likes) => this.show(likes));
  }

  show(res) {
    this.res = res;
    console.log(res);
    const items = document.querySelectorAll('.likes');
    for (let i = 0; i < items.length; i += 1) {
      items[i].innerHTML = this.res[i].likes;
    }
  }
}
