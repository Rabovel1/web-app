"use client"

import { useState } from "react"
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react"
import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string()
                .min(8, "Must be at least 8 characters")
                .matches(/[A-Z]/, "Must contain an uppercase letter")
                .matches(/\d/, "Must contain a number")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain a special character")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <div className="w-full">
            {/* Right Section */}
            <div className="flex items-center justify-center p-8">
                <Card className="w-full max-w-md border-0 shadow-none">
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">
                                Let&apos;s get started
                            </h2>
                        </div>

                        <form className="space-y-4" onSubmit={formik.handleSubmit}>
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <div className="relative w-full">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                        <User className="h-4 w-4" />
                                    </span>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter full name"
                                        className="pl-10 w-full"
                                        value={formik.values.fullName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.fullName && formik.errors.fullName ? (
                                    <p className="text-red-600 text-sm">
                                        {formik.errors.fullName}
                                    </p>
                                ) : null}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <div className="relative w-full">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                        <Mail className="h-4 w-4" />
                                    </span>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="e.g. john@example.com"
                                        className="pl-10 w-full"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.email && formik.errors.email ? (
                                    <p className="text-red-600 text-sm">
                                        {formik.errors.email}
                                    </p>
                                ) : null}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative w-full">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                        <Lock className="h-4 w-4" />
                                    </span>
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="pl-10 w-full"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <p className="text-red-600 text-sm">
                                        {formik.errors.password}
                                    </p>
                                ) : null}
                                <h4 className="font-medium text-sm">At least</h4>
                                <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                                    <div className={`flex items-center gap-2 ${formik.values.password.length >= 8 ? "" : ""}`}>
                                        <div
                                            className={`h-4 w-4 flex items-center justify-center rounded-full ${formik.values.password.length >= 8 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                                        >
                                            {formik.values.password.length >= 8 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>}
                                        </div>
                                        Min. 8 characters
                                    </div>

                                    <div className={`flex items-center gap-2 ${/[A-Z]/.test(formik.values.password) ? "" : ""}`}>
                                        <div
                                            className={`h-4 w-4 flex items-center justify-center rounded-full ${/[A-Z]/.test(formik.values.password) ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                                        >
                                            {/[A-Z]/.test(formik.values.password) && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>}
                                        </div>
                                        One (1) uppercase letter
                                    </div>

                                    <div className={`flex items-center gap-2 ${/\d/.test(formik.values.password) ? "" : ""}`}>
                                        <div
                                            className={`h-4 w-4 flex items-center justify-center rounded-full ${/\d/.test(formik.values.password) ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                                        >
                                            {/\d/.test(formik.values.password) && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>}
                                        </div>
                                        One (1) number
                                    </div>

                                    <div className={`flex items-center gap-2 ${/[a-z]/.test(formik.values.password) ? "" : ""}`}>
                                        <div
                                            className={`h-4 w-4 flex items-center justify-center rounded-full ${/[a-z]/.test(formik.values.password) ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                                        >
                                            {/[a-z]/.test(formik.values.password) && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>}
                                        </div>
                                        One (1) lowercase letter
                                    </div>

                                    <div className={`flex items-center gap-2 ${/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password) ? "" : ""}`}>
                                        <div
                                            className={`h-4 w-4 flex items-center justify-center rounded-full ${/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password) ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                                        >
                                            {/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password) && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>}
                                        </div>
                                        One (1) special character
                                    </div>
                                </div>

                            </div>

                            <Button type="submit" className="w-full" size="lg">
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
                                    src={"/assets/icon/icon.png"}
                                    className=""
                                    width={20}
                                    height={20}
                                    alt="google image"
                                />
                                Sign in with Google
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
