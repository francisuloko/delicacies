/**
 * @jest-environment jsdom
 */

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
