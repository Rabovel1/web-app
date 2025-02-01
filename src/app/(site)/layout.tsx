import Footer from '@/components/shared/footer'
import Header from '@/components/shared/navbar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout