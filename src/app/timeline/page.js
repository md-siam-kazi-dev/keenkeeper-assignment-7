"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useContext, useState } from "react";
import { DataContext } from "../lib/context/DataContext";

const Timeline = () => {
  const [filter, setFilter] = useState("");
  const { history } = useContext(DataContext);
  console.log(history);
  

  return (
    <div className="container-div mt-10 mb-10">
      <h1 className="text-5xl font-bold mb-4">Timeline</h1>
      <Select
      
      onChang={() => setFilter(e.target.value)}
      >
      <SelectTrigger className="w-full max-w-35">
        <SelectValue placeholder="Filter Timeline" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter</SelectLabel>
           <SelectItem value="Timeline">Timeline</SelectItem>
          <SelectItem value="Call">Call</SelectItem>
          <SelectItem value="Text">Text</SelectItem>
          <SelectItem value="Video">Video</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>

      
    </div>
  );
};

export default Timeline;
