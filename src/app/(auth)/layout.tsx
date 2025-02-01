import AuthNav from '@/components/shared/auth/authNav'
import SectionWrapper from '@/components/shared/sectionWrapper'

import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <SectionWrapper className='p-0 relative'>


            <AuthNav page="LOGIN" className='fixed w-full top-0  z-10 ' />


            {children}
        </SectionWrapper>
    )
}

export default layout