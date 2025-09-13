import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Chart from "./components/Chart";
import { getMonthlyAverage } from "./utils/calculate";
import { fuelData, type FuelType, type MetroCity, type Year } from "./data";

const App: React.FC = () => {
  const cities: MetroCity[] = ['Delhi', 'Mumbai', 'Kolkata'];
  const fuels: FuelType[] = ['Petrol', 'Diesel'];
  const years: Year[] = ['2022', '2023'];

  const [selectedCity, setSelectedCity] = useState<MetroCity>(cities[0]);
  const [selectedFuel, setSelectedFuel] = useState<FuelType>(fuels[0]);
  const [selectedYear, setSelectedYear] = useState<Year>(years[0]);

  const monthlyData = getMonthlyAverage(fuelData, selectedCity, selectedFuel, selectedYear);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h2>Retail Fuel Price Visualization</h2>
      <Dropdown label="City" options={cities} value={selectedCity} onChange={setSelectedCity} />
      <Dropdown label="Fuel Type" options={fuels} value={selectedFuel} onChange={setSelectedFuel} />
      <Dropdown label="Year" options={years} value={selectedYear} onChange={setSelectedYear} />
      <Chart data={monthlyData} />
    </div>
  );
};

export default App;
