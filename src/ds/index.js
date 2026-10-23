// The SI-74 design-system bundle is a prebuilt IIFE that expects a global `React`
// and attaches its components to `window.StandardInferenceSI74_5db10b`.
// Load it once, on server and client, and re-export the components we use.
import * as React from 'react';

const g = globalThis;
const hadWindow = 'window' in g;
g.React = React;
if (!hadWindow) g.window = g;
await import('./bundle.js');
if (!hadWindow) delete g.window;

const ns = g.StandardInferenceSI74_5db10b;
if (ns.__errors?.length) console.warn('[ds] component load errors', ns.__errors);

export const { Button, Caption, Panel, Roll, SpecHeader, StepBadge, Stamp, Tag, Token } = ns;
