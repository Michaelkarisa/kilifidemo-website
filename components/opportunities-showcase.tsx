"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fish, Plane, Leaf, Briefcase } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const opportunities = [
  {
    icon: Fish,
    title: "Fisheries & Aquaculture",
    description: "Industrial-scale fishing operations and sustainable aquaculture development projects",
    highlights: ["High ROI", "Export Market", "Sustainable"],
    color: "text-blue-600",
    image: "/fish-market-fresh-seafood-catch.jpg",
  },
  {
    icon: Briefcase,
    title: "Tourism Development",
    description: "Luxury resorts, eco-lodges, and hospitality infrastructure development",
    highlights: ["Growing Demand", "Year-round Market", "Premium Rates"],
    color: "text-amber-600",
    image: "/luxury-beach-resort-tourism.jpg",
  },
  {
    icon: Leaf,
    title: "Agriculture & Agribusiness",
    description: "Coconut farming, fruit processing, and sustainable agricultural initiatives",
    highlights: ["Local Demand", "Value Addition", "Export Ready"],
    color: "text-green-600",
    image: "/coconut-plantation-agriculture.jpg",
  },
  {
    icon: Plane,
    title: "Malindi Airport & Logistics",
    description: "International air cargo, passenger terminals, and transportation hubs development",
    highlights: ["Strategic Location", "Growing Sector", "Infrastructure Support"],
    color: "text-sky-600",
    image: "/malindi-airport-aircraft-runway.jpg",
  },
]

export default function OpportunitiesShowcase() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="opportunities" className="py-20 md:py-32">
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
            Investment Opportunities
          </h2>
          <p
            className="text-lg text-muted-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.1s",
            }}
          >
            Discover lucrative opportunities across key sectors driving Kilifi's economic growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {opportunities.map((opp, idx) => {
            const Icon = opp.icon
            return (
              <div
                key={idx}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease-out ${0.1 + idx * 0.1}s`,
                }}
              >
                <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  {/* Image container */}
                  <div className="h-48 overflow-hidden bg-muted">
                    <img
                      src={opp.image || "/placeholder.svg"}
                      alt={opp.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card content */}
                  <Card className="border-0 rounded-none">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${opp.color}`} />
                        </div>
                        <Badge variant="outline" className="bg-accent/10 text-accent border-0">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle>{opp.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{opp.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {opp.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary" className="bg-secondary/80">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            View Full Opportunities Directory
          </Button>
        </div>
      </div>
    </section>
  )
}
