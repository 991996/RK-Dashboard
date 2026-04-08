import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import React from "react";

import { Pie, PieChart, Cell } from "recharts";
import { chartCOLORS, countryChartData } from "@/data/dashboard";

function CountryChart({ isAnimationActive = true }) {
  return (
    <Card>
      <CardHeader>
        <p className="font-semibold text-lg">Orders by Country</p>
      </CardHeader>
      <CardContent className="flex items-center justify-center px-4">
        <PieChart
          style={{
            width: "100%",
            aspectRatio: 2,
          }}
          responsive
        >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={countryChartData}
            cx="50%"
            cy="100%"
            outerRadius="120%"
            fill="#8884d8"
            label
            isAnimationActive={isAnimationActive}
          >
            {/* 🎨 توزيع الألوان */}
            {countryChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartCOLORS[index % chartCOLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </CardContent>
      <CardFooter className="my-auto mb-0">
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {countryChartData.map((p, index) => {
            return (
              <div className="flex gap-1 items-center" key={index}>
                <div
                  className="w-2.5 aspect-square"
                  style={{
                    backgroundColor: chartCOLORS[index % chartCOLORS.length],
                  }}
                ></div>
                <p style={{ color: chartCOLORS[index % chartCOLORS.length] }}>
                  {p.name}
                </p>
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}

export default CountryChart;
