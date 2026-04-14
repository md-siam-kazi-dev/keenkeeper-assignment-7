"use client";
import { useContext, useEffect } from "react";
import { DataContext } from "../lib/context/DataContext";
import Image from "next/image";
import Link from "next/link";
import FriendLoading from "../friend/[name]/[id]/loading";
import { BlurFade } from "@/components/ui/blur-fade";



const HomeProfileContainer = () => {
  const { profils, profileSetter } = useContext(DataContext);

  useEffect(() => {
    const fetchUrl = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      profileSetter(data);
    };
    fetchUrl();
  }, []);

  return (<> 
    <div className="container-div mt-10 mb-10">
        <h2 className="text-2xl font-bold ">Your Friends</h2>
    </div>
    {profils.length != 0 ?<div className="container-div grid grid-cols-1 sm:grid-cols-2 mb-20 lg:grid-cols-4 gap-3 mt-10">
        
        {profils.map(profile => {
            let profileLink = profile.name.toLowerCase().split(" ").join("");
            
            return (
                
                    <Link key={profile.id} href={`/friend/${profileLink}/${profile.id}`}  className="text-center  rounded-lg shadow-md  justify-center border border-gray-100 gap-1 sm:gap-2 xl:gap-4 py-6">
                        
                    <div className="h-30 w-30 rounded-full overflow-hidden flex justify-center items-center mx-auto  object-cover">
                        <Image src={profile.picture} height={120} width={120} alt={profile.name} className="mx-auto object-cover h-30 rounded-full "></Image>
                    </div>
                    <h3 className="text-xl mt-3 font-bold">{profile.name}</h3>
                    <span className=" text-xs  text-gray-500">{profile.days_since_contact}d ago</span>
                    <div className="tag-container">


                        {profile.tags.map(tag => {
                            return (
                                <div key={tag} className="p-1 rounded-md w-fit bg-amber-100 text-green-950">{
                                    tag.toUpperCase()
                                }
                            </div>
                            )
                        })}
                    </div>


                    <div className={`${profile.status_bg} w-fit text-xs mt-3 px-2 py-1 rounded-md mx-auto text-white font-semibold`}>{profile.status}</div>

                </Link>
                
            )
        })}
    </div>:<FriendLoading />}
    </>
  );
};

export default HomeProfileContainer;
