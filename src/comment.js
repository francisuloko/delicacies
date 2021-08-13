import API from './api.js';

const api = new API();

export function countComment(res) {
  if (res.length > 0) {
    const numOfComments = document.querySelector('.comment-count');
    numOfComments.innerHTML = `Comment  (${res.length})`;
    return res.length;
  }
  return 0;
}

export default class Comment {
  create() {
    this.null = '';
    const name = document.getElementById('username');
    const comment = document.getElementById('message');
    const ul = document.getElementById('user-comments');
    if (name.value !== '' && comment.value !== '') {
      const li = `<li>
        <span>Just now</span>
        <span>${name.value}: </span>
        <span>${comment.value}</span>
      </li>`;
      ul.innerHTML += li;
      const id = document.getElementById('add-comment').getAttribute('data-commentID');
      const data = {
        item_id: id,
        username: name.value,
        comment: comment.value,
      };
      api.post(api.urls.comments, data)
        .then((saved) => saved)
        .catch((err) => err);
      name.value = '';
      comment.value = '';
    } else {
      ul.innerHTML += '<li class="text-danger">Input cannot be empty</li>';
      setTimeout(() => { ul.removeChild(ul.lastElementChild); }, 3000);
    }
  }

  get(id) {
    api.get(api.urls.newComment + id).then((comments) => this.show(comments));
  }

  show(res) {
    this.res = res;
    const ul = document.getElementById('user-comments');
    const numOfComments = document.querySelector('.comment-count');
    numOfComments.innerHTML = `Comment  (${countComment(res)})`;
    for (let i = 0; i < res.length; i += 1) {
      const li = `<li class="li-comment">
        <span>${res[i].creation_date}</span>
        <span>${res[i].username}: </span>
        <span>${res[i].comment}</span>
      </li>`;
      ul.innerHTML += li;
    }
  }
}