export function getRandomId() {
  const rand = 1 + Math.random() * (99999999 + 1 - 1);
  return Math.floor(rand);
}
