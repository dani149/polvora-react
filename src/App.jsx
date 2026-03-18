import { CursorGlow, Navbar, Diagnostic } from './components/Shared'

function App() {
  return (
    <>
      <CursorGlow />

      <div className="section-dark">
        <Navbar />
        <HeroSection />
      </div>

      <main id="main-content">
        <ProblemSection />
        <SolutionsSection />
        <ProcessSection />
        <IndustriesSection />
        <Diagnostic />
      </main>
    </>
  )
}

export default App

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow pink reveal">
            ✦ AUTOMATIZACIÓN · IA · SISTEMA DE VENTAS
          </div>

          <h1 className="reveal">
            Convierte tu web en un sistema de ventas
          </h1>

          <p className="reveal">
            Combinamos desarrollo web, automatización, CRM e inteligencia
            artificial para transformar tu presencia digital en un motor de ventas.
          </p>

          <div className="hero-actions reveal">
            <a href="#diagnostico" className="btn btn-gradient">
              Agendar Diagnóstico
            </a>
            <a href="#soluciones" className="btn btn-outline">
              Ver soluciones
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />

          <picture>
            <source
              media="(max-width: 820px)"
              srcSet="/img-banner-resp.webp"
              width="700"
              height="449"
            />
            <source
              media="(min-width: 821px)"
              srcSet="/img-banner-op.webp"
              width="1300"
              height="833"
            />
            <img
              src="/img-banner-op.webp"
              alt="Sistema de ventas digital con automatización, CRM e inteligencia artificial"
              width="1300"
              height="833"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

/* ─── PROBLEM ────────────────────────────────────────────────────── */

const problemItems = [
  {
    icon: '/icono-1.svg',
    title: 'La web no capta leads',
    desc: 'Las visitas llegan pero no se convierten en contactos.',
  },
  {
    icon: '/icono-2.svg',
    title: 'Cero automatización',
    desc: 'Todo el proceso de ventas es manual y lento.',
  },
  {
    icon: '/icono-3.svg',
    title: 'Sin seguimiento comercial',
    desc: 'Las consultas se responden tarde o se pierden.',
  },
  {
    icon: '/icono-4.svg',
    title: 'Oportunidades perdidas',
    desc: 'Sin sistema, cada lead sin respuesta es dinero que se va.',
  },
]

