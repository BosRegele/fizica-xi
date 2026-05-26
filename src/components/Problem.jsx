import { useState } from 'react';

export default function Problem({ problem, index }) {
  const [open, setOpen] = useState(false);

  const diffColors = {
    'Ușor': { bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.35)', color: '#34d399' },
    'Mediu': { bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.35)', color: '#fbbf24' },
    'Dificil': { bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.35)', color: '#f87171' },
  };
  const dc = diffColors[problem.difficulty] || diffColors['Mediu'];

  return (
    <div style={{ background: '#07122a', border: '1px solid #1a2d48', borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            background: 'rgba(251,146,60,0.15)', color: '#fb923c',
            border: '1px solid rgba(251,146,60,0.3)', padding: '3px 12px',
            borderRadius: 20, fontSize: '0.8rem', fontWeight: 700
          }}>
            Problema {index + 1}
          </div>
          <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.95rem' }}>{problem.title}</div>
        </div>
        <div style={{
          background: dc.bg, border: `1px solid ${dc.border}`, color: dc.color,
          padding: '3px 12px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 700
        }}>
          {problem.difficulty}
        </div>
      </div>

      <p style={{ color: '#e2e8f0', fontWeight: 500, marginBottom: 12, lineHeight: 1.7 }}>{problem.text}</p>

      <div style={{
        background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.15)',
        borderRadius: 8, padding: '10px 14px', marginBottom: 14, fontSize: '0.9rem', color: '#94a3b8'
      }}>
        <strong style={{ color: '#38bdf8' }}>Date: </strong>{problem.given}
        {problem.ask && <><br /><strong style={{ color: '#38bdf8' }}>Cerință: </strong>{problem.ask}</>}
      </div>

      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: 'none', border: '1px solid #1e2d45', color: '#38bdf8',
          padding: '7px 18px', borderRadius: 8, cursor: 'pointer', fontSize: '0.9rem',
          fontWeight: 600, transition: 'all 0.15s'
        }}
      >
        {open ? '▲ Ascunde soluția' : '▼ Arată soluția'}
      </button>

      {open && (
        <div style={{
          marginTop: 14, padding: 20,
          background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 12
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Rezolvare pas cu pas
          </div>
          {problem.steps.map((step, si) => (
            <div key={si} style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
              <div style={{
                width: 26, height: 26, borderRadius: '50%', background: 'rgba(52,211,153,0.2)',
                color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.78rem', fontWeight: 700, flexShrink: 0, marginTop: 2
              }}>
                {si + 1}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{step}</div>
            </div>
          ))}
          <div style={{
            marginTop: 12, padding: '10px 16px',
            background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.35)',
            borderRadius: 8, color: '#34d399', fontWeight: 700, fontSize: '0.95rem'
          }}>
            ✓ Răspuns: {problem.answer}
          </div>
        </div>
      )}
    </div>
  );
}
