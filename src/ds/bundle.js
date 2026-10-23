/* @ds-bundle: {"format":4,"namespace":"StandardInferenceSI74_5db10b","components":[{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"Tag","sourcePath":"components/controls/Tag.jsx"},{"name":"Matrix","sourcePath":"components/data/Matrix.jsx"},{"name":"Token","sourcePath":"components/data/Token.jsx"},{"name":"Caption","sourcePath":"components/layout/Caption.jsx"},{"name":"Fit","sourcePath":"components/layout/Fit.jsx"},{"name":"Ident","sourcePath":"components/layout/Ident.jsx"},{"name":"Panel","sourcePath":"components/layout/Panel.jsx"},{"name":"SpecHeader","sourcePath":"components/layout/SpecHeader.jsx"},{"name":"StepBadge","sourcePath":"components/layout/StepBadge.jsx"},{"name":"Callout","sourcePath":"components/manual/Callout.jsx"},{"name":"InsertionLine","sourcePath":"components/manual/InsertionLine.jsx"},{"name":"PartsInventory","sourcePath":"components/manual/PartsInventory.jsx"},{"name":"Stamp","sourcePath":"components/manual/Stamp.jsx"},{"name":"Continuity","sourcePath":"components/motion/Continuity.jsx"},{"name":"ExplodedView","sourcePath":"components/motion/ExplodedView.jsx"},{"name":"Focus","sourcePath":"components/motion/Focus.jsx"},{"name":"Link","sourcePath":"components/motion/Link.jsx"},{"name":"Magnify","sourcePath":"components/motion/Magnify.jsx"},{"name":"Meter","sourcePath":"components/motion/Meter.jsx"},{"name":"Part","sourcePath":"components/motion/Part.jsx"},{"name":"Process","sourcePath":"components/motion/Process.jsx"},{"name":"Reorder","sourcePath":"components/motion/Reorder.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"},{"name":"Roll","sourcePath":"components/motion/Roll.jsx"},{"name":"SheetChange","sourcePath":"components/motion/SheetChange.jsx"},{"name":"Split","sourcePath":"components/motion/Split.jsx"},{"name":"Tally","sourcePath":"components/motion/Tally.jsx"},{"name":"Transit","sourcePath":"components/motion/Transit.jsx"},{"name":"Blank","sourcePath":"components/storytelling/Blank.jsx"},{"name":"Cluster","sourcePath":"components/storytelling/Cluster.jsx"},{"name":"Collapse","sourcePath":"components/storytelling/Collapse.jsx"},{"name":"Compare","sourcePath":"components/storytelling/Compare.jsx"},{"name":"Grow","sourcePath":"components/storytelling/Grow.jsx"},{"name":"PathLight","sourcePath":"components/storytelling/PathLight.jsx"},{"name":"Pour","sourcePath":"components/storytelling/Pour.jsx"},{"name":"Replay","sourcePath":"components/storytelling/Replay.jsx"},{"name":"Sort","sourcePath":"components/storytelling/Sort.jsx"},{"name":"SwapPart","sourcePath":"components/storytelling/SwapPart.jsx"},{"name":"Plot","sourcePath":"components/systems/Plot.jsx"},{"name":"Queue","sourcePath":"components/systems/Queue.jsx"},{"name":"Rack","sourcePath":"components/systems/Rack.jsx"},{"name":"Station","sourcePath":"components/systems/Station.jsx"}],"sourceHashes":{"components/controls/Button.jsx":"db89523fe206","components/controls/Tag.jsx":"d0896e554313","components/data/Matrix.jsx":"1f84dc21daee","components/data/Token.jsx":"e70c91d0b14b","components/layout/Caption.jsx":"e0f3b4dd3560","components/layout/Fit.jsx":"af700cafec78","components/layout/Ident.jsx":"1437d9e6fdef","components/layout/Panel.jsx":"a53294114eb6","components/layout/SpecHeader.jsx":"5ec7f59e9f38","components/layout/StepBadge.jsx":"ef276d3fa8b7","components/manual/Callout.jsx":"9ce662995509","components/manual/InsertionLine.jsx":"e0f51ecb3ec4","components/manual/PartsInventory.jsx":"55a9fb24298c","components/manual/Stamp.jsx":"45382fe28a60","components/motion/Continuity.jsx":"cac41ae5f8b8","components/motion/ExplodedView.jsx":"8e227c873012","components/motion/Focus.jsx":"26e40d1dcf16","components/motion/Link.jsx":"08675e2342fe","components/motion/Magnify.jsx":"77ac2b5ae5c2","components/motion/Meter.jsx":"6521fee99c99","components/motion/Part.jsx":"8076307572a0","components/motion/Process.jsx":"9cd5d50c4f79","components/motion/Reorder.jsx":"f72b17afbba7","components/motion/Reveal.jsx":"561099e956a6","components/motion/Roll.jsx":"61bd5ed85ca9","components/motion/SheetChange.jsx":"ac2413a01fbc","components/motion/Split.jsx":"c8817d31c2b5","components/motion/Tally.jsx":"589d1630aa9a","components/motion/Transit.jsx":"f6a4207ce166","components/storytelling/Blank.jsx":"0c7fea747f93","components/storytelling/Cluster.jsx":"b8b8e0dcc8e7","components/storytelling/Collapse.jsx":"a554e3596c14","components/storytelling/Compare.jsx":"fa855c5e5e27","components/storytelling/Grow.jsx":"66c120d342fb","components/storytelling/PathLight.jsx":"0f57ad0a87c0","components/storytelling/Pour.jsx":"787afb5c5add","components/storytelling/Replay.jsx":"e0b5b670dc52","components/storytelling/Sort.jsx":"006f80615575","components/storytelling/SwapPart.jsx":"205c2bffc845","components/systems/Plot.jsx":"0f806ffc3fa1","components/systems/Queue.jsx":"0e13d678d518","components/systems/Rack.jsx":"72d254105df3","components/systems/Station.jsx":"e5d39545d773","guidelines/motion/specs.jsx":"02bb5c3d1cc3","ui_kits/explainer/Frame.jsx":"bfe4123237a1","ui_kits/explainer/ScenesA.jsx":"39aff5a39fcd","ui_kits/explainer/ScenesB.jsx":"7903db7ae67b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StandardInferenceSI74_5db10b = window.StandardInferenceSI74_5db10b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/controls/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  glyph,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const pad = size === 'lg' ? '20px 36px' : size === 'sm' ? '10px 18px' : '14px 28px';
  const fs = size === 'lg' ? 'var(--type-h3)' : size === 'sm' ? 'var(--type-label)' : 'var(--type-caption)';
  const v = {
    primary: {
      background: hover ? 'var(--signal-600)' : 'var(--signal-500)',
      color: 'var(--ink-1)',
      border: 'var(--rule-medium) solid var(--ink-1)',
      shadow: true
    },
    secondary: {
      background: hover ? 'var(--paper-2)' : 'var(--paper-0)',
      color: 'var(--ink-1)',
      border: 'var(--rule-medium) solid var(--ink-1)',
      shadow: true
    },
    ghost: {
      background: hover ? 'var(--paper-2)' : 'transparent',
      color: 'var(--ink-1)',
      border: 'var(--rule-medium) dashed var(--ink-3)',
      shadow: false
    }
  }[variant] || {};
  const s = disabled ? {
    background: 'var(--paper-2)',
    color: 'var(--ink-4)',
    border: 'var(--rule-medium) solid var(--ink-4)',
    shadow: false
  } : v;
  const down = press && !disabled;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      whiteSpace: 'nowrap',
      flex: 'none',
      padding: pad,
      background: s.background,
      color: s.color,
      border: s.border,
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      font: 'var(--weight-bold) ' + fs + '/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)',
      boxShadow: s.shadow && !down ? 'var(--shadow-print-sm)' : 'none',
      transform: down ? 'translate(4px,4px)' : 'none',
      transition: 'background var(--dur-snap) var(--ease-assemble)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), glyph && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500
    }
  }, glyph));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/controls/Tag.jsx
try { (() => {
function Tag({
  tone = 'default',
  children,
  style
}) {
  const tones = {
    default: ['var(--paper-0)', 'var(--ink-1)'],
    signal: ['var(--signal-500)', 'var(--ink-1)'],
    utility: ['var(--utility-500)', 'var(--paper-0)'],
    caution: ['var(--caution-500)', 'var(--ink-1)'],
    ok: ['var(--approve-500)', 'var(--paper-0)'],
    bad: ['var(--reject-500)', 'var(--paper-0)'],
    inverse: ['var(--ink-1)', 'var(--paper-1)']
  };
  const [bg, fg] = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '7px 12px',
      background: bg,
      color: fg,
      border: 'var(--rule-medium) solid var(--ink-1)',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Matrix.jsx
try { (() => {
function Matrix({
  rows = 4,
  cols = 4,
  values,
  cellSize = 72,
  highlightRow,
  highlightCol,
  mask,
  label,
  dims = true,
  style
}) {
  const cells = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const masked = mask === 'causal' && c > r;
    const hr = r === highlightRow,
      hc = c === highlightCol;
    const bg = masked ? 'var(--pattern-hatch-light), var(--paper-2)' : hr && hc ? 'var(--signal-500)' : hr || hc ? 'var(--signal-100)' : 'var(--paper-0)';
    const v = values && values[r] ? values[r][c] : null;
    cells.push(/*#__PURE__*/React.createElement("div", {
      key: r + '-' + c,
      style: {
        width: cellSize,
        height: cellSize,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: 'var(--weight-medium) ' + Math.max(14, Math.round(cellSize * 0.34)) + 'px/1 var(--font-mono)',
        color: 'var(--ink-1)'
      }
    }, masked ? '' : v));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--type-caption)/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)',
      color: 'var(--ink-1)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ', ' + cellSize + 'px)',
      gap: 'var(--rule-fine)',
      background: 'var(--ink-1)',
      border: 'var(--rule-structural) solid var(--ink-1)',
      alignSelf: 'flex-start'
    }
  }, cells), dims && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      color: 'var(--ink-3)'
    }
  }, "[", rows, " \xD7 ", cols, "]"));
}
Object.assign(__ds_scope, { Matrix });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Matrix.jsx", error: String((e && e.message) || e) }); }

// components/data/Token.jsx
try { (() => {
function Token({
  children,
  id,
  tone = 'default',
  selected = false,
  style
}) {
  const tones = {
    default: ['var(--paper-0)', 'var(--ink-1)', 'solid var(--ink-1)'],
    signal: ['var(--signal-500)', 'var(--ink-1)', 'solid var(--ink-1)'],
    utility: ['var(--utility-500)', 'var(--paper-0)', 'solid var(--ink-1)'],
    muted: ['var(--paper-2)', 'var(--ink-2)', 'solid var(--ink-3)'],
    ghost: ['transparent', 'var(--ink-3)', 'dashed var(--ink-3)'],
    plain: ['transparent', 'var(--ink-1)', 'solid transparent']
  };
  const [bg, fg, bd] = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6,
      padding: '10px 18px 12px',
      background: bg,
      color: fg,
      border: 'var(--rule-medium) ' + bd,
      borderRadius: 'var(--radius-chip)',
      boxShadow: selected ? 'var(--shadow-print)' : 'none',
      transform: selected ? 'translate(-3px,-3px)' : 'none',
      transition: 'transform var(--dur-snap) var(--ease-assemble), box-shadow var(--dur-snap) var(--ease-assemble), background var(--dur-move) var(--ease-assemble), border-color var(--dur-move) var(--ease-assemble), color var(--dur-move) var(--ease-assemble)',
      ...style
    }
  }, id != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      opacity: 0.75
    }
  }, "#", id), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--type-body-l)/1 var(--font-mono)',
      whiteSpace: 'pre'
    }
  }, children));
}
Object.assign(__ds_scope, { Token });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Token.jsx", error: String((e && e.message) || e) }); }

// components/layout/Caption.jsx
try { (() => {
function Caption({
  children,
  speaker = 'Narr.',
  timecode,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: (speaker ? 'auto ' : '') + '1fr' + (timecode ? ' auto' : ''),
      border: 'var(--rule-structural) solid var(--ink-1)',
      background: 'var(--surface-panel)',
      ...style
    }
  }, speaker && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, speaker), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px',
      font: 'var(--weight-regular) var(--type-body-l)/var(--lh-body) var(--font-body)',
      color: 'var(--ink-1)',
      textWrap: 'pretty'
    }
  }, children), timecode && /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: 'var(--rule-fine) solid var(--ink-1)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, timecode));
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Caption.jsx", error: String((e && e.message) || e) }); }

