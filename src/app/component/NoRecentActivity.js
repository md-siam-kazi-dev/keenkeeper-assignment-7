'use client';
import {  DotLottieReact } from '@lottiefiles/dotlottie-react'
import React, { useRef } from 'react'

const NoRecentActivity = () => {
     const dotLottieRef = useRef(null);
  return (
    <div className='container-div  flex h-[60vh] flex-col items-center '>
        <DotLottieReact src='/assets/nodata.lottie' loop autoplay dotLottieRefCallback={(dotLottie) => {
          dotLottieRef.current = dotLottie;
        }} className=' h-40' />
        <p className='text-2xl font-bold'>No Recent Activity</p>

    </div>
  )
}

export default NoRecentActivity