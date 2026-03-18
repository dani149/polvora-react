import { useCallback, useRef } from 'react'
import { Navbar, Diagnostic, CursorGlow, useReveal } from '../components/Shared.jsx'

/* ─── HERO ───────────────────────────────────────────────────────── */
function HeroService() {
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
              <span>Sistema Web Estratégico</span>
            </div>
            <h1>Una web diseñada para generar clientes, no solo visitas</h1>
            <p className="section-description">
              Diseñamos sitios web estratégicos orientados a conversión,
              integrados con sistemas de captación, automatización y CRM
              para transformar tu web en un activo comercial.
            </p>
            <a href="#diagnostico" className="btn btn-gradient">Agendar Diagnóstico gratuito</a>
          </div>
          <div className="hero-service__media reveal-right" ref={imgRef}>
            <img src="/banner-web-op.webp" alt="Sistema web estratégico para empresas" width={1300} height={917} loading="eager" fetchPriority="high" />
          </div>
        </div>
      </section>
    </div>
  )
}

/* ─── PROBLEM ────────────────────────────────────────────────────── */
function ProblemService() {
  const ref = useReveal()

  return (
    <section className="problem-section section-light" aria-label="El problema: tu web no genera oportunidades comerciales">
      <div className="container problem-section__inner reveal" ref={ref}>
        <p className="section-kicker section-kicker--pink">EL PROBLEMA</p>
        <h2>Tu web debería generar oportunidades comerciales todos los días</h2>
        <p className="section-description section-description--dark">
          La mayoría de los sitios web solo informan. No están diseñados para captar leads, guiar al
          usuario ni convertir visitas en clientes. Esto hace que pierdas oportunidades de forma
          silenciosa y constante.
        </p>
        <a href="#diagnostico" className="btn btn-gradient">Descubre cómo podemos ayudarte</a>
      </div>
    </section>
  )
}

/* ─── SOLUTION ───────────────────────────────────────────────────── */
const includeItems = [
  { icon: '/icono-web.svg', text: 'Diseño UX/UI estratégico orientado a conversión' },
  { icon: '/icono-wpp.svg', text: 'Desarrollo en WordPress, Shopify o código' },
  { icon: '/icono-seo.svg', text: 'Optimización SEO base para posicionamiento orgánico' },
  { icon: '/icono-form.svg', text: 'Formularios de captación integrados' },
  { icon: '/icono-crm.svg', text: 'Integración con CRM' },
  { icon: '/icono-analityc.svg', text: 'Tracking y analítica con Google Analytics / Tag Manager' },
]

function SolutionService() {
  const contentRef = useReveal()
  const cardRef = useReveal()

  return (
    <section className="solution-section section-dark" aria-label="La solución: webs pensadas como sistemas de ventas">
      <div className="container solution-section__grid">
        <div className="solution-section__content reveal-left" ref={contentRef}>
          <p className="section-kicker section-kicker--blue">LA SOLUCIÓN</p>
          <h2>Construimos webs pensadas como sistemas de ventas</h2>
          <p className="section-description">
            No solo diseñamos una web bonita. Construimos un sistema
            de captación con arquitectura estratégica, pensado para guiar
            al visitante hacia una acción comercial concreta.
          </p>
          <ul className="solution-benefits">
            <li><img src="/ticket.svg" alt="✓" /> Arquitectura enfocada en conversión desde la primera sección</li>
            <li><img src="/ticket.svg" alt="✓" /> Secciones diseñadas para captar leads en puntos clave</li>
            <li><img src="/ticket.svg" alt="✓" /> Automatización de respuestas a nuevos contactos</li>
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
  { num: '1', title: 'Diagnóstico', desc: 'Analizamos tu negocio, competencia, cliente ideal y objetivos comerciales.' },
  { num: '2', title: 'Arquitectura', desc: 'Diseñamos la estructura de páginas, flujos y puntos de captación.' },
  { num: '3', title: 'Diseño y copy', desc: 'Creamos el diseño visual y los textos orientados a convertir visitas.' },
  { num: '4', title: 'Desarrollo', desc: 'Construimos e integramos CRM, formularios, tracking y automatizaciones.' },
  { num: '5', title: 'Lanzamiento', desc: 'Publicamos, validamos y entregamos con métricas activas desde el día uno.' },
]

function ProcessService() {
  const headingRef = useReveal()
  const timelineRef = useReveal()
  const ctaRef = useReveal()

  return (
    <section className="process-section section-light" aria-label="Cómo trabajamos: tu sistema web en 5 pasos">
      <div className="container">
        <div className="process-section__heading reveal" ref={headingRef}>
          <p className="section-kicker section-kicker--pink">CÓMO TRABAJAMOS</p>
          <h2>Tu sistema web en 5 pasos</h2>
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
  'Leads capturados automáticamente y organizados en tu CRM',
  'Respuestas automáticas a cada nuevo contacto en menos de 5 minutos',
  'Visibilidad en Google desde el primer mes con SEO base configurado',
  'Métricas claras para saber qué genera clientes y qué mejorar',
  'Base sólida para escalar con automatización e IA en fases siguientes',
]

function ResultService() {
  const contentRef = useReveal()
  const checkRef = useReveal()

  return (
    <section className="result-section section-light" aria-label="El resultado: una web que trabaja 24 horas">
      <div className="container">
        <div className="result-card">
          <div className="result-card__content reveal-left" ref={contentRef}>
            <p className="section-kicker section-kicker--blue">EL RESULTADO</p>
            <h2>Una web que trabaja para tu negocio las 24 horas</h2>
            <p className="section-description">
              No solo una presencia digital. Un activo comercial que
              capta, organiza y alimenta tu proceso de ventas de
              forma automática mientras tú te enfocas en cerrar clientes.
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
export default function SistemaWebEstrategico() {
  return (
    <>
      <CursorGlow />
      <HeroService />
      <main>
        <ProblemService />
        <SolutionService />
        <ProcessService />
        <ResultService />
        <Diagnostic />
      </main>
    </>
  )
}