// components/layout/Fit.jsx
try { (() => {
const {
  useRef,
  useLayoutEffect
} = React;
function Fit({
  min = 0.6,
  align = 'center',
  children,
  style
}) {
  const outer = useRef(null),
    inner = useRef(null);
  useLayoutEffect(() => {
    const o = outer.current,
      i = inner.current;
    if (!o || !i) return;
    const s = Math.min(1, o.clientWidth / (i.offsetWidth || 1), o.clientHeight / (i.offsetHeight || 1));
    i.style.transform = s < 1 ? 'scale(' + s + ')' : 'none';
    if (s < min) console.warn('Fit: stage scaled to ' + s.toFixed(2) + ' — too big for this format; wrap it, turn it vertical, or cut parts.');
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: outer,
    style: {
      flex: 1,
      minHeight: 0,
      minWidth: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: inner,
    style: {
      flex: 'none',
      transformOrigin: 'center center'
    }
  }, children));
}
Object.assign(__ds_scope, { Fit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Fit.jsx", error: String((e && e.message) || e) }); }

// components/layout/Ident.jsx
try { (() => {
const {
  useRef,
  useLayoutEffect
} = React;
const E = 'cubic-bezier(0.4,0,0.2,1)';
const SWATCHES = ['var(--caution-500)', 'var(--approve-500)', 'var(--reject-500)', 'var(--utility-700)'];
function Ident({
  name = ['Standard', 'Inference'],
  code = 'SI-74',
  tagline,
  swatches = SWATCHES,
  intro = true,
  width = 1920,
  height = 1080,
  style
}) {
  const v = height > width;
  const fw = v ? width : width * 0.75,
    fh = v ? height * 0.75 : height;
  const field = useRef(null),
    word = useRef(null),
    strip = useRef(null),
    foot = useRef(null);
  useLayoutEffect(() => {
    if (!intro) return;
    const o = (d, delay) => ({
      duration: d,
      delay,
      easing: E,
      fill: 'backwards'
    });
    field.current && field.current.animate([{
      clipPath: v ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)'
    }, {
      clipPath: 'inset(0 0 0 0)'
    }], o(1100, 0));
    strip.current && [...strip.current.children].forEach((c, k) => c.animate([{
      clipPath: v ? 'inset(0 100% 0 0)' : 'inset(0 0 100% 0)'
    }, {
      clipPath: 'inset(0 0 0 0)'
    }], o(600, 700 + k * 160)));
    word.current && [...word.current.querySelectorAll('[data-line]')].forEach((c, k) => c.animate([{
      transform: 'translateY(105%)'
    }, {
      transform: 'none'
    }], o(1000, 1100 + k * 180)));
    foot.current && foot.current.animate([{
      clipPath: 'inset(0 100% 0 0)'
    }, {
      clipPath: 'inset(0 0 0 0)'
    }], o(800, 1800));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      display: 'flex',
      flexDirection: v ? 'column' : 'row',
      flex: 'none',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-part": "si-square",
    "data-resize": "",
    ref: field,
    style: {
      width: fw,
      height: fh,
      background: 'var(--signal-500)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "data-part": "si-strip",
    ref: strip,
    style: {
      width: v ? width : width - fw,
      height: v ? height - fh : height,
      display: 'flex',
      flexDirection: v ? 'row' : 'column',
      flex: 'none'
    }
  }, swatches.map((c, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: 1,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    "data-part": "si-word",
    ref: word,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: fw,
      height: fh,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, name.map((line, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      overflow: 'hidden',
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-line": "",
    style: {
      font: 'var(--weight-bold) 176px/0.92 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      color: 'var(--ink-1)',
      textAlign: 'center'
    }
  }, line)))), (code || tagline) && /*#__PURE__*/React.createElement("div", {
    "data-part": "si-foot",
    ref: foot,
    style: {
      position: 'absolute',
      left: v ? 72 : 96,
      top: fh - (v ? 120 : 112),
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-1)'
    }
  }, code && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '10px 14px',
      background: 'var(--ink-1)',
      color: 'var(--signal-500)'
    }
  }, code), tagline && /*#__PURE__*/React.createElement("span", null, tagline)));
}
Object.assign(__ds_scope, { Ident });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Ident.jsx", error: String((e && e.message) || e) }); }

// components/layout/Panel.jsx
try { (() => {
function Panel({
  code,
  title,
  meta,
  tone = 'paper',
  padding = 'var(--panel-pad)',
  children,
  style
}) {
  const tones = {
    paper: ['var(--surface-panel)', 'var(--ink-1)', 'var(--ink-3)'],
    recessed: ['var(--surface-recessed)', 'var(--ink-1)', 'var(--ink-3)'],
    inverse: ['var(--ink-1)', 'var(--paper-1)', 'var(--paper-3)']
  };
  const [bg, fg, muted] = tones[tone] || tones.paper;
  const line = tone === 'inverse' ? 'var(--paper-1)' : 'var(--ink-1)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      border: 'var(--rule-structural) solid var(--ink-1)',
      background: bg,
      color: fg,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      ...style
    }
  }, (code || title || meta) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      borderBottom: 'var(--rule-structural) solid ' + line
    }
  }, code && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 64,
      padding: '12px 18px',
      background: tone === 'inverse' ? 'var(--signal-500)' : 'var(--ink-1)',
      color: tone === 'inverse' ? 'var(--ink-1)' : 'var(--paper-1)',
      font: 'var(--weight-bold) var(--type-caption)/1 var(--font-mono)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, code), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '14px 20px',
      font: 'var(--weight-bold) var(--type-caption)/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)',
      display: 'flex',
      alignItems: 'center'
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: muted,
      display: 'flex',
      alignItems: 'center'
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      flex: 1,
      position: 'relative',
      minHeight: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Panel.jsx", error: String((e && e.message) || e) }); }

// components/layout/SpecHeader.jsx
try { (() => {
function SpecHeader({
  dept = 'Dept. of Semantic Routing',
  form = 'Form 409-B',
  title,
  sheet,
  code = 'SI-74',
  inverse = false,
  style
}) {
  const ink = inverse ? 'var(--paper-1)' : 'var(--ink-1)';
  const muted = inverse ? 'var(--paper-3)' : 'var(--ink-3)';
  const rule = 'var(--rule-structural) solid ' + ink;
  const cell = {
    padding: '14px 24px',
    borderLeft: rule,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
    minWidth: 0
  };
  const label = {
    font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: muted
  };
  const value = {
    font: 'var(--weight-bold) var(--type-h3)/1 var(--font-display)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-header)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };
  const cols = ['auto', 'auto', title ? '1fr' : null, sheet ? 'auto' : null].filter(Boolean);
  if (!title) cols[1] = '1fr';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols.join(' '),
      border: rule,
      background: inverse ? 'var(--ink-1)' : 'var(--surface-panel)',
      color: ink,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      borderLeft: 'none',
      background: 'var(--signal-500)',
      color: 'var(--ink-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: 'var(--ink-1)'
    }
  }, "Std. Inf."), /*#__PURE__*/React.createElement("span", {
    style: value
  }, code)), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Department"), /*#__PURE__*/React.createElement("span", {
    style: value
  }, dept)), title && /*#__PURE__*/React.createElement("div", {
    style: cell
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, form), /*#__PURE__*/React.createElement("span", {
    style: value
  }, title)), sheet && /*#__PURE__*/React.createElement("div", {
    style: cell
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Sheet"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...value,
      fontFamily: 'var(--font-mono)',
      fontWeight: 600
    }
  }, sheet)));
}
Object.assign(__ds_scope, { SpecHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SpecHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/StepBadge.jsx
try { (() => {
function StepBadge({
  n = 1,
  of,
  variant = 'box',
  size = 'md',
  style
}) {
  const dim = size === 'lg' ? 160 : size === 'sm' ? 72 : 112;
  const num = String(n).padStart(2, '0');
  const fs = size === 'lg' ? 'var(--type-display)' : size === 'sm' ? 'var(--type-h3)' : 'var(--type-h1)';
  const box = variant === 'plain' ? {} : {
    width: dim,
    height: dim,
    border: 'var(--rule-structural) solid var(--ink-1)',
    background: variant === 'inverse' ? 'var(--ink-1)' : 'var(--surface-panel)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: variant === 'inverse' ? 'var(--paper-1)' : 'var(--ink-1)',
      font: 'var(--weight-bold) ' + fs + '/1 var(--font-display)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, num), of != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      paddingBottom: 8
    }
  }, "/ ", String(of).padStart(2, '0')));
}
Object.assign(__ds_scope, { StepBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StepBadge.jsx", error: String((e && e.message) || e) }); }

// components/manual/Callout.jsx
try { (() => {
function Callout({
  size = 360,
  label,
  ring = 'ink',
  leader,
  open = true,
  children,
  style
}) {
  const t = 'var(--dur-move) var(--ease-assemble)';
  const ringColor = ring === 'signal' ? 'var(--signal-500)' : ring === 'utility' ? 'var(--utility-500)' : 'var(--ink-1)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  }, leader && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: size / 2 + (leader.length || 120),
      height: 0,
      borderTop: 'var(--rule-medium) solid var(--ink-1)',
      transformOrigin: '0 0',
      transform: 'rotate(' + (leader.angle || 0) + 'deg) scaleX(' + (open ? 1 : 0) + ')',
      transition: 'transform var(--dur-draw) var(--ease-travel)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -10,
      top: -11.5,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--ink-1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: 'var(--rule-heavy) solid ' + ringColor,
      background: 'var(--paper-0)',
      boxShadow: 'inset 0 0 0 12px var(--paper-0), inset 0 0 0 14px var(--paper-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      textAlign: 'center',
      padding: size * 0.12,
      transform: open ? 'scale(1)' : 'scale(0.92)',
      opacity: open ? 1 : 0,
      transition: 'transform ' + t + (open ? ' 600ms' : '') + ', opacity ' + t + (open ? ' 600ms' : '')
    }
  }, children), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 0,
      transform: 'translate(-50%, 50%)',
      opacity: open ? 1 : 0,
      transition: 'opacity ' + t + (open ? ' 1200ms' : ''),
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      padding: '8px 14px',
      whiteSpace: 'nowrap',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/manual/Callout.jsx", error: String((e && e.message) || e) }); }

// components/manual/InsertionLine.jsx
try { (() => {
function InsertionLine({
  length = 320,
  direction = 'right',
  arrow = true,
  label,
  tone = 'ink',
  progress = 1,
  style
}) {
  const p = Math.max(0, Math.min(1, progress));
  const color = tone === 'signal' ? 'var(--signal-500)' : tone === 'muted' ? 'var(--ink-4)' : 'var(--ink-1)';
  const horiz = direction === 'right' || direction === 'left';
  const line = horiz ? {
    width: length,
    height: 'var(--rule-structural)',
    background: 'var(--pattern-dash-h)'
  } : {
    height: length,
    width: 'var(--rule-structural)',
    background: 'var(--pattern-dash-v)'
  };
  const t = 'transparent';
  const heads = {
    right: {
      borderTop: '14px solid ' + t,
      borderBottom: '14px solid ' + t,
      borderLeft: '24px solid ' + color
    },
    left: {
      borderTop: '14px solid ' + t,
      borderBottom: '14px solid ' + t,
      borderRight: '24px solid ' + color
    },
    down: {
      borderLeft: '14px solid ' + t,
      borderRight: '14px solid ' + t,
      borderTop: '24px solid ' + color
    },
    up: {
      borderLeft: '14px solid ' + t,
      borderRight: '14px solid ' + t,
      borderBottom: '24px solid ' + color
    }
  };
  const flow = {
    right: 'row',
    left: 'row-reverse',
    down: 'column',
    up: 'column-reverse'
  }[direction];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: horiz ? 'column' : 'row',
      alignItems: 'center',
      gap: 12,
      color,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: p > 0 ? 1 : 0,
      transition: 'opacity var(--dur-move) var(--ease-assemble)',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-2)',
      order: horiz ? 0 : 1
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: flow,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: flow,
      overflow: 'hidden',
      width: horiz ? length * p : undefined,
      height: horiz ? undefined : length * p,
      transition: (horiz ? 'width' : 'height') + ' var(--dur-draw) var(--ease-travel)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...line,
      flex: 'none'
    }
  })), arrow && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      ...heads[direction],
      opacity: p >= 1 ? 1 : 0,
      transition: 'opacity var(--dur-snap) var(--ease-assemble) ' + (p >= 1 ? '1400ms' : '0ms')
    }
  })));
}
Object.assign(__ds_scope, { InsertionLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/manual/InsertionLine.jsx", error: String((e && e.message) || e) }); }

// components/manual/PartsInventory.jsx
try { (() => {
function PartsInventory({
  title = 'Parts Inventory',
  code,
  items = [],
  columns,
  figureHeight = 180,
  revealed,
  style
}) {
  const cols = columns || Math.min(Math.max(items.length, 1), 4);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      border: 'var(--rule-structural) solid var(--ink-1)',
      background: 'var(--surface-panel)',
      color: 'var(--ink-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 20px',
      borderBottom: 'var(--rule-structural) solid var(--ink-1)',
      background: 'var(--ink-1)',
      color: 'var(--paper-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--type-caption)/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)'
    }
  }, title), code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--paper-3)'
    }
  }, code)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ', minmax(0,1fr))',
      gap: 'var(--rule-fine)',
      background: 'var(--ink-1)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-panel)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      opacity: revealed == null || i < revealed ? 1 : 0,
      transform: revealed == null || i < revealed ? 'none' : 'translateY(24px)',
      transition: 'opacity var(--dur-move) var(--ease-assemble), transform var(--dur-move) var(--ease-assemble)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: figureHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      overflow: 'hidden'
    }
  }, it.figure), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      padding: '12px 18px 16px',
      borderTop: 'var(--rule-fine) dashed var(--ink-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--type-h2)/1 var(--font-display)',
      color: it.accent ? 'var(--signal-500)' : 'var(--ink-1)'
    }
  }, it.qty, "x"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--type-caption)/1.1 var(--font-body)'
    }
  }, it.label), it.code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, it.code))))))));
}
Object.assign(__ds_scope, { PartsInventory });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/manual/PartsInventory.jsx", error: String((e && e.message) || e) }); }

// components/manual/Stamp.jsx
try { (() => {
function Stamp({
  kind = 'ok',
  label,
  size = 120,
  style
}) {
  const ok = kind === 'ok';
  const color = ok ? 'var(--status-ok)' : 'var(--status-bad)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: 'var(--rule-heavy) solid ' + color,
      background: ok ? 'var(--approve-100)' : 'var(--reject-100)',
      color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--weight-bold) ' + Math.round(size * 0.6) + 'px/1 var(--font-body)'
    }
  }, ok ? '\u2713' : '\u2717'), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-1)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/manual/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/motion/Continuity.jsx
