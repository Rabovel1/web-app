// components/MaxWidthWrapper.js
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const MaxWidthWrapper = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={cn("w-full   px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
