import React from 'react'
import { homeObjOne } from './Data'
import HeroSection from '../HeroSection'

function Signup() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
        </div>
    )
}

export default Signup
