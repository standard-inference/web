import { SpecHeader } from '../../ds/index.js';
import { useWidth } from './useWidth.js';

// Title and sheet number drop out on narrow screens, as in the prototype.
export default function ResponsiveSpecHeader({ code, dept, form, title, sheet, titleAt = 700, sheetAt = 1000 }) {
  const w = useWidth();
  return (
    <div style={{ '--type-h3': 'clamp(15px,1.4vw,20px)' }}>
      <SpecHeader code={code} dept={dept} form={form} title={w >= titleAt ? title : undefined} sheet={w >= sheetAt ? sheet : undefined} />
    </div>
  );
}
