import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function FormulaCard({ name, math, desc }) {
  return (
    <div style={{
      background: '#07122a',
      border: '1px solid #1a3057',
      borderRadius: 12,
      padding: '16px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, #38bdf8, #a78bfa)'
      }} />
      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#38bdf8', marginBottom: 10 }}>
        {name}
      </div>
      <div style={{ fontSize: '1.15rem', color: '#f0f9ff', marginBottom: 8 }}>
        <InlineMath math={math} />
      </div>
      <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{desc}</div>
    </div>
  );
}
