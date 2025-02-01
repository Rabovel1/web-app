"use client"

import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div className="relative py-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    Services One
                </h1>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Home</span>
                    <span>/</span>
                    <span>Services One</span>
                </div>
            </motion.div>
        </div>
    )
}

