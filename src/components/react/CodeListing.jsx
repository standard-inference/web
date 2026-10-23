import { useEffect, useRef, useState } from 'react';
import { Button } from '../../ds/index.js';

export default function CodeListing({ n = '01', filename, code }) {
  const [copied, setCopied] = useState(false);
  const t = useRef();
  useEffect(() => () => clearTimeout(t.current), []);
  const done = () => {
    setCopied(true);
    clearTimeout(t.current);
    t.current = setTimeout(() => setCopied(false), 2000);
  };
  const copy = () => (navigator.clipboard ? navigator.clipboard.writeText(code).then(done, done) : done());
  return (
    <div style={{ border: 'var(--rule-structural) solid var(--ink-1)', background: 'var(--ink-1)', color: 'var(--paper-1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '8px 8px 8px 18px', borderBottom: 'var(--rule-fine) solid var(--ink-3)', font: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' }}>
        <span>Listing {n} // {filename}</span>
        <Button variant="secondary" size="sm" glyph={copied ? '✓' : '⧉'} onClick={copy}>{copied ? 'Copied' : 'Copy'}</Button>
      </div>
      <pre tabIndex={0} aria-label="Code listing" style={{ margin: 0, padding: '20px 18px', overflowX: 'auto', font: 'var(--weight-regular) 0.85em/1.6 var(--font-mono)' }}><code>{code}</code></pre>
      <span aria-live="polite" style={{ position: 'absolute', left: -9999 }}>{copied ? 'Code copied to clipboard' : ''}</span>
    </div>
  );
}
