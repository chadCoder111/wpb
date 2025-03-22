"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
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
    <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600/10 to-teal-500/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your WhatsApp?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start automating your customer conversations today
            </p>
          </div>

          <div className="w-full max-w-sm space-y-2 mt-6">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Your phone number"
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
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Start Free <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              No credit card required. Free plan includes 500 messages/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

