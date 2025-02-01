"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Header() {
    const { theme, setTheme } = useTheme()

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="py-4 px-4 sm:px-6 lg:px-8 border-b dark:border-gray-800"
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
                >
                    Soften
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400">
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400">
                        Pages
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400">
                        Shop
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400">
                        Services
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400">
                        News
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </button>
                    <Link href="/cart" className="relative">
                        <ShoppingCart className="h-6 w-6" />
                        <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            0
                        </span>
                    </Link>
                    <Button className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100">
                        Buy Now
                    </Button>
                </div>
            </div>
        </motion.header>
    )
}

