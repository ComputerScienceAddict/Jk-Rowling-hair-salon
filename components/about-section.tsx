import { Heart, Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent rounded-3xl"></div>
            <img
              src="/images/image.png"
              alt="JK's Hair Salon cozy waiting area"
              className="relative rounded-3xl w-full h-auto object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <span className="text-primary font-medium">About Us</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
              A Salon That Feels Like Home
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At JK&apos;s Hair Salon, we believe that great hair starts with a great experience. Our warm, welcoming
              atmosphere and skilled stylists ensure that every visit leaves you feeling pampered and beautiful.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With years of experience and a passion for making our clients look their best, we&apos;re dedicated to
              providing personalized service that exceeds your expectations.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">5000+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
