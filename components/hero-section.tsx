"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"
import { SakuraLogo } from "./cute-icons"

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute top-24 left-0 w-48 h-48 opacity-20 hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            d="M0 100 Q40 80 80 100 Q120 120 160 80 Q180 60 200 70"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="40" cy="90" r="12" fill="currentColor" opacity="0.5" />
          <circle cx="80" cy="100" r="10" fill="currentColor" opacity="0.6" />
          <circle cx="120" cy="95" r="14" fill="currentColor" opacity="0.4" />
          <circle cx="160" cy="80" r="10" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <SakuraLogo className="w-5 h-5" />
              <span className="text-sm font-medium text-secondary-foreground">Where Beauty Blooms</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Your Hair, Our Passion
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              Welcome to JK&apos;s Hair Salon, where every visit is a personalized experience. Let us help you look and
              feel your absolute best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                onClick={scrollToServices}
                className="rounded-full px-8 py-6 text-lg border-2 border-primary text-foreground hover:bg-primary/10 bg-transparent"
              >
                View Services
              </Button>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-sm sm:text-base">503-526-6148</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm sm:text-base">Tue-Fri: 10AM-6:30PM | Sat: 10AM-5PM</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm sm:text-base">Walk-ins Welcome!</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-12 h-12 opacity-60">
              <SakuraLogo className="w-full h-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 opacity-50">
              <SakuraLogo className="w-full h-full" />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl"></div>
            <img
              src="/images/image.png"
              alt="JK's Hair Salon storefront"
              className="relative rounded-3xl w-full h-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
