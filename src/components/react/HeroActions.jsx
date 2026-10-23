import { Button } from '../../ds/index.js';

export default function HeroActions({ watchHref, youtube }) {
  return (
    <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, paddingTop: 8 }}>
      <Button variant="primary" size="lg" glyph="▶" onClick={() => (window.location.href = watchHref)}>Watch episode one</Button>
      <Button variant="secondary" size="lg" glyph="↗" onClick={() => window.open(youtube, '_blank', 'noopener')}>Subscribe on YouTube</Button>
    </div>
  );
}
