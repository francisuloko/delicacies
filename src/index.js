import API from './api.js';
import './style.css';
import displayCard from './displayCard.js';
import Like from './like.js';
import Comment from './comment.js';

const api = new API();
api.get(api.urls.meals).then((meals) => displayCard(meals));
const likes = new Like();
const comments = new Comment();
likes.get();
