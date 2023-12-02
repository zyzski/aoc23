export type Grid<T> = T[][] | string[][];

export function inputToGrid<T>(input: string[], transform?: (str: string, row: number, col: number) => T): Grid<T> {
  const grid: Grid<T> = [];

  for (let i = 0; i < input.length; i++) {
    const row = input[i];

    for (let j = 0; j < row.length; j++) {
      if (!grid[i]) {
        grid.push([]);
      }

      grid[i][j] = transform ? transform(row[j], i, j) : row[j];
    }
  }

  return grid;
}
