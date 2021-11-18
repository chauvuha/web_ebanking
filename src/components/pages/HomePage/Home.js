import React from 'react'
import HeroSection from '../HeroSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </div>
    )
}

export default Home
