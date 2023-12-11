import path from 'path';
import { describe, test, expect } from 'vitest';
import { loadFile } from '../utils/load-file';
import { getIntersections } from '../utils/get-intersection';
const samplePath = path.resolve(__dirname, './sample.txt');
const sample = loadFile(samplePath);

const puzzlePath = path.resolve(__dirname, './puzzle.txt');
const puzzle = loadFile(puzzlePath);

describe('Day 4: Scratchcards', () => {
  describe('Part 1', () => {
    test('Sample input', () => {
      expect(part1(sample)).toBe(13);
    });

    test('Puzzle input', () => {
      expect(part1(puzzle)).toBe(22193);
    });
  });

  describe('Part 1', () => {
    test('Sample input', () => {
      expect(part2(sample)).toBe(13);
    });
  });
});

function part1(input: string[]) {
  let total = 0;

  for (const line of input) {
    const [_, numbers] = line.split(': ');
    // console.log(numbers);
    const numberStrings = numbers
      .trim()
      .replace(/ {2}/g, ' ')
      .split(' | ')
      .map((numberString) => numberString.split(' '));

    const intersections = getIntersections(numberStrings);
    // console.log(intersections);
    const score = getScore(intersections);
    // console.log(score);
    total += score;
  }

  return total;
}

function part2(input: string[]) {
  // line index and its score
  const scoreMap = new Map<number, number>();
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const [_, numbers] = line.split(': ');
    const numberStrings = numbers
      .trim()
      .replace(/ {2}/g, ' ')
      .split(' | ')
      .map((numberString) => numberString.split(' '));

    const intersections = getIntersections(numberStrings);
    const score = getScore(intersections);
    scoreMap.set(i, score);
    total += score;
  }

  console.log(scoreMap);

  return total;
}

function getScore(matches: string[]) {
  let score = 0;

  for (let i = 0; i < matches.length; i++) {
    if (i === 0) {
      score++;
    } else {
      score = score * 2;
    }
  }

  return score;
}
