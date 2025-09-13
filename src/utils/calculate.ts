// src/utils/calculate.ts

import type { DataEntry } from "../data";

// import { DataEntry } from "../data/index";


export const getMonthlyAverage = (
  data: DataEntry[],
  selectedCity: string,
  selectedFuel: string,
  selectedYear: string
): number[] => {
  // Initialize months array with 0s
  const monthlyPrices = Array(12).fill(0);
  const monthlyCount = Array(12).fill(0);

  data.forEach(entry => {
    if (
      entry.city === selectedCity &&
      entry.fuel === selectedFuel &&
      entry.year === selectedYear
    ) {
      const index = entry.month - 1;
      monthlyPrices[index] += entry.price;
      monthlyCount[index] += 1;
    }
  });

  // Calculate average, handle divide by zero
  return monthlyPrices.map((total, index) =>
    monthlyCount[index] > 0 ? total / monthlyCount[index] : 0
  );
};
