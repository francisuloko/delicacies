import API from './api.js';

const api = new API();

export default class Comment {
  create(data) {
    api.post(api.urls.comments, data)
      .then((saved) => saved)
      .catch((err) => err);
  }

  get(id) {
    api.get(api.urls.newComment + id).then((comments) => this.show(comments));
  }

  show(res) {
    this.res = res;
    let modal = document.getElementById('modal2');
    modal.innerHTML = '';
    const details = `
      <div class="w-50">
        <img src="" alt="" />
        <div class="constainer>
          <h4>Food Name</h4>
          <div class="row">
            <div class="col-sm-3 themed-grid-col"></div>
            <div class="col-sm-3 themed-grid-col"></div>
            <div class="col-sm-3 themed-grid-col"></div>
            <div class="col-sm-3 themed-grid-col"></div>
          </div>
        </div>
        <div>
          <h4 class="comment-counter">(Counter)</h4>
          <ul id="user-comments">
            <li>Comment 1</li>
          </ul>
        </div>
        <form>
          <input type="text" name="username" id="username">
          <input type="text" name="message" id="message">
          <button type="button" class="btn-primary" id=""comment-button">Add comment</button>
        </form>
      </div>`;
    // modal += details;
    modal.innerHTML = details
  }
}
