import { ArrowRight, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react'

const PRODUCT_IMG = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-tag">
            <Sparkles size={14} />
            Trusted partner for digital growth
          </span>
          <h1>
            Ecommerce stores & <span className="accent">CRM systems</span> built to convert.
          </h1>
          <p className="lead">
            Pluglie designs and develops production-ready ecommerce sites with every major payment
            plugin, plus tailored CRM systems that scale with your team — from launch day to year ten.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start your project <ArrowRight size={16} />
            </a>
            <a href="#work" className="btn btn-secondary">
              See our work
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">120+</span>
              <span className="hero-stat-label">Projects shipped</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">25+</span>
              <span className="hero-stat-label">Payment integrations</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">98%</span>
              <span className="hero-stat-label">Client retention</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card" aria-hidden="true">
            <div className="hero-card-head">
              <div className="hero-card-title">Store performance · last 30d</div>
              <div className="hero-card-status">
                <span className="dot" /> Live
              </div>
            </div>

            <div className="metric-row">
              <div className="metric">
                <div className="metric-label">Revenue</div>
                <div className="metric-value">GHC 84,210</div>
                <div className="metric-trend"><TrendingUp size={12} /> +24.6%</div>
              </div>
              <div className="metric">
                <div className="metric-label">Conversion</div>
                <div className="metric-value">4.8%</div>
                <div className="metric-trend"><TrendingUp size={12} /> +0.9pp</div>
              </div>
            </div>

            <div className="bars">
              {[42, 58, 36, 70, 54, 82, 64, 91, 76, 88, 70, 96].map((h, i) => (
                <div
                  key={i}
                  className={`bar ${i === 11 ? 'is-active' : ''}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="bars-legend">
              <span>Apr 4</span><span>Apr 18</span><span>May 4</span>
            </div>
          </div>

          <div className="hero-floater">
            <div className="hero-floater-img">
              <img
                src={PRODUCT_IMG}
                alt="Featured product"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div className="hero-floater-body">
              <div className="hero-floater-label">
                <ShoppingBag size={11} /> New order
              </div>
              <div className="hero-floater-title">Wellness Bundle · #4821</div>
              <div className="hero-floater-meta">
                <span>Paid via Paystack</span>
                <span className="hero-floater-amount">GHC 280</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
