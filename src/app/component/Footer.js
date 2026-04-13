import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UploadCloud } from "lucide-react"
import Image from "next/image"


const Footer = () => {
  return (
    <footer className='w-full  bg-[#244D3F]  pt-20'>
        <div className="container-div pb-10 border-b  border-b-[#dddddd23]
         text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl md:text-4xl font-extrabold text-white ">KeenKeeper</h1>
            <p className='text-[16px] text-white opacity-70 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <h3 className="text-xl font-bold text-white">Social Links</h3>
                <div className="flex gap-2 ">
                    <Image src='/assets/facebook.png' width="40" height= "40"></Image>
                    <Image src='/assets/twitter.png' width="40" height= "40"></Image>
                    <Image src='/assets/instagram.png' width="40" height= "40"></Image>
                </div>
            </div>
        </div>
        <div className="flex container-div p-4 justify-between items-center flex-col md:flex-row">
            <p className="text-[16px] opacity-50 text-white">
                © 2026 KeenKeeper. All rights reserved.</p>
            <ul className="text-[16px] text-white opacity-50 flex gap-4" ><li>Privacy Policy</li>
            <li>Terms of Service</li><li>Cookies</li></ul>

        </div>
    </footer>
  )
}

export default Footer