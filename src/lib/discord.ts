export function splitMessage(text: string, maxLength = 1900): string[] {
  const chunks: string[] = [];

  while (text.length > maxLength) {
    let split = text.lastIndexOf("\n", maxLength);

    if (split === -1) {
      split = text.lastIndexOf(" ", maxLength);
    }

    if (split === -1) {
      split = maxLength;
    }

    chunks.push(text.slice(0, split));
    text = text.slice(split).trimStart();
  }

  chunks.push(text);

  return chunks;
}