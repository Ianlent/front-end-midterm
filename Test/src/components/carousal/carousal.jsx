
const Carousal = ({ image , movieName , description }) => {
    return(
        <div className="bg-center bg-cover h-[400px] w-full" style={{ backgroundImage: `url(${image})` }}>
            <div className="bg-gradient-to-r from-[rgb(0,0,0,0.75)] to-[rgb(0,0,0,0.1)] h-full flex flex-row justify-start items-end">
                <div className="flex flex-col text-white mb-[40px] ml-[50px] w-[571px]">
                    <p className="text-[36px] font-semibold mb-[25px]">{movieName}</p>
                    <p className="text-[16px] leading-[27px] h-[75px] truncate text-wrap">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Carousal