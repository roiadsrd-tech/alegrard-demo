import React, { useState } from 'react';

const BRAND_CONFIG = {
  businessName: "Alegra RD",
  initial: "A",
  strokeWidth: 2,
  accentHex: "#00D1B2",
  goldHex: "#D4E93B",
  bgDarkHex: "#121417",
  textLightHex: "#FFFFFF",
  cornerRadius: "12px",
  title: "Ecosistema de Facturación e-CF & IA",
  subtitle: "Visualización técnica del flujo de comprobantes fiscales electrónicos bajo la Ley 32-23 mediante Inteligencia Artificial.",
  annotations: [
    "Validación IA Predictiva",
    "Timbrado DGII en Tiempo Real",
    "Resguardo Cloud Encriptado",
    "Sincronización Contable Automática"
  ],
  materials: [
    "Facturación Electrónica (e-CF)",
    "Inteligencia Artificial",
    "Software en la nube",
    "POS"
  ],
  locations: [
    "Santo Domingo",
    "Santiago de los Caballeros",
    "La Romana",
    "San José de Ocoa",
    "Punta Cana"
  ]
};

/**
 * Ícono vectorial custom-made para Alegra RD con grosor de línea de 2px,
 * terminaciones redondeadas y micro-cortes inspirados en las aspas del isotipo de Alegra.
 */
export function BespokeServiceIcon({ index = 0, name = '', title = '', category = '', size = 44, className = '' }) {
  const sw = BRAND_CONFIG.strokeWidth || 2;
  const stroke = BRAND_CONFIG.accentHex;
  const secondary = BRAND_CONFIG.goldHex;
  const ctx = `${title} ${name} ${category}`.toLowerCase();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Marco de cuadrante técnico sobrio */}
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="10"
        stroke={stroke}
        strokeOpacity="0.2"
        strokeWidth={sw}
        fill={stroke}
        fillOpacity="0.04"
      />

      {/factur|ecf|e-cf|comprobante|fiscal|ley/i.test(ctx) || index === 0 ? (
        // Facturación Electrónica e-CF con sello digital y timbrado DGII
        <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 11H34C35.1 11 36 11.9 36 13V35C36 36.1 35.1 37 34 37H14C12.9 37 12 36.1 12 35V13C12 11.9 12.9 11 14 11Z" />
          <path d="M17 17H31" stroke={secondary} />
          <path d="M17 22H27" />
          <path d="M17 27H23" />
          {/* Sello de validación e-CF */}
          <circle cx="30" cy="29" r="4.5" fill={stroke} fillOpacity="0.15" stroke={stroke} />
          <path d="M28.5 29L29.8 30.5L32 27.5" stroke={secondary} strokeWidth="1.5" />
        </g>
      ) : /ia|inteligencia|predictiv|automatiz/i.test(ctx) || index === 1 ? (
        // Motor IA: Nodo sináptico y flujo algorítmico contable
        <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="5" stroke={secondary} />
          <path d="M24 11V15M24 33V37M11 24H15M33 24H37" stroke={stroke} />
          <path d="M15 15L18 18M30 30L33 33M33 15L30 18M18 30L15 33" stroke={stroke} strokeOpacity="0.6" />
          <circle cx="24" cy="24" r="1.5" fill={secondary} stroke="none" />
          <circle cx="12" cy="24" r="2" fill={stroke} stroke="none" />
          <circle cx="36" cy="24" r="2" fill={stroke} stroke="none" />
        </g>
      ) : /pos|punto|venta|caja/i.test(ctx) || index === 2 ? (
        // Terminal POS & Cobro en la nube
        <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <rect x="13" y="11" width="22" height="26" rx="3" />
          <rect x="17" y="16" width="14" height="8" rx="1.5" stroke={secondary} />
          <circle cx="18" cy="29" r="1" fill={stroke} stroke="none" />
          <circle cx="24" cy="29" r="1" fill={stroke} stroke="none" />
          <circle cx="30" cy="29" r="1" fill={stroke} stroke="none" />
          <circle cx="18" cy="33" r="1" fill={secondary} stroke="none" />
          <circle cx="24" cy="33" r="1" fill={secondary} stroke="none" />
          <circle cx="30" cy="33" r="1" fill={secondary} stroke="none" />
        </g>
      ) : /reporte|fiscal|dgii|606|607/i.test(ctx) || index === 3 ? (
        // Libros contables y reportes DGII 606/607
        <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 36V14C12 12.9 12.9 12 14 12H34C35.1 12 36 12.9 36 14V36" />
          <path d="M12 32H36" stroke={secondary} />
          <path d="M18 20L22 24L28 17" stroke={secondary} />
          <line x1="17" y1="27" x2="31" y2="27" />
        </g>
      ) : /cloud|nube|sincron/i.test(ctx) || index === 4 ? (
        // Nube contable con sincronización en tiempo real
        <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 32H33C36 32 38 29.5 38 26.5C38 23.8 36.2 21.6 33.5 21.1C33 16.5 29.2 13 24.5 13C20.6 13 17.3 15.4 16.1 19C13.2 19.5 11 22 11 25C11 28.9 12.8 32 15 32Z" />
          <path d="M21 27L24 24L27 27" stroke={secondary} />
          <path d="M24 24V31" stroke={secondary} />
        </g>
      ) : (
        // Aspas dinámicas inspiradas en la morfología de Alegra
        <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 24C24 16 30 12 36 12" />
          <path d="M24 24C32 24 36 30 36 36" stroke={secondary} />
          <path d="M24 24C24 32 18 36 12 36" />
          <path d="M24 24C16 24 12 18 12 12" stroke={secondary} />
          <circle cx="24" cy="24" r="2.5" fill={stroke} stroke="none" />
        </g>
      )}
    </svg>
  );
}

