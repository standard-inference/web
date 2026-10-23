import { useState } from 'react';
import { Panel, Roll, StepBadge, Tag } from '../../ds/index.js';
import { usePrefersReducedMotion } from './useWidth.js';

const FILTERS = ['All', 'LLM 101', 'Standard Practice'];
const label = { font: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' };
const pad = (n) => String(n).padStart(2, '0');

// "Start here" and "The series" share one filter, so they live in one island.
export default function Channel({ episodes, series, youtube, softmaxHref }) {
  const [f, setF] = useState('All');
  const reduced = usePrefersReducedMotion();
  const rollMs = reduced ? 1 : 700;
  const eps = episodes.filter((e) => f === 'All' || e.series === f);
  const pickAndScroll = (name) => {
    setF(name);
    const el = document.getElementById('start-here');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 16 });
  };

  const cta = (s) => {
    if (episodes.some((e) => e.series === s.name)) return { text: `Show ${s.name} videos →`, pick: () => pickAndScroll(s.name) };
    if (s.name === 'Shorts') return { text: 'Watch Shorts on YouTube ↗', href: youtube + '/shorts' };
    if (s.soon) return { text: 'Read the D1 technical note →', href: softmaxHref };
    return null;
  };

  return (
    <>
      <section id="start-here" aria-labelledby="h-start" data-wipe="" className="section">
        <div className="section-head">
          <h2 id="h-start">Start here</h2>
          <p>Five videos, in order. Each one answers one question.</p>
          <div role="group" aria-label="Filter videos by series" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px 8px', paddingTop: 8 }}>
            <span style={{ ...label, color: 'var(--ink-2)', marginRight: 4 }}>Show</span>
            {FILTERS.map((name) => {
              const on = f === name;
              return (
                <button key={name} type="button" data-chip="" className="chip-btn" aria-pressed={on ? 'true' : 'false'} onClick={() => setF(name)}>
                  <Tag tone={on ? 'inverse' : 'default'}>{(on ? '✓ ' : '') + name}</Tag>
                </button>
              );
            })}
            <span aria-live="polite" style={{ ...label, marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center', color: 'var(--ink-2)' }}>
              <Roll text={pad(eps.length)} duration={rollMs} /><span>of {pad(episodes.length)}</span>
            </span>
          </div>
        </div>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 24 }}>
          {eps.map((e, i) => (
            <li key={e.code} style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr)', gap: '16px var(--frame-gutter)', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' }}>
                <StepBadge n={e.n} size="sm" />
                {i < eps.length - 1 && <span aria-hidden="true" style={{ flex: 1, minHeight: 24, width: 'var(--rule-structural)', marginBottom: -24, background: 'var(--pattern-dash-v)', color: 'var(--ink-4)' }} />}
              </div>
              <article style={{ border: 'var(--rule-structural) solid var(--ink-1)', background: 'var(--paper-0)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>
                <a data-thumb="" href={e.href} tabIndex={-1} aria-hidden="true" style={{ aspectRatio: '16 / 9', background: 'var(--pattern-hatch-light), var(--paper-2)', display: 'flex', alignItems: 'flex-end', padding: 12, borderRight: 'var(--rule-fine) solid var(--ink-1)', color: 'var(--ink-1)', textDecoration: 'none' }}>
                  <span style={{ ...label, background: 'var(--paper-0)', border: 'var(--rule-fine) solid var(--ink-1)', padding: '6px 8px' }}>▶ Thumbnail // {e.code} // 16:9</span>
                </a>
                <div style={{ padding: 'var(--panel-pad)', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', alignItems: 'flex-start' }}>
                  <span style={{ ...label, color: 'var(--ink-3)' }}>{e.code} // Working title</span>
                  <h3 className="h2-caps"><a href={e.href} data-hl="" className="title-link">{e.title}</a></h3>
                  <p style={{ margin: 0, font: 'var(--text-body)', color: 'var(--ink-2)' }}>Answers: <strong style={{ color: 'var(--ink-1)', fontWeight: 600 }}>“{e.question}”</strong></p>
                  <button type="button" data-chip="" className="chip-btn" style={{ padding: 0 }} onClick={() => pickAndScroll(e.series)} aria-label={`Show only ${e.series} videos`}>
                    <Tag>{e.series}</Tag>
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section id="series" aria-labelledby="h-series" data-wipe="" className="section">
        <div className="section-head"><h2 id="h-series">The series</h2></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--frame-gutter)' }}>
          {series.map((s) => {
            const c = cta(s);
            return (
              <Panel key={s.code} code={s.code} title={s.name}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start', height: '100%' }}>
                  <p className="h3-caps" style={{ margin: 0 }}>{s.line}</p>
                  {s.body && <p style={{ margin: 0, font: 'var(--text-body)', color: 'var(--ink-2)', textWrap: 'pretty' }}>{s.body}</p>}
                  {s.subs && (
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8, width: '100%' }}>
                      {s.subs.map((sub) => (
                        <li key={sub} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', font: 'var(--text-body)', borderTop: 'var(--rule-fine) solid var(--paper-3)', paddingTop: 8 }}><span style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>·</span>{sub}</li>
                      ))}
                    </ul>
                  )}
                  {s.soon && <Tag tone="caution">Coming soon</Tag>}
                  <div style={{ marginTop: 'auto', paddingTop: 4 }}>
                    {c?.pick && <button type="button" data-hl="" className="text-btn" style={{ padding: 0 }} onClick={c.pick}>{c.text}</button>}
                    {c?.href && <a href={c.href} style={{ ...label, minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>{c.text}</a>}
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>
      </section>
    </>
  );
}
