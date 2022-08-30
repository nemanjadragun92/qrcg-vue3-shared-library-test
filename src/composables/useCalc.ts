export function useCalc() {
  function sum(val1: number, val2: number): number {
    return val1 + val2;
  }

  return { sum };
}
