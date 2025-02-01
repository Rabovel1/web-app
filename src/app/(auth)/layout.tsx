'use client'
import AuthNav from '@/components/shared/auth/authNav'
import SectionWrapper from '@/components/shared/sectionWrapper'
import { usePathname } from 'next/navigation'

import React, { ReactNode, useEffect, useState } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    const [page, setPage] = useState<string>("")
    const pathname = usePathname()

    useEffect(() => {

        if (pathname.includes("/login")) {
            setPage("LOGIN")
        } else if (pathname.includes("/register")) {
            setPage("REGISTER")
        }
    }, [pathname])

    return (
        <SectionWrapper className='p-0 relative'>


            <AuthNav page={page} className='fixed w-full top-0  z-10 ' />


            {children}
        </SectionWrapper>
    )
}

export default Layout