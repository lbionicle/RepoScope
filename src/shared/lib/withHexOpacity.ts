export function withHexOpacity(hexColor: string, opacity: number): string {
  const normalizedHexColor = hexColor.replace('#', '');

  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();

  return `#${normalizedHexColor}${alpha}`;
}
