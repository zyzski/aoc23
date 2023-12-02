import { describe, test, expect } from 'vitest';
import { isRangeContained } from './is-range-contained';

describe('isRangeContained', () => {
  test('First overlap', () => {
    expect(isRangeContained([2, 2], [1, 2])).toBe(true);
  });

  test('Second overlap', () => {
    expect(isRangeContained([1, 2], [2, 2])).toBe(true);
  });

  test('Longer overlap', () => {
    expect(isRangeContained([2, 8], [3, 7])).toBe(true);
  });

  test('No overlap', () => {
    expect(isRangeContained([1, 2], [3, 4])).toBe(false);
  });

  test('Large overlap', () => {
    expect(isRangeContained([28, 93], [5, 94])).toBe(true);
  });

  test('Full overlap', () => {
    expect(isRangeContained([2, 8], [3, 7], true)).toBe(true);
  });

  test('Checking full overlap, but not full overlap', () => {
    expect(isRangeContained([2, 8], [1, 7], true)).toBe(false);
  });
});