try { (() => {
const EASE = 'cubic-bezier(0.4,0,0.2,1)';
// Wipes: a mask opens in the travel direction — like the part being printed, never faded.
const OPEN = {
  right: 'inset(0 100% 0 0)',
  left: 'inset(0 0 0 100%)',
  down: 'inset(0 0 100% 0)',
  up: 'inset(100% 0 0 0)'
};
const SHUT = {
  right: 'inset(0 0 0 100%)',
  left: 'inset(0 100% 0 0)',
  down: 'inset(100% 0 0 0)',
  up: 'inset(0 0 100% 0)'
};
const FULL = 'inset(0 0 0 0)';
const parentPart = el => el.parentElement && el.parentElement.closest('[data-part]');
class Continuity extends React.Component {
  root = React.createRef();
  layer = React.createRef();
  measure() {
    const root = this.root.current;
    if (!root) return null;
    const box = root.getBoundingClientRect();
    const scale = box.width / (root.offsetWidth || 1) || 1;
    const map = {};
    root.querySelectorAll(':scope > [data-stage] [data-part]').forEach(el => {
      const p = parentPart(el);
      map[el.dataset.part] = {
        r: el.getBoundingClientRect(),
        el,
        parent: p && root.contains(p) ? p.dataset.part : null,
        exit: el.dataset.exit
      };
    });
    return {
      map,
      box,
      scale
    };
  }
  getSnapshotBeforeUpdate() {
    const snap = this.measure();
    if (snap) for (const id in snap.map) snap.map[id].clone = snap.map[id].el.cloneNode(true);
    return snap;
  }
  componentDidUpdate(_, __, old) {
    if (!old) return;
    const now = this.measure();
    if (!now) return;
    const {
      duration = 1400,
      enter = 'right',
      exit = 'right'
    } = this.props;
    const s = now.scale;
    const ids = Object.keys(now.map);
    const exiting = Object.keys(old.map).filter(id => !now.map[id]);
    const moved = [],
      entered = [];
    const delta = (a, b) => [(a.left - b.left) / s, (a.top - b.top) / s];
    for (const id of ids) {
      const n = now.map[id];
      const src = old.map[id] || n.el.dataset.from && old.map[n.el.dataset.from];
      if (src) {
        let [dx, dy] = delta(src.r, n.r);
        const p = n.parent && now.map[n.parent],
          po = n.parent && old.map[n.parent];
        if (p && po) {
          const [pdx, pdy] = delta(po.r, p.r);
          dx -= pdx;
          dy -= pdy;
        }
        const sx = src.r.width / (n.r.width || 1),
          sy = src.r.height / (n.r.height || 1);
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1 || Math.abs(sx - 1) > 0.02 || Math.abs(sy - 1) > 0.02) {
          const keep = old.map[id] && n.el.dataset.resize === undefined;
          moved.push({
            n,
            dx,
            dy,
            sx: keep ? 1 : sx,
            sy: keep ? 1 : sy
          });
        }
      } else entered.push(n);
    }
    const moveDelay = exiting.length ? duration * 0.2 : 0;
    const enterDelay = moved.length || exiting.length ? duration * 0.45 : 0;
    const part = duration * 0.6;
    moved.forEach(({
      n,
      dx,
      dy,
      sx,
      sy
    }) => {
      n.el.style.transformOrigin = '0 0';
      n.el.animate([{
        transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + sx + ',' + sy + ')'
      }, {
        transform: 'none'
      }], {
        duration: duration * 0.8,
        delay: moveDelay,
        easing: EASE,
        fill: 'backwards'
      });
    });
    entered.sort((a, b) => a.r.top - b.r.top || a.r.left - b.r.left).forEach((n, k) => {
      if (n.parent && entered.some(e => e.el.dataset.part === n.parent)) return;
      if (ids.some(id => id !== n.el.dataset.part && n.el.contains(now.map[id].el) && old.map[id])) return;
      const dir = n.el.dataset.enter || enter;
      if (dir === 'none' || !OPEN[dir]) return;
      n.el.animate([{
        clipPath: OPEN[dir]
      }, {
        clipPath: FULL
      }], {
        duration: part,
        delay: enterDelay + k * 120,
        easing: EASE,
        fill: 'backwards'
      });
    });
    const layer = this.layer.current;
    exiting.forEach(id => {
      const o = old.map[id];
      if (o.parent && exiting.includes(o.parent)) return;
      const dir = o.exit || exit;
      if (dir === 'none' || !SHUT[dir] || !layer) return;
      const g = o.clone;
      g.querySelectorAll('[data-part]').forEach(c => {
        if (now.map[c.dataset.part]) c.style.visibility = 'hidden';
      });
      Object.assign(g.style, {
        position: 'absolute',
        margin: 0,
        left: (o.r.left - now.box.left) / s + 'px',
        top: (o.r.top - now.box.top) / s + 'px',
        width: o.r.width / s + 'px',
        height: o.r.height / s + 'px',
        pointerEvents: 'none'
      });
      layer.appendChild(g);
      const a = g.animate([{
        clipPath: FULL
      }, {
        clipPath: SHUT[dir]
      }], {
        duration: part * 0.8,
        easing: EASE,
        fill: 'forwards'
      });
      a.onfinish = () => g.remove();
    });
  }
  render() {
    const {
      children,
      style
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      ref: this.root,
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      "data-stage": "",
      style: {
        width: '100%',
        height: '100%'
      }
    }, children), /*#__PURE__*/React.createElement("div", {
      ref: this.layer,
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }
    }));
  }
}
Object.assign(__ds_scope, { Continuity });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Continuity.jsx", error: String((e && e.message) || e) }); }

// components/motion/ExplodedView.jsx
try { (() => {
function ExplodedView({
  layers = [],
  exploded = false,
  size = 300,
  gap = 150,
  collapsedGap = 14,
  focus,
  labels = true,
  style
}) {
  const n = layers.length;
  const k = 0.866,
    half = size * 0.7071;
  const z = exploded ? gap : collapsedGap;
  const Wd = half * 2 + (labels ? 380 : 0);
  const H = half + (n - 1) * gap * k + 16;
  const cx = half,
    baseY = H - half / 2 - 8;
  const ease = 'var(--dur-assemble) var(--ease-assemble)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: Wd,
      height: H,
      flex: 'none',
      ...style
    }
  }, layers.map((l, i) => {
    const f = focus === i,
      lift = i * z;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: cx - size / 2,
        top: baseY - size / 2,
        width: size,
        height: size,
        background: f ? 'var(--signal-100)' : 'var(--paper-0)',
        border: 'var(--rule-structural) solid ' + (f ? 'var(--signal-500)' : 'var(--ink-1)'),
        boxShadow: 'var(--shadow-print)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(' + lift + 'px)',
        transition: 'transform ' + ease + ', background ' + ease + ', border-color ' + ease
      }
    }, l.node), labels && l.label && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: cx + half + 8,
        top: baseY - lift * k,
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        opacity: exploded ? 1 : 0,
        transition: 'top ' + ease + ', opacity var(--dur-move) var(--ease-assemble) ' + (exploded ? '700ms' : '0ms')
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 'var(--rule-medium)',
        color: f ? 'var(--signal-500)' : 'var(--ink-1)',
        background: 'var(--pattern-dash-h)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        padding: '8px 12px',
        border: 'var(--rule-medium) solid var(--ink-1)',
        background: f ? 'var(--signal-500)' : 'var(--paper-0)',
        color: 'var(--ink-1)',
        whiteSpace: 'nowrap'
      }
    }, l.label)));
  }));
}
Object.assign(__ds_scope, { ExplodedView });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/ExplodedView.jsx", error: String((e && e.message) || e) }); }

