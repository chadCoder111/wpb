import { Shield, Lock, CheckCircle, Award } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "GDPR Compliant",
      description: "Your data is protected and handled according to regulations",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Encryption",
      description: "End-to-end encryption for all your conversations",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "99.9% Uptime",
      description: "Reliable service that's always available when you need it",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "WhatsApp Approved",
      description: "Official WhatsApp Business Solution Provider",
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
              <div className="p-2 rounded-full bg-primary/10 text-primary mb-4">{badge.icon}</div>
              <h3 className="font-medium mb-1">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

