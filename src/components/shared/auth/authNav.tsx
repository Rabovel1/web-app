import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MaxWidthWrapper from '../maxWidthWrapper';

interface AuthNavProps {
    className?: string;
    page: "LOGIN" | "REGISTER" | string;
}

const AuthNav: React.FC<AuthNavProps> = ({ className, page }) => {
    return (
        <MaxWidthWrapper className={`w-full py-4 flex justify-between items-center ${className}`}>
            <Image src={page === "REGISTER" ? "/assets/logo.png" : "/assets/logo_blue.png"} alt="Logo" width={148} height={148} />

            <p>
                {page === "LOGIN" ? "Don't have an account?" : "Already have an account?"}
                <Link href={page === "LOGIN" ? "/auth/register" : "/auth/login"} className="ml-1 font-semibold text-primary bg-primary-foreground hover:underline">
                    {page === "LOGIN" ? "Sign Up" : "Sign In"}
                </Link>
            </p>
        </MaxWidthWrapper>
    )
}

export default AuthNav