

const TimelineCard = ({data}) => {
    let imgSrc ;
    console.log(data.type)
    if(data.type === "Call"){
        imgSrc = '/assets/call.png';

    }else if(data.type === 'Text'){
        imgSrc = '/assets/text.png'
    }else{
        imgSrc = '/assets/video.png'
    }
  return (
    <div className="w-full rounded-lg shadow border border-gray-100 flex p-5 justify-between items-center">
        <div className="flex items-center gap-2.5">
            <img src={imgSrc}></img>
            <div>
                <p className='text-gray-400 '><span className='text-black font-bold'>{data.type}</span> with {data.name}</p>
                <p className='text-xs text-gray-500'>{data.time}</p>
            </div>

        </div>
    </div>
  )
}

export default TimelineCard