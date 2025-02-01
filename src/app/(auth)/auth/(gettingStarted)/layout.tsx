import Image from 'next/image';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {

    return (
        <div className="min-h-screen flex relative">
            {/* Left Section */}
            <div className="relative basis-4/12 hidden lg:flex flex-col justify-between p-8 bg-gradient-to-br from-blue-600 to-blue-700">
                {/* Centralized Content */}
                <div className="flex-grow flex items-center justify-center">
                    <div className="">
                        <h2 className="text-4xl font-thin text-white mb-8">
                            Take the first step toward financial freedom.
                        </h2>
                        <div className="relative">
                            <Image
                                src="/"
                                alt="Financial chart illustration"
                                fill
                                className="object-contain opacity-50"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-white/60 text-sm text-center">© 2024 Rabovel</div>
            </div>

            <div className='flex items-center justify-center flex-col w-full'>{children}</div>
        </div>
    );
};

export default layout;
