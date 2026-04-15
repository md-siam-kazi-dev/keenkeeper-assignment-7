import { ToastContainer } from "react-toastify";
import HomeDashBoard from "./component/HomeDashBoard";
import HomeHeading from "./component/HomeHeading";
import HomeProfileContainer from "./component/HomeProfileContainer";

export default function Home() {
  return (
    <main className="container-div mt-50 sm:mt-30 min-h-[50vh]">
      <HomeHeading />
      <HomeDashBoard />
      <HomeProfileContainer />

     
    </main>
  );
}
