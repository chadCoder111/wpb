"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Smartphone, Settings, Rocket } from "lucide-react"

export default function HowItWorks() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })

  const steps = [
    {
      ref: ref1,
      inView: inView1,
      icon: <Smartphone className="h-12 w-12 text-purple-500" />,
      title: "Connect your WhatsApp",
      description: "Link your WhatsApp account in seconds with a simple QR code scan.",
    },
    {
      ref: ref2,
      inView: inView2,
      icon: <Settings className="h-12 w-12 text-teal-500" />,
      title: "Build flows in minutes",
      description: "Drag and drop conversation blocks to create powerful automated flows.",
    },
    {
      ref: ref3,
      inView: inView3,
      icon: <Rocket className="h-12 w-12 text-purple-500" />,
      title: "Go live instantly",
      description: "Publish your bot with one click and start engaging with customers right away.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Three simple steps to automate your WhatsApp communication
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              ref={step.ref}
              initial={{ opacity: 0, y: 20 }}
              animate={step.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-card text-card-foreground shadow-sm"
            >
              <div className="p-4 rounded-full bg-primary/10">{step.icon}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>

              {index === 0 && (
                <div className="mt-4 relative w-full h-48 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                      <div className="grid grid-cols-3 grid-rows-3 gap-1 w-24 h-24">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="bg-white" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">Scan with WhatsApp</div>
                </div>
              )}

              {index === 1 && (
                <div className="mt-4 relative w-full h-48 border-2 border-muted-foreground/30 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 p-2">
                    <div className="flex space-x-2 mb-2">
                      <div className="h-6 w-20 rounded bg-primary/20"></div>
                      <div className="h-6 w-20 rounded bg-muted"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 rounded bg-muted p-2 text-xs flex items-center justify-center">
                        Welcome Message
                      </div>
                      <div className="h-16 rounded bg-muted p-2 text-xs flex items-center justify-center">
                        FAQ Block
                      </div>
                      <div className="h-16 rounded bg-primary/20 p-2 text-xs flex items-center justify-center">
                        Lead Capture
                      </div>
                      <div className="h-16 rounded bg-muted p-2 text-xs flex items-center justify-center">
                        Product Catalog
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="mt-4 relative w-full h-48 border-2 border-muted-foreground/30 rounded-lg flex items-center justify-center overflow-hidden">
                  <motion.div
                    initial={{ y: 100 }}
                    animate={step.inView ? { y: [-100, 0] } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute"
                  >
                    <Rocket className="h-16 w-16 text-primary" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={step.inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="absolute bottom-4 text-sm font-medium"
                  >
                    Bot is live! 🎉
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

