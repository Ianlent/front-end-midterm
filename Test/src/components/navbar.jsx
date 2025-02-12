import { Input } from "antd";

const Navbar = () => {
    return(
        <div className="w-full h-[48px] flex flex-row justify-between items-center">
            <p className="font-bold text-white text-[32px]">Anonime</p>
            <p className="font-normal text-[#868686] text-[18px]">Home</p>
            <p className="font-normal text-[#868686] text-[18px]">List anime</p>
            <Input placeholder="Search anime or movie" className="bg-[#374151] text-black placeholder-[#868686] placeholder:text-[18px] text-[18px] focus:ring-blue-500 px-3 py-2 border-none rounded-full w-[374.58px] h-[48px]"/>
        </div>
    )
}

export default Navbar