import { SakuraLogo, HeartIcon } from "./cute-icons"

export function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2 group">
            <SakuraLogo className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground leading-none">JK&apos;s</span>
              <span className="text-[10px] text-primary font-medium tracking-widest">HAIR SALON</span>
            </div>
          </a>

          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <HeartIcon className="w-4 h-4 text-primary" /> in 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
