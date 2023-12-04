// match any character that is not a number or a letter
export function isSymbolChar(input: string | number): boolean {
  const char = String(input);
  return char.length === 1 && char.match(/[^a-z0-9]/i) !== null;
}
