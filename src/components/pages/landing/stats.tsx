"use client"

import { motion } from "framer-motion"

const stats = [
    { value: "482", label: "Project Done", symbol: "+" },
    { value: "98", label: "Success Rate", symbol: "%" },
    { value: "234", label: "Winning Awards", symbol: "+" },
    { value: "72", label: "Happy Client", symbol: "K" },
]

export default function Stats() {
    return (
        <div className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
                                {stat.value}
                                <span>{stat.symbol}</span>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

