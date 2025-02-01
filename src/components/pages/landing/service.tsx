"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
    {
        title: "Software Design",
        description: "We provide best Software Service for any type of business as strategy management.",
        icon: "/placeholder.svg?height=80&width=80",
    },
    {
        title: "Data Security",
        description: "We provide best Software Service for any type of business as strategy management.",
        icon: "/placeholder.svg?height=80&width=80",
    },
    {
        title: "App Integration",
        description: "We provide best Software Service for any type of business as strategy management.",
        icon: "/placeholder.svg?height=80&width=80",
    },
    {
        title: "Social Marketing",
        description: "We provide best Software Service for any type of business as strategy management.",
        icon: "/placeholder.svg?height=80&width=80",
    },
    {
        title: "Development",
        description: "We provide best Software Service for any type of business as strategy management.",
        icon: "/placeholder.svg?height=80&width=80",
    },
    {
        title: "Business Strategy",
        description: "We provide best Software Service for any type of business as strategy management.",
        icon: "/placeholder.svg?height=80&width=80",
    },
]

export default function ServicesList() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-purple-600 dark:text-purple-400 uppercase tracking-wider">SERVICES</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                        Feel The Power Of Technology
                        <br />
                        Software Service
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow"
                        >
                            <Image
                                src={service.icon || "/placeholder.svg"}
                                alt={service.title}
                                width={80}
                                height={80}
                                className="mb-6"
                            />
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                            <button className="text-purple-600 dark:text-purple-400 flex items-center">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

