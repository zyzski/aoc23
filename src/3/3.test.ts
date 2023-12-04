import path from 'path';
import { describe, test, expect } from 'vitest';
import { loadFile } from '../utils/load-file';
import { Grid, inputToGrid } from '../utils/input-to-grid';
import { isNumber } from '../utils/is-number';
import { isSymbolChar } from '../utils/is-symbol';

const samplePath = path.resolve(__dirname, './sample.txt');
const sample = loadFile(samplePath);

const puzzlePath = path.resolve(__dirname, './puzzle.txt');
const puzzle = loadFile(puzzlePath);

describe('Day 3: Gear Ratios', () => {
  describe('Part 1', () => {
    test('Sample input', () => {
      expect(part1(sample)).toBe(4361);
    });

    test('Row ending with number', () => {
      expect(part1(['*123'])).toBe(123);
      expect(part1(['123'])).toBe(0);
      expect(part1(['123*'])).toBe(123);
    });

    // test('Puzzle input', () => {
    //   expect(part1(puzzle)).toBe(532331);
    // });
  });

  // describe('Part 2', () => {
  //   test('Sample input', () => {
  //     expect(part(sample)).toBe(467835);
  //   });
  // });
});

function part1(input: string[]) {
  const starMap = new Map<string, number>();
  const grid = inputToGrid<string>(input);
  let total = 0;
  let isCapturing = false;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    let captured = [];

    // add an extra column to capture the last number without adding extra logic
    for (let j = 0; j < row.length + 1; j++) {
      const cell = row[j];
      isCapturing = isNumber(cell);

      if (isCapturing) {
        captured.push([i, j]);
      } else {
        // test captured number
        if (captured.length) {
          const isValid = captured.some(([r, c]) => {
            const adj = getAdjacents(grid, r, c);
            return Object.values(adj).some((a) => a.value !== '.' && isSymbolChar(a.value));
          });

          if (isValid) {
            // part 1
            const capturedNumber = +captured.map(([r, c]) => grid[r][c]).join('');
            total += capturedNumber;

            // part 2
            const adjacentStars = captured.filter(([r, c]) => {
              const adj = getAdjacents(grid, r, c);
              return Object.values(adj).filter((a) => a.value === '*');
            });
            console.log('adjacentStars', adjacentStars);

            for (const star of adjacentStars) {
              const key = star.join(',');
              const current = starMap.get(key) ?? 1;
              starMap.set(key, current * capturedNumber);
            }
          }

          captured = [];
        }
      }
    }
  }

  console.log('starMap', starMap);

  return total;
}

function checkAdjacent(grid: Grid<string>, row: number, col: number, validate: (cell: string) => boolean) {
  const top = grid[row - 1]?.[col];
  const bottom = grid[row + 1]?.[col];
  const left = grid[row]?.[col - 1];
  const right = grid[row]?.[col + 1];
  const topLeft = grid[row - 1]?.[col - 1];
  const topRight = grid[row - 1]?.[col + 1];
  const bottomLeft = grid[row + 1]?.[col - 1];
  const bottomRight = grid[row + 1]?.[col + 1];

  return [top, bottom, left, right, topLeft, topRight, bottomLeft, bottomRight].some(
    (cell) => cell !== '.' && validate(cell)
  );
}

function getAdjacents(grid: Grid<string>, row: number, col: number) {
  const top = grid[row - 1]?.[col];
  const bottom = grid[row + 1]?.[col];
  const left = grid[row]?.[col - 1];
  const right = grid[row]?.[col + 1];
  const topLeft = grid[row - 1]?.[col - 1];
  const topRight = grid[row - 1]?.[col + 1];
  const bottomLeft = grid[row + 1]?.[col - 1];
  const bottomRight = grid[row + 1]?.[col + 1];

  const map = {
    top: {
      row: row - 1,
      col,
      value: top,
    },
    bottom: {
      row: row + 1,
      col,
      value: bottom,
    },
    left: {
      row,
      col: col - 1,
      value: left,
    },
    right: {
      row,
      col: col + 1,
      value: right,
    },
    topLeft: {
      row: row - 1,
      col: col - 1,
      value: topLeft,
    },
    topRight: {
      row: row - 1,
      col: col + 1,
      value: topRight,
    },
    bottomLeft: {
      row: row + 1,
      col: col - 1,
      value: bottomLeft,
    },
    bottomRight: {
      row: row + 1,
      col: col + 1,
      value: bottomRight,
    },
  } as const;

  return map;
}
