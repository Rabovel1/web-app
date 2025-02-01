"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionWrapper from "@/components/shared/sectionWrapper"

const plans = [
    {
        name: "Basic",
        price: "34",
        features: ["50 Gb Bandwidth", "Unlimited Site Features", "10 Free Optimization", "24/7 Hours Support"],
    },
    {
        name: "Standard",
        price: "49",
        features: ["50 Gb Bandwidth", "Unlimited Site Features", "10 Free Optimization", "24/7 Hours Support"],
    },
]

export default function Pricing() {
    return (
        <SectionWrapper className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-purple-600 dark:text-purple-400 uppercase tracking-wider">PRICING PLAN</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold">Choose Affordable Prices</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-6">
                                ${plan.price}
                                <span className="text-base font-normal text-gray-600 dark:text-gray-400">/Month</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                Our plans come with a 100% free 14 day trial.
                                <br />
                                No credit card needed.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                                        <Check className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                                Purchase Now
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}

