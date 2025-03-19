import { useMemo } from 'react';

/**
 * Hook to generate a futuristic sci-fi code.
 * @param index {number} - The index of the component.
 * @returns {string} A unique sci-fi code string, e.g., "U-1S25".
 */
export const useSciFiCode = (index: number): string => {
  return useMemo(() => {
    // Function to get a pseudo-random character based on index and seed
    const getChar = (seed: number, base: number) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return chars[(seed + base) % chars.length];
    };

    // Function to get a pseudo-random digit based on seed
    const getDigit = (seed: number, max: number) => {
      return (seed % max).toString();
    };

    // Generate the code using index as the base seed
    const part1 = `U-${getDigit(index * 3, 9)}`; // U-<Random Digit>
    const part2 = `${getChar(index, 20)}${getDigit(index * 7, 99)}`; // <Letter><Two Digits>

    return `${part1}${part2}`; // Combine parts into "U-1S25"
  }, [index]);
};
