import React, { useState } from "react";
import {
  Pie,
  PieChart,
  Sector,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardFooter } from "@/components/ui/card";
import { productsChartData } from "@/data/dashboard";

// 🎨 الألوان
const COLORS = [
  "#6366F1", // Indigo
  "#22C55E", // Green
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#3B82F6", // Blue
  "#A855F7", // Purple
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />

      <circle cx={ex} cy={ey} r={3} fill={fill} />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {`Value: ${value}`}
      </text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};

function ProductsChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart
          margin={{
            top: 0,
            right: 100,
            bottom: 0,
            left: 100,
          }}
        >
          <Pie
            data={productsChartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={handleMouseEnter}
          >
            {/* 🎨 توزيع الألوان */}
            {productsChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <CardFooter>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {productsChartData.map((p, index) => {
            return (
              <div className="flex gap-1 items-center" key={index}>
                <div
                  className="w-2.5 aspect-square"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <p style={{ color: COLORS[index % COLORS.length] }}>{p.name}</p>
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductsChart;
