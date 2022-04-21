import API from "./api.js";

const api = new API();

export const countComment = (res) => {
  if (res.length > 0) {
    return res.length;
  }
  return 0;
};

export default class Comment {
  create() {
    this.null = "";
    const name = document.getElementById("username");
    const comment = document.getElementById("message");
    const ul = document.getElementById("user-comments");
    const err = document.getElementById("error");
    if (name.value !== "" && comment.value !== "") {
      ul.innerHTML += `<li>${comment.value} ~ ${name.value}</li>`;
      const id = document
        .getElementById("add-comment")
        .getAttribute("data-commentID");
      const data = {
        item_id: id,
        username: name.value,
        comment: comment.value,
      };
      api
        .post(api.urls.comments, data)
        .then((saved) => saved)
        .catch((err) => err);
      name.value = "";
      comment.value = "";
    } else {
      err.innerHTML += "Input cannot be empty";
      setTimeout(() => {
        err.innerHTML = "";
      }, 3000);
    }
  }

  get(id) {
    api.get(api.urls.newComment + id).then((comments) => this.show(comments));
  }

  show(res) {
    this.res = res;
    const ul = document.getElementById("user-comments");
    const numOfComments = document.querySelector(".comment-count");
    numOfComments.innerHTML = `Comment  (${countComment(res)})`;
    for (let i = 0; i < res.length; i += 1) {
      ul.innerHTML += `<li>${res[i].comment} ~ ${res[i].username}</li>`;
    }
  }
}
