import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/80 to-accent text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest?</h2>
            <p className="text-lg opacity-90 mb-8">
              Connect with our investment team to explore opportunities tailored to your business goals.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "invest@kilifi.go.ke" },
                { icon: Phone, label: "Phone", value: "+254 (0) 41 234 5678" },
                { icon: MapPin, label: "Address", value: "Kilifi County Government, Kilifi" },
              ].map((contact, idx) => {
                const Icon = contact.icon
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center mt-1">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">{contact.label}</p>
                      <p className="opacity-80">{contact.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
