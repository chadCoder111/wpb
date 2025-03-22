"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Rocket } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

export default function LiveActivityFeed() {
  const [activities, setActivities] = useState<Array<{ id: number; text: string; icon: JSX.Element }>>([])
  const [currentActivity, setCurrentActivity] = useState<number>(0)

  const allActivities = [
    { id: 1, text: "Sarah from NYC just launched a bot", icon: <MessageSquare className="h-4 w-4" /> },
    { id: 2, text: "TechCorp upgraded to Pro", icon: <Rocket className="h-4 w-4" /> },
    { id: 3, text: "John from London connected WhatsApp", icon: <MessageSquare className="h-4 w-4" /> },
    { id: 4, text: "EcoStore automated 1,000+ messages today", icon: <MessageSquare className="h-4 w-4" /> },
    { id: 5, text: "FashionBrand upgraded to Pro", icon: <Rocket className="h-4 w-4" /> },
    { id: 6, text: "Maria from Spain launched a bot", icon: <MessageSquare className="h-4 w-4" /> },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % allActivities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [allActivities.length])

  useEffect(() => {
    setActivities([allActivities[currentActivity]])
  }, [currentActivity])

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence mode="wait">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card shadow-lg rounded-full px-4 py-2 flex items-center space-x-2 border"
          >
            <div className="p-1 rounded-full bg-primary/10 text-primary">{activity.icon}</div>
            <span className="text-sm">{activity.text}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

