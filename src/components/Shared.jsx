import { useState, useEffect, useRef } from 'react'

/* ─── HOOK: scroll reveal ───────────────────────────────────────── */
export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12, ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── HOOK: staggered items ─────────────────────────────────────── */
export function useCheckItems() {
  const refs = useRef([])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx)
            setTimeout(() => entry.target.classList.add('visible'), idx * 120)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    refs.current.forEach(el => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  return refs
}

/* ─── SPINNER ────────────────────────────────────────────────────── */
export function SpinnerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin .8s linear infinite' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

/* ─── CURSOR GLOW ────────────────────────────────────────────────── */
export function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px' }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return <div className="cursor-glow" ref={ref} />
}

/* ─── NAVBAR ─────────────────────────────────────────────────────── */
const solucionesDropdown = [
  { label: 'Sistema Web Estratégico', href: '/soluciones/sistema-web-estrategico' },
  { label: 'Sistema de Captación de Leads', href: '/soluciones/sistema-captacion-de-leads' },
  { label: 'Sistema de Ventas con IA', href: '/#soluciones' },
  { label: 'Infraestructura Digital de Ventas', href: '/#soluciones' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [solOpen, setSolOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => { setMenuOpen(false); setSolOpen(false) }

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="/"><img src="/logo-blanco.svg" width={168} height={53} style={{ height: 53 }} alt="Pólvora" /></a>
          <nav className="nav-links">
            <div className="nav-dropdown">
              <button className="nav-dropdown__trigger" aria-haspopup="true">
                Soluciones
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="nav-dropdown__menu">
                {solucionesDropdown.map((item, i) => (
                  <a key={i} href={item.href} className="nav-dropdown__item">{item.label}</a>
                ))}
              </div>
            </div>
            <a href="/#metodo" onClick={closeMenu}>Método</a>
            <a href="/#diagnostico" onClick={closeMenu}>Diagnóstico</a>
            <a href="/#blog" onClick={closeMenu}>Blog</a>
            <a href="/#contacto" onClick={closeMenu}>Contacto</a>
          </nav>
          <a href="/#diagnostico" className="btn btn-gradient" style={{ fontSize: 14, minHeight: 44 }}>Agendar Diagnóstico</a>
          <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menú">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-sol-toggle" onClick={() => setSolOpen(v => !v)}>
          Soluciones
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: solOpen ? 'rotate(180deg)' : '', transition: 'transform .2s' }}><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {solOpen && (
          <div className="mobile-sol-submenu">
            {solucionesDropdown.map((item, i) => (
              <a key={i} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </div>
        )}
        <a href="/#metodo" onClick={closeMenu}>Método</a>
        <a href="/#diagnostico" onClick={closeMenu}>Diagnóstico</a>
        <a href="/#blog" onClick={closeMenu}>Blog</a>
        <a href="/#contacto" onClick={closeMenu}>Contacto</a>
        <a href="/#diagnostico" className="btn btn-gradient" onClick={closeMenu}>Agendar Diagnóstico</a>
      </div>
    </>
  )
}

/* ─── DIAGNOSTIC ─────────────────────────────────────────────────── */
const diagCheckItems = [
  'Análisis de tu sitio web actual',
  'Puntos de fuga de clientes identificados',
  'Oportunidades de automatización',
  'Recomendaciones estratégicas personalizadas',
  'Propuesta de sistema digital para tu empresa',
]
const emptyForm = { nombre: '', email: '', empresa: '', web: '', industria: '', problema: '', mensaje: '' }

export function Diagnostic() {
  const copyRef = useReveal()
  const formRef = useReveal()
  const checkRefs = useCheckItems()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = true
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true
    if (!form.empresa.trim()) e.empresa = true
    return e
  }
  const handleChange = (field) => (ev) => {
    setForm(f => ({ ...f, [field]: ev.target.value }))
    setErrors(e => ({ ...e, [field]: false }))
  }
  const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/daniela@agenciapolvora.cl'

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setLoading(true)
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          empresa: form.empresa,
          web: form.web,
          industria: form.industria,
          problema: form.problema,
          mensaje: form.mensaje,
          _subject: `Diagnóstico gratuito - ${form.empresa || form.nombre}`,
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true)
      } else {
        throw new Error('form error')
      }
    } catch {
      alert('Hubo un error al enviar. Por favor intenta de nuevo o escríbenos a daniela@agenciapolvora.cl')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bottom-dark-area">
      <section className="diagnostic-section" id="diagnostico" aria-label="Diagnóstico gratuito de tu presencia digital">
        <div className="container diagnostic-section__grid">

          <div className="diagnostic-section__content reveal-left" ref={copyRef}>
            <p className="section-kicker section-kicker--blue">DIAGNÓSTICO GRATUITO</p>
            <h2>Descubre cómo transformar tu presencia digital en un sistema que genere clientes</h2>
            <p className="section-description">
              Analizamos tu web, captación, seguimiento y automatización.
              Sin costo, sin compromiso.
            </p>
            <ul className="diagnostic-benefits">
              {diagCheckItems.map((item, i) => (
                <li key={i} className="check-item" data-idx={i} ref={el => checkRefs.current[i] = el}>
                  <img src="/ticket.svg" alt="✓" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="diagnostic-form-card reveal-right" ref={formRef}>
            <h3>Solicitar diagnóstico</h3>
            {submitted ? (
              <div className="form-success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
                </svg>
                <p style={{ color: '#a5f3c0', fontSize: 17, fontWeight: 600 }}>¡Solicitud enviada!</p>
                <p style={{ color: '#d8d9ea' }}>Te contactamos en menos de 24 horas.</p>
              </div>
            ) : (
              <form className="diagnostic-form" onSubmit={handleSubmit} noValidate>
                <div className="diagnostic-form__row">
                  <input className={`field${errors.nombre ? ' error' : ''}`} type="text" placeholder="Nombre *" value={form.nombre} onChange={handleChange('nombre')} />
                  <input className={`field${errors.email ? ' error' : ''}`} type="email" placeholder="Email *" value={form.email} onChange={handleChange('email')} />
                </div>
                <div className="diagnostic-form__row">
                  <input className={`field${errors.empresa ? ' error' : ''}`} type="text" placeholder="Empresa *" value={form.empresa} onChange={handleChange('empresa')} />
                  <input className="field" type="text" placeholder="Sitio web" value={form.web} onChange={handleChange('web')} />
                </div>
                <div className="diagnostic-form__row">
                  <input className="field" type="text" placeholder="Industria" value={form.industria} onChange={handleChange('industria')} />
                  <input className="field" type="text" placeholder="Principal problema" value={form.problema} onChange={handleChange('problema')} />
                </div>
                <div className="diagnostic-form__full">
                  <textarea placeholder="Mensaje" value={form.mensaje} onChange={handleChange('mensaje')} />
                </div>
                <div className="diagnostic-form__actions">
                  <button type="submit" className="btn btn-gradient" disabled={loading} style={{ border: 'none', minWidth: 200, opacity: loading ? .75 : 1 }}>
                    {loading ? <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><SpinnerIcon /> Enviando...</span> : 'Agendar Diagnóstico'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

/* ─── FOOTER ─────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="footer section-dark" id="contacto">
      <div className="container footer-grid">
        <div><img src="/logo-blanco.svg" width={220} height={70} style={{ width: 220, height: 'auto' }} alt="Pólvora" /></div>
        <div>
          <h4>Soluciones</h4>
          <a href="/soluciones/sistema-web-estrategico">Sistema web estratégico</a>
          <a href="/#soluciones">Captación de leads</a>
          <a href="/#soluciones">Ventas con IA</a>
          <a href="/#soluciones">Infraestructura digital</a>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href="mailto:hola@agenciapolvora.cl">hola@agenciapolvora.cl</a>
          <div className="socials">
            <a href="https://www.instagram.com/polvora.digital?igsh=MXN5Z29jam43eXBnYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social" aria-label="Instagram"><img src="/ig.svg" alt="Instagram" style={{ width: 20 }} /></a>
            <a href="https://wa.me/56956270836" target="_blank" rel="noopener noreferrer" className="social" aria-label="WhatsApp"><img src="/icono-wpp.svg" alt="WhatsApp" style={{ width: 20 }} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
