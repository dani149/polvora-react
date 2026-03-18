import { useRef } from 'react'
import { Navbar, Diagnostic, CursorGlow, useReveal } from '../components/Shared.jsx'

/* ─── HERO ───────────────────────────────────────────────────────── */
function HeroLeads() {
  const contentRef = useReveal()
  const imgRef = useReveal()

  return (
    <div className="top-dark-area">
      <Navbar />
      <section className="hero-service">
        <div className="container hero-service__grid">
          <div className="hero-service__content reveal-left" ref={contentRef}>
            <div className="hero-service__breadcrumbs">
              <a href="/#soluciones">Soluciones</a>
              <span><img src="/arrow.svg" alt="›" style={{ width: 8, opacity: .7 }} /></span>
              <span>Sistema de captación de leads</span>
            </div>
            <h1>Convierte tu tráfico en oportunidades comerciales reales</h1>
            <p className="section-description">
              Implementamos sistemas digitales que captan, organizan y gestionan prospectos
              automáticamente desde tu sitio web y canales digitales, sin depender de
              procesos manuales.
            </p>
            <a href="#diagnostico" className="btn btn-gradient">Agendar Diagnóstico gratuito</a>
          </div>
          <div className="hero-service__media reveal-right" ref={imgRef}>
            <img src="/banner-leads-op.webp" alt="Sistema de captación de leads" width={1200} height={704} loading="eager" fetchPriority="high" />
          </div>
        </div>
      </section>
    </div>
  )
}

/* ─── PROBLEM ────────────────────────────────────────────────────── */
function ProblemLeads() {
  const ref = useReveal()

  return (
    <section className="problem-section section-light" aria-label="El problema: recibes tráfico pero no tienes un sistema">
      <div className="container problem-section__inner reveal" ref={ref}>
        <p className="section-kicker section-kicker--pink">EL PROBLEMA</p>
        <h2>Recibes tráfico pero no tienes un sistema que lo convierta en clientes</h2>
        <p className="section-description section-description--dark">
          La mayoría de las empresas recibe visitas en su web o redes sociales, pero no cuenta
          con un sistema estructurado para capturar esos datos, dar seguimiento ni convertirlos
          en oportunidades comerciales. El tráfico existe. El sistema, no.
        </p>
        <a href="#solucion" className="btn btn-gradient">Descubre cómo podemos ayudarte</a>
      </div>
    </section>
  )
}

/* ─── SOLUTION ───────────────────────────────────────────────────── */
const includeItems = [
  { icon: '/icono-web.svg',      text: 'Diseño y desarrollo de landing pages' },
  { icon: '/icono-form.svg',     text: 'Formularios optimizados para conversión' },
  { icon: '/icono-email.svg',    text: 'Automatización de emails o mensajes de respuesta' },
  { icon: '/icono-leads.svg',    text: 'Segmentación y clasificación de leads' },
  { icon: '/icono-crm.svg',      text: 'Integración con CRM' },
  { icon: '/icono-analityc.svg', text: 'Tracking y analítica con Google Analytics / Tag Manager' },
]