/**
 * Visualizador interactivo de arquitectura técnica: Ecosistema e-CF & Motor IA de Alegra RD.
 * Presenta el flujo operacional bajo la Ley 32-23 ante la DGII con retícula y datos reales.
 */
export function TechnicalSchematic({ className = '', darkOverride = null }) {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: 0,
      code: "FLUJO · e-CF 01",
      label: "TIMBRADO DGII",
      title: "Flujo de Emisión y Timbrado e-CF en Tiempo Real",
      desc: "Generación de Comprobantes Fiscales Electrónicos (E31, E32, E44, E45) con firma digital y validación inmediata con la DGII según la Ley 32-23."
    },
    {
      id: 1,
      code: "MOTOR · IA 02",
      label: "VALIDACIÓN IA",
      title: "Auditoría Predictiva de Errores e Inconsistencias",
      desc: "La Inteligencia Artificial de Alegra revisa automáticamente RNC, tasas impositivas y secuencia de comprobantes antes de emitir, eliminando multas."
    },
    {
      id: 2,
      code: "NUBE · SYNC 03",
      label: "CONTABILIDAD 360°",
      title: "Sincronización Cloud Automática con Libros 606/607",
      desc: "Cada comprobante timbrado alimenta en tiempo real el libro de ventas, inventarios, estado de resultados y genera los archivos 606 y 607 listos."
    }
  ];

  const current = layers[activeLayer];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: '#121417',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
        color: '#FFFFFF'
      }}
    >
      {/* Cabecera del dossier técnico */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
          paddingBottom: '1.25rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ maxWidth: '580px' }}>
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#D4E93B',
              marginBottom: '0.35rem'
            }}
          >
            {current.code} — ARQUITECTURA TÉCNICA DGII
          </div>
          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1.2rem, 2.4vw, 1.65rem)',
              fontWeight: 600,
              lineHeight: 1.25,
              margin: '0 0 0.5rem 0',
              color: '#FFFFFF'
            }}
          >
            {current.title}
          </h3>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}
          >
            {current.desc}
          </p>
        </div>

        {/* Selector de capas del esquema */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          {layers.map((layer, idx) => (
            <button
              key={layer.id}
              type="button"
              onClick={() => setActiveLayer(idx)}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                padding: '0.55rem 0.95rem',
                borderRadius: '8px',
                border: activeLayer === idx ? '1px solid #00D1B2' : '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: activeLayer === idx ? 'rgba(0, 209, 178, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: activeLayer === idx ? '#00D1B2' : 'rgba(255, 255, 255, 0.65)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minHeight: '40px'
              }}
            >
              {layer.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lienzo vectorial interactivo */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          minHeight: '260px',
          maxHeight: '440px',
          backgroundColor: '#0A0C0E',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <svg
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <pattern id="techGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            </pattern>
            <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D1B2" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00D1B2" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4E93B" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Retícula técnica */}
          <rect width="800" height="450" fill="url(#techGrid)" />

          {/* Guías estructurales y líneas de calibración */}
          <line x1="40" y1="70" x2="760" y2="70" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <line x1="40" y1="380" x2="760" y2="380" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <line x1="400" y1="40" x2="400" y2="410" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="3 3" />

          {activeLayer === 0 && (
            // CAPA 1: FLUJO DE EMISIÓN e-CF ANTE LA DGII
            <g>
              {/* Bloque 1: Negocio / Usuario Emisor */}
              <rect x="70" y="150" width="180" height="150" rx="12" fill="#121417" stroke="#00D1B2" strokeWidth="1.5" />
              <text x="90" y="185" fill="#00D1B2" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="1">01. ORIGEN</text>
              <text x="90" y="210" fill="#FFFFFF" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="600">Punto de Venta / ERP</text>
              <text x="90" y="235" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Emisión de Factura E31</text>
              <rect x="90" y="255" width="140" height="26" rx="6" fill="rgba(0,209,178,0.12)" />
              <text x="105" y="272" fill="#00D1B2" fontFamily="JetBrains Mono, monospace" fontSize="10">XML Firmado Digital</text>

              {/* Conector dinámico hacia el Motor Alegra */}
              <path d="M 250 225 L 320 225" stroke="url(#cyanLine)" strokeWidth="2.5" strokeDasharray="4 4" />
              <circle cx="285" cy="225" r="3.5" fill="#00D1B2" />

              {/* Bloque Central: Alegra Cloud Engine */}
              <rect x="320" y="125" width="180" height="200" rx="14" fill="#161A1F" stroke="#D4E93B" strokeWidth="1.5" />
              <text x="340" y="160" fill="#D4E93B" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="1">02. NÚCLEO IA</text>
              <text x="340" y="185" fill="#FFFFFF" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="600">Alegra Cloud RD</text>
              <text x="340" y="210" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Validación de RNC & NCF</text>
              <text x="340" y="230" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Cálculo de ITBIS / Selectivo</text>
              <text x="340" y="250" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Generación de TrackId</text>
              <rect x="340" y="275" width="140" height="28" rx="6" fill="rgba(212,233,59,0.12)" />
              <text x="355" y="293" fill="#D4E93B" fontFamily="JetBrains Mono, monospace" fontSize="10">Respuesta &lt; 0.8 seg</text>

              {/* Conector dinámico hacia la DGII */}
              <path d="M 500 225 L 570 225" stroke="url(#cyanLine)" strokeWidth="2.5" strokeDasharray="4 4" />
              <circle cx="535" cy="225" r="3.5" fill="#D4E93B" />

              {/* Bloque 3: DGII Servidor Oficial */}
              <rect x="570" y="150" width="170" height="150" rx="12" fill="#121417" stroke="#00D1B2" strokeWidth="1.5" />
              <text x="590" y="185" fill="#00D1B2" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="1">03. DGII OFICIAL</text>
              <text x="590" y="210" fill="#FFFFFF" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="600">Web Service DGII</text>
              <text x="590" y="235" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Timbre e-CF Aprobado</text>
              <rect x="590" y="255" width="130" height="26" rx="6" fill="rgba(0,209,178,0.12)" />
              <text x="605" y="272" fill="#00D1B2" fontFamily="JetBrains Mono, monospace" fontSize="10">Ley 32-23 Válida</text>

              {/* Indicadores técnicos inferiores */}
              <text x="70" y="350" fill="#D4E93B" fontFamily="JetBrains Mono, monospace" fontSize="11">[COMPROBANTES]</text>
              <text x="180" y="350" fill="rgba(255,255,255,0.7)" fontFamily="JetBrains Mono, monospace" fontSize="11">E31 (Crédito Fiscal) · E32 (Consumo) · E44 (Reg. Especial) · E45 (Gubernamental)</text>
            </g>
          )}

          {activeLayer === 1 && (
            // CAPA 2: MOTOR DE INTELIGENCIA ARTIFICIAL PREDICTIVA
            <g>
              {/* Nodo central de IA */}
              <circle cx="400" cy="225" r="80" fill="rgba(0,209,178,0.06)" stroke="#00D1B2" strokeWidth="2" />
              <circle cx="400" cy="225" r="45" fill="rgba(212,233,59,0.08)" stroke="#D4E93B" strokeWidth="1.5" />
              <text x="400" y="222" textAnchor="middle" fill="#FFFFFF" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="600">MOTOR IA</text>
              <text x="400" y="240" textAnchor="middle" fill="#D4E93B" fontFamily="JetBrains Mono, monospace" fontSize="10">ALEGRA RD</text>

              {/* 4 Nodos orbitales con comprobaciones automáticas */}
              {/* Nodo Superior */}
              <rect x="310" y="70" width="180" height="46" rx="8" fill="#121417" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <text x="330" y="98" fill="#00D1B2" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="500">Auditoría RNC Activo DGII</text>
              <line x1="400" y1="116" x2="400" y2="145" stroke="#00D1B2" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Nodo Derecho */}
              <rect x="540" y="200" width="190" height="50" rx="8" fill="#121417" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <text x="555" y="225" fill="#D4E93B" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="500">Detección Duplicados NCF</text>
              <text x="555" y="242" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono, monospace" fontSize="10">Cero discrepancia fiscal</text>
              <line x1="480" y1="225" x2="540" y2="225" stroke="#D4E93B" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Nodo Inferior */}
              <rect x="310" y="325" width="180" height="46" rx="8" fill="#121417" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <text x="325" y="352" fill="#00D1B2" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="500">Validación de Tasa ITBIS 18%</text>
              <line x1="400" y1="305" x2="400" y2="325" stroke="#00D1B2" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Nodo Izquierdo */}
              <rect x="80" y="200" width="190" height="50" rx="8" fill="#121417" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <text x="95" y="225" fill="#D4E93B" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="500">Conciliación Bancos</text>
              <text x="95" y="242" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono, monospace" fontSize="10">Match automático inteligente</text>
              <line x1="270" y1="225" x2="320" y2="225" stroke="#D4E93B" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>
          )}

          {activeLayer === 2 && (
            // CAPA 3: SINCRONIZACIÓN CLOUD Y FORMATOS DGII 606/607
            <g>
              {/* Estructura de sincronización modular */}
              <rect x="80" y="110" width="640" height="230" rx="14" fill="#121417" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

              {/* Columnas del ecosistema conectado */}
              {/* Columna 1 */}
              <g transform="translate(110, 140)">
                <rect width="160" height="170" rx="10" fill="#161A1F" stroke="#00D1B2" strokeWidth="1" />
                <text x="20" y="35" fill="#00D1B2" fontFamily="JetBrains Mono, monospace" fontSize="11">01 · OPERACIÓN</text>
                <text x="20" y="65" fill="#FFFFFF" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="600">Ventas & POS</text>
                <text x="20" y="90" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Facturas e-CF</text>
                <text x="20" y="110" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Caja chica</text>
                <text x="20" y="130" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Inventarios</text>
              </g>

              {/* Flecha conectora 1 a 2 */}
              <path d="M 290 225 L 340 225" stroke="#D4E93B" strokeWidth="2" strokeDasharray="3 3" />

              {/* Columna 2 */}
              <g transform="translate(350, 140)">
                <rect width="160" height="170" rx="10" fill="#161A1F" stroke="#D4E93B" strokeWidth="1" />
                <text x="20" y="35" fill="#D4E93B" fontFamily="JetBrains Mono, monospace" fontSize="11">02 · PROCESO</text>
                <text x="20" y="65" fill="#FFFFFF" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="600">Asientos en Nube</text>
                <text x="20" y="90" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Diario contable</text>
                <text x="20" y="110" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Cuentas por cobrar</text>
                <text x="20" y="130" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif" fontSize="11">Mayor general</text>
              </g>

              {/* Flecha conectora 2 a 3 */}
              <path d="M 530 225 L 580 225" stroke="#00D1B2" strokeWidth="2" strokeDasharray="3 3" />

              {/* Columna 3 */}
              <g transform="translate(590, 140)">
                <rect width="160" height="170" rx="10" fill="#161A1F" stroke="#00D1B2" strokeWidth="1" />
                <text x="20" y="35" fill="#00D1B2" fontFamily="JetBrains Mono, monospace" fontSize="11">03 · DGII READY</text>
                <text x="20" y="65" fill="#FFFFFF" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="600">Reportes Fiscales</text>
                <text x="20" y="90" fill="#D4E93B" fontFamily="JetBrains Mono, monospace" fontSize="11">Formato 606</text>
                <text x="20" y="110" fill="#D4E93B" fontFamily="JetBrains Mono, monospace" fontSize="11">Formato 607</text>
                <text x="20" y="130" fill="#D4E93B" fontFamily="JetBrains Mono, monospace" fontSize="11">Declaración IT-1</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Pie del dossier con cotas técnicas verificadas */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '0.75rem',
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.75rem'
        }}
      >
        {BRAND_CONFIG.annotations.map((ann, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.75)' }}>
            <span style={{ color: '#D4E93B' }}>[0{i + 1}]</span>
            <span>{ann}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSchematic;
