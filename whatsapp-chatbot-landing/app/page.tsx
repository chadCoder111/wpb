import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import PricingSection from "@/components/pricing-section"
import TestimonialSection from "@/components/testimonial-section"
import CtaSection from "@/components/cta-section"
import TrustBadges from "@/components/trust-badges"
import LiveActivityFeed from "@/components/live-activity-feed"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <HowItWorks />
      <PricingSection />
      <TestimonialSection />
      <TrustBadges />
      <LiveActivityFeed />
      <CtaSection />
    </main>
  )
}

