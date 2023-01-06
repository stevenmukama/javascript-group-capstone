/*
* @jest-environment jsdom
*/

import countMovies from './modules/movieCounter.js';
import getMovies from './modules/apiController.js';

jest.mock('./apiController');

describe('Test movies counter', () => {
  test('Add counter for action to be 1', () => {
    expect(countMovies(getMovies(), 'Action')).toBe(1);
  });
  test('Add counter for comedy to be 1', () => {
    expect(countMovies(getMovies(), 'Comedy')).toBe(1);
  });
  test('Add counter for drama to be 1', () => {
    expect(countMovies(getMovies(), 'Drama')).toBe(1);
  });
});