export function isRangeContained(range1: number[], range2: number[], isFullyContained = false): boolean {
  const [start1, end1] = range1;
  const [start2, end2] = range2;

  let isFirstWithinSecond = false;

  for (let i = start1; i <= end1; i++) {
    if (i >= start2 && i <= end2) {
      isFirstWithinSecond = true;

      if (!isFullyContained) {
        break;
      }
    } else {
      isFirstWithinSecond = false;
      break;
    }
  }

  let isSecondWithinFirst = false;

  for (let i = start2; i <= end2; i++) {
    if (i >= start1 && i <= end1) {
      isSecondWithinFirst = true;

      if (!isFullyContained) {
        break;
      }
    } else {
      isSecondWithinFirst = false;
      break;
    }
  }

  return isFirstWithinSecond || isSecondWithinFirst;
}
