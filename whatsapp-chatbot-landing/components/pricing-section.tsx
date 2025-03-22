"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const pricingPlans = [
    {
      title: "Starter",
      price: "$0",
      description: "Perfect for trying out the platform",
      features: ["1 bot", "500 messages/month", "3 pre-built templates", "Basic analytics", "Community support"],
      cta: "Start Free",
      popular: false,
    },
    {
      title: "Pro",
      price: "$49",
      description: "For growing businesses",
      features: [
        "Unlimited bots",
        "10,000 messages/month",
        "All templates",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
      ],
      cta: "Get Pro",
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "Custom SLA",
        "Dedicated account manager",
        "API access",
        "SSO & advanced security",
        "Custom integrations",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pricing That Feels Like Stealing
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your business needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative"
            >
              <Card
                className={`h-full flex flex-col ${hoveredCard === index ? "border-primary shadow-lg" : ""} ${plan.popular ? "border-primary" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="flex items-baseline justify-center mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}
                  </div>
                  <CardDescription className="text-center mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.popular && <Sparkles className="h-4 w-4 mr-2" />}
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>

              {plan.popular && hoveredCard === index && (
                <motion.div
                  className="absolute -inset-px rounded-lg z-[-1] bg-gradient-to-r from-purple-500 to-teal-500 opacity-70 blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Scarcity tactic */}
        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            <span className="text-primary font-bold">Pro Tier:</span> Only 100 slots left at $49/month
          </p>
        </div>
      </div>
    </section>
  )
}

