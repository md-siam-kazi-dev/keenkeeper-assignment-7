
import HomeDashBoard from "./component/HomeDashBoard";
import HomeHeading from "./component/HomeHeading";
import HomeProfileContainer from "./component/HomeProfileContainer";




export default function Home() {
  return (
     <main className="container-div mt-10 sm:mt-14 lg:mt-20">
      <HomeHeading />
      <HomeDashBoard />
      <HomeProfileContainer />

       

     </main>
  );
}
