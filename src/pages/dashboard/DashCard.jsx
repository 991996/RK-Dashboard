import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

import React from "react";

function DashCard({ card }) {
  const percentage = card?.percentage > 0;
  return (
    <Card className="pb-0">
      <CardContent>
        <div className="flex items-center justify-between">
          {/* Icon */}
          <div className="text-primary-red bg-primary-red/20 p-3 rounded-md">
            <card.icon size={35} />
          </div>
          <div className="flex flex-col justify-between h-full items-end">
            <p className=" capitalize text-gray-500">{card?.title}</p>
            <p className="font-semibold text-2xl font-hanken">
              {card?.number?.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-100 py-2.5">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            <div
              className={`flex items-center gap-1 ${
                percentage ? "text-green-500" : "text-red-500"
              }`}
            >
              {percentage ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
              {Math.abs(card?.percentage)}%
            </div>
            <p className=" text-gray-500 text-xs">Last Month</p>
          </div>
          <p className=" text-gray-500 text-xs font-semibold cursor-pointer">
            View More
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default DashCard;
