import API from './api.js';
import './style.css';
import { displayCard } from './displayCard.js';
import Like from './like.js';

const api = new API();
const likes = new Like();

api.get(api.urls.meals).then((meals) => displayCard(meals));
likes.get();
