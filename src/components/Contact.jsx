import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
} from 'lucide-react'

const initial = {
  name: '',
  email: '',
  whatsapp: '',
  company: '',
  service: 'ecommerce',
  budget: '5k-15k',
  message: '',
}

// Formspree configuration. Set VITE_FORMSPREE_ID in your .env.local file
// (e.g. VITE_FORMSPREE_ID=xyzabc123). Without it, the form runs in demo mode
// and just shows a success state without actually submitting.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const FORMSPREE_URL = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const update = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value })
    if (errors[key]) setErrors({ ...errors, [key]: undefined })
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim()) next.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (form.whatsapp.trim()) {
      const cleaned = form.whatsapp.replace(/[\s\-()]/g, '')
      if (!/^\+?\d{7,15}$/.test(cleaned)) next.whatsapp = 'Enter a valid WhatsApp number'
    }
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'Tell us a little about your project (10+ chars)'
    return next
  }

  const showSuccess = () => {
    setSubmitted(true)
    setForm(initial)
    setTimeout(() => setSubmitted(false), 8000)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // Demo mode — Formspree not configured yet.
    if (!FORMSPREE_URL) {
      // eslint-disable-next-line no-console
      console.warn(
        '[Pluglie] VITE_FORMSPREE_ID is not set. Running form in demo mode. ' +
          'Add it to .env.local to enable real submissions.'
      )
      showSuccess()
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          whatsapp: form.whatsapp,
          company: form.company,
          service: form.service,
          budget: form.budget,
          message: form.message,
          _subject: `New Pluglie inquiry from ${form.name}`,
          _replyto: form.email,
        }),
      })

      if (res.ok) {
        showSuccess()
      } else {
        const data = await res.json().catch(() => ({}))
        const msg =
          data?.errors?.[0]?.message ||
          'We couldn’t send your message. Please try again or email hello@pluglie.com directly.'
        setSubmitError(msg)
      }
    } catch {
      setSubmitError(
        'Network error — please check your connection and try again, or email hello@pluglie.com.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Contact</span>
          <h2>Let’s plug in your next project.</h2>
          <p>
            Tell us what you’re building. We’ll come back within one business day with a quote and a
            recommended approach.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-item-icon"><Mail size={18} /></div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">hello@pluglie.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><Phone size={18} /></div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+1 (555) 010-2024</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><MapPin size={18} /></div>
              <div>
                <div className="contact-item-label">Office</div>
                <div className="contact-item-value">Remote · serving global teams</div>
              </div>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={onSubmit}
          action={FORMSPREE_URL || undefined}
          method="POST"
          noValidate
        >
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={update('name')}
                disabled={submitting}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={update('email')}
                disabled={submitting}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="whatsapp">
                <span className="label-with-icon">
                  <MessageCircle size={13} className="label-whatsapp" /> WhatsApp number
                </span>
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="+233 24 123 4567"
                value={form.whatsapp}
                onChange={update('whatsapp')}
                disabled={submitting}
                aria-invalid={!!errors.whatsapp}
              />
              {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
              {!errors.whatsapp && (
                <span className="field-hint">We may reach out on WhatsApp for quick updates.</span>
              )}
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Optional"
                value={form.company}
                onChange={update('company')}
                disabled={submitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="service">What do you need?</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={update('service')}
                disabled={submitting}
              >
                <option value="ecommerce">Ecommerce website + admin panel</option>
                <option value="crm">CRM system (client management)</option>
                <option value="both">Both — ecommerce + CRM</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="budget">Estimated budget</label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={update('budget')}
                disabled={submitting}
              >
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 – $15,000</option>
                <option value="15k-50k">$15,000 – $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Tell us about the project</label>
            <textarea
              id="message"
              name="message"
              placeholder="What are you building, who is it for, and when do you need it?"
              value={form.message}
              onChange={update('message')}
              disabled={submitting}
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>

          {/* Honeypot — bots fill this; humans don't see it. */}
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="spin" /> Sending…
              </>
            ) : (
              <>
                Send message <Send size={16} />
              </>
            )}
          </button>

          {submitted && (
            <div className="form-success" role="status">
              <CheckCircle2 size={18} />
              Thanks — your message is in. We’ll reply within one business day.
            </div>
          )}

          {submitError && (
            <div className="form-error" role="alert">
              <AlertCircle size={18} />
              {submitError}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
