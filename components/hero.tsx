"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/kilifi-beach-sunset-tropical-coast.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blurred background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/kilifi-beach-sunset-tropical-coast.jpg')`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)', // prevents hard edges from blur
          zIndex: 0,
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="mb-6 inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out",
            }}
          >
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              The Gateway to Coastal Opportunities
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.1s",
            }}
          >
            Invest in Kilifi's Blue Economy
          </h1>

          <p
            className="text-lg md:text-xl text-gray-200 mb-8 text-balance"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.2s",
            }}
          >
            Transform your business with strategic investment opportunities in tourism, agriculture, fishing, and
            sustainable development at Kenya's premier coastal destination.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.3s",
            }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Explore Opportunities <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}