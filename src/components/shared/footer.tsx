"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">GET IN TOUCH</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">88 Street, 721 Floor, New York, USA</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">theme@123@gmail.com</p>
                        <p className="text-gray-600 dark:text-gray-400">+91 234-567-8900</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">INFORMATION</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    Team Member
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">FOLLOW US</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <Youtube className="h-6 w-6" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">
                            SUBSCRIBE OUR NEWSLETTER
                        </h3>
                        <div className="flex space-x-2">
                            <Input type="email" placeholder="Your Email Address" className="bg-gray-100 dark:bg-gray-800 border-0" />
                            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                                Subscribe Now
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400"
                >
                    <p>Copyright 2024 Soften Theme by Themesoft | All Rights Reserved</p>
                </motion.div>
            </div>
        </footer>
    )
}

