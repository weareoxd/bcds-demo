import type { CSSProperties } from 'react';

export type StyleMode = 'plain' | 'inline' | 'bootstrap' | 'tailwind';

export interface StyleValue {
  className?: string;
  style?: CSSProperties;
}

export interface Styles {
  /** Outermost full-height flex column */
  shell: StyleValue;
  /** Grow flex row holding sidenav + main */
  body: StyleValue;
  /** Flex column, 1 rem gap */
  col: StyleValue;
  /** Flex column, 0.5 rem gap */
  colTight: StyleValue;
  /** Flex column, 1.5 rem gap */
  colLoose: StyleValue;
  /** Flex wrap row, 1 rem gap */
  row: StyleValue;
  /** Flex wrap row, 1 rem gap, center-aligned */
  rowCenter: StyleValue;
  /** Flex wrap row, 1 rem gap, start-aligned */
  rowStart: StyleValue;
  /** Flex wrap row, 3 rem gap, start-aligned */
  rowWide: StyleValue;
  /** Label text bottom margin */
  label: StyleValue;
}

const tailwind: Styles = {
  shell:     { className: 'flex flex-col min-h-screen' },
  body:      { className: 'flex items-start grow' },
  col:       { className: 'flex flex-col gap-4' },
  colTight:  { className: 'flex flex-col gap-2' },
  colLoose:  { className: 'flex flex-col gap-6' },
  row:       { className: 'flex flex-wrap gap-4' },
  rowCenter: { className: 'flex flex-wrap gap-4 items-center' },
  rowStart:  { className: 'flex flex-wrap gap-4 items-start' },
  rowWide:   { className: 'flex flex-wrap gap-12 items-start' },
  label:     { className: 'mb-2' },
};

const bootstrap: Styles = {
  shell:     { className: 'd-flex flex-column min-vh-100' },
  body:      { className: 'd-flex align-items-start flex-grow-1' },
  col:       { className: 'd-flex flex-column gap-3' },
  colTight:  { className: 'd-flex flex-column gap-2' },
  colLoose:  { className: 'd-flex flex-column gap-4' },
  row:       { className: 'd-flex flex-wrap gap-3' },
  rowCenter: { className: 'd-flex flex-wrap gap-3 align-items-center' },
  rowStart:  { className: 'd-flex flex-wrap gap-3 align-items-start' },
  rowWide:   { className: 'd-flex flex-wrap gap-5 align-items-start' },
  label:     { className: 'mb-2' },
};

const inline: Styles = {
  shell:     { style: { display: 'flex', flexDirection: 'column', minHeight: '100vh' } },
  body:      { style: { display: 'flex', alignItems: 'flex-start', flexGrow: 1 } },
  col:       { style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
  colTight:  { style: { display: 'flex', flexDirection: 'column', gap: '0.5rem' } },
  colLoose:  { style: { display: 'flex', flexDirection: 'column', gap: '1.5rem' } },
  row:       { style: { display: 'flex', flexWrap: 'wrap', gap: '1rem' } },
  rowCenter: { style: { display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' } },
  rowStart:  { style: { display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' } },
  rowWide:   { style: { display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' } },
  label:     { style: { marginBottom: '0.5rem' } },
};

const plain: Styles = {
  shell: {}, body: {}, col: {}, colTight: {}, colLoose: {},
  row: {}, rowCenter: {}, rowStart: {}, rowWide: {}, label: {},
};

export const styleMaps: Record<StyleMode, Styles> = { plain, inline, bootstrap, tailwind };
