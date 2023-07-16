export function add(...numbers: number[]) {
  return numbers.reduce((acc, num) => acc + num, 0)
}
