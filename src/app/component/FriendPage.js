'use client'

import { DataContext } from "@/app/lib/context/DataContext";
import { useParams } from "next/navigation"
import { useContext, useEffect, useState } from "react";

import FriendDetailsPage from "@/app/component/FriendDetailsPage";
import FriendLoading from "../friend/[name]/[id]/loading";
const FriendPage = () => {

    const [profileData,setProfileData] = useState({})
   
  const {id} = useParams();
  useEffect(() => {
    const loadProfile = async ()=>{
        const res = await fetch('/data.json');
        const data = await res.json();
        let profile =  data.find(p => p.id === parseInt(id));
        
        setProfileData(profile)
       

    }
    loadProfile()
  },[])
  
  return (
    <div>{profileData.name ? <FriendDetailsPage profileData={profileData} /> : <FriendLoading />}</div>
  )
}

export default FriendPage