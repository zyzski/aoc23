export function findUniqueSequenceIndex(input: string, sequenceLength: number): number {
  for (let i = 0; i < input.length; i++) {
    const sequence = input.slice(i, i + sequenceLength);
    const unique = new Set(sequence);

    if (unique.size === sequenceLength) {
      return i + sequenceLength;
    }
  }

  return -1;
}
