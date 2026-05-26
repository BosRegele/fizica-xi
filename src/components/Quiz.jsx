import { useState } from 'react';

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});

  const select = (qi, oi) => {
    if (checked[qi]) return;
    setAnswers(a => ({ ...a, [qi]: oi }));
  };

  const check = (qi) => {
    if (answers[qi] === undefined) return;
    setChecked(c => ({ ...c, [qi]: true }));
  };

  const score = Object.keys(checked).filter(qi => answers[qi] === questions[qi].correct).length;
  const total = questions.length;

  return (
    <div style={{ background: '#07122a', border: '1px solid #1a3057', borderRadius: 16, padding: 28, marginTop: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38bdf8' }}>
          ✦ Întrebări de verificare
        </div>
        {Object.keys(checked).length > 0 && (
          <div style={{
            background: score === total ? 'rgba(52,211,153,0.15)' : 'rgba(251,146,60,0.15)',
            border: `1px solid ${score === total ? 'rgba(52,211,153,0.4)' : 'rgba(251,146,60,0.4)'}`,
            color: score === total ? '#34d399' : '#fb923c',
            padding: '4px 14px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 700
          }}>
            {score}/{Object.keys(checked).length} corecte
          </div>
        )}
      </div>

      {questions.map((q, qi) => {
        const isChecked = checked[qi];
        const selected = answers[qi];
        return (
          <div key={qi} style={{ marginBottom: 28 }}>
            <div style={{ color: '#e2e8f0', fontWeight: 600, marginBottom: 12, lineHeight: 1.5 }}>
              <span style={{ color: '#38bdf8', marginRight: 8 }}>{qi + 1}.</span>
              {q.q}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {q.options.map((opt, oi) => {
                let bg = 'transparent';
                let border = '1px solid #1e2d45';
                let color = '#94a3b8';

                if (!isChecked && selected === oi) {
                  border = '1px solid #38bdf8';
                  bg = 'rgba(56,189,248,0.08)';
                  color = '#e2e8f0';
                }
                if (isChecked && oi === q.correct) {
                  border = '1px solid rgba(52,211,153,0.5)';
                  bg = 'rgba(52,211,153,0.1)';
                  color = '#34d399';
                }
                if (isChecked && selected === oi && oi !== q.correct) {
                  border = '1px solid rgba(248,113,113,0.5)';
                  bg = 'rgba(248,113,113,0.1)';
                  color = '#f87171';
                }

                return (
                  <div
                    key={oi}
                    onClick={() => select(qi, oi)}
                    style={{
                      padding: '10px 16px', borderRadius: 8, border, background: bg, color,
                      cursor: isChecked ? 'default' : 'pointer',
                      transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 10,
                      fontSize: '0.95rem'
                    }}
                  >
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%', border: `2px solid ${color}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, color
                    }}>
                      {isChecked && oi === q.correct ? '✓' : isChecked && selected === oi && oi !== q.correct ? '✗' : String.fromCharCode(65 + oi)}
                    </span>
                    {opt}
                  </div>
                );
              })}
            </div>

            {!isChecked && (
              <button
                onClick={() => check(qi)}
                disabled={selected === undefined}
                style={{
                  marginTop: 10, padding: '8px 20px',
                  background: selected !== undefined ? 'linear-gradient(135deg, #1d4ed8, #4f46e5)' : '#1a2235',
                  border: 'none', borderRadius: 8, color: selected !== undefined ? 'white' : '#475569',
                  fontWeight: 600, cursor: selected !== undefined ? 'pointer' : 'not-allowed',
                  fontSize: '0.9rem', transition: 'all 0.15s'
                }}
              >
                Verifică
              </button>
            )}

            {isChecked && (
              <div style={{
                marginTop: 10, padding: '10px 14px', borderRadius: 8,
                background: selected === q.correct ? 'rgba(52,211,153,0.08)' : 'rgba(248,113,113,0.08)',
                border: `1px solid ${selected === q.correct ? 'rgba(52,211,153,0.3)' : 'rgba(248,113,113,0.3)'}`,
                color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5
              }}>
                <span style={{ fontWeight: 700, color: selected === q.correct ? '#34d399' : '#f87171' }}>
                  {selected === q.correct ? '✓ Corect! ' : '✗ Greșit. '}
                </span>
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
