import { StarIcon, YelpIcon, HeartIcon } from "./cute-icons"

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden"
    >
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-pink-300 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-rose-300 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
            <HeartIcon className="w-4 h-4" />
            Happy Clients
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-[2rem] p-8 md:p-10 shadow-xl relative border-2 border-primary/10">
            {/* Decorative corner flowers */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-pink-500">
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <circle cx="12" cy="6" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="12" cy="18" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="6" cy="12" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="18" cy="12" r="2" fill="currentColor" opacity="0.7" />
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-rose-500">
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <circle cx="12" cy="6" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="12" cy="18" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="6" cy="12" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="18" cy="12" r="2" fill="currentColor" opacity="0.7" />
              </svg>
            </div>

            {/* Yelp badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full">
                <YelpIcon className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-red-600">Yelp Review</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-7 h-7 text-amber-400" filled />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8 font-medium">
              {
                '"Amazing service! Great vibe, super friendly staff, and my hair came out perfect. They took their time and made sure everything was exactly how I wanted. Highly recommend!"'
              }
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">IB</span>
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground text-lg">Isaac B.</p>
                <p className="text-sm text-muted-foreground">Lawrenceville, GA</p>
                <p className="text-xs text-primary mt-1 font-medium">November 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
