export default function useTest() {
  function sumNumbers(val1: number, val2: number) {
    return val1 + val2;
  }

  return { sumNumbers };
}
