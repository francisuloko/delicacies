import API from "./api.js";

const api = new API();
export default class Like {
  create(e) {
    const meal = e.target;
    let likesCount = document.getElementById(`meal-${e.target.id}-likes`);
    api
      .post(api.urls.likes, { item_id: meal.id })
      .then((saved) => saved)
      .catch((err) => err);
    likesCount.innerHTML = +likesCount.innerHTML + 1;
  }

  get() {
    api.get(api.urls.likes).then((likes) => this.show(likes));
  }

  show(res) {
    const items = document.querySelectorAll(".likes");
    for (let i = 0; i < items.length; i += 1) {
      console.log(items[i]);
      items[i].innerHTML = res[i].likes;
    }
  }
}
