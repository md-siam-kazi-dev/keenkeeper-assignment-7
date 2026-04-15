"use client";
import React, { useContext, useEffect } from "react";

import { Pie, PieChart, Tooltip } from "recharts";
import { DataContext } from "../lib/context/DataContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const StatsPage = () => {
  const { history } = useContext(DataContext);

  let data = {
    call: 0,
    video: 0,
    text: 0,
  };

  history.forEach((htr) => {
    if (htr.type === "Call") {
      data.call++;
    } else if (htr.type === "Text") {
      data.text++;
    } else {
      data.video++;
    }
  });

  let chartData = [
    { name: "call", value: data.call, fill: "#244D3F" },
    { name: "video", value: data.video, fill: "#7E35E1" },
    { name: "text", value: data.text, fill: "#37A163" },
  ];
  return (
    <div className="w-full  border border-gray-100  shadow-md py-10 px-4">
      <h1 className="text-bold text-2xl">By Interaction Type</h1>

      {(data.call === 0 && data.video === 0 && data.text === 0)?
         <div className=" text-center mt-6 w-full mx-auto">
          <h1 className="text-xl font-semibold">No Interaction Data Available</h1>
          <DotLottieReact src="/assets/Error.lottie" loop autoplay  className="w-60 md:w-100 mx-auto"/>
         </div>
         :
         <div className="flex justify-center items-center">
        <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "30vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={chartData}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
        />
        <Tooltip />
      </PieChart>
      </div>
      }

      <div className="flex gap-7 mt-10 w-fit mx-auto">
        <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#244D3F]"></div>
            Call
        </div>
         <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#7E35E1]"></div>
            Video
        </div>
         <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#37A163]"></div>
            Text
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
