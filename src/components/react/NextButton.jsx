import { Button } from '../../ds/index.js';

export default function NextButton({ href, children }) {
  return <Button variant="secondary" glyph="→" onClick={() => (window.location.href = href)}>{children}</Button>;
}
