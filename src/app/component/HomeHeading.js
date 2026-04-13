import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeHeading = () => {
  return (
    <div className="w-full text-center">
      <h1 className="text-2xl font-extrabold sm:text-3xl md:text-4xl xl:text-5xl text-black mb-4">
        Friends to keep close in your life
      </h1>
      <p className="o text-gray-500 w-8/10 mx-auto md:w-full">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="bg-r p-3 mt-4 rounded-[4px] text-white font-semibold">
        <FontAwesomeIcon icon={faPlus} /> Add a Friend
      </button>
    </div>
  );
};

export default HomeHeading;
