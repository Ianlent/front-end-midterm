const Card = ({ data , onSelection }) => {
    return(
        <div onClick={() => onSelection(data)} className="rounded-[10px] h-[285px] w-full bg-cover bg-center" style={{backgroundImage: `url(${data.image})`}}>
            <div className="bg-gradient-to-b from-[rgb(25,32,38,0)] to-[rgb(25,32,38)] h-full">
                <div className="flex flex-col justify-center items-center text-[16px] text-white text-center relative top-[240px]">
                    <p className="mb-[15px] font-normal">Episode {data.episode}</p>
                    <p className="pb-[5px] font-semibold">{data.movieName}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Card