function ProblemSection() {
  return (
    <section
      className="problem section-light"
      aria-label="El problema: por qué tu web no genera clientes"
    >
      <div className="container problem-grid">
        <div className="problem-copy reveal-left">
          <div className="eyebrow pink">El problema</div>
          <h2>Tienes una página web. No tienes un sistema que genere clientes</h2>
          <p>
            Muchas empresas invierten en presencia digital, pero su sitio no
            convierte visitas en oportunidades comerciales. Los leads se pierden.
            No hay seguimiento. No existe automatización.
          </p>
          <a href="#soluciones" className="btn btn-gradient">
            Conoce cómo podemos ayudarte
          </a>
        </div>

        <div className="problem-list stagger">
          {problemItems.map((item, i) => (
            <article key={i} className="problem-item">
              <div className="problem-icon">
                <img src={item.icon} alt="" />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SOLUTIONS ──────────────────────────────────────────────────── */

const featureItems = [
  {
    num: '01',
    title: 'Captación de leads automatizada',
    desc: 'Formularios y landing pages optimizados para convertir visitas en prospectos calificados.',
  },
  {
    num: '02',
    title: 'Seguimiento automático',
    desc: 'Respuestas y secuencias automáticas para que ningún lead quede sin contacto.',
  },
  {
    num: '03',
    title: 'CRM integrado',
    desc: 'Todos tus prospectos organizados, con historial y estado de cada oportunidad.',
  },
  {
    num: '04',
    title: 'Sistemas escalables',
    desc: 'Infraestructura digital que crece con tu empresa sin aumentar el equipo.',
  },
]

const solutionCards = [
  {
    num: '01.',
    title: 'Sistema Web Estratégico',
    desc: 'Una web que convierte visitas en oportunidades. Web orientada a conversión para empresas con sitio antiguo o que no genera contactos.',
    link: '/soluciones/sistema-web-estrategico',
  },
  {
    num: '02.',
    title: 'Sistema de Captación de Leads',
    desc: 'Sistema digital para captar y organizar prospectos. Landing optimizada, formularios, CRM y automatización de respuesta y seguimiento.',
    link: '/soluciones/sistema-captacion-de-leads',
  },
  {
    num: '03.',
    title: 'Sistema de Ventas con IA',
    desc: 'Sistema que responde y gestiona oportunidades solo. Chatbot de ventas con IA, captura de datos, CRM y automatización de seguimiento.',
    link: '#diagnostico',
  },
  {
    num: '04.',
    title: 'Infraestructura Digital de Ventas',
    desc: 'Sistema digital completo para captar, gestionar y convertir clientes. Sitio web estratégico + captación + automatización de marketing + CRM + chatbot IA + dashboard.',
    link: '#diagnostico',
  },
]

function SolutionsSection() {
  return (
    <>
      <section
        className="section-dark"
        id="metodo"
        aria-label="Nuestra solución: sistemas digitales de ventas"
      >
        <div className="container dark-intro reveal">
          <div className="eyebrow blue center">La solución</div>
          <h2>Diseñamos sistemas digitales que trabajan para tu negocio</h2>
          <p>
            Combinamos desarrollo web, automatización y tecnología para construir
            infraestructura digital diseñada para generar oportunidades comerciales.
          </p>
        </div>

        <div className="container feature-grid stagger">
          {featureItems.map((item, i) => (
            <article key={i} className="feature-card">
              <span className="num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="solutions section-light"
        id="soluciones"
        aria-label="Soluciones digitales para captación de leads y ventas"
      >
        <div className="container">
          <div className="title-wrap reveal">
            <div className="eyebrow pink center">Nuestras soluciones</div>
            <h2>Soluciones digitales para empresas que quieren crecer</h2>
          </div>

          <div className="solutions-grid stagger">
            {solutionCards.map((item, i) => (
              <article key={i} className="solution-card">
                <div className="solution-number">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.link} className="btn btn-gradient">
                  Saber más
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── PROCESS ────────────────────────────────────────────────────── */

const processItems = [
  {
    icon: '/icono-5.svg',
    title: 'Diagnóstico inicial',
    desc: 'Analizamos tu web, captación y procesos para identificar puntos de mejora.',
  },
  {
    icon: '/icono-6.svg',
    title: 'Arquitectura del sistema',
    desc: 'Diseñamos la estructura del sistema digital que necesita tu empresa.',
  },
  {
    icon: '/icono-7.svg',
    title: 'Implementación',
    desc: 'Construimos y activamos cada componente: web, CRM y automatizaciones.',
  },
  {
    icon: '/icono-8.svg',
    title: 'Optimización',
    desc: 'Medimos, ajustamos y escalamos el sistema para mejorar los resultados.',
  },
]

function ProcessSection() {
  return (
    <section
      className="process section-dark"
      aria-label="Proceso de implementación del sistema digital"
    >
      <div className="container">
        <div className="eyebrow blue center reveal">Nuestro proceso</div>
        <h2 className="reveal">Cómo implementamos tu sistema digital</h2>

        <div className="process-row stagger">
          <div className="process-connector" />
          {processItems.map((item, i) => (
            <article key={i} className="process-step">
              <div className="process-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="process-cta reveal">
          <a href="#diagnostico" className="btn btn-gradient">
            Agendar Diagnóstico
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── INDUSTRIES ─────────────────────────────────────────────────── */

const industries = [
  {
    icon: '/icono-9.svg',
    title: 'Clínicas y salud privada',
    desc: 'Alto ticket por cliente, consultas online constantes. Ideal para captación, chatbot y agenda automática.',
  },
  {
    icon: '/icono-10.svg',
    title: 'Inmobiliarias',
    desc: 'Volumen alto de consultas, necesitan CRM + seguimiento automatizado para no perder ningún lead.',
  },
  {
    icon: '/icono-11.svg',
    title: 'Servicios profesionales',
    desc: 'Consultoras, abogados, coaches y agencias B2B que dependen de referidos y necesitan un sistema.',
  },
  {
    icon: '/icono-12.svg',
    title: 'Turismo',
    desc: 'Hoteles, lodges y tours especializados que necesitan captación, reservas y automatización.',
  },
]

function IndustriesSection() {
  return (
    <section
      className="industries section-light"
      aria-label="Industrias: clínicas, inmobiliarias, servicios profesionales y turismo"
    >
      <div className="container">
        <div className="eyebrow pink center reveal">Industrias</div>
        <h2 className="center reveal">
          Soluciones digitales para empresas que quieren crecer
        </h2>
        <p className="subtitle reveal">
          Trabajamos con empresas de servicios que ya venden y quieren
          profesionalizar su operación digital. Si tu industria no aparece aquí,
          escríbenos.
        </p>

        <div className="industries-grid stagger">
          {industries.map((item, i) => (
            <article key={i} className="industry-card">
              <div className="industry-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="industries-cta reveal">
          <a href="#diagnostico" className="btn btn-gradient">
            Agendar Diagnóstico
          </a>
        </div>
      </div>
    </section>
  )
}