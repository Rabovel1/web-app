import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface AuthNavProps {
    className?: string;
    page: "LOGIN" | "REGISTER";
}

const AuthNav: React.FC<AuthNavProps> = ({ className, page }) => {
    return (
        <div className={`w-full flex justify-between items-center ${className}`}>
            <Image src={page === "REGISTER" ? "/assets/logo.png" : "/assets/logo_blue.png"} alt="Logo" width={40} height={40} />

            <p>
                {page === "LOGIN" ? "Don't have an account?" : "Already have an account?"}
                <Link href={page === "LOGIN" ? "/auth/register" : "/auth/login"} className="ml-1 font-semibold text-primary bg-primary-foreground hover:underline">
                    {page === "LOGIN" ? "Sign Up" : "Sign In"}
                </Link>
            </p>
        </div>
    )
}

export default AuthNav