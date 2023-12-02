import { describe, expect, test } from 'vitest';
import { findUniqueSequenceIndex } from './find-unique-sequence-index';

const samples = ['bvwbjplbgvbhsrlpgdmjqwftvncz', 'nppdvjthqldpwncqszvftbrmjlhg', 'mm'];
const sampleAnswers = [5, 6, -1];

describe('findUniqueSequenceIndex', () => {
  test('Sample inputs', () => {
    samples.forEach((sample, index) => {
      expect(findUniqueSequenceIndex(sample, 4)).toBe(sampleAnswers[index]);
    });
  });
});
