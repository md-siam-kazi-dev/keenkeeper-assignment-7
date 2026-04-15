
"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../lib/context/DataContext";
import TimelineCard from "../component/TimelineCard";
import NoRecentActivity from "../component/NoRecentActivity";



const TimlinePage = () => {


    const [filter, setFilter] = useState("");
  const { history } = useContext(DataContext);
  const [filteredHistory ,setFilteredHistory] = useState([])

  

  
  let temp = history;

  useEffect(() => {
    setFilteredHistory(history)
  },[])
  
  const filterSetter = (e) => {


   setFilter(e);
   setFilteredHistory(filter);
   if ( e === 'Name') {
      
      // short by name bubble short algo
      for (let i = 0; i < history.length - 1; i++) {
        for (let j = i + 1; j < history.length; j++) {
          if (temp[j].name < temp[j - 1].name) {
            console.log(temp[j])
            let x = temp[j];
            temp[j] = temp[j - 1];
            temp[j - 1] = x;
          }
        }
      }
      setFilteredHistory(temp);

    } else if (e != "Timeline"){


      let temp = history.filter((htr) => htr.type === e);
      setFilteredHistory(temp);



    } else {
      setFilteredHistory(history)
    }

    console.log(filteredHistory)
  };

  return (
    <>
    <Select onValueChange={filterSetter} >
        <SelectTrigger  className="w-full max-w-35">
          <SelectValue placeholder="Filter Timeline"/>
        </SelectTrigger>
        <SelectContent >
          <SelectGroup  >
            <SelectLabel>Filter</SelectLabel>
            <SelectItem value="Timeline">Timeline</SelectItem>
            <SelectItem value="Call">Call</SelectItem>
            <SelectItem value="Text">Text</SelectItem>
            <SelectItem value="Video">Video</SelectItem>
            <SelectItem value="Name">Name</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="w-full flex flex-col mt-3 gap-3">
        {filteredHistory.length != 0 ? filteredHistory.map(fth => {
          
          return (
            <TimelineCard data={fth} key={crypto.randomUUID()} />

          )
        }):<NoRecentActivity />}
      </div>
    </>
  )
}

export default TimlinePage