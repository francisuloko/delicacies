/**
 * @jest-environment jsdom
 */
 import { countMeal } from "../src/displayCard.js";
import { countComment } from '../src/comment.js';

test('number of comments', () => {
  const comments = [
    {
      item_id: '1',
      username: 'test 1',
      comment: 'comment 1',
    },
    {
      item_id: '2',
      username: 'test 2',
      comment: 'comment 2',
    },
    {
      item_id: '3',
      username: 'test 3',
      comment: 'comment 3',
    },
  ];
  const count = countComment(comments);
  expect(count).toBe(3);
});

test('number of meals', () => {
  const obj = {
    meals: [
      {
        item_id: 'item1',
      },
      {
        item_id: 'item2',
      },
      {
        item_id: 'item3',
      },
    ],
  };
  const count = countMeal(obj);
  expect(count).toBe(3);
});
