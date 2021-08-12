
import Comment from "./comment.js";

const comment = new Comment();

export function popUp(e) {
  const mealID = e.target.dataset.id;
  comment.get(Number(mealID));
}