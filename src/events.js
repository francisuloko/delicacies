import Like from './like.js'

const like = new Like();
const likeButtons = document.querySelectorAll('.like-button');

export function clickLike() {
  likeButtons.forEach((button) => {
    button.addEventListener('click', like.create);
  });
}