// components/motion/Focus.jsx
try { (() => {
function Focus({
  state = 'normal',
  inline = true,
  children,
  style
}) {
  const f = state === 'focus',
    r = state === 'recede';
  const t = 'var(--dur-move) var(--ease-assemble)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: inline ? 'inline-block' : 'block',
      opacity: r ? 0.28 : 1,
      filter: r ? 'grayscale(1)' : 'none',
      transform: f ? 'translate(-4px,-4px)' : 'none',
      boxShadow: f ? 'var(--shadow-print)' : 'var(--shadow-none)',
      transition: 'opacity ' + t + ', filter ' + t + ', transform ' + t + ', box-shadow ' + t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Focus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Focus.jsx", error: String((e && e.message) || e) }); }

// components/motion/Link.jsx
try { (() => {
function Link({
  from = [0, 0],
  to = [200, 0],
  route = 'straight',
  progress = 1,
  tone = 'ink',
  dashed = false,
  width = 4,
  style
}) {
  const id = 'si-link-' + React.useId().replace(/:/g, '');
  const p = Math.max(0, Math.min(1, progress));
  const color = {
    ink: 'var(--ink-1)',
    signal: 'var(--signal-500)',
    utility: 'var(--utility-500)',
    muted: 'var(--ink-4)'
  }[tone] || 'var(--ink-1)';
  const [x1, y1] = from,
    [x2, y2] = to,
    mx = (x1 + x2) / 2;
  const d = route === 'elbow' ? 'M' + x1 + ' ' + y1 + ' H' + mx + ' V' + y2 + ' H' + x2 : route === 'arc' ? 'M' + x1 + ' ' + y1 + ' Q' + mx + ' ' + (Math.min(y1, y2) - Math.abs(x2 - x1) * 0.35) + ' ' + x2 + ' ' + y2 : 'M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2;
  return /*#__PURE__*/React.createElement("svg", {
    width: "1",
    height: "1",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      overflow: 'visible',
      pointerEvents: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("mask", {
    id: id,
    maskUnits: "userSpaceOnUse",
    x: "-5000",
    y: "-5000",
    width: "10000",
    height: "10000"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "#fff",
    strokeWidth: width + 12,
    pathLength: "1",
    strokeDasharray: "1 1",
    strokeDashoffset: 1 - p,
    style: {
      transition: 'stroke-dashoffset var(--dur-draw) var(--ease-travel)'
    }
  }))), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: width,
    strokeLinejoin: "miter",
    strokeDasharray: dashed ? '18 12' : undefined,
    mask: 'url(#' + id + ')'
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x1,
    cy: y1,
    r: "9",
    fill: "var(--ink-1)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x2,
    cy: y2,
    r: "9",
    fill: color,
    style: {
      opacity: p >= 1 ? 1 : 0,
      transition: 'opacity var(--dur-snap) var(--ease-assemble) ' + (p >= 1 ? '1500ms' : '0ms')
    }
  }));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Link.jsx", error: String((e && e.message) || e) }); }

// components/motion/Magnify.jsx
try { (() => {
function Magnify({
  zoom = 1,
  x = 0.5,
  y = 0.5,
  width = 960,
  height = 540,
  label,
  children,
  style
}) {
  const on = zoom > 1;
  const t = 'var(--dur-move) var(--ease-assemble) ' + (on ? '1200ms' : '0ms');
  const corner = pos => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 48,
      height: 48,
      ...pos,
      opacity: on ? 1 : 0,
      transition: 'opacity ' + t
    }
  });
  const b = 'var(--rule-structural) solid var(--ink-1)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      overflow: 'hidden',
      border: b,
      background: 'var(--paper-0)',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      transform: 'scale(' + zoom + ')',
      transformOrigin: x * 100 + '% ' + y * 100 + '%',
      transition: 'transform var(--dur-assemble) var(--ease-travel)'
    }
  }, children), corner({
    left: 24,
    top: 24,
    borderLeft: b,
    borderTop: b
  }), corner({
    right: 24,
    top: 24,
    borderRight: b,
    borderTop: b
  }), corner({
    left: 24,
    bottom: 24,
    borderLeft: b,
    borderBottom: b
  }), corner({
    right: 24,
    bottom: 24,
    borderRight: b,
    borderBottom: b
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      display: 'flex',
      opacity: on ? 1 : 0,
      transition: 'opacity ' + t
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '10px 14px',
      background: 'var(--paper-0)',
      borderLeft: b,
      borderBottom: b,
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '10px 14px',
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, "\xD7 ", zoom)));
}
Object.assign(__ds_scope, { Magnify });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Magnify.jsx", error: String((e && e.message) || e) }); }

// components/motion/Meter.jsx
try { (() => {
function Meter({
  value = 0,
  length = 300,
  thickness = 56,
  direction = 'up',
  tone = 'ink',
  label,
  delay = 0,
  style
}) {
  const v = Math.max(0, Math.min(1, value));
  const vert = direction === 'up';
  const fill = {
    ink: 'var(--ink-1)',
    signal: 'var(--signal-500)',
    utility: 'var(--utility-500)',
    muted: 'var(--paper-3)'
  }[tone] || 'var(--ink-1)';
  const tr = (vert ? 'height' : 'width') + ' var(--dur-assemble) var(--ease-assemble) ' + delay + 'ms, background var(--dur-move) var(--ease-assemble)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: vert ? 'column' : 'row',
      alignItems: 'center',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: vert ? thickness : length,
      height: vert ? length : thickness,
      border: 'var(--rule-medium) solid var(--ink-1)',
      background: 'var(--paper-0)',
      display: 'flex',
      flexDirection: vert ? 'column' : 'row',
      justifyContent: vert ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: vert ? '100%' : v * 100 + '%',
      height: vert ? v * 100 + '%' : '100%',
      background: fill,
      transition: tr
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, label));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Meter.jsx", error: String((e && e.message) || e) }); }

// components/motion/Part.jsx
try { (() => {
function Part({
  id,
  from,
  enter,
  exit,
  resize = false,
  inline = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-part": id,
    "data-from": from,
    "data-enter": enter,
    "data-exit": exit,
    "data-resize": resize ? '' : undefined,
    style: {
      display: inline ? 'inline-flex' : 'flex',
      flex: 'none',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Part });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Part.jsx", error: String((e && e.message) || e) }); }

// components/motion/Process.jsx
try { (() => {
function Process({
  step = 0,
  input,
  output,
  label = 'Process',
  code,
  slot = 280,
  style
}) {
  const tr = 'var(--dur-assemble) var(--ease-travel)';
  const mW = 360,
    arrow = 140;
  const busy = step === 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: slot + 'px ' + arrow + 'px ' + mW + 'px ' + arrow + 'px ' + slot + 'px',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 0,
      display: 'flex',
      justifyContent: 'center',
      transform: step >= 1 ? 'translateX(' + (slot / 2 + arrow + mW / 2) + 'px)' : 'none',
      opacity: step >= 1 ? 0 : 1,
      transition: 'transform ' + tr + ', opacity var(--dur-snap) linear ' + (step >= 1 ? '1300ms' : '0ms')
    }
  }, input), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.InsertionLine, {
    length: arrow - 48,
    tone: step === 1 ? 'signal' : 'muted'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      border: 'var(--rule-structural) solid ' + (busy ? 'var(--signal-500)' : 'var(--ink-1)'),
      background: 'var(--paper-0)',
      transition: 'border-color var(--dur-move) var(--ease-assemble)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: 'var(--rule-structural) solid var(--ink-1)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      font: 'var(--weight-bold) var(--type-caption)/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, code)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: 'var(--pattern-hatch-light), var(--paper-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 28,
      height: 28,
      border: 'var(--rule-medium) solid var(--ink-1)',
      background: busy ? 'var(--signal-500)' : step >= 3 ? 'var(--ink-1)' : 'var(--paper-0)',
      transition: 'background var(--dur-snap) var(--ease-assemble) ' + (busy ? i * 400 : 0) + 'ms'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.InsertionLine, {
    length: arrow - 48,
    tone: step >= 3 ? 'signal' : 'muted'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      opacity: step >= 3 ? 1 : 0,
      transform: step >= 3 ? 'none' : 'translateX(-' + arrow / 2 + 'px)',
      transition: 'opacity ' + tr + ', transform ' + tr
    }
  }, output));
}
Object.assign(__ds_scope, { Process });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Process.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reorder.jsx
try { (() => {
function Reorder({
  items = [],
  order,
  itemSize = 88,
  gap = 16,
  crossSize = 600,
  direction = 'column',
  style
}) {
  const keys = order || items.map(it => it.key);
  const col = direction === 'column';
  const total = items.length * itemSize + Math.max(0, items.length - 1) * gap;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: col ? crossSize : total,
      height: col ? total : crossSize,
      flex: 'none',
      ...style
    }
  }, items.map(it => {
    const idx = Math.max(0, keys.indexOf(it.key));
    const off = idx * (itemSize + gap);
    return /*#__PURE__*/React.createElement("div", {
      key: it.key,
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: col ? crossSize : itemSize,
        height: col ? itemSize : crossSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: col ? 'flex-start' : 'center',
        transform: col ? 'translateY(' + off + 'px)' : 'translateX(' + off + 'px)',
        transition: 'transform var(--dur-assemble) var(--ease-travel)'
      }
    }, it.node);
  }));
}
Object.assign(__ds_scope, { Reorder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reorder.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
// No opacity. A part is printed onto the sheet: a mask wipes open while it settles a few px.
const CLIP = {
  below: 'inset(100% 0 0 0)',
  above: 'inset(0 0 100% 0)',
  left: 'inset(0 100% 0 0)',
  right: 'inset(0 0 0 100%)',
  scale: 'circle(0% at 50% 50%)',
  none: 'none'
};
const OPEN = {
  scale: 'circle(75% at 50% 50%)'
};
function Reveal({
  show = true,
  from = 'below',
  distance = 12,
  delay = 0,
  duration = 'var(--dur-move)',
  inline = false,
  children,
  style
}) {
  const d = distance;
  const off = {
    below: 'translateY(' + d + 'px)',
    above: 'translateY(-' + d + 'px)',
    left: 'translateX(-' + d + 'px)',
    right: 'translateX(' + d + 'px)',
    scale: 'scale(1.06)',
    none: 'none'
  }[from] || 'none';
  const t = duration + ' var(--ease-assemble) ' + delay + 'ms';
  const hidden = from === 'none' ? {
    visibility: 'hidden'
  } : {
    clipPath: CLIP[from] || CLIP.below,
    transform: off
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: inline ? 'inline-block' : 'block',
      clipPath: OPEN[from] || 'inset(0 0 0 0)',
      transform: 'none',
      transition: 'clip-path ' + t + ', transform ' + t,
      ...(show ? {} : hidden),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/motion/Roll.jsx
try { (() => {
const {
  useRef,
  useState,
  useLayoutEffect
} = React;
const EASE = 'cubic-bezier(0.4,0,0.2,1)';
function Roll({
  text,
  duration = 700,
  direction = 'up',
  style
}) {
  const [st, setSt] = useState({
    cur: text,
    prev: null,
    n: 0
  });
  if (st.cur !== text) setSt({
    cur: text,
    prev: st.cur,
    n: st.n + 1
  });
  const inRef = useRef(null),
    outRef = useRef(null);
  useLayoutEffect(() => {
    if (st.prev == null) return;
    const k = direction === 'up' ? 1 : -1;
    const o = {
      duration,
      easing: EASE,
      fill: 'both'
    };
    if (outRef.current) outRef.current.animate([{
      transform: 'none'
    }, {
      transform: 'translateY(' + -k * 110 + '%)'
    }], o);
    if (inRef.current) inRef.current.animate([{
      transform: 'translateY(' + k * 110 + '%)'
    }, {
      transform: 'none'
    }], o);
    const t = setTimeout(() => setSt(s => ({
      ...s,
      prev: null
    })), duration + 40);
    return () => clearTimeout(t);
  }, [st.n]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      overflow: 'hidden',
      ...style
    }
  }, st.prev != null && /*#__PURE__*/React.createElement("div", {
    key: 'p' + st.n,
    ref: outRef,
    style: {
      gridArea: '1 / 1'
    }
  }, st.prev), /*#__PURE__*/React.createElement("div", {
    key: 'c' + st.n,
    ref: inRef,
    style: {
      gridArea: '1 / 1'
    }
  }, st.cur));
}
Object.assign(__ds_scope, { Roll });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Roll.jsx", error: String((e && e.message) || e) }); }

// components/motion/SheetChange.jsx
try { (() => {
const {
  useRef,
  useState,
  useLayoutEffect
} = React;
const EASE = 'cubic-bezier(0.4,0,0.2,1)';
const MODES = {
  fade: {
    out: [{
      opacity: 1
    }, {
      opacity: 0
    }],
    in: [{
      opacity: 0
    }, {
      opacity: 1
    }]
  },
  page: {
    out: [{
      transform: 'none'
    }, {
      transform: 'translateX(-100%)'
    }],
    in: [{
      transform: 'translateX(100%)'
    }, {
      transform: 'none'
    }]
  },
  lift: {
    out: [{
      transform: 'none'
    }, {
      transform: 'translateY(-100%)'
    }],
    in: [{
      transform: 'translateY(100%)'
    }, {
      transform: 'none'
    }]
  },
  wipe: {
    out: null,
    in: [{
      clipPath: 'inset(0 100% 0 0)'
    }, {
      clipPath: 'inset(0 0% 0 0)'
    }]
  }
};
function SheetChange({
  id,
  mode = 'wipe',
  duration = 1000,
  background = 'var(--paper-1)',
  children,
  style
}) {
  const last = useRef(children);
  const [st, setSt] = useState({
    id,
    prev: null
  });
  if (st.id !== id) setSt({
    id,
    prev: {
      id: st.id,
      node: last.current
    }
  });
  last.current = children;
  const inRef = useRef(null),
    outRef = useRef(null);
  useLayoutEffect(() => {
    if (!st.prev) return;
    const m = MODES[mode] || MODES.fade;
    const o = {
      duration,
      easing: EASE,
      fill: 'both'
    };
    if (inRef.current) inRef.current.animate(m.in, o);
    if (outRef.current && m.out) outRef.current.animate(m.out, o);
    const t = setTimeout(() => setSt(s => ({
      ...s,
      prev: null
    })), duration + 40);
    return () => clearTimeout(t);
  }, [st.prev]);
  const layer = {
    position: 'absolute',
    inset: 0,
    background
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      ...style
    }
  }, st.prev && /*#__PURE__*/React.createElement("div", {
    key: 'p' + st.prev.id,
    ref: outRef,
    style: layer
  }, st.prev.node), /*#__PURE__*/React.createElement("div", {
    key: 'c' + id,
    ref: inRef,
    style: layer
  }, children));
}
Object.assign(__ds_scope, { SheetChange });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/SheetChange.jsx", error: String((e && e.message) || e) }); }

// components/motion/Split.jsx
try { (() => {
function Split({
  split = true,
  gap = 24,
  joinGap = -3,
  marks = false,
  wrap = false,
  direction = 'row',
  children,
  style
}) {
  const items = React.Children.toArray(children);
  const row = direction === 'row';
  const prop = row ? 'marginLeft' : 'marginTop';
  const tr = 'var(--dur-assemble) var(--ease-assemble)';
  const off = (split ? gap : joinGap) / 2;
  const mark = row ? {
    top: -28,
    bottom: -28,
    left: -off,
    width: 0,
    borderLeft: 'var(--rule-medium) dashed var(--signal-500)',
    clipPath: marks ? 'inset(0 -4px 0 -4px)' : 'inset(0 -4px 100% -4px)'
  } : {
    left: -28,
    right: -28,
    top: -off,
    height: 0,
    borderTop: 'var(--rule-medium) dashed var(--signal-500)',
    clipPath: marks ? 'inset(-4px 0 -4px 0)' : 'inset(-4px 100% -4px 0)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      alignItems: 'center',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      justifyContent: wrap ? 'center' : 'flex-start',
      rowGap: wrap ? split ? gap : 16 : 0,
      transition: 'row-gap var(--dur-assemble) var(--ease-assemble)',
      ...style
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      [prop]: i === 0 ? 0 : split ? gap : joinGap,
      transition: (row ? 'margin-left ' : 'margin-top ') + tr
    }
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...mark,
      transition: 'clip-path var(--dur-move) var(--ease-assemble) ' + i * 120 + 'ms, ' + (row ? 'left ' : 'top ') + tr
    }
  }), c)));
}
Object.assign(__ds_scope, { Split });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Split.jsx", error: String((e && e.message) || e) }); }

// components/motion/Tally.jsx
try { (() => {
function Tally({
  value = 0,
  digits = 2,
  label,
  size = 112,
  style
}) {
  const str = String(Math.max(0, Math.floor(value))).padStart(digits, '0').slice(-digits);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--rule-fine)',
      background: 'var(--ink-1)',
      border: 'var(--rule-structural) solid var(--ink-1)',
      font: 'var(--weight-semibold) ' + size + 'px/1 var(--font-mono)'
    }
  }, str.split('').map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--paper-0)',
      padding: '0.12em 0.16em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1em',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'translateY(-' + d + 'em)',
      transition: 'transform var(--dur-move) var(--ease-travel)'
    }
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: '1em',
      lineHeight: '1em',
      textAlign: 'center'
    }
  }, n))))))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tally });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Tally.jsx", error: String((e && e.message) || e) }); }

// components/motion/Transit.jsx
try { (() => {
function Transit({
  at = 0,
  distance = 640,
  slot = 200,
  path = true,
  tone = 'signal',
  children,
  style
}) {
  const p = Math.max(0, Math.min(1, at));
  const color = tone === 'ink' ? 'var(--ink-1)' : tone === 'utility' ? 'var(--utility-500)' : 'var(--signal-500)';
  const tr = 'var(--dur-assemble) var(--ease-travel)';
  const rail = {
    position: 'absolute',
    left: slot / 2,
    top: '50%',
    height: 'var(--rule-medium)',
    marginTop: -1.5
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: distance + slot,
      display: 'flex',
      alignItems: 'center',
      minHeight: 80,
      ...style
    }
  }, path && /*#__PURE__*/React.createElement("div", {
    style: {
      ...rail,
      width: distance,
      color: 'var(--ink-4)',
      background: 'var(--pattern-dash-h)'
    }
  }), path && /*#__PURE__*/React.createElement("div", {
    style: {
      ...rail,
      width: distance * p,
      background: color,
      transition: 'width ' + tr
    }
  }), path && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: slot / 2 + distance - 10,
      top: '50%',
      marginTop: -10,
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: 'var(--rule-medium) solid var(--ink-1)',
      background: 'var(--paper-0)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: slot,
      display: 'flex',
      justifyContent: 'center',
      transform: 'translateX(' + distance * p + 'px)',
      transition: 'transform ' + tr
    }
  }, children));
}
Object.assign(__ds_scope, { Transit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Transit.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Blank.jsx
try { (() => {
const {
  useRef,
  useLayoutEffect
} = React;
function Blank({
  filled = false,
  width = 180,
  height = 84,
  arrive = 'drop',
  children,
  style
}) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (filled && arrive === 'drop' && ref.current) ref.current.animate([{
      clipPath: 'inset(0 0 100% 0)',
      transform: 'translateY(-24px)'
    }, {
      clipPath: 'inset(0 0 0 0)',
      transform: 'none'
    }], {
      duration: 1000,
      easing: 'cubic-bezier(0.4,0,0.2,1)',
      fill: 'backwards'
    });
  }, [filled]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: 'var(--rule-medium) dashed var(--ink-3)',
      borderRadius: 'var(--radius-chip)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--weight-bold) 48px/1 var(--font-display)',
      color: 'var(--ink-3)'
    }
  }, "?"), filled && /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { Blank });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Blank.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Cluster.jsx
