"use client";
import { useContext, useState } from "react";
import { DataContext } from "../lib/context/DataContext";

const Timeline = () => {
  const [filter, setFilter] = useState();
  const { history } = useContext(DataContext);
  console.log(history);

  return (
    <div className="container-div mt-10 mb-10">
      <h1 className="text-5xl font-bold">Timeline</h1>

      <select defaultValue="Pick a color" className="select">
  <option disabled={true}>Pick a color</option>
  <option>Crimson</option>
  <option>Amber</option>
  <option>Velvet</option>
</select>
    </div>
  );
};

export default Timeline;
