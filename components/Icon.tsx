// CSS mask renders the SVG as a shape filled with `currentColor`, so the icon
// inherits any text-color utility without needing a colored SVG file.
const Icon = ({ src, alt, className }: IconImage) => (
  <span
    role="img"
    aria-label={alt}
    className={`block bg-current ${className}`}
    style={{
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
    }}
  />
)

export default Icon
