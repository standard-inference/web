import { useEffect, useState } from 'react';
import { Button, Roll, Token } from '../../ds/index.js';

const steps = [
  { title: 'Step 1 // Start with the scores', vals: ['2.0', '1.0', '0.1'], sum: 'Raw scores. They add up to 3.1.' },
  { title: 'Step 2 // Raise e to each score', vals: ['7.389', '2.718', '1.105'], sum: 'Total: 11.212' },
  { title: 'Step 3 // Divide each by the total', vals: ['0.659', '0.242', '0.099'], sum: 'Total: 1.000 ✓' },
];

export default function SoftmaxFigure() {
  const [k, setK] = useState(0);
  const [rollMs, setRollMs] = useState(700);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) setRollMs(1);
  }, []);
  const st = steps[k];
  const go = (d) => setK((n) => Math.max(0, Math.min(steps.length - 1, n + d)));
  const aria = st.title.replace('//', ':') + '. Values: ' + st.vals.join(', ');
  return (
    <div style={{ border: 'var(--rule-structural) solid var(--ink-1)', background: 'var(--pattern-dot-grid), var(--paper-0)', display: 'grid' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '10px 18px', borderBottom: 'var(--rule-fine) solid var(--ink-1)', background: 'var(--paper-0)', font: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' }}>
        <span>Fig. 01 // Softmax, step by step</span>
        <span style={{ color: 'var(--ink-3)' }}>{String(k + 1).padStart(2, '0')} / 0{steps.length}</span>
      </div>
      <div style={{ padding: '28px 16px', display: 'grid', gap: 20, justifyItems: 'center', fontSize: 16 }}>
        <Roll text={st.title} duration={rollMs} style={{ font: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontSize: 15, textAlign: 'center' }} />
        <div aria-live="polite" aria-label={aria} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
          {st.vals.map((v, i) => {
            const hit = k === steps.length - 1 && i === 0;
            return (
              <Token key={i} id={'z' + (i + 1)} tone={hit ? 'signal' : 'default'} selected={hit}>
                <Roll text={v} duration={rollMs} />
              </Token>
            );
          })}
        </div>
        <Roll text={st.sum} duration={rollMs} style={{ font: 'var(--weight-medium) 15px/1.2 var(--font-mono)', color: 'var(--ink-2)', textAlign: 'center' }} />
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="secondary" size="sm" glyph="←" disabled={k === 0} onClick={() => go(-1)}>Back</Button>
          <Button variant="secondary" size="sm" glyph="→" disabled={k === steps.length - 1} onClick={() => go(1)}>Next step</Button>
        </div>
      </div>
    </div>
  );
}
