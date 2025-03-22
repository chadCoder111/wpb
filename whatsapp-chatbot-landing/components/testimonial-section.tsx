"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      company: "StyleBoutique",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "This bot paid for itself in 3 days. Our customer response time went from hours to seconds, and sales increased by 32%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "TechGrowth",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "We've tried other chatbot solutions, but nothing compares to how easy this is to set up. Our lead qualification has improved dramatically.",
      rating: 5,
    },
    {
      name: "Jessica Williams",
      role: "Customer Support Manager",
      company: "ServicePro",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Our team can now focus on complex issues while the bot handles 80% of routine inquiries. The ROI has been incredible.",
      rating: 4,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join hundreds of satisfied businesses automating their WhatsApp communication
            </p>
          </div>

          <div className="flex items-center space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm font-medium">4.9/5 from 200+ reviews</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>

                  <blockquote className="flex-grow mb-4 text-lg italic">"{testimonial.content}"</blockquote>

                  <div className="flex items-center mt-auto">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-12 w-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground font-medium">
                  Company {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

