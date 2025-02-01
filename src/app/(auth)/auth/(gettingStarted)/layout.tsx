import SectionWrapper from '@/components/shared/sectionWrapper'
import Image from 'next/image'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='min-h-screen flex relative'>
            {/* Left Section */}
            <div className="relative basis-4/12 hidden lg:flex flex-col justify-between p-8 bg-gradient-to-br from-blue-600 to-blue-700">

                <div className="relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-8">Take the first step toward financial freedom.</h2>
                    <div className="relative h-64">
                        <Image
                            src="/"
                            alt="Financial chart illustration"
                            fill
                            className="object-contain opacity-50"
                        />
                    </div>
                </div>
                <div className="relative z-10 text-white/60 text-sm">© 2024 Rabovel</div>
            </div>


            <div>
                {children}
            </div>

        </div>
    )
}

export default layout