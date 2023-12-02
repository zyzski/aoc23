import { describe, expect, test } from 'vitest';
import { getIntersection, getIntersections } from './get-intersection';

describe('getIntersection', () => {
  test('should return an empty array if there is no intersection', () => {
    const arr1 = ['a'];
    const arr2 = ['b'];
    const result = getIntersection(arr1, arr2);
    expect(result).toEqual([]);
  });

  test('should return an array with the intersection 1', () => {
    const arr1 = ['a', 'b'];
    const arr2 = ['a'];
    const result = getIntersection(arr1, arr2);
    expect(result).toEqual(['a']);
  });

  test('should return an array with the intersection 2', () => {
    const arr1 = 'jqHRNqRjqzjGDLGL'.split('');
    const arr2 = 'rsFMfFZSrLrFZsSL'.split('');
    const result = getIntersection(arr1, arr2);
    expect(result).toEqual(['L']);
  });
});

describe('getIntersections', () => {
  test('should return an empty array if there is no intersection', () => {
    const arr1 = ['a'];
    const arr2 = ['b'];
    const result = getIntersections([arr1, arr2]);
    expect(result).toEqual([]);
  });

  test('should return an array with the intersection 1', () => {
    const arr1 = ['a', 'b'];
    const arr2 = ['a'];
    const result = getIntersections([arr1, arr2]);
    expect(result).toEqual(['a']);
  });

  test('should return an array with the intersection 2', () => {
    const arr1 = 'vJrwpWtwJgWrhcsFMMfFFhFp'.split('');
    const arr2 = 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'.split('');
    const arr3 = 'PmmdzqPrVvPwwTWBwg'.split('');
    const result = getIntersections([arr1, arr2, arr3]);
    expect(result).toEqual(['r']);
  });
});
