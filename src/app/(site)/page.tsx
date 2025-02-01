import Hero from '@/components/pages/landing/hero'
import Pricing from '@/components/pages/landing/pricing'
import ServicesList from '@/components/pages/landing/service'
import Stats from '@/components/pages/landing/stats'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <ServicesList />
            <Stats />
            <Pricing />

        </div>
    )
}

export default page