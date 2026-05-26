const filePath = file => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=900`;

const visualsByLesson = {
  1: [
    {
      src: filePath('Solenoid.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Solenoid.svg',
      title: 'Liniile câmpului într-un solenoid',
      text: 'În interior liniile sunt aproape paralele și dese, deci câmpul B este mai uniform și mai puternic.',
    },
    {
      src: filePath('Solenoid.png'),
      source: 'https://commons.wikimedia.org/wiki/File:Solenoid.png',
      title: 'Cât de puternic este B în spațiu',
      text: 'Graficul arată că zona centrală a solenoidului are câmp mai stabil decât marginile.',
    },
  ],
  2: [
    {
      src: filePath('Lorentz force.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Lorentz_force.svg',
      title: 'Forța Lorentz curbează traiectoria',
      text: 'Forța este perpendiculară pe mișcare, de aceea particula nu accelerează drept, ci se curbează.',
    },
    {
      src: filePath('Right hand rule simple.png'),
      source: 'https://commons.wikimedia.org/wiki/File:Right_hand_rule_simple.png',
      title: 'Regula mâinii drepte',
      text: 'Folosește direcțiile degetelor ca să legi B, viteza/curentul și sensul forței F.',
    },
  ],
  3: [
    {
      src: filePath('Electromagnetic induction.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Electromagnetic_induction.svg',
      title: 'Variația fluxului produce câmp electric',
      text: 'Când fluxul magnetic se schimbă, apare un câmp electric circular care poate produce curent.',
    },
    {
      src: filePath("Faraday's law of induction.svg"),
      source: 'https://commons.wikimedia.org/wiki/File:Faraday%27s_law_of_induction.svg',
      title: 'Magnet mișcat lângă bobină',
      text: 'Mișcarea magnetului schimbă fluxul prin bobină, iar bobina răspunde prin FEM indusă.',
    },
  ],
  4: [
    {
      src: filePath('Inductor diagram.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Inductor_diagram.svg',
      title: 'Bobina ca element de circuit',
      text: 'Inductanța L descrie cât de puternic reacționează bobina când curentul prin ea se schimbă.',
    },
    {
      src: filePath('Impedance analogy inductor.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Impedance_analogy_inductor.svg',
      title: 'Bobina se opune schimbării curentului',
      text: 'Imaginea ajută să vezi bobina ca un element care stochează energie în câmp magnetic.',
    },
  ],
  5: [
    {
      src: filePath('Capacitor schematic.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Capacitor_schematic.svg',
      title: 'Condensator plan',
      text: 'Plăcile au sarcini opuse, iar între ele apare câmpul electric E.',
    },
    {
      src: filePath('VFPt capacitor-infinite-plate.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:VFPt_capacitor-infinite-plate.svg',
      title: 'Liniile câmpului electric',
      text: 'Între plăci câmpul este aproape uniform; la margini liniile se curbează.',
    },
  ],
  6: [
    {
      src: filePath('Capacitors in parallel.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Capacitors_in_parallel.svg',
      title: 'Condensatori în paralel',
      text: 'Toți condensatorii au aceeași tensiune U, iar capacitățile se adună.',
    },
    {
      src: filePath('Capacitors in series.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Capacitors_in_series.svg',
      title: 'Condensatori în serie',
      text: 'Sarcina Q este aceeași pe fiecare condensator, iar tensiunile se împart.',
    },
  ],
  7: [
    {
      src: filePath('Sine wave voltages.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Sine_wave_voltages.svg',
      title: 'Vârf, vârf-la-vârf și valoare eficace',
      text: 'Aici vezi diferența dintre valoarea maximă Uₘ și valoarea eficace U folosită în probleme.',
    },
    {
      src: filePath('Ac voltages max-ef-avg.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Ac_voltages_max-ef-avg.svg',
      title: 'Maxim, mediu și eficace',
      text: 'Valoarea eficace este cea care produce același efect termic ca o tensiune continuă.',
    },
  ],
  8: [
    {
      src: filePath('RLC series circuit v1.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:RLC_series_circuit_v1.svg',
      title: 'Circuit RLC serie',
      text: 'Același curent trece prin R, L și C, dar tensiunile pe elemente sunt defazate.',
    },
    {
      src: filePath('Wykres wektorowy by Zureks.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:Wykres_wektorowy_by_Zureks.svg',
      title: 'Diagramă fazorială',
      text: 'Tensiunile și impedanțele se compun ca vectori, nu ca numere simple.',
    },
  ],
  9: [
    {
      src: filePath('RLC parallel circuit v1.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:RLC_parallel_circuit_v1.svg',
      title: 'Circuit RLC paralel',
      text: 'Tensiunea este aceeași pe toate ramurile, iar curenții se compun fazorial.',
    },
    {
      src: filePath('RLC parallel plot.svg'),
      source: 'https://commons.wikimedia.org/wiki/File:RLC_parallel_plot.svg',
      title: 'Răspunsul în frecvență',
      text: 'Graficul arată cum circuitul răspunde diferit când schimbi frecvența semnalului.',
    },
  ],
  10: [
    {
      src: filePath('PowerTriangle.png'),
      source: 'https://commons.wikimedia.org/wiki/File:PowerTriangle.png',
      title: 'Triunghiul puterilor',
      text: 'P, Q și S formează un triunghi dreptunghic: S² = P² + Q².',
    },
    {
      src: filePath('Power triangle diagram.jpg'),
      source: 'https://commons.wikimedia.org/wiki/File:Power_triangle_diagram.jpg',
      title: 'Factorul de putere',
      text: 'Unghiul φ arată cât de mult din puterea aparentă devine putere activă utilă.',
    },
  ],
};

export default function VisualGallery({ lesson, accent }) {
  const visuals = visualsByLesson[lesson.id];

  if (!visuals?.length) return null;

  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: accent, marginBottom: 14 }}>
        Grafice și desene explicative
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 14,
      }}>
        {visuals.map(item => (
          <figure key={`${lesson.id}-${item.title}`} style={{
            margin: 0,
            background: '#07122a',
            border: '1px solid #1a2d48',
            borderRadius: 12,
            overflow: 'hidden',
          }}>
            <div style={{
              background: '#f8fafc',
              minHeight: 220,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 14,
            }}>
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  maxHeight: 260,
                  objectFit: 'contain',
                  display: 'block',
                }}
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <figcaption style={{ padding: '13px 15px 15px' }}>
              <div style={{ color: '#e2e8f0', fontSize: '0.92rem', fontWeight: 700, marginBottom: 6 }}>
                {item.title}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.55, marginBottom: 8 }}>
                {item.text}
              </div>
              <a href={item.source} target="_blank" rel="noreferrer" style={{
                color: accent,
                fontSize: '0.78rem',
                textDecoration: 'none',
                fontWeight: 700,
              }}>
                Sursă imagine
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