function SolutionLeads() {
  const contentRef = useReveal()
  const cardRef = useReveal()

  return (
    <section id="solucion" className="solution-section section-dark" aria-label="La solución: sistema de captación que trabaja mientras tú vendes">
      <div className="container solution-section__grid">
        <div className="solution-section__content reveal-left" ref={contentRef}>
          <p className="section-kicker section-kicker--blue">LA SOLUCIÓN</p>
          <h2>Un sistema de captación que trabaja mientras tú vendes</h2>
          <p className="section-description">
            Diseñamos e implementamos el sistema completo: desde la landing page que convierte
            hasta el CRM que organiza cada prospecto y las automatizaciones que los nutren sin
            intervención humana.
          </p>
          <ul className="solution-benefits">
            <li><img src="/ticket.svg" alt="✓" /> Landing pages optimizadas para maximizar la tasa de conversión</li>
            <li><img src="/ticket.svg" alt="✓" /> Formularios inteligentes que califican el lead desde el primer contacto</li>
            <li><img src="/ticket.svg" alt="✓" /> Automatización de emails o mensajes de respuesta inmediata</li>
            <li><img src="/ticket.svg" alt="✓" /> Segmentación de leads por industria, urgencia o tipo de servicio</li>
          </ul>
        </div>
        <aside className="solution-includes-card reveal-right" ref={cardRef}>
          <h3>Qué incluye</h3>
          <ul className="solution-includes-list">
            {includeItems.map((item, i) => (
              <li key={i}>
                <img src={item.icon} alt="" style={{ width: 22, flexShrink: 0 }} />
                {item.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

/* ─── PROCESS ────────────────────────────────────────────────────── */
const steps = [
  { num: '1', title: 'Tráfico',       desc: 'Web, redes sociales, Google Ads o SEO.' },
  { num: '2', title: 'Landing page',  desc: 'Página optimizada para captar la atención.' },
  { num: '3', title: 'Formulario',    desc: 'Captura de datos del prospecto.' },
  { num: '4', title: 'CRM',           desc: 'Lead organizado y clasificado automáticamente.' },
  { num: '5', title: 'Automatización',desc: 'Respuesta y seguimiento inmediato.' },
]

function ProcessLeads() {
  const headingRef = useReveal()
  const timelineRef = useReveal()
  const ctaRef = useReveal()

  return (
    <section className="process-section section-light" aria-label="Cómo funciona: de visitante a oportunidad comercial">
      <div className="container">
        <div className="process-section__heading reveal" ref={headingRef}>
          <p className="section-kicker section-kicker--pink">CÓMO FUNCIONA</p>
          <h2>De visitante a oportunidad comercial, de forma automática</h2>
          <p className="process-section__subtitle">
            Cada persona que llega a tu web puede convertirse en un lead organizado y gestionado
            sin intervención manual. Todo esto ocurre automáticamente, sin que tengas que
            intervenir en cada paso.
          </p>
        </div>
        <div className="process-timeline stagger" ref={timelineRef}>
          <div className="process-timeline__line" />
          {steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="process-step__number"><span>{s.num}</span></div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="process-section__cta reveal" ref={ctaRef}>
          <a href="#diagnostico" className="btn btn-gradient">Agendar Diagnóstico gratuito</a>
        </div>
      </div>
    </section>
  )
}

/* ─── RESULT ─────────────────────────────────────────────────────── */
const resultItems = [
  'Cada visitante interesado queda capturado y registrado automáticamente en tu CRM',
  'Respuesta automática en menos de 5 minutos para mantener el interés del prospecto',
  'Leads segmentados y clasificados para que sepas exactamente con quién hablar primero',
  'Visibilidad total del pipeline: cuántos leads entran, de dónde vienen y en qué etapa están',
  'Base lista para escalar con chatbot de ventas con IA en la siguiente fase',
]

function ResultLeads() {
  const contentRef = useReveal()
  const checkRef = useReveal()

  return (
    <section className="result-section section-light" aria-label="El resultado: flujo constante de prospectos organizados">
      <div className="container">
        <div className="result-card">
          <div className="result-card__content reveal-left" ref={contentRef}>
            <p className="section-kicker section-kicker--blue">EL RESULTADO</p>
            <h2>Un flujo constante de prospectos organizados y listos para vender</h2>
            <p className="section-description">
              No más leads perdidos, no más seguimiento manual. Un sistema que captura
              oportunidades comerciales de forma automática y las entrega organizadas
              para que tu equipo solo tenga que cerrar.
            </p>
            <a href="#diagnostico" className="btn btn-gradient">Agendar Diagnóstico gratuito</a>
          </div>
          <div className="result-card__checklist reveal-right" ref={checkRef}>
            <ul>
              {resultItems.map((item, i) => (
                <li key={i}>
                  <img src="/ticket.svg" alt="✓" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */
export default function SistemaCaptacionLeads() {
  return (
    <>
      <CursorGlow />
      <HeroLeads />
      <main>
        <ProblemLeads />
        <SolutionLeads />
        <ProcessLeads />
        <ResultLeads />
        <Diagnostic />
      </main>
    </>
  )
}
