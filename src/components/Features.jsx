import {
  Zap,
  ShieldCheck,
  Globe,
  Plug,
  LineChart,
  LifeBuoy,
} from 'lucide-react'

const features = [
  {
    icon: Plug,
    title: 'Every payment plugin',
    text: 'Stripe, PayPal, Square, Klarna, Apple/Google Pay, regional gateways — wired up and tested.',
  },
  {
    icon: Zap,
    title: 'Built for speed',
    text: 'Lighthouse-optimized stores and CRMs that load fast on every device and every network.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    text: 'PCI-aware checkouts, role-based CRM access, encrypted data, and regular audits.',
  },
  {
    icon: Globe,
    title: 'Multi-region ready',
    text: 'Multi-currency, multi-language, and tax-aware out of the box for global growth.',
  },
  {
    icon: LineChart,
    title: 'Data you can act on',
    text: 'Custom dashboards, funnel reporting, and automations that turn customers into revenue.',
  },
  {
    icon: LifeBuoy,
    title: 'Long-term support',
    text: 'We don’t disappear at launch. Maintenance, monitoring, and feature work as you grow.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Pluglie</span>
          <h2 className="section-title">The plug-and-play partner for serious teams.</h2>
          <p className="section-subtitle">
            We bring the integrations, the engineering polish, and the long-term thinking your
            business needs to compound revenue.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
