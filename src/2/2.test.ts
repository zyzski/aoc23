import path from 'path';
import { describe, test, expect } from 'vitest';
import { loadFile } from '../utils/load-file';

const samplePath = path.resolve(__dirname, './sample.txt');
const sample = loadFile(samplePath);

const puzzlePath = path.resolve(__dirname, './puzzle.txt');
const puzzle = loadFile(puzzlePath);

describe('Day 2: Cube Conundrum', () => {
  describe('Part 1', () => {
    test('Game 1', () => {
      expect(isGamePossible(sample[2])).toBe(false);
    });

    test('Sample input', () => {
      expect(part1(sample)).toBe(8);
    });

    test('Puzzle input', () => {
      expect(part1(puzzle)).toBe(2265);
    });
  });

  describe('Part 2', () => {
    test('getMinCubes', () => {
      expect(getMinCubes(sample[0])).toStrictEqual([4, 2, 6]);
    });

    test('Sample input', () => {
      expect(part2(sample)).toBe(2286);
    });

    test('Puzzle input', () => {
      expect(part2(puzzle)).toBe(64097);
    });
  });
});

function part1(input: string[]) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    if (isGamePossible(input[i])) {
      // game index is 1-based
      total += i + 1;
    }
  }

  return total;
}

function part2(input: string[]) {
  let total = 0;
  for (const line of input) {
    const cubes = getMinCubes(line);
    const power = cubes.reduce((acc, cur) => acc * cur, 1);
    total += power;
  }

  return total;
}

type Color = 'red' | 'green' | 'blue';
type ColorMap = Record<Color, number>;

function isGamePossible(input: string): boolean {
  const limits: ColorMap = {
    red: 12,
    green: 13,
    blue: 14,
  } as const;

  function validateSet(set: string): boolean {
    const cubes = set.split(', ');
    const colors: ColorMap = {
      red: 0,
      green: 0,
      blue: 0,
    };

    for (const cube of cubes) {
      const [count, color] = cube.split(' ');
      colors[color as Color] += +count;
    }

    for (const color in colors) {
      if (colors[color as Color] > limits[color as Color]) {
        return false;
      }
    }

    return true;
  }

  const sets = input.split(': ').pop()?.split('; ') ?? [];
  return sets.every(validateSet);
}

function getMinCubes(input: string): number[] {
  const colors = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const sets = input.split(': ').pop()?.split('; ') ?? [];
  for (const set of sets) {
    const cubes = set.split(', ');
    for (const cube of cubes) {
      const [count, color] = cube.split(' ');
      colors[color as Color] = Math.max(colors[color as Color], +count);
    }
  }

  return Object.values(colors);
}
