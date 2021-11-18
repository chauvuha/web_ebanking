import React from 'react'
import { homeObjThree } from './Data'
import HeroSection from '../HeroSection'

function Products() {
    return (
        <div>
        <HeroSection {...homeObjThree} />
    </div>
    )
}

export default Products
