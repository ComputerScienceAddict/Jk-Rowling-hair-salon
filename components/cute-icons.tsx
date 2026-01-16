export function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="18" cy="46" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 25 L55 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 39 L55 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
    </svg>
  )
}

export function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      <path d="M32 4 L36 24 L56 20 L40 32 L56 44 L36 40 L32 60 L28 40 L8 44 L24 32 L8 20 L28 24 Z" />
      <circle cx="48" cy="8" r="4" />
      <circle cx="16" cy="56" r="3" />
    </svg>
  )
}

export function DropletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M32 8 C32 8 12 28 12 42 C12 53 21 60 32 60 C43 60 52 53 52 42 C52 28 32 8 32 8Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 42 Q24 50 32 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function FlowerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      <ellipse cx="32" cy="16" rx="8" ry="12" />
      <ellipse cx="32" cy="48" rx="8" ry="12" />
      <ellipse cx="16" cy="32" rx="12" ry="8" />
      <ellipse cx="48" cy="32" rx="12" ry="8" />
      <ellipse cx="20" cy="20" rx="8" ry="10" transform="rotate(-45 20 20)" />
      <ellipse cx="44" cy="20" rx="8" ry="10" transform="rotate(45 44 20)" />
      <ellipse cx="20" cy="44" rx="8" ry="10" transform="rotate(45 20 44)" />
      <ellipse cx="44" cy="44" rx="8" ry="10" transform="rotate(-45 44 44)" />
      <circle cx="32" cy="32" r="8" fill="#fda4af" />
    </svg>
  )
}

export function SakuraLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      {/* Cherry blossom petals */}
      <path d="M24 4 C24 4 20 12 20 16 C20 20 22 22 24 22 C26 22 28 20 28 16 C28 12 24 4 24 4Z" fill="#fda4af" />
      <path
        d="M24 4 C24 4 20 12 20 16 C20 20 22 22 24 22 C26 22 28 20 28 16 C28 12 24 4 24 4Z"
        fill="#f9a8d4"
        transform="rotate(72 24 24)"
      />
      <path
        d="M24 4 C24 4 20 12 20 16 C20 20 22 22 24 22 C26 22 28 20 28 16 C28 12 24 4 24 4Z"
        fill="#fda4af"
        transform="rotate(144 24 24)"
      />
      <path
        d="M24 4 C24 4 20 12 20 16 C20 20 22 22 24 22 C26 22 28 20 28 16 C28 12 24 4 24 4Z"
        fill="#f9a8d4"
        transform="rotate(216 24 24)"
      />
      <path
        d="M24 4 C24 4 20 12 20 16 C20 20 22 22 24 22 C26 22 28 20 28 16 C28 12 24 4 24 4Z"
        fill="#fda4af"
        transform="rotate(288 24 24)"
      />
      {/* Center */}
      <circle cx="24" cy="24" r="6" fill="#fbbf24" />
      <circle cx="22" cy="22" r="1" fill="#f59e0b" />
      <circle cx="26" cy="23" r="1" fill="#f59e0b" />
      <circle cx="24" cy="26" r="1" fill="#f59e0b" />
    </svg>
  )
}

export function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function StarIcon({ className, filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export function YelpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.333-2.098-3.039l-.671-1.013c-.143-.217-.202-.459-.164-.678.054-.31.257-.57.55-.703l1.141-.511c.307-.137.67-.137.978.005.294.139 1.611.803 2.18 1.109.57.306.95.554 1.063.706.181.236.218.529.094.847zm-5.173-2.098l-1.167-.455c-.312-.122-.559-.366-.672-.659-.096-.291-.053-.6.116-.847l.683-.995c.205-.3.509-.472.833-.472.165 0 .331.038.489.116l3.025 1.441c.47.224.757.462.835.694.136.406-.175 1.053-1.182 2.451-.322.447-.752.891-1.015 1.045-.239.14-.502.148-.747.016zm-1.898-4.152c.094.29.031.609-.171.862l-.705.878c-.279.347-.621.504-.97.439-.166-.029-.326-.103-.468-.219l-2.647-2.18c-.394-.324-.616-.613-.646-.839-.044-.316.348-.856 1.661-2.3.411-.452.92-.915 1.204-1.035.261-.108.537-.077.755.085.129.096.278.259.458.5l1.399 1.888c.201.273.224.631.13.921zm-8.047 6.109c.319-.009 2.453-.078 2.964-.078.296 0 .564.09.753.258.246.219.371.545.337.872l-.171 1.225c-.043.305-.213.571-.471.735-.243.154-2.156 1.324-2.856 1.736-.701.413-1.168.648-1.408.649-.211 0-.399-.095-.543-.272-.163-.204-.281-.613-.356-1.238-.238-1.976-.238-2.94-.168-3.401.072-.473.333-.721.747-.731h.172zm1.874-4.562l1.121.549c.291.143.49.405.547.714.043.301-.043.601-.236.826l-.756.868c-.21.241-.513.375-.832.375-.12 0-.244-.019-.366-.059l-2.886-.973c-.452-.153-.733-.334-.816-.527-.145-.336.194-1.127 1.024-2.445.274-.434.663-.903.919-1.074.234-.156.494-.184.759-.076.158.065.342.2.569.412l1.953 1.41z" />
    </svg>
  )
}
