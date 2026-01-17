"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="about" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="rounded-xl overflow-hidden shadow-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.95)",
              transition: "all 0.7s ease-out",
            }}
          >
            <img
              src="/farmers-harvesting-crops-agriculture.jpg"
              alt="Kilifi farmers in agricultural fields demonstrating sustainable farming"
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.1s",
              }}
            >
              About Kilifi County Investment Corporation
            </h2>
            <p
              className="text-lg mb-6 opacity-90"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.2s",
              }}
            >
              Established under the Kilifi County Investment and Development Corporation Act, our mandate is to promote,
              attract, and support investment activities across all sectors of the county economy.
            </p>
            <div
              className="space-y-4 mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.3s",
              }}
            >
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                <p className="opacity-90">
                  Transform Kilifi into the leading investment destination on Kenya's coast through strategic
                  partnerships, innovation, and sustainable development.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                <p className="opacity-90">
                  A prosperous Kilifi County with thriving enterprises, skilled workforce, and world-class
                  infrastructure attracting global investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
