export function getIntersection(arr1: string[], arr2: string[]): string[] {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return Array.from(set1.values()).filter((value) => set2.has(value));
}

export function getIntersections(arrays: string[][]): string[] {
  const sets = arrays.map((array) => new Set(array));
  const result: string[] = [];

  sets[0].forEach((value) => {
    if (sets.every((set) => set.has(value))) {
      result.push(value);
    }
  });

  return result;
}
