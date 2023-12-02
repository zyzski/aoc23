import { describe, expect, test } from 'vitest';

import { inputToGrid } from './input-to-grid';
describe('inputToGrid', () => {
  test('should convert a string to a grid', () => {
    const input = `abc
def
ghi`.split('\n');

    const grid = inputToGrid(input);
    expect(grid).toEqual([
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
    ]);
  });
});
