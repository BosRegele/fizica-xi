import FormulaCard from './FormulaCard';
import MagnitudesGuide from './MagnitudesGuide';
import VisualGallery from './VisualGallery';
import Quiz from './Quiz';
import Problem from './Problem';

const colorMap = {
  blue:   { accent: '#38bdf8', bg: 'rgba(56,189,248,0.12)',  border: 'rgba(56,189,248,0.3)'  },
  purple: { accent: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.3)' },
  green:  { accent: '#34d399', bg: 'rgba(52,211,153,0.12)',  border: 'rgba(52,211,153,0.3)'  },
  orange: { accent: '#fb923c', bg: 'rgba(251,146,60,0.12)',  border: 'rgba(251,146,60,0.3)'  },
  red:    { accent: '#f87171', bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.3)' },
};

const tipStyle = {
  info:  { bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.25)'  },
  warn:  { bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.25)'  },
  exam:  { bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.25)'  },
};

export default function LessonSection({ lesson }) {
  const c = colorMap[lesson.color] || colorMap.blue;

  return (
    <section id={`lesson-${lesson.id}`} style={{
      background: '#0d1627',
      border: '1px solid #1a2d48',
      borderRadius: 20,
      padding: '40px',
      marginBottom: 40,
      scrollMarginTop: 80,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid #1a2d48' }}>
        <div style={{
          width: 54, height: 54, borderRadius: 14, background: c.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.6rem', flexShrink: 0, border: `1px solid ${c.border}`
        }}>
          {lesson.icon}
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              background: c.bg, color: c.accent, border: `1px solid ${c.border}`,
              padding: '2px 10px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 700
            }}>
              Lecția {lesson.id}
            </div>
          </div>
          <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#e2e8f0', marginTop: 4 }}>{lesson.title}</h2>
          <div style={{ color: '#64748b', fontSize: '0.95rem' }}>{lesson.subtitle}</div>
        </div>
      </div>

      {/* Intro */}
      <div style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 28, fontSize: '1rem' }}
        dangerouslySetInnerHTML={{ __html: lesson.intro }} />

      {/* Tips */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
        {lesson.tips.map((tip, i) => {
          const ts = tipStyle[tip.type] || tipStyle.info;
          return (
            <div key={i} style={{
              background: ts.bg, border: `1px solid ${ts.border}`,
              borderRadius: 10, padding: '12px 16px',
              display: 'flex', gap: 12, alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{tip.icon}</span>
              <span style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>{tip.text}</span>
            </div>
          );
        })}
      </div>

      {/* Formulas */}
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: c.accent, marginBottom: 14 }}>Formule esențiale</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 14, marginBottom: 28
      }}>
        {lesson.formulas.map((f, i) => <FormulaCard key={i} {...f} />)}
      </div>

      {/* Table */}
      {lesson.table && (
        <>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: c.accent, marginBottom: 14 }}>
            {lesson.table[0][0] === '' ? 'Comparație' : 'Mărimi și unități'}
          </h3>
          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
              <thead>
                <tr>
                  {lesson.table[0].map((cell, ci) => (
                    <th key={ci} style={{
                      background: '#07122a', color: c.accent, fontWeight: 700,
                      padding: '10px 14px', textAlign: 'left',
                      border: '1px solid #1a2d48'
                    }}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lesson.table.slice(1).map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{
                        padding: '9px 14px', border: '1px solid #1a2d48',
                        color: ci === 0 ? '#e2e8f0' : '#94a3b8',
                        fontWeight: ci === 0 ? 600 : 400,
                        background: ri % 2 === 1 ? 'rgba(255,255,255,0.015)' : 'transparent'
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <MagnitudesGuide lesson={lesson} accent={c.accent} />

      <VisualGallery lesson={lesson} accent={c.accent} />

      {/* Image */}
      {lesson.image && (
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <img
            src={lesson.image.src}
            alt={lesson.image.caption}
            style={{ maxWidth: 360, width: '100%', borderRadius: 12, border: '1px solid #1a2d48', background: '#fff', padding: 8 }}
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div style={{ marginTop: 8, fontSize: '0.82rem', color: '#475569' }}>{lesson.image.caption}</div>
        </div>
      )}

      {/* Real Life Examples */}
      {lesson.realLife && lesson.realLife.length > 0 && (
        <>
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1a2d48, transparent)', margin: '28px 0' }} />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: c.accent, marginBottom: 14 }}>
            🌍 În viața reală
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14, marginBottom: 28 }}>
            {lesson.realLife.map((item, i) => (
              <div key={i} style={{
                background: '#07122a', border: `1px solid ${c.border}`,
                borderRadius: 12, padding: '16px 18px',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1a2d48, transparent)', margin: '28px 0' }} />

      {/* Quiz */}
      <Quiz questions={lesson.quiz} />

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1a2d48, transparent)', margin: '32px 0' }} />

      {/* Problems */}
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: c.accent, marginBottom: 16 }}>Probleme rezolvate</h3>
      {lesson.problems.map((p, i) => <Problem key={i} problem={p} index={i} />)}
    </section>
  );
}
