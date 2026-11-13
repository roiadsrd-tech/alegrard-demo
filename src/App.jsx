import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Building2,
  FileSpreadsheet
} from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

// Datos oficiales de Alegra RD extraídos del brief verificado
const BRAND = {
  name: "Alegra RD",
  subtitle: "Software Contable y Facturación Electrónica e-CF",
  instagramUrl: "https://www.instagram.com/alegrard/",
  locations: ["Santo Domingo", "Santiago de los Caballeros", "La Romana", "San José de Ocoa", "Punta Cana"],
  stats: [
    { num: "260K+", label: "Negocios y contadores en la región", detail: "confían en el ecosistema Alegra" },
    { num: "Ley 32-23", label: "Normativa DGII Dominicana", detail: "timbrado e-CF en tiempo real" },
    { num: "< 10 min", label: "Habilitación Rápida con IA", detail: "asistente guiado paso a paso" },
    { num: "606 & 607", label: "Formatos Fiscales Automatizados", detail: "listos para declaración IT-1" }
  ],
  services: [
    {
      slug: "facturacion-electronica",
      title: "Facturación Electrónica (e-CF)",
      tagline: "Cumplimiento normativo estricto ante la DGII",
      description: "Automatiza la emisión y recepción de comprobantes fiscales electrónicos válidos para la República Dominicana.",
      fullStory: "Alegra RD resuelve la transición hacia la Ley 32-23 sin fricciones técnicas. Nuestra tecnología en la nube se conecta de manera directa con los servidores de la DGII, timbrando comprobantes E31, E32, E44 y E45 con firma digital en cuestión de milisegundos. Además, el motor predictivo detecta inconsistencias de RNC y NCF antes de la emisión, protegiendo a tu negocio de contingencias o retrasos.",
      features: [
        { title: "Habilitación e-CF con IA", desc: "Asistente inteligente que te guía durante todo el proceso de certificación ante la DGII en menos de 10 minutos." },
        { title: "Timbrado Inmediato", desc: "Emisión de comprobantes fiscales electrónicos con XML firmado digitalmente y TrackId oficial instantáneo." },
        { title: "Reportes 606 y 607 automáticos", desc: "Cada venta y gasto se asienta de inmediato, generando los formatos de envío fiscal sin re-digitación." },
        { title: "Soporte Local y Clínicas de Facturación", desc: "Acompañamiento especializado en vivo para resolver dudas operativas y fiscales de tu equipo." }
      ],
      photos: ["./media/post_5.jpg", "./media/post_8.jpg", "./media/post_21.jpg", "./media/post_30.jpg"]
    },
    {
      slug: "ia-contable",
      title: "Automatización & IA Contable",
      tagline: "Inteligencia que simplifica tus finanzas",
      description: "Conciliación bancaria predictiva y categorización algorítmica de transacciones comerciales.",
      fullStory: "Diseñado para liberar a contadores y directores financieros del trabajo repetitivo. El motor de Inteligencia Artificial analiza flujos bancarios, sugiere cuentas contables, detecta duplicados y mantiene el balance general actualizado al instante. Información clara y en tiempo real para tomar decisiones estratégicas de crecimiento.",
      features: [
        { title: "Conciliación Bancaria Predictiva", desc: "Cruce inteligente de estados de cuenta con comprobantes emitidos y compras registradas." },
        { title: "Detección de Discrepancias", desc: "Alertas tempranas sobre variaciones impositivas o números de comprobante discordantes." },
        { title: "Acceso Multi-usuario en la Nube", desc: "Colaboración fluida entre el empresario y su asesor contable desde cualquier lugar." }
      ],
      photos: ["./media/post_28.jpg", "./media/post_29.jpg", "./media/post_10.jpg"]
    },
    {
      slug: "punto-de-venta-pos",
      title: "Punto de Venta (POS) & Inventarios",
      tagline: "Ventas ágiles en mostrador sincronizadas en vivo",
      description: "Control de stock multialmacén y facturación rápida para negocios minoristas y de servicios.",
      fullStory: "El sistema POS de Alegra opera en línea y fuera de línea sin interrupciones. Cada venta descuenta inventario en tiempo real, emite comprobante fiscal e-CF al cliente y alimenta el flujo de caja del día, brindando visibilidad total del rendimiento de tu negocio.",
      features: [
        { title: "Operación Rápida de Mostrador", desc: "Cobro ágil con lector de código de barras, compatibilidad con impresoras térmicas y pantallas táctiles." },
        { title: "Control de Stock Multialmacén", desc: "Alertas de stock mínimo y seguimiento de productos en tiempo real en todas tus sucursales." },
        { title: "Métricas de Rentabilidad Diaria", desc: "Monitorea márgenes, artículos más vendidos y desempeño por turnos o sucursal." }
      ],
      photos: ["./media/post_9.jpg", "./media/post_5.jpg", "./media/post_21.jpg"]
    }
  ],
  projects: [
    {
      title: "Academy Summit",
      category: "Educación & Actualización Fiscal",
      location: "Santiago de los Caballeros",
      summary: "Encuentro presencial de alto nivel con paneles de expertos sobre Inteligencia Artificial aplicada a la contabilidad y normativas DGII.",
      photo: "./media/post_5.jpg",
      subPhoto: "./media/post_8.jpg"
    },
    {
      title: "Mesa Financiera Alegra",
      category: "Capacitación & Red de Negocios",
      location: "San José de Ocoa",
      summary: "Espacio de intercambio práctico donde directores de empresas y contadores implementan la facturación electrónica e-CF con casos reales.",
      photo: "./media/post_28.jpg",
      subPhoto: "./media/post_29.jpg"
    }
  ],
  process: [
    { step: "01", title: "Alta en la Plataforma", desc: "Crea tu cuenta institucional y configura la información básica de tu empresa en la nube." },
    { step: "02", title: "Habilitación DGII con IA", desc: "Nuestro asistente guiado gestiona la solicitud e integración del certificado e-CF ante la DGII." },
    { step: "03", title: "Operación & Crecimiento", desc: "Comienza a emitir comprobantes electrónicos, cuadrar inventarios y consolidar tus reportes." }
  ],
  faq: {
    q: "¿Cuál es la fecha límite para cumplir con la facturación electrónica (e-CF)?",
    a: "Conforme al calendario oficial de la DGII bajo la Ley 32-23, todos los contribuyentes pequeños, micros y no clasificados deben estar habilitados. Alegra RD te permite completar el proceso de forma guiada en cuestión de minutos sin traumatismos en tu operación."
  }
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Escuchar cambios de hash para navegación multi-página
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Determinar vista actual
  const isHome = currentRoute === '#/' || currentRoute === '';
  const isServiceDetail = currentRoute.startsWith('#/servicios/');
  const currentServiceSlug = isServiceDetail ? currentRoute.replace('#/servicios/', '') : null;
  const currentService = BRAND.services.find(s => s.slug === currentServiceSlug) || BRAND.services[0];

  const navigateTo = (hash) => {
    window.location.hash = hash;
    setMobileMenuOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      
      {/* =========================================================================
          NAVBAR: Mobile-First, min-height: 60px, una sola fila, hamburguesa limpia
          ========================================================================= */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(20, 22, 25, 0.08)',
          minHeight: '64px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            width: '100%'
          }}
        >
          {/* Logo oficial y marca */}
          <a 
            href="#/" 
            onClick={(e) => { e.preventDefault(); navigateTo('#/'); }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              minWidth: 0,
              textDecoration: 'none'
            }}
          >
            <img 
              src="./media/logo_real.jpg" 
              alt="Alegra RD Logo" 
              style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '8px', 
                objectFit: 'cover',
                flexShrink: 0,
                border: '1px solid rgba(0,0,0,0.06)'
              }} 
            />
            <div style={{ minWidth: 0 }}>
              <div 
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif', 
                  fontWeight: 700, 
                  fontSize: 'clamp(1rem, 4vw, 1.25rem)', 
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: '#121417'
                }}
              >
                Alegra RD
              </div>
              {/* Subtítulo oculto en móvil (< 768px) mediante CSS inline / container */}
              <div 
                className="desktop-only-sub"
                style={{ 
                  fontFamily: 'JetBrains Mono, monospace', 
                  fontSize: '0.68rem', 
                  color: '#64748B', 
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap'
                }}
              >
                e-CF · LEY 32-23 · INTELIGENCIA ARTIFICIAL
              </div>
            </div>
          </a>

          {/* Menú Desktop */}
          <nav 
            className="desktop-nav"
            style={{ 
              alignItems: 'center', 
              gap: '1.75rem'
            }}
          >
            <a 
              href="#/" 
              onClick={(e) => { e.preventDefault(); navigateTo('#/'); }}
              style={{ 
                fontSize: '0.92rem', 
                fontWeight: isHome ? 600 : 500, 
                color: isHome ? '#00B29A' : '#121417' 
              }}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              onClick={() => { if (!isHome) navigateTo('#/'); }}
              style={{ fontSize: '0.92rem', fontWeight: 500, color: '#121417' }}
            >
              Soluciones
            </a>
            <a 
              href="#ecosistema" 
              onClick={() => { if (!isHome) navigateTo('#/'); }}
              style={{ fontSize: '0.92rem', fontWeight: 500, color: '#121417' }}
            >
              Arquitectura e-CF
            </a>
            <a 
              href="#iniciativas" 
              onClick={() => { if (!isHome) navigateTo('#/'); }}
              style={{ fontSize: '0.92rem', fontWeight: 500, color: '#121417' }}
            >
              Comunidad
            </a>
            
            {/* CTA Principal Desktop a Instagram Oficial */}
            <a 
              href={BRAND.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ minHeight: '42px', padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}
            >
              <span>Consultar en Instagram</span>
              <ExternalLink size={15} />
            </a>
          </nav>

          {/* Botón Hamburguesa Móvil (Visible solo < 768px, min-target 44x44px) */}
          <button
            type="button"
            className="mobile-burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú de navegación"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderRadius: '8px',
              color: '#121417'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Panel Desplegable Móvil */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid rgba(20, 22, 25, 0.1)',
              boxShadow: '0 16px 32px rgba(0,0,0,0.08)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              zIndex: 100
            }}
          >
            <a
              href="#/"
              onClick={(e) => { e.preventDefault(); navigateTo('#/'); }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: isHome ? '#00D1B2' : '#121417',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.04)'
              }}
            >
              Inicio
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#64748B', letterSpacing: '0.06em' }}>
                SOLUCIONES ESPECIALIZADAS
              </span>
              {BRAND.services.map((s) => (
                <a
                  key={s.slug}
                  href={`#/servicios/${s.slug}`}
                  onClick={(e) => { e.preventDefault(); navigateTo(`#/servicios/${s.slug}`); }}
                  style={{
                    fontSize: '1rem',
                    color: currentServiceSlug === s.slug ? '#00D1B2' : '#121417',
                    padding: '0.35rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{s.title}</span>
                  <ChevronRight size={16} color="#64748B" />
                </a>
              ))}
            </div>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', minHeight: '48px', marginTop: '0.5rem' }}
            >
              <span>Ir a Instagram @alegrard</span>
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </header>

      {/* =========================================================================
          CONTENIDO: HOME O PÁGINA DEDICADA DE SERVICIO (#/servicios/<slug>)
          ========================================================================= */}
      {isHome ? (
        <main style={{ flex: 1 }}>

          {/* -----------------------------------------------------------------------
              SECCIÓN 1: HERO TÉCNICO & EDITORIAL (Swiss Dossier Grid)
              Arquetipo: Retícula visible 1px, titular Space Grotesk, foto real cálida
              ----------------------------------------------------------------------- */}
          <section
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid rgba(20, 22, 25, 0.08)',
              paddingTop: 'clamp(2.5rem, 6vw, 5rem)',
              paddingBottom: 'clamp(3rem, 7vw, 6rem)',
              overflow: 'hidden'
            }}
          >
            <div className="container">
              {/* Barra superior de especificaciones técnicas */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  paddingBottom: '1.25rem',
                  marginBottom: '2.5rem',
                  borderBottom: '1px solid rgba(20, 22, 25, 0.08)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#64748B'
                }}
              >
                <div>REPUBLICA DOMINICANA · DGII LEY 32-23</div>
                <div style={{ color: '#00B29A', fontWeight: 600 }}>PLATAFORMA CLOUD & IA CONTABLE</div>
              </div>

              {/* Contenido dividido asimétrico */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
                  gap: 'clamp(2rem, 5vw, 4.5rem)',
                  alignItems: 'center'
                }}
              >
                {/* Columna Izquierda: Titular y llamado a la acción */}
                <div style={{ minWidth: 0 }}>
                  <h1
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 'clamp(2.1rem, 5.8vw, 4rem)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.03em',
                      color: '#121417',
                      margin: '0 0 1.25rem 0'
                    }}
                  >
                    Automatiza tu contabilidad con <span style={{ color: '#00B29A' }}>Inteligencia Artificial</span>
                  </h1>

                  <p
                    style={{
                      fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                      color: '#475569',
                      lineHeight: 1.6,
                      margin: '0 0 2rem 0',
                      maxWidth: '540px'
                    }}
                  >
                    Cumple con la Ley 32-23 y emite tus comprobantes fiscales electrónicos (e-CF) de forma ágil ante la DGII. La solución confiable para empresas y contadores en República Dominicana.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <a
                      href={BRAND.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Comenzar en Instagram</span>
                      <ArrowRight size={18} />
                    </a>

                    <a
                      href="#servicios"
                      className="btn-secondary"
                    >
                      <span>Ver Soluciones</span>
                    </a>
                  </div>
                </div>

                {/* Columna Derecha: Foto cálida de personas / evento real */}
                <div style={{ position: 'relative', minWidth: 0 }}>
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(20, 22, 25, 0.1)'
                    }}
                  >
                    <img
                      src="./media/post_5.jpg"
                      alt="Alegra RD Encuentro de Contadores y Tecnología"
                      style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '4 / 3',
                        objectFit: 'cover'
                      }}
                    />
                    
                    {/* Scrim sutil en el pie de foto con pie técnico sobrio */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(18, 20, 23, 0.88), transparent)',
                        padding: '1.5rem',
                        color: '#FFFFFF'
                      }}
                    >
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#D4E93B', marginBottom: '0.25rem' }}>
                        ENCUENTRO DE FORMACIÓN Y NETWORKING
                      </div>
                      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.05rem', fontWeight: 600 }}>
                        Comunidad de contadores y líderes empresariales RD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* -----------------------------------------------------------------------
              SECCIÓN 2: SERVICIOS & ESPECIALIDADES (Editorial Rows con Conocer Más →)
              Fondo blanco alabastro, íconos custom BespokeServiceIcon, multi-página
              ----------------------------------------------------------------------- */}
          <section
            id="servicios"
            className="section-padding"
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
            }}
          >
            <div className="container">
              <div style={{ maxWidth: '680px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
                <h2 style={{ marginBottom: '1rem', color: '#121417' }}>
                  Soluciones estructuradas para el ecosistema contable dominicano
                </h2>
                <p>
                  Herramientas creadas específicamente para responder a las exigencias fiscales y administrativas del país con tecnología de punta.
                </p>
              </div>

              {/* Lista editorial dividida con líneas sutiles (Anti-Cards idénticas) */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {BRAND.services.map((svc, idx) => (
                  <div
                    key={svc.slug}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                      gap: 'clamp(1rem, 3vw, 2.5rem)',
                      alignItems: 'center',
                      paddingTop: '2rem',
                      paddingBottom: '2rem',
                      borderTop: idx === 0 ? '1px solid rgba(20, 22, 25, 0.12)' : 'none',
                      borderBottom: '1px solid rgba(20, 22, 25, 0.12)'
                    }}
                  >
                    {/* Título e Ícono Custom */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: 0 }}>
                      <BespokeServiceIcon index={idx} title={svc.title} category={svc.tagline} size={48} />
                      <div>
                        <h3 style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: '#121417', margin: 0 }}>
                          {svc.title}
                        </h3>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#64748B', marginTop: '0.2rem' }}>
                          {svc.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Descripción concisa */}
                    <div style={{ minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>
                        {svc.description}
                      </p>
                    </div>

                    {/* Botón Conocer Más hacia hash multi-página */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <button
                        type="button"
                        onClick={() => navigateTo(`#/servicios/${svc.slug}`)}
                        className="btn-secondary"
                        style={{
                          fontSize: '0.88rem',
                          minHeight: '44px',
                          padding: '0.6rem 1.25rem',
                          borderColor: 'rgba(20, 22, 25, 0.2)'
                        }}
                      >
                        <span>Conocer más</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* -----------------------------------------------------------------------
              SECCIÓN 3: ARQUITECTURA TÉCNICA E-CF & MOTOR IA (TechnicalSchematic)
              Modo Contrast-Hybrid: Bloque Oscuro (#121417) de Alto Contraste
              ----------------------------------------------------------------------- */}
          <section
            id="ecosistema"
            className="section-padding"
            style={{
              backgroundColor: '#121417',
              color: '#FFFFFF'
            }}
          >
            <div className="container">
              <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#D4E93B', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  TECNOLOGÍA AUTORIZADA DGII
                </div>
                <h2 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
                  Visualizador técnico del flujo e-CF bajo la Ley 32-23
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Observa cómo interactúan el emisor, el motor de Inteligencia Artificial de Alegra y los servidores tributarios de la DGII para certificar cada transacción.
                </p>
              </div>

              {/* Componente Gráfico Vectorial Interactivo */}
              <TechnicalSchematic />
            </div>
          </section>

          {/* -----------------------------------------------------------------------
              SECCIÓN 4: INICIATIVAS, EVENTOS REALES & COMUNIDAD
              Asimetría editorial con fotos reales curadas del brief
              ----------------------------------------------------------------------- */}
          <section
            id="iniciativas"
            className="section-padding"
            style={{
              backgroundColor: '#F8FAFC',
              borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
            }}
          >
            <div className="container">
              <div style={{ maxWidth: '640px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
                <h2 style={{ color: '#121417', marginBottom: '0.75rem' }}>
                  Presencia real y encuentros formativos en todo el país
                </h2>
                <p>
                  Capacitamos continuamente a la comunidad de contadores y emprendedores en Santo Domingo, Santiago, San José de Ocoa y todo el territorio nacional.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                  gap: 'clamp(1.5rem, 3vw, 2.5rem)'
                }}
              >
                {BRAND.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid rgba(20, 22, 25, 0.08)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden' }}>
                      <img
                        src={proj.photo}
                        alt={proj.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.72rem',
                          color: '#00B29A',
                          marginBottom: '0.35rem'
                        }}
                      >
                        {proj.category} · {proj.location}
                      </div>
                      <h3 style={{ fontSize: '1.4rem', color: '#121417', margin: '0 0 0.75rem 0' }}>
                        {proj.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                        {proj.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* -----------------------------------------------------------------------
              SECCIÓN 5: PROCESO & RESPALDO TÉCNICO
              Fondo blanco limpio, pasos 01-03 y cifras verificadas
              ----------------------------------------------------------------------- */}
          <section
            className="section-padding"
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
            }}
          >
            <div className="container">
              {/* Cifras de Respaldo */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                  gap: '1.5rem',
                  paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
                  marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
                  borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
                }}
              >
                {BRAND.stats.map((st, i) => (
                  <div key={i} style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                        fontWeight: 700,
                        color: '#00B29A',
                        lineHeight: 1
                      }}
                    >
                      {st.num}
                    </div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#121417', marginTop: '0.5rem' }}>
                      {st.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>
                      {st.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pasos de Implementación */}
              <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#121417', marginBottom: '0.75rem' }}>
                  Cómo poner tu empresa al día con Alegra
                </h2>
                <p>
                  Un camino estructurado y sin complicaciones técnicas para que tu negocio opere en total tranquilidad fiscal.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '1.5rem'
                }}
              >
                {BRAND.process.map((p, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.75rem',
                      borderRadius: '12px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid rgba(20, 22, 25, 0.06)'
                    }}
                  >
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.25rem', fontWeight: 700, color: '#00B29A', marginBottom: '0.75rem' }}>
                      {p.step}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: '#121417', marginBottom: '0.5rem' }}>
                      {p.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569' }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pregunta Frecuente Verificada */}
              <div
                style={{
                  marginTop: 'clamp(2.5rem, 5vw, 4rem)',
                  padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  backgroundColor: '#E0F7F5',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#008C79', letterSpacing: '0.08em' }}>
                  RESOLUCIÓN DGII · PREGUNTA CLAVE
                </div>
                <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.45rem)', color: '#0A3B34', margin: 0 }}>
                  {BRAND.faq.q}
                </h3>
                <p style={{ margin: 0, color: '#134E44', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {BRAND.faq.a}
                </p>
              </div>
            </div>
          </section>

          {/* -----------------------------------------------------------------------
              SECCIÓN 6: CIERRE & CONVERSIÓN DIRECTA
              Bloque Contrast (#121417) sobrio con enlace a Instagram oficial
              ----------------------------------------------------------------------- */}
          <section
            className="section-padding"
            style={{
              backgroundColor: '#121417',
              color: '#FFFFFF',
              textAlign: 'center'
            }}
          >
            <div className="container" style={{ maxWidth: '780px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#D4E93B', letterSpacing: '0.12em', marginBottom: '1rem' }}>
                COMUNIDAD OFICIAL RD
              </div>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 5vw, 3.25rem)', marginBottom: '1.25rem' }}>
                Lleva la facturación de tu negocio al siguiente nivel
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '1.05rem', margin: '0 auto 2.5rem auto', maxWidth: '580px' }}>
                Conéctate con el equipo de Alegra RD a través de nuestro canal verificado en Instagram y recibe orientación inmediata para tu empresa.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ minHeight: '52px', padding: '0.85rem 2.25rem', fontSize: '1rem' }}
                >
                  <span>Escribir a @alegrard</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </section>

        </main>
      ) : (
        /* =========================================================================
            VISTA MULTI-PÁGINA DEDICADA: SERVICIO (#/servicios/<slug>)
            Explicación a fondo, beneficios, fotos reales específicas y retorno
            ========================================================================= */
        <main style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <section
            style={{
              paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
              paddingBottom: 'clamp(3rem, 6vw, 6rem)',
              borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
            }}
          >
            <div className="container">
              {/* Botón Volver al Inicio */}
              <div style={{ marginBottom: '2rem' }}>
                <button
                  type="button"
                  onClick={() => navigateTo('#/')}
                  className="btn-secondary"
                  style={{ fontSize: '0.88rem', minHeight: '40px', padding: '0.5rem 1rem' }}
                >
                  <ArrowLeft size={16} />
                  <span>Volver al inicio</span>
                </button>
              </div>

              {/* Cabecera del Servicio */}
              <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#00B29A', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  {currentService.tagline}
                </div>
                <h1 style={{ color: '#121417', marginBottom: '1.25rem' }}>
                  {currentService.title}
                </h1>
                <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', color: '#334155', lineHeight: 1.65 }}>
                  {currentService.fullStory}
                </p>
              </div>

              {/* Beneficios Específicos */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                  gap: '1.5rem',
                  marginBottom: '3.5rem'
                }}
              >
                {currentService.features.map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1.75rem',
                      borderRadius: '12px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid rgba(20, 22, 25, 0.06)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                      <CheckCircle2 size={18} color="#00B29A" />
                      <h3 style={{ fontSize: '1.1rem', color: '#121417', margin: 0 }}>
                        {feat.title}
                      </h3>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748B' }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Galería de Fotografías Reales Vinculadas al Servicio */}
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                  DOCUMENTACIÓN VISUAL & CASOS REALES
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '1rem'
                  }}
                >
                  {currentService.photos.map((ph, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        aspectRatio: '4 / 3',
                        border: '1px solid rgba(20, 22, 25, 0.08)'
                      }}
                    >
                      <img
                        src={ph}
                        alt={`${currentService.title} ${idx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA de Consulta en la vista dedicada */}
              <div
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  backgroundColor: '#121417',
                  borderRadius: '16px',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
                    ¿Deseas implementar {currentService.title}?
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0, fontSize: '0.95rem' }}>
                    Escríbenos a nuestro Instagram oficial para asesorarte con la configuración DGII.
                  </p>
                </div>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ minHeight: '48px' }}
                >
                  <span>Contactar en @alegrard</span>
                  <ExternalLink size={16} />
                </a>
              </div>

            </div>
          </section>
        </main>
      )}

      {/* =========================================================================
          FOOTER: Sobrio, institucional, datos 100% verificados de RD
          ========================================================================= */}
      <footer
        style={{
          backgroundColor: '#0E1012',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          color: 'rgba(255, 255, 255, 0.7)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <div style={{ maxWidth: '380px' }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Alegra RD
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.55)', margin: 0 }}>
                Software contable y facturación electrónica e-CF con Inteligencia Artificial. Conforme a las disposiciones de la Ley 32-23 ante la Dirección General de Impuestos Internos (DGII).
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#D4E93B', letterSpacing: '0.08em' }}>
                DESTINOS & PRESENCIA REAL
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                {BRAND.locations.join(' · ')}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#00D1B2', letterSpacing: '0.08em' }}>
                CANAL OFICIAL
              </div>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}
              >
                <span>@alegrard en Instagram</span>
                <ExternalLink size={14} color="#00D1B2" />
              </a>
            </div>
          </div>

          <div
            style={{
              paddingTop: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: 'rgba(255, 255, 255, 0.4)'
            }}
          >
            <div>© {new Date().getFullYear()} Alegra RD. Todos los derechos reservados.</div>
            <div>Santo Domingo, República Dominicana</div>
          </div>
        </div>
      </footer>

      {/* Reglas de CSS Responsivo para Navbar y breakpoints */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-burger-btn {
            display: inline-flex !important;
          }
          .desktop-only-sub {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-burger-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
