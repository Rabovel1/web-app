import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className }) => {
    return (
        <div className={cn("p-8 min-h-screen", className)}>
            {children}
        </div>
    );
}

export default SectionWrapper;