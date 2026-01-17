"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, MapPin, Waves, Users, Zap, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  {
    icon: Waves,
    title: "Blue Economy Leader",
    description: "Strategic position on the Indian Ocean with world-class fishing and marine resources",
  },
  {
    icon: MapPin,
    title: "Tourism Destination",
    description: "Premier coastal destination attracting domestic and international visitors year-round",
  },
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description: "Consistent growth in key sectors with favorable business environment and incentives",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Access to diverse talent pool with expertise in fishing, tourism, and agriculture sectors",
  },
  {
    icon: Zap,
    title: "Infrastructure Development",
    description: "Malindi International Airport, modern roads, and utilities supporting business operations",
  },
  {
    icon: Award,
    title: "Government Support",
    description: "Active investment promotion and business-friendly policies from county government",
  },
]

export default function WhyInvest() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="why" className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out",
            }}
          >
            Why Invest in Kilifi County
          </h2>
          <p
            className="text-lg text-muted-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.1s",
            }}
          >
            Kilifi County offers unique opportunities for growth, innovation, and profitability across multiple sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease-out ${0.1 + idx * 0.05}s`,
                }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{reason.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
