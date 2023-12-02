import fs from 'fs';

export function loadFile(filePath: string): string[] {
  return fs.readFileSync(filePath, 'utf-8').split('\n');
}

export function loadFileWithoutSplitting(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}
