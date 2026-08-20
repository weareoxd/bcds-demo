import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  Link as AriaLink,
} from "react-aria-components";
import { PageBand } from "./PageBand";
import "./Breadcrumbs.css";

export interface BreadcrumbItem {
  id: string;
  label: string;
  /** Omit on the current/last item — Breadcrumbs disables it automatically. */
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  "aria-label"?: string;
}

export function Breadcrumbs({
  items,
  "aria-label": ariaLabel = "Breadcrumb",
}: BreadcrumbsProps) {
  return (
    <PageBand
      bandClassName="bcds-react-aria-Breadcrumbs--Bar"
      className="bcds-react-aria-Breadcrumbs--Container"
    >
      <AriaBreadcrumbs
        aria-label={ariaLabel}
        className="bcds-react-aria-Breadcrumbs"
      >
        {items.map((item) => (
          <AriaBreadcrumb
            key={item.id}
            className="bcds-react-aria-Breadcrumbs--Item"
          >
            <AriaLink
              {...(item.href ? { href: item.href } : {})}
              className="bcds-react-aria-Breadcrumbs--Link"
            >
              {item.label}
            </AriaLink>
          </AriaBreadcrumb>
        ))}
      </AriaBreadcrumbs>
    </PageBand>
  );
}