try { (() => {
const hash = s => {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 9973;
  return h / 9973;
};
function Cluster({
  items = [],
  groups = [],
  clustered = false,
  width = 1400,
  height = 560,
  itemWidth = 170,
  itemHeight = 72,
  gap = 14,
  style
}) {
  const n = items.length;
  const cols = Math.max(1, Math.ceil(Math.sqrt(n * width / height)));
  const rows = Math.ceil(n / cols);
  const cw = (width - itemWidth) / Math.max(1, cols - 1),
    ch = (height - itemHeight) / Math.max(1, rows - 1);
  const order = items.map((it, i) => [hash(it.key + 'o'), i]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
  const scatter = i => {
    const slot = order.indexOf(i),
      it = items[i];
    const jx = (hash(it.key) - 0.5) * cw * 0.4,
      jy = (hash(it.key + 'y') - 0.5) * ch * 0.4;
    return [Math.max(0, Math.min(width - itemWidth, slot % cols * cw + jx)), Math.max(0, Math.min(height - itemHeight, Math.floor(slot / cols) * ch + jy))];
  };
  const box = g => {
    const m = items.filter(it => it.group === g.key).length;
    const c = m > 3 ? 2 : 1,
      r = Math.ceil(m / c);
    const w = c * itemWidth + (c - 1) * gap,
      h = r * itemHeight + (r - 1) * gap;
    return {
      c,
      w,
      h,
      x: g.x - w / 2,
      y: g.y - h / 2
    };
  };
  const boxes = Object.fromEntries(groups.map(g => [g.key, box(g)]));
  const idx = {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      flex: 'none',
      ...style
    }
  }, groups.map(g => {
    const b = boxes[g.key];
    return /*#__PURE__*/React.createElement("div", {
      key: g.key,
      style: {
        position: 'absolute',
        left: b.x - 24,
        top: b.y - 24,
        width: b.w + 48,
        height: b.h + 48,
        border: 'var(--rule-medium) dashed var(--ink-1)',
        opacity: clustered ? 1 : 0,
        transition: 'opacity var(--dur-move) var(--ease-assemble) ' + (clustered ? '1400ms' : '0ms')
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: -3,
        top: -44,
        padding: '7px 12px',
        background: 'var(--ink-1)',
        color: 'var(--paper-1)',
        font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }
    }, g.label));
  }), items.map((it, i) => {
    const b = boxes[it.group];
    let x, y;
    if (clustered && b) {
      const j = idx[it.group] = idx[it.group] == null ? 0 : idx[it.group] + 1;
      x = b.x + j % b.c * (itemWidth + gap);
      y = b.y + Math.floor(j / b.c) * (itemHeight + gap);
    } else [x, y] = scatter(i);
    return /*#__PURE__*/React.createElement("div", {
      key: it.key,
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: itemWidth,
        height: itemHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translate(' + x + 'px,' + y + 'px)',
        transition: 'transform var(--dur-assemble) var(--ease-travel) ' + hash(it.key) * 400 + 'ms'
      }
    }, it.node);
  }));
}
Object.assign(__ds_scope, { Cluster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Cluster.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Collapse.jsx
try { (() => {
function Collapse({
  collapsed = false,
  label = 'Module',
  code,
  width = 640,
  height = 320,
  blockWidth = 340,
  blockHeight = 140,
  children,
  style
}) {
  const t = 'var(--dur-assemble) var(--ease-assemble)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: 'var(--rule-medium) dashed var(--ink-4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: collapsed ? 0 : 1,
      transform: collapsed ? 'scale(0.55)' : 'none',
      transition: 'opacity var(--dur-move) var(--ease-assemble) ' + (collapsed ? '200ms' : '400ms') + ', transform ' + t
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: (width - blockWidth) / 2,
      top: (height - blockHeight) / 2,
      width: blockWidth,
      height: blockHeight,
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      opacity: collapsed ? 1 : 0,
      transform: collapsed ? 'none' : 'scale(1.8)',
      transition: 'opacity var(--dur-move) var(--ease-assemble) ' + (collapsed ? '400ms' : '0ms') + ', transform ' + t
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--type-h3)/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)'
    }
  }, label), code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--paper-3)'
    }
  }, code)));
}
Object.assign(__ds_scope, { Collapse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Collapse.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Compare.jsx
try { (() => {
const TAG = {
  padding: '7px 12px',
  border: 'var(--rule-medium) solid var(--ink-1)',
  font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
  letterSpacing: 'var(--tracking-label)',
  textTransform: 'uppercase'
};
function CompareStack({
  merged = false,
  before,
  after,
  width = 520,
  height = 360,
  gap = 120,
  labels = ['A', 'B'],
  style
}) {
  const tr = 'transform var(--dur-assemble) var(--ease-travel)';
  const mid = (width + gap) / 2;
  const tag = (t, bg, right) => /*#__PURE__*/React.createElement("span", {
    style: {
      ...TAG,
      position: 'absolute',
      top: -46,
      [right ? 'right' : 'left']: 0,
      background: bg,
      color: bg === 'var(--ink-1)' ? 'var(--paper-1)' : 'var(--ink-1)'
    }
  }, t);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: width * 2 + gap,
      height,
      marginTop: 46,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width,
      height,
      transform: merged ? 'translateX(' + mid + 'px)' : 'none',
      transition: tr
    }
  }, tag(labels[0], 'var(--ink-1)', false), before), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: width + gap,
      top: 0,
      width,
      height,
      transform: merged ? 'translateX(-' + mid + 'px)' : 'none',
      transition: tr
    }
  }, tag(labels[1], 'var(--signal-500)', true), after));
}
function CompareSweep({
  split = 0.5,
  before,
  after,
  width = 1000,
  height = 500,
  labels = ['Before', 'After'],
  style
}) {
  const s = Math.max(0, Math.min(1, split));
  const tr = 'var(--dur-assemble) var(--ease-travel)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      overflow: 'hidden',
      border: 'var(--rule-structural) solid var(--ink-1)',
      background: 'var(--paper-1)',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, before, /*#__PURE__*/React.createElement("span", {
    style: {
      ...TAG,
      position: 'absolute',
      top: 16,
      left: 16,
      background: 'var(--paper-0)'
    }
  }, labels[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--paper-0)',
      clipPath: 'inset(0 0 0 ' + s * 100 + '%)',
      transition: 'clip-path ' + tr
    }
  }, after, /*#__PURE__*/React.createElement("span", {
    style: {
      ...TAG,
      position: 'absolute',
      top: 16,
      right: 16,
      background: 'var(--signal-500)'
    }
  }, labels[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: s * 100 + '%',
      width: 0,
      transition: 'left ' + tr
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: -3,
      width: 6,
      background: 'var(--ink-1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: -26,
      width: 52,
      height: 52,
      marginTop: -26,
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--weight-bold) 26px/1 var(--font-mono)'
    }
  }, "\u2039\u203A")));
}
function Compare({
  mode = 'sweep',
  ...props
}) {
  return mode === 'stack' ? /*#__PURE__*/React.createElement(CompareStack, props) : /*#__PURE__*/React.createElement(CompareSweep, props);
}
Object.assign(__ds_scope, { Compare });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Compare.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Grow.jsx
try { (() => {
const DEFAULT_LEVELS = [240, 48, 4.8, 0.6];
function GrowZoom({
  level = 0,
  units = DEFAULT_LEVELS,
  noun = 'tokens',
  width = 1100,
  height = 520,
  style
}) {
  const u = units[Math.min(level, units.length - 1)];
  const tr = 'var(--dur-assemble) var(--ease-travel)';
  const count = level === 0 ? 1 : Math.round(width / u) * Math.round(height / u);
  const pretty = count >= 1e6 ? (count / 1e6).toFixed(1).replace('.0', '') + ' million' : count.toLocaleString('en-US');
  const sq = u * 0.86;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      overflow: 'hidden',
      border: 'var(--rule-structural) solid var(--ink-1)',
      background: 'var(--paper-1)',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: level > 0 ? 1 : 0,
      backgroundColor: 'var(--ink-2)',
      backgroundImage: 'linear-gradient(to right, var(--paper-1) 14%, transparent 14%), linear-gradient(to bottom, var(--paper-1) 14%, transparent 14%)',
      backgroundSize: u + 'px ' + u + 'px',
      backgroundPosition: width / 2 - 0.57 * u + 'px ' + (height / 2 - 0.57 * u) + 'px',
      transition: 'background-size ' + tr + ', background-position ' + tr + ', opacity var(--dur-move) var(--ease-assemble)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: sq,
      height: sq,
      transform: 'translate(-50%,-50%)',
      background: 'var(--signal-500)',
      transition: 'width ' + tr + ', height ' + tr
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 72,
      height: 72,
      transform: 'translate(-50%,-50%)',
      borderRadius: '50%',
      border: 'var(--rule-heavy) solid var(--signal-500)',
      opacity: level >= 2 ? 1 : 0,
      transition: 'opacity var(--dur-move) var(--ease-assemble) ' + (level >= 2 ? '1200ms' : '0ms')
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      display: 'flex',
      borderTop: 'var(--rule-structural) solid var(--ink-1)',
      borderRight: 'var(--rule-structural) solid var(--ink-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '14px 18px',
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center'
    }
  }, "In view"), /*#__PURE__*/React.createElement("span", {
    key: pretty,
    style: {
      padding: '10px 20px',
      background: 'var(--paper-0)',
      font: 'var(--weight-bold) var(--type-h3)/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "\u2248 ", pretty, " ", noun)));
}
function GrowCopies({
  count = 1,
  total,
  columns = 8,
  cell = 64,
  gap = 12,
  origin = 0,
  item,
  style
}) {
  const n = Math.max(total || count, count);
  const rows = Math.ceil(n / columns);
  const pos = i => [i % columns * (cell + gap), Math.floor(i / columns) * (cell + gap)];
  const [ox, oy] = pos(origin);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: columns * (cell + gap) - gap,
      height: rows * (cell + gap) - gap,
      flex: 'none',
      ...style
    }
  }, Array.from({
    length: n
  }, (_, i) => {
    const [x, y] = pos(i);
    const on = i < count;
    const d = (on ? Math.min(i * 30, 900) : 0) + 'ms';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: cell,
        height: cell,
        zIndex: i === origin ? 1 : 0,
        transform: 'translate(' + (on ? x : ox) + 'px,' + (on ? y : oy) + 'px)',
        opacity: on ? 1 : 0,
        transition: 'transform var(--dur-assemble) var(--ease-assemble) ' + d + ', opacity var(--dur-snap) linear ' + d
      }
    }, item ? item(i) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        border: 'var(--rule-medium) solid var(--ink-1)',
        background: i === origin ? 'var(--signal-500)' : 'var(--paper-0)'
      }
    }));
  }));
}
function Grow({
  mode = 'copies',
  ...props
}) {
  return mode === 'zoom' ? /*#__PURE__*/React.createElement(GrowZoom, props) : /*#__PURE__*/React.createElement(GrowCopies, props);
}
Object.assign(__ds_scope, { Grow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Grow.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/PathLight.jsx
try { (() => {
function PathLight({
  nodes = [],
  edges = [],
  path = [],
  progress = 0,
  nodeSize = 56,
  width = 1400,
  height = 560,
  style
}) {
  const at = Object.fromEntries(nodes.map(n => [n.key, n]));
  const onPath = k => path.indexOf(k);
  const isPathEdge = (a, b) => {
    const i = path.indexOf(a);
    return i >= 0 && path[i + 1] === b ? i : -1;
  };
  const active = progress > 0;
  const fade = 'opacity var(--dur-move) var(--ease-assemble)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      flex: 'none',
      ...style
    }
  }, edges.map(([a, b], i) => {
    const A = at[a],
      B = at[b];
    if (!A || !B) return null;
    const k = Math.max(isPathEdge(a, b), isPathEdge(b, a));
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement(__ds_scope.Link, {
      from: [A.x, A.y],
      to: [B.x, B.y],
      tone: "muted",
      width: 3,
      style: {
        opacity: active && k < 0 ? 0.25 : 1,
        transition: fade
      }
    }), k >= 0 && /*#__PURE__*/React.createElement(__ds_scope.Link, {
      from: isPathEdge(a, b) >= 0 ? [A.x, A.y] : [B.x, B.y],
      to: isPathEdge(a, b) >= 0 ? [B.x, B.y] : [A.x, A.y],
      tone: "signal",
      width: 6,
      progress: progress >= k + 1 ? 1 : 0
    }));
  }), nodes.map(n => {
    const p = onPath(n.key);
    const lit = p >= 0 && progress >= p;
    return /*#__PURE__*/React.createElement("div", {
      key: n.key,
      style: {
        position: 'absolute',
        left: n.x - nodeSize / 2,
        top: n.y - nodeSize / 2,
        width: nodeSize,
        height: nodeSize,
        background: lit && active ? 'var(--signal-500)' : 'var(--paper-0)',
        border: 'var(--rule-medium) solid var(--ink-1)',
        opacity: active && p < 0 ? 0.3 : 1,
        transition: fade + ', background var(--dur-move) var(--ease-assemble) ' + (lit ? '900ms' : '0ms')
      }
    }, n.label && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: nodeSize + 8,
        left: '50%',
        transform: 'translateX(-50%)',
        font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        color: 'var(--ink-2)'
      }
    }, n.label));
  }));
}
Object.assign(__ds_scope, { PathLight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/PathLight.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Pour.jsx
try { (() => {
const {
  useRef,
  useEffect
} = React;
function Pour({
  amount = 0,
  capacity = 60,
  columns = 10,
  cell = 36,
  gap = 6,
  label,
  tone = 'ink',
  style
}) {
  const n = Math.round(Math.max(0, Math.min(1, amount)) * capacity);
  const prev = useRef(n);
  const from = prev.current;
  useEffect(() => {
    prev.current = n;
  }, [n]);
  const rows = Math.ceil(capacity / columns);
  const W = columns * (cell + gap) + gap,
    H = rows * (cell + gap) + gap;
  const fill = tone === 'signal' ? 'var(--signal-500)' : tone === 'utility' ? 'var(--utility-500)' : 'var(--ink-1)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingBottom: 2
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: i % 2 ? 14 : 28,
      height: 'var(--rule-fine)',
      background: 'var(--ink-1)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: W,
      height: H,
      borderLeft: 'var(--rule-structural) solid var(--ink-1)',
      borderRight: 'var(--rule-structural) solid var(--ink-1)',
      borderBottom: 'var(--rule-structural) solid var(--ink-1)',
      background: 'var(--paper-0)'
    }
  }, Array.from({
    length: capacity
  }, (_, i) => {
    const on = i < n;
    const d = on ? Math.max(0, i - from) * 45 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: gap + i % columns * (cell + gap),
        bottom: gap + Math.floor(i / columns) * (cell + gap),
        width: cell,
        height: cell,
        background: fill,
        opacity: on ? 1 : 0,
        transform: on ? 'none' : 'translateY(-' + (H + 80) + 'px)',
        transition: 'transform var(--dur-move) var(--ease-detach) ' + d + 'ms, opacity var(--dur-snap) linear ' + d + 'ms'
      }
    });
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, label));
}
Object.assign(__ds_scope, { Pour });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Pour.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Replay.jsx
try { (() => {
function Replay({
  speed = 1,
  badge = true,
  label = 'Speed',
  children,
  style
}) {
  const k = Math.max(0.1, speed);
  const v = n => Math.max(16, Math.round(n / k)) + 'ms';
  const fast = k > 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      '--dur-snap': v(300),
      '--dur-move': v(1000),
      '--dur-assemble': v(1600),
      '--dur-draw': v(1800),
      '--dur-hold': v(3000),
      '--stagger': v(200),
      ...style
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end',
      display: 'flex',
      border: 'var(--rule-medium) solid var(--ink-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '10px 14px',
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '10px 18px',
      background: fast ? 'var(--signal-500)' : 'var(--paper-0)',
      color: 'var(--ink-1)',
      font: 'var(--weight-bold) var(--type-caption)/1 var(--font-mono)',
      transition: 'background var(--dur-snap) linear'
    }
  }, "\xD7 ", k)), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { Replay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Replay.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/Sort.jsx
try { (() => {
function Sort({
  items = [],
  bins = [],
  sorted = false,
  itemWidth = 180,
  itemHeight = 72,
  gap = 14,
  binGap = 48,
  style
}) {
  const binW = itemWidth + gap * 2;
  const totalW = bins.length * binW + Math.max(0, bins.length - 1) * binGap;
  const cols = Math.max(1, Math.floor((totalW + gap) / (itemWidth + gap)));
  const topH = Math.ceil(items.length / cols) * (itemHeight + gap);
  const counts = bins.map(b => items.filter(it => it.bin === b.key).length);
  const trayH = Math.max(1, ...counts) * (itemHeight + gap) + gap;
  const trayY = topH + 64;
  const seen = {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: totalW,
      height: trayY + trayH + 52,
      flex: 'none',
      ...style
    }
  }, bins.map((b, k) => /*#__PURE__*/React.createElement("div", {
    key: b.key,
    style: {
      position: 'absolute',
      left: k * (binW + binGap),
      top: trayY,
      width: binW
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: trayH,
      background: 'var(--paper-2)',
      borderLeft: 'var(--rule-structural) solid var(--ink-1)',
      borderRight: 'var(--rule-structural) solid var(--ink-1)',
      borderBottom: 'var(--rule-structural) solid var(--ink-1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14,
      textAlign: 'center',
      font: 'var(--weight-bold) var(--type-caption)/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)'
    }
  }, b.label))), items.map((it, i) => {
    const k = Math.max(0, bins.findIndex(b => b.key === it.bin));
    const j = seen[k] = seen[k] == null ? 0 : seen[k] + 1;
    const x = sorted ? k * (binW + binGap) + gap : i % cols * (itemWidth + gap);
    const y = sorted ? trayY + trayH - (j + 1) * (itemHeight + gap) : Math.floor(i / cols) * (itemHeight + gap);
    return /*#__PURE__*/React.createElement("div", {
      key: it.key,
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: itemWidth,
        height: itemHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translate(' + x + 'px,' + y + 'px)',
        transition: 'transform var(--dur-assemble) var(--ease-travel) ' + (sorted ? i * 90 : 0) + 'ms'
      }
    }, it.node);
  }));
}
Object.assign(__ds_scope, { Sort });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/Sort.jsx", error: String((e && e.message) || e) }); }

