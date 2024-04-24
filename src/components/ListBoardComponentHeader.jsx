import Image from "next/image";
import React from "react";
import MonthlyStatisticsComponent from "./MonthlyStatisticsComponent";

export default function ListBoardComponentHeader() {
  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p>Workspace</p> / <p>HRD Design</p> / <p>List</p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between w-[58%]">
          <h2 className="text-2xl font-bold">HRD Design</h2>
          <div className="border border-gray rounded-lg p-2 h-fit">
            <Image
              src="/assets/icons/star.svg"
              width={20}
              height={20}
              alt="black star"
            />
          </div>
        </div>
        <div className="w-[40%]">
          <MonthlyStatisticsComponent/>
        </div>
      </div>
    </>
  );
}
