import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function FormulaCard({ name, math, desc }) {
  let html;
  try {
    html = katex.renderToString(math, {
      throwOnError: false,
      displayMode: true,
      output: 'html',
    });
  } catch {
    html = `<span style="color:#f87171">${math}</span>`;
  }

  return (
    <div style={{
      background: '#07122a',
      border: '1px solid #1a3057',
      borderRadius: 12,
      padding: '16px 20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, #38bdf8, #a78bfa)',
      }} />
      <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#38bdf8', marginBottom: 10 }}>
        {name}
      </div>
      <div
        style={{ color: '#f0f9ff', marginBottom: 8, overflowX: 'auto' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{desc}</div>
    </div>
  );
}
