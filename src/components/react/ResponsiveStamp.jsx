import { Stamp } from '../../ds/index.js';
import { useWidth } from './useWidth.js';

export default function ResponsiveStamp({ kind = 'ok' }) {
  return <Stamp kind={kind} size={useWidth() >= 900 ? 96 : 72} />;
}
