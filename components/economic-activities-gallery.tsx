"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const activities = [
  {
    title: "Traditional Fishing",
    image: "/fishermen-fishing-nets-traditional-boats.jpg",
    description: "Artisanal and commercial fishing operations",
  },
  {
    title: "Aquaculture & Fish Farming",
    image: "/aquaculture-fish-farming-ponds.jpg",
    description: "Modern fish farming facilities and production",
  },
  {
    title: "Coastal Tourism",
    image: "/beach-tourism-visitors-activities.jpg",
    description: "World-class beach resorts and tourist attractions",
  },
  {
    title: "Agriculture & Farming",
    image: "/farmers-harvesting-crops-agriculture.jpg",
    description: "Sustainable agricultural practices and harvesting",
  },
  {
    title: "Malindi Airport & Transportation",
    image: "/malindi-airport-aircraft-runway.jpg",
    description: "International airport connectivity and logistics hub",
  },
  {
    title: "Commercial Development",
    image: "/coastal-town-commercial-development.jpg",
    description: "Urban and commercial infrastructure",
  },
]

export default function EconomicActivitiesGallery() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary/5">
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
            Kilifi's Economic Activities
          </h2>
          <p
            className="text-lg text-muted-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.1s",
            }}
          >
            Explore the vibrant economic sectors that make Kilifi a premier investment destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${0.1 + idx * 0.05}s`,
              }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
