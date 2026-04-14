"use client";
import { useContext, useEffect } from "react";
import { DataContext } from "../lib/context/DataContext";

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
    <div className="container-div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
        
        {profils.map(profile => {
            return (
                <div key={profile.id} className="text-center shadow-md border border-gray-100 gap-1 sm:gap-2 xl:gap-4 py-6">
                    <img src={profile.picture} className="mx-auto rounded-full h-30 w-30 bg-cover"></img>
                    <h3 className="text-xl mt-3 font-bold">{profile.name}</h3>
                    <span className="mt-2 mb-2 text-xs text-gray-500">{profile.days_since_contact}d ago</span>
                    <div className="flex w-full justify-center gap-0.5 text-xs font-medium">
                        {profile.tags.map(tag => {
                            return (
                                <div className="p-1 rounded-md w-fit bg-amber-100 text-green-950">{
                                    tag.toUpperCase()
                                }
                            </div>
                            )
                        })}
                    </div>
                    <div className={`${profile.status_bg} w-fit text-xs mt-2 px-2 py-1 rounded-md mx-auto text-white font-semibold`}>{profile.status}</div>

                </div>
            )
        })}
    </div>
    </>
  );
};

export default HomeProfileContainer;
