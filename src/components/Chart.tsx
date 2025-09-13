// src/components/Chart.tsx

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface ChartProps {
  data: number[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        title: {
          text: "Monthly Average RSP",
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [{
          name: 'Price',
          type: 'bar',
          data: data,
        }],
      };

      chart.setOption(option);

      window.addEventListener("resize", () => {
        chart.resize();
      });

      return () => {
        window.removeEventListener("resize", () => chart.resize());
        chart.dispose();
      };
    }
  }, [data]);

  return <div ref={chartRef} style={{ height: "400px", width: "100%" }} />;
};

export default Chart;
