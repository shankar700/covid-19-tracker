import React from "react";
import {LineChart, Line, YAxis} from "recharts";

export default function LineGraph({graphData, dataKey, stroke}) {
  return (
    <LineChart
      width={200}
      height={90}
      data={graphData.slice(-10)}
      margin={{top: 30}}>
      <YAxis padding={{top: 20}} hide={true} />
      <Line type='monotone' dataKey={dataKey} stroke={stroke} strokeWidth={2} />
    </LineChart>
  );
}
