import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  return (
    <div className="mt-40 sm:mt-40  flex flex-col gap-6 items-center container-div min-h-[70vh]">
      <h1 className="text-4xl font-bold">No Found</h1>
      <DotLottieReact src="/assets/not-found.lottie" loop autoplay className="w-full sm:w-8/10 lg:w-6/10"></DotLottieReact>
    </div>
  )
}

export default NotFound;