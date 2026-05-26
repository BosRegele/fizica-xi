import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { lessons } from './data/lessons';
import LessonSection from './components/LessonSection';

const colorDot = { blue: '#38bdf8', purple: '#a78bfa', green: '#34d399', orange: '#fb923c', red: '#f87171' };

export default function App() {
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = parseInt(e.target.id.replace('lesson-', ''));
            if (id) setActiveId(id);
          }
        });
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );
    setTimeout(() => {
      lessons.forEach(l => {
        const el = document.getElementById(`lesson-${l.id}`);
        if (el) observer.observe(el);
      });
    }, 500);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#070d1a' }}>
      {/* HEADER */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(7,13,26,0.96)',
        borderBottom: '1px solid #1a2d48',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.5)'
      }}>
        <div style={{
          maxWidth: 1380, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 60
        }}>
          <div style={{
            fontSize: '1.2rem', fontWeight: 900,
            background: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            ⚛ FizicăXI
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['Câmp Magnetic', 'Inducție EM', 'Condensatori', 'Curent AC', 'RLC'].map((tag, i) => (
              <span key={i} style={{
                padding: '3px 10px', borderRadius: 20, fontSize: '0.76rem', fontWeight: 600,
                border: '1px solid #1a2d48', color: '#475569'
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <div style={{
        padding: '72px 24px 60px', textAlign: 'center',
        borderBottom: '1px solid #1a2d48',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.06) 0%, transparent 60%)'
      }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
          Clasa a XI-a · Pregătire test
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1,
          background: 'linear-gradient(135deg, #e2e8f0 0%, #38bdf8 40%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          marginBottom: 18
        }}>
          Fizică — Ghid Complet
        </h1>
        <p style={{ color: '#475569', maxWidth: 580, margin: '0 auto 32px', fontSize: '1rem', lineHeight: 1.7 }}>
          Câmp magnetic, inducție electromagnetică, condensatori, curent alternativ și circuite RLC — formule, explicații clare, quiz-uri interactive și probleme rezolvate.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            ['10 lecții', '#38bdf8'], ['45 formule', '#a78bfa'],
            ['40 întrebări', '#34d399'], ['20 probleme rezolvate', '#fb923c'],
          ].map(([label, color], i) => (
            <div key={i} style={{
              padding: '7px 18px', borderRadius: 50, fontSize: '0.88rem', fontWeight: 700,
              background: `${color}18`, border: `1px solid ${color}45`, color
            }}>{label}</div>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '40px 24px', display: 'flex', gap: 36 }}>
        {/* SIDEBAR */}
        <aside style={{ width: 240, flexShrink: 0, position: 'sticky', top: 76, height: 'fit-content', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
          <div style={{ background: '#0d1627', border: '1px solid #1a2d48', borderRadius: 14, padding: 14, marginBottom: 14 }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#334155', marginBottom: 8 }}>
              Lecții
            </div>
            {lessons.map(l => {
              const dot = colorDot[l.color];
              const isActive = activeId === l.id;
              return (
                <a key={l.id} href={`#lesson-${l.id}`} style={{
                  display: 'flex', alignItems: 'center', gap: 9,
                  padding: '7px 8px', borderRadius: 7, textDecoration: 'none',
                  marginBottom: 2, transition: 'all 0.15s',
                  background: isActive ? `${dot}15` : 'transparent',
                  borderLeft: `2px solid ${isActive ? dot : 'transparent'}`,
                  color: isActive ? dot : '#475569',
                  fontSize: '0.84rem', fontWeight: isActive ? 700 : 400
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, flexShrink: 0, opacity: 0.5 }}>
                    {String(l.id).padStart(2, '0')}
                  </span>
                  <span style={{ lineHeight: 1.3 }}>{l.title}</span>
                </a>
              );
            })}
          </div>

          <div style={{ background: '#0d1627', border: '1px solid #1a2d48', borderRadius: 14, padding: 14 }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#334155', marginBottom: 8 }}>
              Referință rapidă
            </div>
            {[
              ['B conductor', 'μ₀I/(2πr)'],
              ['B solenoid', 'μ₀nI'],
              ['Flux Φ', 'BS·cosα'],
              ['Faraday', 'NΔΦ/Δt'],
              ['W bobină', 'LI²/2'],
              ['XL', 'ωL'],
              ['XC', '1/(ωC)'],
              ['Z serie', '√(R²+(XL−XC)²)'],
              ['f₀', '1/(2π√LC)'],
              ['Putere P', 'UI·cosφ'],
            ].map(([name, formula], i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '5px 0', borderBottom: i < 9 ? '1px solid #0f1e35' : 'none'
              }}>
                <span style={{ fontSize: '0.76rem', color: '#334155' }}>{name}</span>
                <code style={{
                  fontSize: '0.74rem', color: '#38bdf8', fontFamily: 'monospace',
                  background: '#07122a', padding: '1px 6px', borderRadius: 4
                }}>{formula}</code>
              </div>
            ))}
          </div>
        </aside>

        {/* CONTENT */}
        <main style={{ flex: 1, minWidth: 0 }}>
          {lessons.map(l => <LessonSection key={l.id} lesson={l} />)}
        </main>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: '#0d1627', borderTop: '1px solid #1a2d48',
        padding: '28px 24px', textAlign: 'center',
        color: '#334155', fontSize: '0.86rem'
      }}>
        <div style={{ marginBottom: 6 }}>Fizică Clasa a XI-a — Câmp Magnetic · Inducție EM · Condensatori · Curent Alternativ · Circuite RLC</div>
        <div style={{ color: '#475569' }}>Succes la test! 🎯</div>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          aside { display: none; }
        }
      `}</style>
    </div>
  );
}
