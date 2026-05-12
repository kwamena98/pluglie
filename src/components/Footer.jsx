import { Twitter, Linkedin, Github, Instagram } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  // Footer uses the dark navy background, so we try a "light" version of the
  // logo first if you provide one (drop /logo-light.png in public/). If not,
  // we fall back to the regular logo on a small white pill so it stays visible.
  const handleLogoError = (e) => {
    if (!e.currentTarget.dataset.fallback) {
      e.currentTarget.dataset.fallback = '1'
      e.currentTarget.src = '/logo.png'
      e.currentTarget.classList.add('brand-logo-on-dark')
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <img
                src="/logo-light.png"
                alt="Pluglie"
                className="brand-logo"
                onError={handleLogoError}
              />
            </div>
            <p className="footer-about">
              We build functional ecommerce stores and standalone CRMs that help teams compound
              revenue and manage clients with ease.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="GitHub"><Github size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Ecommerce + admin panel</a></li>
              <li><a href="#services">CRM systems</a></li>
              <li><a href="#services">Payment integrations</a></li>
              <li><a href="#services">Maintenance & support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#features">Why Pluglie</a></li>
              <li><a href="#work">Our work</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Case studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms of service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Pluglie. All rights reserved.</span>
          <span>Made with care for ambitious teams.</span>
        </div>
      </div>
    </footer>
  )
}
