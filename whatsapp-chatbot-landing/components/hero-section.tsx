"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Magic link sent to " + phoneNumber)
      setPhoneNumber("")
    }, 1500)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-500">
                Your WhatsApp, but smarter. Automate sales & support while you sleep.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join 500+ businesses using AI chatbots to reply instantly, qualify leads, and boost revenue – no coding
                required.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Your phone number – we'll text you a magic link!"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Launch My Bot in 60s"}
                </Button>
              </form>
              <div className="flex items-center text-sm text-muted-foreground">
                <Shield className="mr-1 h-4 w-4" />
                <span>GDPR/CCPA compliant – we don't store your data</span>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border bg-card text-card-foreground shadow-lg overflow-hidden"
            >
              <div className="bg-green-600 p-3 text-white flex items-center">
                <div className="rounded-full bg-white h-3 w-3 mr-2"></div>
                <span className="font-medium">WhatsApp</span>
              </div>
              <div className="p-4 space-y-4 bg-gray-100 dark:bg-gray-800">
                <div className="flex justify-end">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Hi there! How can I help you today?</p>
                    <p className="text-xs text-right text-gray-500 dark:text-gray-400">10:30 AM</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">I'd like to check my order status</p>
                    <p className="text-xs text-right text-gray-500 dark:text-gray-400">10:31 AM</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">
                      I found your order #12345. It's currently being shipped and will arrive by tomorrow. Here's your
                      tracking link: <span className="text-blue-500 underline">track.example.com/12345</span>
                    </p>
                    <p className="text-xs text-right text-gray-500 dark:text-gray-400">10:31 AM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating particles */}
            <div className="absolute -z-10 inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  initial={{
                    x: Math.random() * 100 - 50 + "%",
                    y: Math.random() * 100 + "%",
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, "-100%"],
                    opacity: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                >
                  {["💰", "🚀", "💬"][i % 3]}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

