import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"


const FriendDetailsPage = ({profileData}) => {
  return (
    <div className="grid grid-cols-1 container-div sm:grid-cols-3 gap-6">

        <div className="flex flex-col gap-3 mx-auto w-full">
            <div className="FDP-profile w-full">
                <Image src={profileData.picture} alt={profileData.name} height={100} width={100} className=" rounded-full object-cover h-25 " />

                <div className={`${profileData.status_bg} status-div`}>{profileData.status}</div>

                <div className="tag-container">


                        {profileData.tags && profileData.tags.map(tag => {
                            return (
                                <div key={tag} className="p-1 rounded-md w-fit bg-amber-100 text-green-950">{
                                    tag.toUpperCase()
                                }
                            </div>
                            )
                        })}
                    </div>
                    <p className="text-[14px] text-gray-500 italic font-semibold text-center mt-3">"{profileData.bio}"</p>
                    <p className="text-[12px] text-gray-500  font-semibold text-center mt-3">{profileData.email}</p>
            </div>
            <div className="FDPbtn"><img src="/assets/image.png " className="w-6 h-6"></img>Snooze 2 Weeks</div>
            <div className="FDPbtn"><img src="/assets/image.png " className="w-6 h-6"></img>Snooze 2 Weeks</div>
            <div className="FDPbtn"><img src="/assets/image.png " className="w-6 h-6"></img>Snooze 2 Weeks</div>
        </div>



        <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2  lg:grid-cols-3 gap-4">
                <div className="py-4 shadow rounded-lg text-center ">
                    <h2 className="text-3xl mb-4 text-r  font-bold">{profileData.days_since_contact}</h2>
                    <p className="text-gray-400">Days Since Contact</p>
                </div>

                <div className="py-4 shadow rounded-lg text-center">
                    <h2 className="text-3xl mb-4 text-r  font-bold">{profileData.goal}</h2>
                    <p className="text-gray-400">Goal</p>
                </div>

                <div className="py-4 shadow rounded-lg text-center col-span-2  lg:col-span-1">
                    <h2 className="text-3xl mb-4 text-r  font-bold">{profileData.next_due_date}</h2>
                    <p className="text-gray-400">Next Due</p>
                </div>
            </div>
        </div>



    </div>
  )
}

export default FriendDetailsPage