// components/storytelling/SwapPart.jsx
try { (() => {
const {
  useRef,
  useState,
  useLayoutEffect
} = React;
const EASE = 'cubic-bezier(0.4,0,0.2,1)';
function SwapPart({
  id,
  width = 320,
  height = 140,
  duration = 1400,
  children,
  style
}) {
  const last = useRef(children);
  const [st, setSt] = useState({
    id,
    prev: null
  });
  if (st.id !== id) setSt({
    id,
    prev: {
      id: st.id,
      node: last.current
    }
  });
  last.current = children;
  const inRef = useRef(null),
    outRef = useRef(null);
  useLayoutEffect(() => {
    if (!st.prev) return;
    const half = duration / 2;
    if (outRef.current) outRef.current.animate([{
      transform: 'none',
      opacity: 1
    }, {
      transform: 'translateY(-72px)',
      opacity: 0
    }], {
      duration: half,
      easing: EASE,
      fill: 'both'
    });
    if (inRef.current) inRef.current.animate([{
      transform: 'translateY(-72px)',
      opacity: 0
    }, {
      transform: 'none',
      opacity: 1
    }], {
      duration: half,
      delay: half * 0.8,
      easing: EASE,
      fill: 'both'
    });
    const t = setTimeout(() => setSt(s => ({
      ...s,
      prev: null
    })), duration + 80);
    return () => clearTimeout(t);
  }, [st.prev]);
  const layer = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -10,
      border: 'var(--rule-medium) dashed var(--ink-4)'
    }
  }), st.prev && /*#__PURE__*/React.createElement("div", {
    key: 'p' + st.prev.id,
    ref: outRef,
    style: layer
  }, st.prev.node), /*#__PURE__*/React.createElement("div", {
    key: 'c' + id,
    ref: inRef,
    style: layer
  }, children));
}
Object.assign(__ds_scope, { SwapPart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storytelling/SwapPart.jsx", error: String((e && e.message) || e) }); }

// components/systems/Plot.jsx
try { (() => {
function Plot({
  points = [],
  kind = 'line',
  progress = 1,
  highlight,
  xLabel,
  yLabel,
  width = 900,
  height = 480,
  xMax,
  yMax,
  style
}) {
  const pad = 56;
  const W = width - pad,
    H = height - pad;
  const mx = xMax ?? Math.max(1, ...points.map(p => p[0]));
  const my = yMax ?? Math.max(1, ...points.map(p => p[1]));
  const X = x => pad + x / mx * (W - 16),
    Y = y => H - y / my * (H - 16);
  const d = points.map((p, i) => (i ? 'L' : 'M') + X(p[0]) + ' ' + Y(p[1])).join(' ');
  const tr = 'var(--dur-assemble) var(--ease-assemble)';
  const lab = {
    position: 'absolute',
    font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--ink-3)'
  };
  const n = points.length,
    shown = Math.round(progress * n);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, [0.25, 0.5, 0.75].map(f => /*#__PURE__*/React.createElement("line", {
    key: f,
    x1: pad,
    x2: W,
    y1: H - f * (H - 16),
    y2: H - f * (H - 16),
    stroke: "var(--paper-3)",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("line", {
    x1: pad,
    y1: 0,
    x2: pad,
    y2: H,
    stroke: "var(--ink-1)",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad,
    y1: H,
    x2: W,
    y2: H,
    stroke: "var(--ink-1)",
    strokeWidth: "4"
  }), kind === 'line' && /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "var(--ink-1)",
    strokeWidth: "4",
    strokeLinejoin: "miter",
    pathLength: "1",
    strokeDasharray: "1",
    strokeDashoffset: 1 - progress,
    style: {
      transition: 'stroke-dashoffset ' + tr
    }
  }), kind === 'bar' && points.map((p, i) => {
    const bw = Math.max(12, (W - pad) / n * 0.6);
    const h = i < shown ? H - Y(p[1]) : 0;
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: X(p[0]) - bw / 2,
      y: H - h,
      width: bw,
      height: h,
      fill: i === highlight ? 'var(--signal-500)' : 'var(--paper-0)',
      stroke: "var(--ink-1)",
      strokeWidth: "3",
      style: {
        transition: 'y ' + tr + ' ' + i * 80 + 'ms, height ' + tr + ' ' + i * 80 + 'ms'
      }
    });
  }), kind !== 'bar' && points.map((p, i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: X(p[0]) - 8,
    y: Y(p[1]) - 8,
    width: "16",
    height: "16",
    fill: i === highlight ? 'var(--signal-500)' : kind === 'scatter' ? 'var(--paper-0)' : 'var(--ink-1)',
    stroke: "var(--ink-1)",
    strokeWidth: "3",
    style: {
      opacity: i < shown ? 1 : 0,
      transition: 'opacity var(--dur-move) var(--ease-assemble) ' + (kind === 'scatter' ? i * 40 : 0) + 'ms'
    }
  }))), yLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      left: pad + 16,
      top: 0
    }
  }, "\u2191 ", yLabel), xLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      right: 0,
      top: H + 20
    }
  }, xLabel, " \u2192"));
}
Object.assign(__ds_scope, { Plot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/systems/Plot.jsx", error: String((e && e.message) || e) }); }

// components/systems/Queue.jsx
try { (() => {
function Queue({
  items = [],
  advance = 0,
  visible = 5,
  slot = 200,
  height = 110,
  label,
  style
}) {
  const tr = 'transform var(--dur-assemble) var(--ease-travel), opacity var(--dur-move) var(--ease-assemble)';
  const W = visible * slot;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      borderLeft: 'var(--rule-structural) solid var(--ink-1)',
      borderRight: 'var(--rule-structural) solid var(--ink-1)'
    }
  }, items.map((it, i) => {
    const p = i - advance;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: 0,
        bottom: 12,
        width: slot,
        display: 'flex',
        justifyContent: 'center',
        transform: 'translateX(' + (W - (p + 1) * slot) + 'px)',
        opacity: p < 0 || p >= visible ? 0 : 1,
        transition: tr
      }
    }, it);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28,
      border: 'var(--rule-structural) solid var(--ink-1)',
      background: 'var(--paper-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }, Array.from({
    length: visible * 2
  }, (_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      border: 'var(--rule-medium) solid var(--ink-1)',
      background: 'var(--paper-0)'
    }
  }))), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, label));
}
Object.assign(__ds_scope, { Queue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/systems/Queue.jsx", error: String((e && e.message) || e) }); }

// components/systems/Rack.jsx
try { (() => {
const LAMP = {
  off: 'var(--paper-3)',
  on: 'var(--ink-1)',
  signal: 'var(--signal-500)',
  fault: 'var(--caution-500)'
};
function Rack({
  units = [],
  active,
  code,
  title,
  width = 420,
  unitHeight = 64,
  style
}) {
  const lab = {
    font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      flex: 'none',
      border: 'var(--rule-structural) solid var(--ink-1)',
      background: 'var(--paper-2)',
      ...style
    }
  }, (code || title) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: 'var(--rule-structural) solid var(--ink-1)'
    }
  }, code && /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      padding: '12px 16px',
      background: 'var(--ink-1)',
      color: 'var(--paper-1)'
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lab,
      padding: '12px 16px',
      flex: 1
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, units.map((u, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: unitHeight,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '0 16px',
        border: 'var(--rule-medium) solid var(--ink-1)',
        background: on ? 'var(--signal-100)' : 'var(--paper-0)',
        boxShadow: on ? 'var(--shadow-print-sm)' : 'none',
        transform: on ? 'translate(-4px,-4px)' : 'none',
        transition: 'background var(--dur-move) var(--ease-assemble), transform var(--dur-move) var(--ease-assemble), box-shadow var(--dur-move) var(--ease-assemble)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: 'var(--rule-medium) solid var(--ink-1)',
        background: LAMP[u.lamp || 'off'],
        transition: 'background var(--dur-snap) linear',
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...lab,
        flex: 1,
        color: 'var(--ink-1)'
      }
    }, u.label), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, [0, 1, 2, 3, 4, 5].map(k => /*#__PURE__*/React.createElement("span", {
      key: k,
      style: {
        width: 6,
        height: unitHeight * 0.45,
        background: 'var(--ink-3)'
      }
    }))));
  })));
}
Object.assign(__ds_scope, { Rack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/systems/Rack.jsx", error: String((e && e.message) || e) }); }

// components/systems/Station.jsx
try { (() => {
const TONE = {
  default: ['var(--paper-0)', 'var(--ink-1)'],
  signal: ['var(--signal-500)', 'var(--ink-1)'],
  utility: ['var(--utility-500)', 'var(--paper-0)'],
  muted: ['var(--paper-2)', 'var(--ink-3)']
};
function Station({
  label,
  code,
  tone = 'default',
  size = 160,
  ports = 4,
  style
}) {
  const [bg, fg] = TONE[tone] || TONE.default;
  const tr = 'background var(--dur-move) var(--ease-assemble), color var(--dur-move) var(--ease-assemble)';
  const port = pos => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 14,
      height: 14,
      background: 'var(--ink-1)',
      ...pos
    }
  });
  const p = [{
    left: '50%',
    top: -9,
    marginLeft: -7
  }, {
    right: -9,
    top: '50%',
    marginTop: -7
  }, {
    left: '50%',
    bottom: -9,
    marginLeft: -7
  }, {
    left: -9,
    top: '50%',
    marginTop: -7
  }].slice(0, ports);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none',
      border: 'var(--rule-structural) solid var(--ink-1)',
      background: bg,
      color: fg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      transition: tr,
      ...style
    }
  }, p.map((pos, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, port(pos))), code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      opacity: 1
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--type-caption)/1.05 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)',
      textAlign: 'center',
      padding: '0 12px'
    }
  }, label));
}
Object.assign(__ds_scope, { Station });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/systems/Station.jsx", error: String((e && e.message) || e) }); }

