import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { performanceChartData } from "@/data/dashboard";

function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <p className="font-semibold text-lg">Performance</p>
      </CardHeader>
      <CardContent className="flex items-center justify-center px-4">
        <ComposedChart
          style={{
            width: "100%",
            maxHeight: "400px",
            aspectRatio: 1.618,
          }}
          responsive
          data={performanceChartData}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis width="auto" niceTicks="snap125" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Clicks" stroke="#ff7300" />
          <Bar dataKey="Page Views" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </CardContent>
    </Card>
  );
}

export default PerformanceChart;
