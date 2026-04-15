import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { DataContext } from "../lib/context/DataContext";

const FriendDetailsPage = ({ profileData }) => {
  const { historySetter} = useContext(DataContext);
  useEffect(() => {
    window.scrollTo(0,0);
  },[])

//   helper function 

  const historyObject = (type,name , personId,time) => {
    return {
      type,
      name,
      personId,
      time,
    };
  };

//   checkIn function 
  const checkIn = (check) => {

    check = check.charAt(0).toUpperCase() + check.slice(1);

    // toast 

    toast(
      <div className="flex">
        <img src="https://img.icons8.com/?size=24&id=63262&format=png&color=000000"></img>
        {check} with {profileData.name}
      </div>,
    );

    // timeing funtion 
    const date = new Date();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const time = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} `;

  
    // history saving fuction 
    historySetter(
      historyObject(check,profileData.name, 
      profileData.id ,time)
    );

    

    console.log()


    
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 mb-10 container-div lg:grid-cols-3 min-h-[60vh] gap-6">
      <div className="flex flex-col gap-3 mx-auto w-full">
        <div className="FDP-profile w-full">
          <Image
            src={profileData.picture}
            alt={profileData.name}
            height={100}
            width={100}
            className=" rounded-full object-cover h-25 "
          />
          <h1 className="text-xl font-bold text-center mt-3 ">{profileData.name}</h1>

          <div className={`${profileData.status_bg} status-div`}>
            {profileData.status}
          </div>

          <div className="tag-container">
            {profileData.tags &&
              profileData.tags.map((tag) => {
                return (
                  <div
                    key={tag}
                    className="p-1 rounded-md w-fit bg-amber-100 text-green-950"
                  >
                    {tag.toUpperCase()}
                  </div>
                );
              })}
          </div>
          <p className="text-[14px] text-gray-500 italic font-semibold text-center mt-3">
            "{profileData.bio}"
          </p>
          <p className="text-[12px] text-gray-500  font-semibold text-center mt-3">
            {profileData.email}
          </p>
        </div>
        <div className="FDPbtn">
          <img src="/assets/image.png " className="w-6 h-6"></img>Snooze 2 Weeks
        </div>
        <div className="FDPbtn">
          <img
            src="https://img.icons8.com/?size=100&id=14442&format=png&color=000000"
            className="w-6 h-6"
          ></img>
          Archive
        </div>
        <div className="FDPbtn text-red-600 ">
          <img
            src="https://img.icons8.com/?size=100&id=MHELKlQKXqut&format=png&color=000000 "
            className="w-6 h-6 mr-1"
          ></img>
          Delete
        </div>
      </div>

      <div className="col-span-1 sm:col-span-1 lg:col-span-2 md:col-span-1">
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-4">
          <div className="py-4 shadow border-gray-100 border rounded-lg text-center ">
            <h2 className="text-3xl mb-4 text-r  font-bold">
              {profileData.days_since_contact}
            </h2>
            <p className="text-gray-400">Days Since Contact</p>
          </div>

          <div className="py-4 border-gray-100 border shadow rounded-lg text-center">
            <h2 className="text-3xl mb-4 text-r  font-bold">
              {profileData.goal}
            </h2>
            <p className="text-gray-400">Goal</p>
          </div>

          <div className="py-4 border-gray-100 border shadow rounded-lg text-center col-span-2  lg:col-span-1">
            <h2 className="text-3xl mb-4 text-r  font-bold">
              {profileData.next_due_date}
            </h2>
            <p className="text-gray-400">Next Due</p>
          </div>

          <div className="col-span-2 lg:col-span-3 border-gray-100 border shadow flex justify-between rounded-lg p-6">
            <div className="flex justify-between flex-col gap-6">
              <p className="text-xl font-bold">Relationship Goal</p>
              <p className="text-gray-400">
                Connect every{" "}
                <span className="font-bold text-black">30 days</span>
              </p>
            </div>
            <div className="font-bold">Edit</div>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow border mt-4 border-gray-100">
          <h1 className="text-xl font-semibold mb-4">Quick Chek-in</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="check-in-btn" onClick={() => checkIn("call")}>
              <img src="https://img.icons8.com/?size=24&id=14187&format=png&color=000000" />
              <p className="font-semibold">Call</p>
            </div>

            <div className="check-in-btn" onClick={() => checkIn("text")}>
              <img src="https://img.icons8.com/?size=24&id=OKXXNn38cTcC&format=png&color=000000" />
              <p className="font-semibold">Text</p>
            </div>

            <div className="check-in-btn" onClick={() => checkIn("video")}>
              <img src="https://img.icons8.com/?size=24&id=11374&format=png&color=000000" />
              <p className="font-semibold">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
