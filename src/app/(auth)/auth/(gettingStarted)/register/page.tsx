"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")

    const hasMinLength = password.length >= 8
    const hasUpperCase = /[A-Z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    return (
        <div className="w-full">

            {/* Right Section */}
            <div className="flex items-center justify-center p-8">
                <Card className="w-full max-w-md border-0 shadow-none">
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">Let&apos;s get started</h2>
                            <div className="text-right text-sm">
                                Already have an account?{" "}
                                <Link href="/login" className="text-blue-600 hover:text-blue-700">
                                    Log in
                                </Link>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="Enter full name" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="e.g. john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>At least:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className={`flex items-center gap-2 ${hasMinLength ? "text-green-600" : ""}`}>
                                            <div className={`h-1.5 w-1.5 rounded-full ${hasMinLength ? "bg-green-600" : "bg-gray-300"}`} />
                                            Min. 8 characters
                                        </div>
                                        <div className={`flex items-center gap-2 ${hasUpperCase ? "text-green-600" : ""}`}>
                                            <div className={`h-1.5 w-1.5 rounded-full ${hasUpperCase ? "bg-green-600" : "bg-gray-300"}`} />
                                            One (1) uppercase letter
                                        </div>
                                        <div className={`flex items-center gap-2 ${hasNumber ? "text-green-600" : ""}`}>
                                            <div className={`h-1.5 w-1.5 rounded-full ${hasNumber ? "bg-green-600" : "bg-gray-300"}`} />
                                            One (1) number
                                        </div>
                                        <div className={`flex items-center gap-2 ${hasSpecialChar ? "text-green-600" : ""}`}>
                                            <div className={`h-1.5 w-1.5 rounded-full ${hasSpecialChar ? "bg-green-600" : "bg-gray-300"}`} />
                                            One (1) special character
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full" size="lg">
                                Sign Up
                            </Button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">or</span>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full" size="lg">
                                <Image
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTQ1LDI0YzAsMTEuNy05LjUsMjEtMjEsMjFTMywzNS43LDMsMjRTMTIuMywzLDI0LDNTNDUsMTIuMyw0NSwyNHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDUsMjRjMCwxMS43LTkuNSwyMS0yMSwyMVMzLDM1LjcsMywyNFMxMi4zLDMsMjQsM1M0NSwxMi4zLDQ1LDI0eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNCwxMi4xYzMuNywwLDYuOSwxLjMsOS41LDMuNGwtMy45LDMuOWMtMS42LTEuMS0zLjUtMS43LTUuNi0xLjdjLTQuMSwwLTcuNiwyLjctOC45LDYuNGgtNC43di00LjFDMTIuMiwxNC44LDE3LjYsMTIuMSwyNCwxMi4xeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNCwzNS45Yy02LjQsMC0xMS44LTIuNy0xNC42LTYuOGg0LjdjMS4zLDMuNyw0LjgsNi40LDguOSw2LjRjMi4xLDAsNC0wLjYsNS42LTEuN2wzLjksMy45QzMwLjksMzQuNiwyNy43LDM1LjksMjQsMzUuOXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzUuOSwyNGMwLDEuMi0wLjIsMi40LTAuNSwzLjVoLTQuN2MwLjMtMS4xLDAuNS0yLjMsMC41LTMuNXMtMC4yLTIuNC0wLjUtMy41aDQuN0MzNS43LDIxLjYsMzUuOSwyMi44LDM1LjksMjR6Ii8+PC9zdmc+"
                                    alt="Google logo"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                Sign in with Google
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

