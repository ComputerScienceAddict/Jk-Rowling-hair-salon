"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryImages = [
  {
    src: "/images/styling-stations.jpg",
    alt: "JK's Hair Salon styling stations with decorative masks and modern lighting",
    caption: "Our Styling Stations",
  },
  {
    src: "/images/washing-area-checkerboard.jpg",
    alt: "JK's Hair Salon washing area with checkerboard floor and vintage hair dryer",
    caption: "Relaxing Wash Area",
  },
  {
    src: "/images/waiting-area.jpg",
    alt: "JK's Hair Salon cozy waiting area with elegant furnishings",
    caption: "Cozy Waiting Area",
  },
  {
    src: "/images/washing-area-chanel.jpg",
    alt: "JK's Hair Salon wash area with Chanel artwork and product displays",
    caption: "Premium Wash Stations",
  },
  {
    src: "/images/storefront.jpg",
    alt: "JK's Hair Salon exterior storefront with welcoming entrance",
    caption: "Our Welcoming Entrance",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Gallery</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Step Inside Our Salon
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
            Take a peek at our cozy, welcoming space where beauty happens every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer group ${
                index === 0 ? "sm:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <span className="text-background font-medium text-sm md:text-base">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-md border-2 border-primary/20 rounded-3xl overflow-hidden">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors border-2 border-primary/20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
                <div className="relative aspect-video w-full bg-gradient-to-br from-pink-50 to-rose-50">
                  <img
                    src={galleryImages[selectedImage]?.src || "/placeholder.svg"}
                    alt={galleryImages[selectedImage]?.alt || ""}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 md:p-8 bg-gradient-to-b from-background to-card border-t border-primary/10">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {galleryImages[selectedImage]?.caption}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {galleryImages[selectedImage]?.alt}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}
