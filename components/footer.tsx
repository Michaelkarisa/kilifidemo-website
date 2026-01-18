import { Heart } from "lucide-react"

const footerSections = [
  {
    title: "Company",
    links: ["About Us", "Our Mission", "Contact", "Careers"],
  },
  {
    title: "Investment",
    links: ["Opportunities", "Sectors", "Apply", "Resources"],
  },
  {
    title: "Government",
    links: ["County Services", "Tender Updates", "Governance", "Media"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms", "Disclaimer", "Accessibility"],
  },
]

export default function Footer() {
  // Get current year dynamically
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Kilifi County</h3>
            <p className="opacity-80 text-sm">
              Promoting sustainable investment and economic development on Kenya's coast.
            </p>
          </div>
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href = {"#"+link.toLocaleLowerCase()} className="opacity-80 hover:opacity-100 text-sm transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-80 text-sm">
            © {currentYear} Kilifi County Government. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span>Made by Michael Karisa</span>
          </div>
        </div>
      </div>
    </footer>
  )
}