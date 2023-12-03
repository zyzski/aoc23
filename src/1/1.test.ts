import path from 'path';
import { describe, test, expect } from 'vitest';
import { loadFile } from '../utils/load-file';

const samplePath = path.resolve(__dirname, './sample.txt');
const sample = loadFile(samplePath);

const samplePath2 = path.resolve(__dirname, './sample2.txt');
const sample2 = loadFile(samplePath2);

const puzzlePath = path.resolve(__dirname, './input.txt');
const puzzle = loadFile(puzzlePath);

describe('Day 1: Trebuchet', () => {
  describe('Part 1', () => {
    test('Sample input', () => {
      expect(part1(sample)).toBe(142);
    });

    test('Puzzle input', () => {
      expect(part1(puzzle)).toBe(55447);
    });
  });

  describe('Part 2', () => {
    test('Convert text numbers to numbers', () => {
      expect(getNumbers('eightwo', true)).toBe('82');
      expect(getNumbers('eightwothree', true)).toBe('83');
    });

    test('Sample input', () => {
      expect(part2(sample2)).toBe(281);
    });

    test('Puzzle input', () => {
      expect(part2(puzzle)).toBe(54706);
    });
  });
});

function part1(input: string[]) {
  let total = 0;
  for (const line of input) {
    const numbers = getNumbers(line, false);
    total += +numbers;
  }

  return total;
}

function part2(input: string[]) {
  let total = 0;
  for (const line of input) {
    const numbers = getNumbers(line, true);
    total += +numbers;
  }

  return total;
}

const map: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

function getNumbers(input: string, checkWords: boolean) {
  const firstNumber = getFirstNumber(input, checkWords);
  const lastNumber = getLastNumber(input, checkWords);
  return firstNumber + lastNumber;
}

function getFirstNumber(input: string, checkWords: boolean) {
  const arr = input.split('');

  while (arr.length > 0) {
    // check strings
    if (checkWords) {
      const keys = Object.keys(map);
      const search = arr.join('');

      for (const key of keys) {
        if (search.startsWith(key)) {
          return map[key];
        }
      }
    }

    // check digits
    const char = arr.shift() as string;
    if (!isNaN(+char)) {
      return char;
    }
  }

  return '';
}

function getLastNumber(input: string, checkWords: boolean) {
  const arr = input.split('');

  while (arr.length > 0) {
    // check strings
    if (checkWords) {
      const keys = Object.keys(map);
      const search = arr.join('');

      for (const key of keys) {
        if (search.endsWith(key)) {
          return map[key];
        }
      }
    }

    // check digits
    const char = arr.pop() as string;
    if (!isNaN(+char)) {
      return char;
    }
  }

  return '';
}
