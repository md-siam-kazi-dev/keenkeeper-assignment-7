'use client'

import { DataContext } from "@/app/lib/context/DataContext";
import { useParams } from "next/navigation"
import { useContext, useEffect, useState } from "react";
import FriendLoading from "./loading";
import FriendDetailsPage from "@/app/component/FriendDetailsPage";

const Friend = ({params}) => {
    const [profileData,setProfileData] = useState({})
   
  const {id} = useParams();
  useEffect(() => {
    const loadProfile = async ()=>{
        const res = await fetch('/data.json');
        const data = await res.json();
        let profile =  data.find(p => p.id === parseInt(id));
        console.log(profile)
        setProfileData(profile)
       

    }
    loadProfile()
  },[])
  
    
  return (
    <div>
       
       {profileData ? <FriendDetailsPage profileData={profileData} /> :<FriendLoading />}

     

    </div>
  )
}

export default Friend