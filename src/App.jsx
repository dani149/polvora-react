import { useState, useEffect, useRef, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import SistemaWebEstrategico from './pages/SistemaWebEstrategico.jsx'
import SistemaCaptacionLeads from './pages/SistemaCaptacionLeads.jsx'
import { Navbar as SharedNavbar, CursorGlow as SharedCursorGlow } from './components/Shared.jsx'

/* ─── HOOK: scroll reveal ─────────────────────────────────────── */
function useReveal(options = {}) {
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

/* ─── HOOK: staggered check items ───────────────────────────────── */
function useCheckItems(count) {
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


/* ─── HERO ───────────────────────────────────────────────────────── */
function Hero() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const copyRef = useReveal()
  const actionsRef = useReveal()

  return (
    <div className="section-dark">
      <SharedNavbar />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow pink reveal" ref={eyebrowRef}>✦ AUTOMATIZACIÓN · IA · SISTEMA DE VENTAS</div>
            <h1 ref={titleRef} className="reveal">Convierte tu web en un sistema de ventas PRUEBA</h1>
            <p ref={copyRef} className="reveal">
              Combinamos desarrollo web, automatización, CRM e inteligencia artificial
              para transformar tu presencia digital en un motor de ventas.
            </p>
            <div className="hero-actions reveal" ref={actionsRef}>
              <a href="#diagnostico" className="btn btn-gradient">Agendar Diagnóstico</a>
              <a href="#soluciones" className="btn btn-outline">Ver soluciones</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" />
            <picture>
              <source media="(max-width: 820px)" srcSet="/img-banner-resp.webp" width={700} height={449} />
              <source media="(min-width: 821px)" srcSet="/img-banner-op.webp" width={1300} height={833} />
              <img
                src="/img-banner-op.webp"
                alt="Sistema de ventas digital con automatización, CRM e inteligencia artificial"
                width={1300} height={833}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ─── PROBLEM ────────────────────────────────────────────────────── */
const problems = [
  { icon: '/icono-1.svg', title: 'La web no capta leads', desc: 'Las visitas llegan pero no se convierten en contactos.' },
  { icon: '/icono-2.svg', title: 'Cero automatización', desc: 'Todo el proceso de ventas es manual y lento.' },
  { icon: '/icono-3.svg', title: 'Sin seguimiento comercial', desc: 'Las consultas se responden tarde o se pierden.' },
  { icon: '/icono-4.svg', title: 'Oportunidades perdidas', desc: 'Sin sistema, cada lead sin respuesta es dinero que se va.' },
]

function Problem() {
  const copyRef = useReveal()
  const listRef = useReveal()

  return (
    <section className="problem section-light" aria-label="El problema: por qué tu web no genera clientes">
      <div className="container problem-grid">
        <div className="problem-copy reveal-left" ref={copyRef}>
          <div className="eyebrow pink">El problema</div>
          <h2>Tienes una página web. No tienes un sistema que genere clientes</h2>
          <p>
            Muchas empresas invierten en presencia digital, pero su sitio no convierte visitas
            en oportunidades comerciales. Los leads se pierden. No hay seguimiento. No existe automatización.
          </p>
          <a href="#soluciones" className="btn btn-gradient">Conoce cómo podemos ayudarte</a>
        </div>
        <div className="problem-list stagger" ref={listRef}>
          {problems.map((p, i) => (
            <article className="problem-item" key={i}>
              <div className="problem-icon"><img src={p.icon} alt="" /></div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SOLUTION FEATURES ──────────────────────────────────────────── */
const features = [
  { num: '01', title: 'Captación de leads automatizada', desc: 'Formularios y landing pages optimizados para convertir visitas en prospectos calificados.' },
  { num: '02', title: 'Seguimiento automático', desc: 'Respuestas y secuencias automáticas para que ningún lead quede sin contacto.' },
  { num: '03', title: 'CRM integrado', desc: 'Todos tus prospectos organizados, con historial y estado de cada oportunidad.' },
  { num: '04', title: 'Sistemas escalables', desc: 'Infraestructura digital que crece con tu empresa sin aumentar el equipo.' },
]

function SolutionFeatures() {
  const introRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="section-dark" id="metodo" aria-label="Nuestra solución: sistemas digitales de ventas">
      <div className="container dark-intro reveal" ref={introRef}>
        <div className="eyebrow blue center">La solución</div>
        <h2>Diseñamos sistemas digitales que trabajan para tu negocio</h2>
        <p>Combinamos desarrollo web, automatización y tecnología para construir infraestructura digital diseñada para generar oportunidades comerciales.</p>
      </div>
      <div className="container feature-grid stagger" ref={gridRef}>
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ num, title, desc }) {
  const ref = useRef(null)
  const handleMouseMove = useCallback((e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
    card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`
  }, [])
  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = ''
  }, [])

  return (
    <article className="feature-card" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <span className="num">{num}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}

/* ─── SOLUTIONS ──────────────────────────────────────────────────── */
const solutions = [
  { num: '01.', title: 'Sistema Web Estratégico', desc: 'Una web que convierte visitas en oportunidades. Web orientada a conversión para empresas con sitio antiguo o que no genera contactos.', link: '/soluciones/sistema-web-estrategico' },
  { num: '02.', title: 'Sistema de Captación de Leads', desc: 'Sistema digital para captar y organizar prospectos. Landing optimizada, formularios, CRM y automatización de respuesta y seguimiento.', link: '/soluciones/sistema-captacion-de-leads' },
  { num: '03.', title: 'Sistema de Ventas con IA', desc: 'Sistema que responde y gestiona oportunidades solo. Chatbot de ventas con IA, captura de datos, CRM y automatización de seguimiento.' },
  { num: '04.', title: 'Infraestructura Digital de Ventas', desc: 'Sistema digital completo para captar, gestionar y convertir clientes. Sitio web estratégico + captación + automatización de marketing + CRM + chatbot IA + dashboard.' },
]

function Solutions() {
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="solutions section-light" id="soluciones" aria-label="Soluciones digitales para captación de leads y ventas">
      <div className="container">
        <div className="title-wrap reveal" ref={titleRef}>
          <div className="eyebrow pink center">Nuestras soluciones</div>
          <h2>Soluciones digitales para empresas que quieren crecer</h2>
        </div>
        <div className="solutions-grid stagger" ref={gridRef}>
          {solutions.map((s, i) => (
            <article className="solution-card" key={i}>
              <div className="solution-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href={s.link || '#diagnostico'} className="btn btn-gradient">Saber más</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PROCESS ────────────────────────────────────────────────────── */
const steps = [
  { icon: '/icono-5.svg', title: 'Diagnóstico inicial', desc: 'Analizamos tu web, captación y procesos para identificar puntos de mejora.' },
  { icon: '/icono-6.svg', title: 'Arquitectura del sistema', desc: 'Diseñamos la estructura del sistema digital que necesita tu empresa.' },
  { icon: '/icono-7.svg', title: 'Implementación', desc: 'Construimos y activamos cada componente: web, CRM y automatizaciones.' },
  { icon: '/icono-8.svg', title: 'Optimización', desc: 'Medimos, ajustamos y escalamos el sistema para mejorar los resultados.' },
]

function Process() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const rowRef = useReveal()
  const ctaRef = useReveal()

  return (
    <section className="process section-dark" aria-label="Proceso de implementación del sistema digital">
      <div className="container">
        <div className="eyebrow blue center reveal" ref={eyebrowRef}>Nuestro proceso</div>
        <h2 className="reveal" ref={titleRef}>Cómo implementamos tu sistema digital</h2>
        <div className="process-row stagger" ref={rowRef}>
          <div className="process-connector" />
          {steps.map((s, i) => (
            <article className="process-step" key={i}>
              <div className="process-icon"><img src={s.icon} alt={s.title} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="process-cta reveal" ref={ctaRef}>
          <a href="#diagnostico" className="btn btn-gradient">Agendar Diagnóstico</a>
        </div>
      </div>
    </section>
  )
}

/* ─── INDUSTRIES ─────────────────────────────────────────────────── */
const industries = [
  { icon: '/icono-9.svg', title: 'Clínicas y salud privada', desc: 'Alto ticket por cliente, consultas online constantes. Ideal para captación, chatbot y agenda automática.' },
  { icon: '/icono-10.svg', title: 'Inmobiliarias', desc: 'Volumen alto de consultas, necesitan CRM + seguimiento automatizado para no perder ningún lead.' },
  { icon: '/icono-11.svg', title: 'Servicios profesionales', desc: 'Consultoras, abogados, coaches y agencias B2B que dependen de referidos y necesitan un sistema.' },
  { icon: '/icono-12.svg', title: 'Turismo', desc: 'Hoteles, lodges y tours especializados que necesitan captación, reservas y automatización.' },
]

function Industries() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const subtitleRef = useReveal()
  const gridRef = useReveal()
  const ctaRef = useReveal()

  return (
    <section className="industries section-light" aria-label="Industrias: clínicas, inmobiliarias, servicios profesionales y turismo">
      <div className="container">
        <div className="eyebrow pink center reveal" ref={eyebrowRef}>Industrias</div>
        <h2 className="center reveal" ref={titleRef}>Soluciones digitales para empresas que quieren crecer</h2>
        <p className="subtitle reveal" ref={subtitleRef}>
          Trabajamos con empresas de servicios que ya venden y quieren profesionalizar su operación digital.
          Si tu industria no aparece aquí, escríbenos.
        </p>
        <div className="industries-grid stagger" ref={gridRef}>
          {industries.map((ind, i) => (
            <article className="industry-card" key={i}>
              <div className="industry-icon"><img src={ind.icon} alt={ind.title} /></div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </article>
          ))}
        </div>
        <div className="industries-cta reveal" ref={ctaRef}>
          <a href="#diagnostico" className="btn btn-gradient">Agendar Diagnóstico</a>
        </div>
      </div>
    </section>
  )
}

/* ─── DIAGNOSTIC FORM ────────────────────────────────────────────── */
const checkItems = [
  'Análisis de tu sitio web actual',
  'Puntos de fuga de clientes identificados',
  'Oportunidades de automatización',
  'Recomendaciones estratégicas personalizadas',
  'Propuesta de sistema digital para tu empresa',
]

const emptyForm = { nombre: '', email: '', empresa: '', web: '', industria: '', problema: '', mensaje: '' }

function Diagnostic() {
  const copyRef = useReveal()
  const formRef = useReveal()
  const checkRefs = useCheckItems(checkItems.length)
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

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
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
              {checkItems.map((item, i) => (
                <li
                  key={i}
                  className="check-item"
                  data-idx={i}
                  ref={el => checkRefs.current[i] = el}
                >
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
                    {loading ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <SpinnerIcon /> Enviando...
                      </span>
                    ) : 'Agendar Diagnóstico'}
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

function SpinnerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin .8s linear infinite' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

/* ─── FOOTER ─────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer section-dark" id="contacto">
      <div className="container footer-grid">
        <div>
          <img src="/logo-blanco.svg" style={{ width: 220 }} alt="Pólvora" />
        </div>
        <div>
          <h4>Soluciones</h4>
          <a href="#soluciones">Sistema web estratégico</a>
          <a href="#soluciones">Captación de leads</a>
          <a href="#soluciones">Ventas con IA</a>
          <a href="#soluciones">Infraestructura digital</a>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href="mailto:hola@agenciapolvora.cl">hola@agenciapolvora.cl</a>
          <div className="socials">
            <a href="#" className="social" aria-label="Instagram">
              <img src="/ig.svg" alt="Instagram" style={{ width: 20 }} />
            </a>
            <a href="#" className="social" aria-label="LinkedIn">
              <img src="/lk.svg" alt="LinkedIn" style={{ width: 20 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── CURSOR GLOW ────────────────────────────────────────────────── */
function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return <div className="cursor-glow" ref={ref} />
}

/* ─── HOME PAGE ─────────────────────────────────────────────────── */
function Home() {
  return (
    <>
      <CursorGlow />
      <Hero />
      <main id="main-content">
        <Problem />
        <SolutionFeatures />
        <Solutions />
        <Process />
        <Industries />
        <Diagnostic />
      </main>
    </>
  )
}

/* ─── APP / ROUTER ───────────────────────────────────────────────── */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/soluciones/sistema-web-estrategico" element={<SistemaWebEstrategico />} />
      <Route path="/soluciones/sistema-captacion-de-leads" element={<SistemaCaptacionLeads />} />
    </Routes>
  )
}
