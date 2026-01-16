import { Card, CardContent } from "@/components/ui/card"
import { ScissorsIcon, SparkleIcon, DropletIcon, FlowerIcon } from "./cute-icons"

const services = [
  {
    icon: ScissorsIcon,
    title: "Haircuts & Styling",
    description: "Precision cuts tailored to your face shape and lifestyle. From classic to trendy styles.",
    price: "From $25",
    color: "bg-pink-100",
  },
  {
    icon: SparkleIcon,
    title: "Color & Highlights",
    description: "Full color, balayage, highlights, and corrective color services using premium products.",
    price: "From $65",
    color: "bg-amber-100",
  },
  {
    icon: DropletIcon,
    title: "Treatments",
    description: "Deep conditioning, keratin treatments, and scalp therapies for healthy, beautiful hair.",
    price: "From $35",
    color: "bg-blue-100",
  },
  {
    icon: FlowerIcon,
    title: "Special Occasions",
    description: "Professional blowouts, updos, and styling for weddings, proms, and special events.",
    price: "From $40",
    color: "bg-rose-100",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M180 20 Q140 60 120 100 Q100 140 60 180" stroke="currentColor" strokeWidth="3" fill="none" />
          <circle cx="180" cy="20" r="8" fill="currentColor" />
          <circle cx="150" cy="50" r="6" fill="currentColor" />
          <circle cx="120" cy="100" r="8" fill="currentColor" />
          <circle cx="90" cy="140" r="6" fill="currentColor" />
          <circle cx="60" cy="180" r="8" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
            Our Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Treatments Made Just for You
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
            We offer a full range of hair services to help you achieve your perfect look.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-3xl overflow-hidden group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-4 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0`}
                >
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {service.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
