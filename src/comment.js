import API from './api.js';

const api = new API();


export function countComment(res) {
  if(res.length > 0){
    return res.length;
  } else {
    return 0;
  }
}

export default class Comment {
  create() {
    const name = document.getElementById('username').value
    const comment = document.getElementById('message').value
    let ul = document.getElementById('user-comments');
    const li = `<li>
        <span>Just now</span>
        <span>${name}</span>
        <span>${comment}</span>
      </li>`;
    ul.innerHTML += li;
    let id = document.getElementById('add-comment').getAttribute('data-commentID')
    const data = {
      item_id: id,
      username: name,
      comment: comment,
    }
    api.post(api.urls.comments, data)
      .then((saved) => saved)
      .catch((err) => err);
  }

  get(id) {
    api.get(api.urls.newComment + id).then((comments) => this.show(comments));
  }

  show(res) {
    this.res = res;
    let ul = document.getElementById('user-comments');
    const numOfComments = document.querySelector('.comment-count');
    numOfComments.innerHTML = `Comment  (${countComment(res)})`;
    for(let i=0; i < res.length; i += 1){
      const li = `<li class="li-comment">
        <span>${res[i].creation_date}</span>
        <span>${res[i].username}</span>
        <span>${res[i].comment}</span>
      </li>`;
      ul.innerHTML += li;
    }
  }
}
