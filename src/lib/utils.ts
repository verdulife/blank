export function getUrl({ width, height, color }: { width: number, height: number, color: string }) {
  return `templates/${width}x${height}_${color}.ai`;
}