// guidelines/motion/specs.jsx
try { (() => {
(() => {
  const {
    Reveal,
    Token,
    Stamp,
    Link,
    InsertionLine,
    Transit,
    Split,
    Process,
    ExplodedView,
    Reorder,
    Focus,
    Meter,
    Tally,
    Magnify,
    Callout,
    SheetChange,
    Matrix,
    Replay,
    Continuity,
    Part,
    Grow,
    Blank,
    Collapse,
    SwapPart,
    Compare,
    Pour,
    Sort,
    Cluster,
    PathLight
  } = window.StandardInferenceSI74_5db10b;
  const WORDS = ['The', 'cat', 'sat', 'down'];
  const ROWS = [['The', 0.12], ['cat', 0.82], ['sat', 0.46], ['down', 0.24]];
  const plate = t => /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 44px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, t);
  const mini = (n, t) => /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: 'var(--paper-1)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 120px/0.9 var(--font-display)'
    }
  }, String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 30px/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)'
    }
  }, t));
  const MODE_NAMES = ['fade', 'page', 'lift', 'wipe'];
  const TITLES = ['Split', 'Look', 'Score', 'Recap'];
  const STORY = 'Once upon a time there was a small cat who liked to sit by the window and watch the rain fall on the quiet street below while the town slept'.split(' ');
  function ReplayDemo({
    s
  }) {
    const fast = s === 1,
      total = 50;
    const [n, setN] = React.useState(0);
    React.useEffect(() => {
      setN(0);
      const t = setInterval(() => setN(v => Math.min(v + 1, total)), fast ? 70 : 1100);
      return () => clearInterval(t);
    }, [fast]);
    return /*#__PURE__*/React.createElement(Replay, {
      speed: fast ? 40 : 1
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 56,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Tally, {
      value: n,
      label: "Words written",
      size: 96
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 104px)',
        gap: 10
      }
    }, Array.from({
      length: total
    }, (_, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      show: i < n
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 44,
        border: 'var(--rule-medium) solid var(--ink-1)',
        background: i === n - 1 ? 'var(--signal-500)' : 'var(--paper-0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '500 18px/1 var(--font-mono)'
      }
    }, fast ? '' : STORY[i % STORY.length]))))));
  }
  const bars = (vals, solid) => /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: 40,
      borderBottom: solid ? 'var(--rule-structural) solid var(--ink-1)' : 'none'
    }
  }, vals.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 80,
      height: v * 100 + '%',
      background: solid ? 'var(--paper-3)' : 'transparent',
      border: solid ? 'var(--rule-medium) solid var(--ink-1)' : 'var(--rule-structural) dashed var(--signal-500)'
    }
  })));
  const block = (t, w) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: 120,
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--weight-bold) var(--type-caption)/1 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-header)'
    }
  }, t);
  const sentence = hl => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  }, [['The', 120], ['cat', 300], ['sat', 480], ['because', 640], ['it', 880]].map(([w, x]) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      position: 'absolute',
      left: x,
      top: 260
    }
  }, /*#__PURE__*/React.createElement(Token, {
    tone: hl && w === 'it' ? 'signal' : hl && w === 'cat' ? 'utility' : 'default'
  }, w))), hl && /*#__PURE__*/React.createElement(Link, {
    from: [922, 260],
    to: [358, 260],
    route: "arc",
    tone: "signal"
  }));
  const SORT_ITEMS = [['cat', 'a'], ['ran', 'v'], ['the', 'o'], ['dog', 'a'], ['ate', 'v'], ['bird', 'a'], ['a', 'o'], ['sat', 'v'], ['fox', 'a'], ['down', 'o']].map(([w, b]) => ({
    key: w,
    bin: b,
    node: /*#__PURE__*/React.createElement(Token, null, w)
  }));
  const CL_ITEMS = [['cat', 'a'], ['bread', 'f'], ['Paris', 'p'], ['dog', 'a'], ['apple', 'f'], ['Tokyo', 'p'], ['bird', 'a'], ['soup', 'f'], ['Lima', 'p']].map(([w, g]) => ({
    key: w,
    group: g,
    node: /*#__PURE__*/React.createElement(Token, null, w)
  }));
  const PL_NODES = [{
    key: 'in',
    x: 100,
    y: 300,
    label: 'Input'
  }, {
    key: 'out',
    x: 1500,
    y: 300,
    label: 'Output'
  }];
  ['a', 'b', 'c'].forEach((c, ci) => [90, 230, 370, 510].forEach((y, ri) => PL_NODES.push({
    key: c + ri,
    x: 450 + ci * 350,
    y
  })));
  const PL_EDGES = [];
  [0, 1, 2, 3].forEach(i => {
    PL_EDGES.push(['in', 'a' + i]);
    PL_EDGES.push(['c' + i, 'out']);
    [0, 1, 2, 3].forEach(j => {
      PL_EDGES.push(['a' + i, 'b' + j]);
      PL_EDGES.push(['b' + i, 'c' + j]);
    });
  });
  const SPECS = [{
    group: 'Core moves',
    slug: 'reveal',
    name: 'Reveal',
    verb: 'appears',
    use: 'A part enters: fade + 12px settle. Stamps grow from 94%.',
    steps: 3,
    ms: 2600,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }
    }, WORDS.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: t,
      show: s >= 1,
      delay: i * 200
    }, /*#__PURE__*/React.createElement(Token, null, t))), /*#__PURE__*/React.createElement(Reveal, {
      show: s >= 2,
      from: "scale"
    }, /*#__PURE__*/React.createElement(Stamp, {
      kind: "ok",
      size: 110
    })))
  }, {
    group: 'Core moves',
    slug: 'connect',
    name: 'Connect',
    verb: 'refers to / is wired to',
    use: 'Link draws a connector; InsertionLine shows an insertion path.',
    steps: 3,
    ms: 2800,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 1300,
        height: 460
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 30
      }
    }, /*#__PURE__*/React.createElement(Token, {
      tone: "signal"
    }, "it")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 1120,
        top: 30
      }
    }, /*#__PURE__*/React.createElement(Token, {
      tone: s >= 1 ? 'utility' : 'default'
    }, "cat")), /*#__PURE__*/React.createElement(Link, {
      from: [110, 64],
      to: [1120, 64],
      route: "arc",
      tone: "signal",
      progress: s >= 1 ? 1 : 0
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 330
      }
    }, /*#__PURE__*/React.createElement(Token, null, "query")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 1040,
        top: 330,
        width: 260,
        height: 90,
        border: 'var(--rule-structural) solid var(--ink-1)',
        background: 'var(--paper-2)'
      }
    }), /*#__PURE__*/React.createElement(Link, {
      from: [190, 366],
      to: [1040, 376],
      route: "elbow",
      dashed: true,
      progress: s >= 2 ? 1 : 0
    }))
  }, {
    group: 'Core moves',
    slug: 'transit',
    name: 'Transit',
    verb: 'moves to / is sent',
    use: 'One part travels along a rail; the travelled stretch fills.',
    steps: 3,
    ms: 2600,
    render: s => /*#__PURE__*/React.createElement(Transit, {
      at: [0, 0.5, 1][s],
      distance: 1100
    }, /*#__PURE__*/React.createElement(Token, {
      tone: "signal"
    }, "cat"))
  }, {
    group: 'Core moves',
    slug: 'split',
    name: 'Split / Merge',
    verb: 'is broken into / combines',
    use: 'Butted parts separate — and rejoin on the way back.',
    steps: 2,
    ms: 2800,
    render: s => /*#__PURE__*/React.createElement(Split, {
      split: s >= 1,
      gap: 32
    }, ['The', 'cat', 'sat', 'down', 'because'].map(w => /*#__PURE__*/React.createElement(Token, {
      key: w
    }, w)))
  }, {
    group: 'Core moves',
    slug: 'process',
    name: 'Process',
    verb: 'is turned into',
    use: 'Fed in, lamps light in turn, output emerges.',
    steps: 4,
    ms: 2400,
    render: s => /*#__PURE__*/React.createElement(Process, {
      step: s,
      label: "Tokenizer",
      code: "M-01",
      slot: 300,
      input: /*#__PURE__*/React.createElement(Token, null, "The cat"),
      output: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(Token, null, "The"), /*#__PURE__*/React.createElement(Token, null, "cat"))
    })
  }, {
    group: 'Core moves',
    slug: 'explode',
    name: 'Explode',
    verb: "what's inside",
    use: 'Assembled stack blows apart along Z; leaders land after.',
    steps: 3,
    ms: 2800,
    render: s => /*#__PURE__*/React.createElement(ExplodedView, {
      size: 230,
      gap: 110,
      exploded: s >= 1,
      focus: s >= 2 ? 2 : undefined,
      layers: [{
        node: plate('Meaning'),
        label: 'What I pass on'
      }, {
        node: plate('Answer'),
        label: 'What I offer'
      }, {
        node: plate('Question'),
        label: "What I'm looking for"
      }]
    })
  }, {
    group: 'Core moves',
    slug: 'reorder',
    name: 'Reorder',
    verb: 'is ranked / sorted',
    use: 'Rows glide to new slots; meters show why.',
    steps: 2,
    ms: 3000,
    render: s => /*#__PURE__*/React.createElement(Reorder, {
      crossSize: 560,
      itemSize: 84,
      items: ROWS.map(([w, v]) => ({
        key: w,
        node: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 28,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 170
          }
        }, /*#__PURE__*/React.createElement(Token, {
          tone: w === 'cat' && s >= 1 ? 'utility' : 'default'
        }, w)), /*#__PURE__*/React.createElement(Meter, {
          direction: "right",
          value: v,
          length: 320,
          thickness: 36,
          tone: w === 'cat' && s >= 1 ? 'utility' : 'ink'
        }))
      })),
      order: s >= 1 ? ['cat', 'sat', 'down', 'The'] : WORDS
    })
  }, {
    group: 'Core moves',
    slug: 'focus',
    name: 'Focus',
    verb: 'this one matters',
    use: 'One part lifts on a print shadow; others recede to grey.',
    steps: 3,
    ms: 2400,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28
      }
    }, WORDS.map(w => /*#__PURE__*/React.createElement(Focus, {
      key: w,
      state: s === 0 ? 'normal' : (s === 1 ? w === 'cat' : w === 'sat') ? 'focus' : 'recede'
    }, /*#__PURE__*/React.createElement(Token, null, w))))
  }, {
    group: 'Core moves',
    slug: 'meter',
    name: 'Meter',
    verb: 'how much',
    use: 'Gauges fill — amounts without numbers.',
    steps: 3,
    ms: 2600,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 48,
        alignItems: 'flex-end'
      }
    }, ROWS.map(([w, v], i) => /*#__PURE__*/React.createElement(Meter, {
      key: w,
      label: w,
      length: 360,
      thickness: 72,
      delay: i * 150,
      tone: w === 'cat' && s === 2 ? 'utility' : 'ink',
      value: s === 0 ? 0 : s === 1 ? 0.5 : v
    })))
  }, {
    group: 'Core moves',
    slug: 'tally',
    name: 'Tally',
    verb: 'repeats / counts',
    use: 'Odometer digits roll — for loops and repetition.',
    steps: 4,
    ms: 1800,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 80,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Tally, {
      value: [1, 2, 3, 12][s],
      label: "Words written",
      size: 160
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16
      }
    }, WORDS.map((w, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: w,
      show: i <= Math.min(s, 3)
    }, /*#__PURE__*/React.createElement(Token, {
      tone: i === Math.min(s, 3) ? 'signal' : 'default'
    }, w)))))
  }, {
    group: 'Core moves',
    slug: 'magnify',
    name: 'Magnify',
    verb: 'look closer',
    use: 'Camera pushes into the stage so a small detail reads.',
    steps: 2,
    ms: 3200,
    render: s => /*#__PURE__*/React.createElement(Magnify, {
      zoom: s >= 1 ? 3 : 1,
      x: 0.84,
      y: 0.5,
      width: 1100,
      height: 560,
      label: "Detail A"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16
      }
    }, WORDS.map(w => /*#__PURE__*/React.createElement(Token, {
      key: w
    }, w))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: 'var(--rule-fine) solid var(--ink-1)',
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        background: 'var(--paper-0)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 15px/1 var(--font-mono)'
      }
    }, "it \u2192 cat"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 11px/1 var(--font-mono)',
        color: 'var(--ink-3)'
      }
    }, "STRONGEST LINK"))))
  }, {
    group: 'Core moves',
    slug: 'callout',
    name: 'Callout',
    verb: 'zoom out to the side',
    use: 'Leader draws from the source, lens grows open beside it.',
    steps: 2,
    ms: 3200,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 380
      }
    }, /*#__PURE__*/React.createElement(Token, {
      tone: "signal"
    }, "it"), /*#__PURE__*/React.createElement(Callout, {
      size: 380,
      ring: "signal",
      label: "Detail B",
      open: s >= 1,
      leader: {
        angle: 180,
        length: 300
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) 44px/1.1 var(--font-display)',
        textTransform: 'uppercase'
      }
    }, "it =", /*#__PURE__*/React.createElement("br", null), "the cat")))
  }, {
    group: 'Core moves',
    slug: 'sheet',
    name: 'Sheet change',
    verb: 'next step / new chapter',
    use: 'fade · page · lift · wipe, each shown on a mini sheet.',
    steps: 4,
    ms: 2400,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 40
      }
    }, MODE_NAMES.map(m => /*#__PURE__*/React.createElement("div", {
      key: m,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 360,
        height: 300,
        border: 'var(--rule-structural) solid var(--ink-1)',
        overflow: 'hidden',
        background: 'var(--paper-1)'
      }
    }, /*#__PURE__*/React.createElement(SheetChange, {
      id: s,
      mode: m
    }, mini(s + 1, TITLES[s]))), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase'
      }
    }, m))))
  }, {
    group: 'Core moves',
    slug: 'continuity',
    name: 'Continuity',
    verb: 'same thing, new arrangement',
    use: 'Parts with the same id travel between layouts; new parts wipe in, departed ones wipe out. No fades.',
    steps: 3,
    ms: 3000,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1400,
        height: 520
      }
    }, /*#__PURE__*/React.createElement(Continuity, null, s === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24
      }
    }, WORDS.map(w => /*#__PURE__*/React.createElement(Part, {
      key: w,
      id: w
    }, /*#__PURE__*/React.createElement(Token, null, w)))) : s === 1 ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
      }
    }, WORDS.map(w => /*#__PURE__*/React.createElement(Part, {
      key: w,
      id: w
    }, /*#__PURE__*/React.createElement(Token, {
      tone: w === 'cat' ? 'signal' : 'default'
    }, w)))) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 64
      }
    }, /*#__PURE__*/React.createElement(Part, {
      id: "cat"
    }, /*#__PURE__*/React.createElement(Token, {
      tone: "signal"
    }, "cat")), /*#__PURE__*/React.createElement(Part, {
      id: "eq",
      enter: "right"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-medium) var(--type-h2)/1 var(--font-mono)'
      }
    }, "= animal")))))
  }, {
    group: 'Storytelling',
    slug: 'replay',
    name: 'Replay at speed',
    verb: 'at scale, this happens fast',
    use: 'Same sequence twice: slow with labels, then × 40 without. Shows what LARGE means.',
    steps: 2,
    ms: 6500,
    render: s => /*#__PURE__*/React.createElement(ReplayDemo, {
      s: s
    })
  }, {
    group: 'Storytelling',
    slug: 'grow',
    name: 'Grow · copies',
    verb: 'and there are many',
    use: 'One part copies out into a row, then a grid.',
    steps: 3,
    ms: 2800,
    render: s => /*#__PURE__*/React.createElement(Grow, {
      count: [1, 16, 64][s],
      total: 64,
      columns: 16,
      cell: 64,
      gap: 12
    })
  }, {
    group: 'Storytelling',
    slug: 'blank',
    name: 'Fill in the blank',
    verb: 'what goes here?',
    use: 'A dashed ? waits a beat for the viewer to guess, then the answer drops in.',
    steps: 2,
    ms: 3200,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 20,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Token, null, "The"), /*#__PURE__*/React.createElement(Token, null, "cat"), /*#__PURE__*/React.createElement(Blank, {
      filled: s >= 1
    }, /*#__PURE__*/React.createElement(Token, {
      tone: "utility"
    }, "sat")), /*#__PURE__*/React.createElement(Token, {
      tone: "ghost"
    }, "\u2026"))
  }, {
    group: 'Storytelling',
    slug: 'collapse',
    name: 'Hide the detail',
    verb: 'from now on, call this X',
    use: 'A detailed group packs into one named block for later sheets.',
    steps: 2,
    ms: 3400,
    render: s => /*#__PURE__*/React.createElement(Collapse, {
      collapsed: s >= 1,
      label: "Tokenizer",
      code: "M-01",
      width: 940,
      height: 360
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Token, null, "The cat"), /*#__PURE__*/React.createElement(InsertionLine, {
      length: 100
    }), /*#__PURE__*/React.createElement(Matrix, {
      rows: 3,
      cols: 3,
      cellSize: 40,
      dims: false
    }), /*#__PURE__*/React.createElement(InsertionLine, {
      length: 100
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Token, null, "The"), /*#__PURE__*/React.createElement(Token, null, "cat"))))
  }, {
    group: 'Storytelling',
    slug: 'overlay',
    name: 'Before / after · stack',
    verb: 'what changed?',
    use: 'Two versions slide on top of each other; only the difference shows.',
    steps: 2,
    ms: 3200,
    render: s => /*#__PURE__*/React.createElement(Compare, {
      mode: "stack",
      merged: s >= 1,
      labels: ['Small model', 'Large model'],
      before: bars([0.3, 0.55, 0.4, 0.2], true),
      after: bars([0.25, 0.9, 0.35, 0.15], false)
    })
  }, {
    group: 'Storytelling',
    slug: 'swap',
    name: 'Swap the part',
    verb: 'what if we replace this?',
    use: 'Diagram stays still; one part lifts out, another drops in, the result reacts.',
    steps: 2,
    ms: 3400,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 32,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Token, null, "Question"), /*#__PURE__*/React.createElement(InsertionLine, {
      length: 100
    }), /*#__PURE__*/React.createElement(SwapPart, {
      id: s,
      width: 340,
      height: 130
    }, s ? block('Large model', 340) : block('Small model', 240)), /*#__PURE__*/React.createElement(InsertionLine, {
      length: 100
    }), /*#__PURE__*/React.createElement(Meter, {
      direction: "right",
      length: 340,
      thickness: 48,
      value: s ? 0.88 : 0.32,
      tone: s ? 'signal' : 'ink',
      label: "Answer quality"
    }))
  }, {
    group: 'Storytelling',
    slug: 'compare',
    name: 'Before / after · sweep',
    verb: 'before vs after',
    use: 'A divider sweeps across one frame to reveal the after state.',
    steps: 3,
    ms: 2800,
    render: s => /*#__PURE__*/React.createElement(Compare, {
      split: [1, 0.5, 0][s],
      width: 1100,
      height: 480,
      labels: ['Without attention', 'With attention'],
      before: sentence(false),
      after: sentence(true)
    })
  }, {
    group: 'Storytelling',
    slug: 'scale',
    name: 'Grow · zoom',
    verb: 'this many',
    use: 'From one word to millions; the original stays marked.',
    steps: 4,
    ms: 3200,
    render: s => /*#__PURE__*/React.createElement(Grow, {
      mode: "zoom",
      level: s,
      noun: "words"
    })
  }, {
    group: 'Storytelling',
    slug: 'pour',
    name: 'Pour',
    verb: 'it fills up',
    use: 'Units drop into an open container. For memory, context window, data, cost.',
    steps: 3,
    ms: 3200,
    render: s => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 120,
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Pour, {
      amount: [0, 0.35, 0.95][s],
      label: "Context window"
    }), /*#__PURE__*/React.createElement(Pour, {
      amount: [0, 0.15, 0.3][s],
      tone: "signal",
      label: "This question"
    }))
  }, {
    group: 'Storytelling',
    slug: 'sort',
    name: 'Sort into piles',
    verb: 'these belong together',
    use: 'Mixed parts move into trays; the stacks read as a bar chart.',
    steps: 2,
    ms: 3600,
    render: s => /*#__PURE__*/React.createElement(Sort, {
      sorted: s >= 1,
      itemWidth: 150,
      itemHeight: 70,
      bins: [{
        key: 'a',
        label: 'Animals'
      }, {
        key: 'v',
        label: 'Actions'
      }, {
        key: 'o',
        label: 'Other'
      }],
      items: SORT_ITEMS
    })
  }, {
    group: 'Storytelling',
    slug: 'cluster',
    name: 'Pull together',
    verb: 'similar things sit close',
    use: 'Scattered words drift into groups by meaning; outlines land after.',
    steps: 2,
    ms: 3600,
    render: s => /*#__PURE__*/React.createElement(Cluster, {
      clustered: s >= 1,
      width: 1500,
      height: 540,
      groups: [{
        key: 'a',
        label: 'Animals',
        x: 270,
        y: 290
      }, {
        key: 'f',
        label: 'Food',
        x: 750,
        y: 290
      }, {
        key: 'p',
        label: 'Places',
        x: 1230,
        y: 290
      }],
      items: CL_ITEMS
    })
  }, {
    group: 'Storytelling',
    slug: 'path',
    name: 'Spotlight path',
    verb: 'follow this one',
    use: 'Busy network first, then one route lights hop by hop.',
    steps: 5,
    ms: 2200,
    render: s => /*#__PURE__*/React.createElement(PathLight, {
      width: 1600,
      height: 600,
      nodes: PL_NODES,
      edges: PL_EDGES,
      path: ['in', 'a2', 'b0', 'c1', 'out'],
      progress: s
    })
  }];
  function useLoop(steps, ms, playing = true) {
    const [s, setS] = React.useState(0);
    React.useEffect(() => {
      if (!playing) return;
      const t = setInterval(() => setS(v => (v + 1) % steps), ms);
      return () => clearInterval(t);
    }, [steps, ms, playing]);
    return [s, setS];
  }

  // Frame-scale stage (1750×650) scaled to fit, with beat pips.
  function MotionStage({
    spec,
    scale,
    playing = true,
    onStep
  }) {
    const [s, setS] = useLoop(spec.steps, spec.ms, playing);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1750 * scale,
        height: 650 * scale,
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--paper-1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1750,
        height: 650,
        transform: 'scale(' + scale + ')',
        transformOrigin: '0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, spec.render(s)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 14,
        bottom: 12,
        display: 'flex',
        gap: 6
      }
    }, Array.from({
      length: spec.steps
    }, (_, k) => /*#__PURE__*/React.createElement("div", {
      key: k,
      onClick: () => setS(k),
      style: {
        width: 22,
        height: 8,
        cursor: 'pointer',
        background: k === s ? 'var(--signal-500)' : k < s ? 'var(--ink-1)' : 'var(--paper-3)'
      }
    }))));
  }
  function MotionCard({
    slug
  }) {
    const spec = SPECS.find(x => x.slug === slug);
    return /*#__PURE__*/React.createElement(MotionStage, {
      spec: spec,
      scale: 0.4
    });
  }
  Object.assign(window, {
    MOTION_SPECS: SPECS,
    MotionStage,
    MotionCard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/motion/specs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explainer/Frame.jsx
try { (() => {
(() => {
  function Frame({
    dept = 'Dept. of Semantic Routing // Form 409-B',
    sheet,
    total,
    children
  }) {
    const lab = {
      font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1920,
        height: 1080,
        background: 'var(--paper-1)',
        padding: '64px 120px 64px',
        display: 'flex',
        flexDirection: 'column',
        gap: 64,
        color: 'var(--ink-1)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottom: 'var(--rule-structural) solid var(--ink-1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        background: 'var(--signal-500)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: lab
    }, dept)), /*#__PURE__*/React.createElement("span", {
      style: lab
    }, String(sheet).padStart(2, '0'), " / ", String(total).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        position: 'relative'
      }
    }, children));
  }

  // Heading top-left, one stage, one sentence of narration that changes per beat.
  function Scene({
    heading,
    lines = [],
    b = 0,
    children
  }) {
    const line = lines[Math.min(b, lines.length - 1)];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 48
      }
    }, heading && /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-bold) var(--type-h2)/1 var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-header)'
      }
    }, heading), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, children), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 60
      }
    }, line && /*#__PURE__*/React.createElement("div", {
      key: line,
      className: "fade",
      style: {
        font: 'var(--weight-regular) var(--type-h3)/1.3 var(--font-body)',
        color: 'var(--ink-2)',
        textWrap: 'pretty'
      }
    }, line)));
  }
  Object.assign(window, {
    Frame,
    Scene
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explainer/Frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explainer/ScenesA.jsx
try { (() => {
(() => {
  const {
    Token,
    Reveal
  } = window.StandardInferenceSI74_5db10b;
  const Scene = window.Scene;
  const WORDS = ['The', 'cat', 'sat', 'down', 'because', 'it', 'was', 'tired'];
  const IT = 5,
    CAT = 1;
  const ATT = [0.05, 0.78, 0.18, 0.1, 0.12, 0.3, 0.06, 0.22];
  function TitleScene({
    b
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      show: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-medium) var(--type-label)/1 var(--font-mono)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--ink-3)'
      }
    }, "Episode 07")), /*#__PURE__*/React.createElement(Reveal, {
      show: true,
      distance: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-bold) var(--type-display-xl)/var(--lh-tight) var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-display)'
      }
    }, "How AI reads", /*#__PURE__*/React.createElement("br", null), "a sentence")), /*#__PURE__*/React.createElement(Reveal, {
      show: b >= 1
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) var(--type-h3)/1.3 var(--font-body)',
        color: 'var(--ink-2)'
      }
    }, "A short guide to attention.")));
  }
  function SplitScene({
    b
  }) {
    return /*#__PURE__*/React.createElement(Scene, {
      b: b,
      heading: "1. Cut it into pieces",
      lines: ['Here is a sentence.', 'The AI cuts it into small pieces, called tokens.']
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: b >= 1 ? 24 : 0,
        transition: 'gap var(--dur-assemble) var(--ease-assemble)'
      }
    }, WORDS.map(w => /*#__PURE__*/React.createElement(Token, {
      key: w,
      style: {
        borderColor: b >= 1 ? 'var(--ink-1)' : 'transparent',
        background: b >= 1 ? 'var(--paper-0)' : 'transparent',
        transition: 'border-color var(--dur-move) var(--ease-assemble), background var(--dur-move) var(--ease-assemble)'
      }
    }, w))));
  }
  function LookScene({
    b
  }) {
    return /*#__PURE__*/React.createElement(Scene, {
      b: b,
      heading: "2. Each word looks at the others",
      lines: ["Take the word 'it'. What does it mean?", "'it' checks every other word. Taller bar, more attention.", "Most of its attention goes to 'cat'. So 'it' means the cat."]
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start'
      }
    }, WORDS.map((w, i) => /*#__PURE__*/React.createElement("div", {
      key: w,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Token, {
      tone: i === IT ? 'signal' : i === CAT && b >= 2 ? 'utility' : 'default'
    }, w), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 340,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
      }
    }, i !== IT && /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: b >= 1 ? ATT[i] * 340 : 0,
        background: i === CAT && b >= 2 ? 'var(--utility-500)' : 'var(--paper-3)',
        border: b >= 1 ? 'var(--rule-medium) solid var(--ink-1)' : 'none',
        transition: 'height var(--dur-assemble) var(--ease-assemble) ' + i * 120 + 'ms, background var(--dur-move) var(--ease-assemble)'
      }
    }))))));
  }
  Object.assign(window, {
    TitleScene,
    SplitScene,
    LookScene
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explainer/ScenesA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explainer/ScenesB.jsx
try { (() => {
(() => {
  const {
    Token,
    ExplodedView,
    Panel,
    Stamp,
    Reveal
  } = window.StandardInferenceSI74_5db10b;
  const Scene = window.Scene;
  const plate = t => /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 56px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, t);
  function InsideScene({
    b
  }) {
    return /*#__PURE__*/React.createElement(Scene, {
      b: b,
      heading: "3. Inside one word",
      lines: ['Every token carries three cards.', 'One card asks a question. One answers. One holds the meaning.', "'it' asks: who am I talking about?"]
    }, /*#__PURE__*/React.createElement(ExplodedView, {
      size: 320,
      gap: 160,
      exploded: b >= 1,
      focus: b >= 2 ? 2 : undefined,
      layers: [{
        node: plate('Meaning'),
        label: 'What I pass on'
      }, {
        node: plate('Answer'),
        label: 'What I offer'
      }, {
        node: plate('Question'),
        label: "What I'm looking for"
      }]
    }));
  }
  function WhyScene({
    b
  }) {
    const side = (ok, show) => /*#__PURE__*/React.createElement(Reveal, {
      show: show,
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: ok ? 'With attention' : 'Without attention'
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        minHeight: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Token, {
      tone: "signal"
    }, "it"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-medium) var(--type-h3)/1 var(--font-mono)'
      }
    }, "="), ok ? /*#__PURE__*/React.createElement(Token, {
      tone: "utility"
    }, "the cat") : /*#__PURE__*/React.createElement(Token, {
      tone: "ghost"
    }, "?")), /*#__PURE__*/React.createElement(Stamp, {
      kind: ok ? 'ok' : 'bad',
      size: 120
    }))));
    return /*#__PURE__*/React.createElement(Scene, {
      b: b,
      heading: "4. Why it matters",
      lines: ['Without attention, every word stands alone.', 'With it, words make sense together.']
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 48,
        width: '100%'
      }
    }, side(false, true), side(true, b >= 1)));
  }
  Object.assign(window, {
    InsideScene,
    WhyScene
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explainer/ScenesB.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Matrix = __ds_scope.Matrix;

__ds_ns.Token = __ds_scope.Token;

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.Fit = __ds_scope.Fit;

__ds_ns.Ident = __ds_scope.Ident;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.SpecHeader = __ds_scope.SpecHeader;

__ds_ns.StepBadge = __ds_scope.StepBadge;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.InsertionLine = __ds_scope.InsertionLine;

__ds_ns.PartsInventory = __ds_scope.PartsInventory;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.Continuity = __ds_scope.Continuity;

__ds_ns.ExplodedView = __ds_scope.ExplodedView;

__ds_ns.Focus = __ds_scope.Focus;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Magnify = __ds_scope.Magnify;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.Part = __ds_scope.Part;

__ds_ns.Process = __ds_scope.Process;

__ds_ns.Reorder = __ds_scope.Reorder;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Roll = __ds_scope.Roll;

__ds_ns.SheetChange = __ds_scope.SheetChange;

__ds_ns.Split = __ds_scope.Split;

__ds_ns.Tally = __ds_scope.Tally;

__ds_ns.Transit = __ds_scope.Transit;

__ds_ns.Blank = __ds_scope.Blank;

__ds_ns.Cluster = __ds_scope.Cluster;

__ds_ns.Collapse = __ds_scope.Collapse;

__ds_ns.Compare = __ds_scope.Compare;

__ds_ns.Grow = __ds_scope.Grow;

__ds_ns.PathLight = __ds_scope.PathLight;

__ds_ns.Pour = __ds_scope.Pour;

__ds_ns.Replay = __ds_scope.Replay;

__ds_ns.Sort = __ds_scope.Sort;

__ds_ns.SwapPart = __ds_scope.SwapPart;

__ds_ns.Plot = __ds_scope.Plot;

__ds_ns.Queue = __ds_scope.Queue;

__ds_ns.Rack = __ds_scope.Rack;

__ds_ns.Station = __ds_scope.Station;

})();
