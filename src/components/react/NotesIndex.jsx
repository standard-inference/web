import { useState } from 'react';
import { Tag } from '../../ds/index.js';

const LEVELS = ['Introductory', 'Intermediate', 'Maths'];
const SERIES = ['LLM 101', 'Standard Practice', 'Standard Deviation'];
const label = { font: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' };
const pad = (n) => String(n).padStart(2, '0');

function Chips({ id, title, options, on, toggle, last }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(84px, auto) minmax(0, 1fr)', borderBottom: last ? undefined : 'var(--rule-fine) solid var(--ink-1)' }}>
      <span id={id} style={{ padding: '14px 16px', background: 'var(--ink-1)', color: 'var(--paper-1)', display: 'flex', alignItems: 'center', ...label }}>{title}</span>
      <div role="group" aria-labelledby={id} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '10px 14px' }}>
        {options.map((o) => {
          const p = on.includes(o);
          return (
            <button key={o} type="button" data-chip="" className="chip-btn" aria-pressed={p ? 'true' : 'false'} onClick={() => toggle(o)}>
              <Tag tone={p ? 'inverse' : 'default'}>{(p ? '✓ ' : '') + o}</Tag>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function NotesIndex({ notes }) {
  const [lv, setLv] = useState([]);
  const [se, setSe] = useState([]);
  const flip = (set) => (o) => set((s) => (s.includes(o) ? s.filter((x) => x !== o) : [...s, o]));
  const posts = notes.filter((n) => (!lv.length || lv.includes(n.level)) && (!se.length || se.includes(n.series)));
  return (
    <>
      <section aria-label="Filters" style={{ border: 'var(--rule-structural) solid var(--ink-1)', background: 'var(--paper-0)', display: 'grid' }}>
        <Chips id="f-level" title="Level" options={LEVELS} on={lv} toggle={flip(setLv)} />
        <Chips id="f-series" title="Series" options={SERIES} on={se} toggle={flip(setSe)} last />
      </section>

      <section aria-labelledby="h-list" style={{ display: 'grid', gap: 20 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, paddingBottom: 14, borderBottom: 'var(--rule-fine) solid var(--ink-1)' }}>
          <h2 id="h-list" className="h3-caps" style={{ margin: 0, lineHeight: 1 }}>Newest first</h2>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span aria-live="polite" style={{ ...label, color: 'var(--ink-2)' }}>Showing {pad(posts.length)} of {pad(notes.length)}</span>
            {lv.length + se.length > 0 && (
              <button type="button" data-hl="" className="text-btn" onClick={() => { setLv([]); setSe([]); }}>Clear filters ×</button>
            )}
          </div>
        </div>
        <ol data-wipe="" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 24 }}>
          {posts.map((p) => (
            <li key={p.code}>
              <article style={{ border: 'var(--rule-structural) solid var(--ink-1)', background: 'var(--paper-0)', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
                <div style={{ flex: '1 1 180px', padding: 20, borderRight: 'var(--rule-fine) solid var(--ink-1)', borderBottom: 'var(--rule-fine) solid var(--ink-1)', margin: '0 -2px -2px 0', background: 'var(--paper-1)', display: 'grid', gap: 10, alignContent: 'start', ...label }}>
                  <span style={{ font: 'var(--weight-bold) var(--type-h3)/1 var(--font-mono)' }}>{p.code}</span>
                  <span style={{ color: 'var(--ink-2)' }}>{p.date}</span>
                  <span style={{ color: 'var(--ink-2)' }}>{p.mins} min read</span>
                </div>
                <div style={{ flex: '4 1 340px', padding: 'var(--panel-pad)', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start', minWidth: 0 }}>
                  <h3 className="h2-caps" style={{ textWrap: 'balance' }}><a href={p.href} data-hl="" className="title-link">{p.title}</a></h3>
                  <p style={{ margin: 0, maxWidth: '62ch', font: 'var(--text-body)', color: 'var(--ink-2)', textWrap: 'pretty' }}>{p.summary}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
                    <Tag tone="inverse">{p.level}</Tag>
                    <Tag>{`Goes with ${p.episode} // ${p.series}`}</Tag>
                    <Tag tone="caution">Placeholder post</Tag>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
        {posts.length === 0 && (
          <p style={{ margin: 0, padding: 20, border: 'var(--rule-fine) dashed var(--ink-3)', font: 'var(--text-body)', color: 'var(--ink-2)' }}>No notes match these filters yet.</p>
        )}
      </section>
    </>
  );
}
