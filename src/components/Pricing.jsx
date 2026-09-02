import { useEffect, useState } from 'react'
import { Check, ArrowRight, Globe, Users, Sparkles } from 'lucide-react'

// Price tables per currency. The plan structure is shared.
const PRICES = {
  GHC: {
    symbol: 'GHC',
    locale: 'Ghana',
    starter: '1,000',
    plus: '1,500',
    premium: '2,000',
  },
  USD: {
    symbol: '$',
    locale: 'International',
    starter: '120',
    plus: '180',
    premium: '210',
  },
}

const PLAN_META = [
  {
    key: 'starter',
    name: 'Starter',
    tagline: 'A clean, conversion-ready store with admin panel.',
    features: [
      'Up to 30 products',
      'Admin panel for products & orders',
      'One payment gateway integration',
      'Mobile-first responsive design',
      'Basic SEO & analytics setup',
      '20 days of post-launch support',
    ],
    cta: 'Start with Starter',
    featured: false,
  },
  {
    key: 'plus',
    name: 'Plus',
    tagline: 'For stores ready to scale up sales and SKUs.',
    features: [
      'Up to 50 products',
      'Custom admin dashboard',
      '2+ payment gateways',
      'Inventory & order management',
      'Transactional emails & receipts',
      '40 days of post-launch support',
    ],
    cta: 'Choose Plus',
    featured: true,
  },
  {
    key: 'premium',
    name: 'Premium',
    tagline: 'A serious storefront for serious operators.',
    features: [
      'Everything in Plus',
      'Multi-currency & multi-language',
      'Advanced analytics & reports',
      'Custom integrations (shipping, ERP)',
      'Priority support & SLA',
      '60 days of post-launch support',
    ],
    cta: 'Go Premium',
    featured: false,
  },
]

const CRM_FEATURES = [
  'Client, lead & deal management',
  'Pipelines & sales workflows',
  'Automations (email, SMS, WhatsApp)',
  'Custom dashboards & reports',
  'Role-based access & permissions',
  'Training, handover & support',
]

// Sync best-guess via timezone (Africa/Accra → Ghana). Fast, no network.
function detectFromTimezone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return tz === 'Africa/Accra' ? 'GHC' : 'USD'
  } catch {
    return 'USD'
  }
}

export default function Pricing() {
  const [currency, setCurrency] = useState(detectFromTimezone)
  const [autoDetected, setAutoDetected] = useState(true)
  const [detecting, setDetecting] = useState(true)

  // Confirm via IP geolocation. If user has manually toggled (autoDetected=false),
  // we don't override their choice.
  useEffect(() => {
    let cancelled = false

    const detect = async () => {
      try {
        const res = await fetch('https://api.country.is/', { cache: 'no-store' })
        if (!res.ok) throw new Error('country lookup failed')
        const data = await res.json()
        if (cancelled) return
        const next = data.country === 'GH' ? 'GHC' : 'USD'
        setCurrency((prev) => (autoDetected ? next : prev))
      } catch {
        // Silently fall back to timezone-based guess (already set in initial state).
      } finally {
        if (!cancelled) setDetecting(false)
      }
    }

    detect()
    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const choose = (next) => {
    setCurrency(next)
    setAutoDetected(false)
  }

  const c = PRICES[currency]

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Ecommerce pricing</span>
          <h2 className="section-title">Simple packages. Clear value.</h2>
          <p className="section-subtitle">
            Pick a tier for your ecommerce build — we’ll tailor the scope around your goals,
            timelines and the features you really need.
          </p>

          <div className="currency-toggle" role="group" aria-label="Choose currency">
            <span className="currency-toggle-label">
              <Globe size={13} />
              {detecting ? 'Detecting your location…' : `Showing prices for ${c.locale}`}
            </span>
            <div className="currency-switch">
              <button
                type="button"
                className={`currency-option ${currency === 'GHC' ? 'is-active' : ''}`}
                onClick={() => choose('GHC')}
                aria-pressed={currency === 'GHC'}
              >
                GHC
              </button>
              <button
                type="button"
                className={`currency-option ${currency === 'USD' ? 'is-active' : ''}`}
                onClick={() => choose('USD')}
                aria-pressed={currency === 'USD'}
              >
                USD
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-grid">
          {PLAN_META.map((plan) => (
            <div key={plan.key} className={`price-card ${plan.featured ? 'is-featured' : ''}`}>
              {plan.featured && <span className="price-badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="tagline">{plan.tagline}</p>
              <div className="price-amount">
                <span className="price-currency">{c.symbol}</span>
                {c[plan.key]}
                <span>one-time</span>
              </div>
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f} className="price-feature">
                    <Check size={16} strokeWidth={2.5} /> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary price-cta">
                {plan.cta} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* CRM is a separate service — custom-quoted for any business. */}
        <div className="crm-banner">
          <div className="crm-banner-glow" aria-hidden="true" />
          <div className="crm-banner-body">
            <span className="crm-eyebrow">
              <Sparkles size={12} /> Need a CRM instead?
            </span>
            <h3 className="crm-title">
              Custom CRMs for <span>client management</span>.
            </h3>
            <p className="crm-desc">
              Built to stand alone — no ecommerce required. Whether you run a sales team, real
              estate firm, clinic, school, agency or operations team, we’ll design and build a CRM
              that matches exactly how you manage your clients, leads and conversations.
            </p>

            <ul className="crm-features">
              {CRM_FEATURES.map((f) => (
                <li key={f}>
                  <Check size={14} strokeWidth={2.5} /> {f}
                </li>
              ))}
            </ul>

            <div className="crm-actions">
              <a href="#contact" className="btn btn-primary">
                Get a CRM quote <ArrowRight size={16} />
              </a>
              <span className="crm-meta">
                <Users size={14} /> Suitable for teams of any size
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
