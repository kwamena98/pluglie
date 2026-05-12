import { useState } from 'react'
import { Plug, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark">
            <Plug size={18} strokeWidth={2.5} />
          </span>
          Pluglie
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#services" onClick={close}>Services</a>
          <a href="#features" onClick={close}>Why Pluglie</a>
          <a href="#work" onClick={close}>Our Work</a>
          <a href="#pricing" onClick={close}>Pricing</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">Get a quote</a>
          <button
            className="menu-toggle btn btn-ghost"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
