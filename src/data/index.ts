// src/data/index.ts

export type FuelType = 'Petrol' | 'Diesel';
export type MetroCity = 'Delhi' | 'Mumbai' | 'Kolkata';
export type Year = '2022' | '2023';

export interface DataEntry {
  city: MetroCity;
  fuel: FuelType;
  year: Year;
  month: number; // 1 - 12
  price: number;
}

export const fuelData: DataEntry[] = [
  { city: 'Delhi', fuel: 'Petrol', year: '2022', month: 1, price: 95 },
  { city: 'Delhi', fuel: 'Petrol', year: '2022', month: 2, price: 96 },
  { city: 'Delhi', fuel: 'Diesel', year: '2022', month: 1, price: 85 },
  { city: 'Mumbai', fuel: 'Petrol', year: '2023', month: 1, price: 100 },
  { city: 'Mumbai', fuel: 'Diesel', year: '2023', month: 1, price: 90 },
  { city: 'Kolkata', fuel: 'Petrol', year: '2022', month: 3, price: 97 },
  { city: 'Kolkata', fuel: 'Diesel', year: '2022', month: 3, price: 87 },
];
