import type { ReactNode } from "react";
import "./PageBand.css";

export interface PageBandProps {
  /** Applied to the full-width outer element — background colour, borders, vertical padding. */
  bandClassName?: string;
  /** Applied to the centred, max-width inner element — content layout (flex, grid, gap). */
  className?: string;
  children: ReactNode;
}

/**
 * A full-bleed band: a full-width outer element wrapping a centred,
 * max-width, consistently-padded inner element. Any section that
 * needs to span the full page width (a header, a breadcrumb bar, a
 * hero banner, a content row) should be built from this so the page
 * width and horizontal padding stay identical everywhere, without
 * resorting to negative margins.
 */
export function PageBand({ bandClassName, className, children }: PageBandProps) {
  return (
    <div className={["bcds-page-band", bandClassName].filter(Boolean).join(" ")}>
      <div
        className={["bcds-page-band--inner", className].filter(Boolean).join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
