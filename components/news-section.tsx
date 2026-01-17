"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const news = [
  {
    date: "January 15, 2025",
    title: "New Tourism Initiative Attracts Major Resort Investment",
    description: "Governor announces $50 million investment in luxury resort development along Kilifi coastline",
  },
  {
    date: "January 8, 2025",
    title: "Fisheries Sector Shows Record Growth in Q4 2024",
    description: "Kilifi fisheries exports increase by 35% with new European market partnerships established",
  },
  {
    date: "December 30, 2024",
    title: "Infrastructure Projects Completed Ahead of Schedule",
    description: "Malindi Airport runway expansion and road upgrades improve connectivity for businesses county-wide",
  },
]

export default function NewsSection() {
  const { ref } = useScrollAnimation()
const isVisible = true;
  return (
    <section ref={ref} id="news" className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            Latest News & Updates
          </h2>
          <p
            className="text-lg text-muted-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            Stay informed about opportunities and developments in Kilifi County
          </p>
        </div>

        {/* Animated News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {news.map((item, idx) => (
            <Card
              key={idx}
              className="hover:shadow-lg transition-shadow hover:border-primary/30"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease-out ${0.2 + idx * 0.1}s`,
              }}
            >
              <CardHeader>
                <span className="text-xs font-semibold text-accent uppercase">{item.date}</span>
                <CardTitle className="mt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Animated Button */}
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s",
          }}
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2 bg-transparent">
            Read More News <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}