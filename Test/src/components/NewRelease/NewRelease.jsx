import { useState } from "react"
import Card from "../card/card"


const NewRelease = ({ data , onSelect }) => {
    return(
        <div className="grid grid-cols-6 gap-[30px] justify-items-center">
            {data.map((movie) => (
                <Card onSelection={onSelect} key={movie.id} data={movie}/>
            ))}
        </div>
    )
}

export default NewRelease