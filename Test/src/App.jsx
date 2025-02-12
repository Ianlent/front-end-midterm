import React, {useState}  from 'react'
import './App.css'
import Navbar from './components/navbar'
import Explore from './components/Explore/explore'
import Carousal from './components/carousal/carousal'
import NewRelease from './components/NewRelease/NewRelease'
import movieData from './data/data'


function App() {
    const [selectedMovie, setSelectedMovie] = useState(movieData[0])
    const onSelect = (movie) => {
        setSelectedMovie(movie)
    }
    return (
        <>
            <Navbar></Navbar>
            <Explore></Explore>
            <Carousal {...selectedMovie}></Carousal>
            <p className="text-[36px] font-semibold text-white mt-[25px]">
                New Release
            </p>
            <NewRelease data={movieData} onSelect={onSelect}></NewRelease>
        </>
    );
}

export default App;
