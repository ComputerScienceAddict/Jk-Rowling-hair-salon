"use client"

const galleryImages = [
  {
    src: "/images/image.png",
    alt: "JK's Hair Salon styling stations with decorative masks",
    caption: "Our Styling Stations",
  },
  {
    src: "/images/image.png",
    alt: "JK's Hair Salon wash area with Chanel art",
    caption: "Relaxing Wash Area",
  },
  {
    src: "/images/image.png",
    alt: "JK's Hair Salon cozy waiting area",
    caption: "Cozy Waiting Area",
  },
  {
    src: "/images/image.png",
    alt: "JK's Hair Salon shampoo stations",
    caption: "Shampoo Stations",
  },
  {
    src: "/images/image.png",
    alt: "JK's Hair Salon interior view",
    caption: "Professional Environment",
  },
  {
    src: "/images/image.png",
    alt: "JK's Hair Salon storefront",
    caption: "Our Welcoming Entrance",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Gallery</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Step Inside Our Salon
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Take a peek at our cozy, welcoming space where beauty happens every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-background font-medium">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
