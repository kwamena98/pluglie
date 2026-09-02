import {
  ShoppingCart,
  Users,
  Check,
  ArrowRight,
  CreditCard,
  LayoutDashboard,
  PieChart,
  MessageSquare,
  UserCheck,
} from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce + admin panel',
    description:
      'Fast, conversion-focused storefronts with every payment plugin you need — Stripe, Paystack, PayPal, Apple Pay and more — paired with a full admin panel to manage products, orders, customers and inventory.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80',
    bullets: [
      { icon: CreditCard, text: 'Stripe, Paystack & other gateways' },
      { icon: LayoutDashboard, text: 'Admin panel for products, orders & customers' },
      { icon: PieChart, text: 'Analytics, SEO & performance tuned' },
    ],
  },
  {
    icon: Users,
    title: 'CRM for client management',
    description:
      'Standalone CRMs for any business — sales teams, real estate firms, clinics, schools, agencies and ops teams. Manage clients, leads, deals and conversations in one place, built around how your team actually works.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
    bullets: [
      { icon: UserCheck, text: 'Client & lead management with pipelines' },
      { icon: MessageSquare, text: 'Email, SMS & WhatsApp automations' },
      { icon: PieChart, text: 'Custom dashboards, reports & roles' },
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we build</span>
          <h2 className="section-title">Two things, done very well.</h2>
          <p className="section-subtitle">
            We focus on ecommerce and CRM — the two systems that move revenue. Everything we ship is
            production-ready, accessible, and made to grow with you.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <article key={s.title} className="service-card">
                <div className="service-image">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
                  />
                  <div className="service-image-overlay" />
                </div>
                <div className="service-body">
                  <div className="service-icon">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <ul className="service-list">
                    {s.bullets.map((b, i) => {
                      const BIcon = b.icon
                      return (
                        <li key={i}>
                          <BIcon size={16} /> {b.text}
                        </li>
                      )
                    })}
                  </ul>
                  <a href="#contact" className="service-link">
                    Discuss your project <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
