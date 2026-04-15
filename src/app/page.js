import { ToastContainer } from "react-toastify";
import HomeDashBoard from "./component/HomeDashBoard";
import HomeHeading from "./component/HomeHeading";
import HomeProfileContainer from "./component/HomeProfileContainer";

export default function Home() {
  return (
    <main className="container-div mt-30 sm:mt-30 lg:mt-30">
      <HomeHeading />
      <HomeDashBoard />
      <HomeProfileContainer />

     
    </main>
  );
}
