'use client'
import { useContext,use } from "react";
import { DataContext } from "../lib/context/DataContext";


const HomeDashBoard = () => {
   const {profils} = use(DataContext);
   
   let almostDue = 0;
   let overDue = 0;
   let onTrack = 0;
   profils.forEach(profile => {
     if(profile.status === "overdue"){
        overDue ++;
     }else if(profile.status === "almost due"){
        almostDue ++;
     }else{
        onTrack ++;
     }
   });
  return (
    <div className="grid grid-cols-2 gap-1 mt-10 sm:gap-2 lg:gap-4 lg:mt-15 md:grid-cols-4">
        <div className="flex p-6 sm:p-8 justify-center items-center gap-4 flex-col rounded-xl border-gray-100 border shadow-md">
            <span className="text-[#244D3F] font-semibold text-[32px]">{profils.length}</span>
            <p className="text-[18px] text-gray-600">Total Friends</p>
            

            
        </div>
        <div className="flex p-8 justify-center items-center gap-4 flex-col rounded-xl border-gray-100 border shadow-md">
            <span className="text-[#244D3F] font-semibold text-[32px]">{onTrack}</span>
            <p className="text-[18px] text-gray-600">On Track</p>
            

            
        </div>

        <div className="flex p-8 justify-center items-center gap-4 flex-col rounded-xl border-gray-100 border shadow-md">
            <span className="text-[#244D3F] font-semibold text-[32px]">{overDue}</span>
            <p className="text-[18px] text-gray-600">Overdue</p>
            

            
        </div>
        <div className="flex p-8 justify-center items-center gap-4 flex-col rounded-xl border-gray-100 border shadow-md">
            <span className="text-[#244D3F] font-semibold text-[32px]">{almostDue}</span>
            <p className="text-[18px] text-gray-600">Almost Due</p>
            

            
        </div>

    </div>
  )
}

export default HomeDashBoard