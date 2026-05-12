import { useState } from 'react'
import { ExternalLink, ShoppingBag, Smartphone, Lock, Zap } from 'lucide-react'

// Image source chain — first one that loads wins. To use a hand-picked
// screenshot, drop a file at `public/vital-junction.jpg` and it will be used
// automatically (since `/vital-junction.jpg` is the first source).
const SCREENSHOT_SOURCES = [
  '/vital-junction.jpg',
  'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fthevitaljunction.com?w=1400&h=900',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80',
]

export default function Portfolio() {
  const [srcIndex, setSrcIndex] = useState(0)

  const handleError = () => {
    setSrcIndex((i) => Math.min(i + 1, SCREENSHOT_SOURCES.length - 1))
  }

  return (
    <section id="work" className="section portfolio">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">A live store we built and shipped.</h2>
          <p className="section-subtitle">
            Real customers, real revenue, real payments. Here’s one of the stores we’ve designed,
            engineered and launched end-to-end.
          </p>
        </div>

        <article className="project-card">
          <div className="project-visual">
            <div className="browser">
              <div className="browser-bar">
                <span className="dot dot-r" />
                <span className="dot dot-y" />
                <span className="dot dot-g" />
                <div className="browser-url">
                  <Lock size={12} />
                  thevitaljunction.com
                </div>
              </div>
              <div className="browser-screen">
                <img
                  key={srcIndex}
                  src={SCREENSHOT_SOURCES[srcIndex]}
                  alt="Screenshot of The Vital Junction ecommerce site built by Pluglie"
                  loading="lazy"
                  onError={handleError}
                />
              </div>
            </div>
          </div>

          <div className="project-body">
            <div className="project-tags">
              <span className="tag tag-ecommerce">
                <ShoppingBag size={12} /> Ecommerce
              </span>
              <span className="tag">
                <Smartphone size={12} /> Mobile-first
              </span>
              <span className="tag">
                <Zap size={12} /> Performance tuned
              </span>
            </div>

            <h3 className="project-title">The Vital Junction</h3>
            <p className="project-desc">
              A complete ecommerce experience designed and built by Pluglie — product catalogue,
              cart, checkout, order management and customer accounts, all wrapped in a fast,
              mobile-first interface.
            </p>

            <div className="project-stack">
              <div className="stack-label">Payments integrated</div>
              <div className="stack-pills">
                <span className="pill pill-stripe">
                  <span className="pill-dot" /> Stripe
                </span>
                <span className="pill pill-paystack">
                  <span className="pill-dot" /> Paystack
                </span>
              </div>
            </div>

            <div className="project-actions">
              <a
                href="https://thevitaljunction.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit live site <ExternalLink size={14} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Build something similar
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
