import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Pluglie rebuilt our store and CRM in eight weeks. Conversions are up 38% and our team finally has dashboards we actually trust.',
    name: 'Sara Khalil',
    role: 'CEO, Atlas Retail',
    avatar: 'https://i.pravatar.cc/120?img=47',
    initials: 'SK',
  },
  {
    quote:
      'Their payment integrations just work. Stripe and Paystack live side by side — checkout abandonment dropped immediately.',
    name: 'Marco Lenti',
    role: 'Head of Growth, Nodi',
    avatar: 'https://i.pravatar.cc/120?img=12',
    initials: 'ML',
  },
  {
    quote:
      'The CRM they built feels custom-made for our process because it is. Onboarding new sales reps takes hours, not weeks.',
    name: 'Aisha Rahman',
    role: 'Operations Lead, Verdant Co',
    avatar: 'https://i.pravatar.cc/120?img=44',
    initials: 'AR',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Clients</span>
          <h2 className="section-title">Teams that ship with Pluglie.</h2>
          <p className="section-subtitle">
            From boutique stores to multi-region operations, founders and operators trust us to
            deliver systems that hold up under real-world load.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial">
              <div className="testimonial-stars" aria-label="5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#f5b301" strokeWidth={0} />
                ))}
              </div>
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.replaceWith(
                        Object.assign(document.createElement('span'), {
                          textContent: t.initials,
                          className: 'author-avatar-fallback',
                        })
                      )
                    }}
                  />
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
