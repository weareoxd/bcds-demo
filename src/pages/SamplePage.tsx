import { Link as RouterLink } from "react-router-dom";
import "./SamplePage.css";
import {
  Button,
  ButtonGroup,
  Callout,
  Footer,
  Header,
  Heading,
  InlineAlert,
  Text,
} from "@bcgov/design-system-react-components";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageBand } from "../components/PageBand";

// "On this page" sections — a plain anchor-link list; the sidenav
// collapses into a horizontal scroll strip on narrow screens (see
// SamplePage.css).
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "typography", label: "Typography" },
  { id: "alerts", label: "Alerts & Callouts" },
  { id: "actions", label: "Actions" },
];

// Both regions are optional — flip either flag to see the layout
// adapt. There's always exactly one <h1> on the page: it lives in the
// hero when the hero is shown, or on the Overview section when it isn't.
const SHOW_HERO = true;
const SHOW_SIDENAV = true;

export default function SamplePage() {
  return (
    <div className="bcds-sample-page">
      <Header
        title="BCDS Sample Page"
        logoLinkElement={<a href="/" title="Home" />}
        skipLinks={[<a href="#main">Skip to main content</a>]}
      />

      <Breadcrumbs
        items={[
          { id: "home", label: "Home", href: "/" },
          { id: "sample", label: "Sample Page" },
        ]}
      />

      {SHOW_HERO && (
        <PageBand bandClassName="bcds-sample-page--hero">
          <Heading level={1} color="primaryInvert">
            BCDS Sample Page
          </Heading>
        </PageBand>
      )}

      <PageBand
        bandClassName="bcds-sample-page--content-outer"
        className="bcds-sample-page--body"
      >
        {SHOW_SIDENAV && (
          <nav className="bcds-sample-page--sidenav" aria-label="On this page">
            <h2 className="bcds-sample-page--sidenav-heading">On this page</h2>
            <div className="bcds-sample-page--sidenav-list">
              {SECTIONS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="bcds-sample-page--sidenav-link"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}

        <main id="main" className="bcds-sample-page--main">
          <section id="overview" className="bcds-sample-page--section">
            <Heading level={SHOW_HERO ? 2 : 1}>
              {SHOW_HERO ? "Overview" : "BCDS Sample Page"}
            </Heading>
            <div className="bcds-sample-page--section-body">
              <Text elementType="p">
                This page is a responsive starter template built with the BC
                Design System. Copy this file as a starting point for new pages
                — it demonstrates a page header, breadcrumbs, an "on this page"
                side navigation, and a main content column, all laid out to
                adapt from desktop down to mobile.
              </Text>
              <Callout
                variant="lightBlue"
                title="How to use this template"
                description="Replace the sections below with your page's content. The layout, breadcrumb bar, and side navigation are reusable as-is — resize your browser to see the responsive behaviour."
              />
            </div>
          </section>

          <section id="typography" className="bcds-sample-page--section">
            <Heading level={2}>Typography</Heading>
            <div className="bcds-sample-page--section-body">
              <Text elementType="p">
                Use <code>Heading</code> and <code>Text</code> from the design
                system for consistent type styles.
              </Text>
              <Heading level={3}>Heading level 3</Heading>
              <Text size="medium">
                Medium body text is the default size for page content.
              </Text>
              <Text size="small" color="secondary">
                Small, secondary-coloured text works well for supporting detail.
              </Text>
            </div>
          </section>

          <section id="alerts" className="bcds-sample-page--section">
            <Heading level={2}>Alerts & Callouts</Heading>
            <div className="bcds-sample-page--section-body">
              <InlineAlert
                variant="info"
                title="Info"
                description="Use inline alerts to surface page-level status near the content it relates to."
              />
              <Callout
                variant="lightGold"
                title="Light Gold callout"
                description="Use callouts for cautionary or advisory context."
              />
            </div>
          </section>

          <section id="actions" className="bcds-sample-page--section">
            <Heading level={2}>Actions</Heading>
            <div className="bcds-sample-page--section-body">
              <div className="bcds-sample-page--row">
                <ButtonGroup ariaLabel="Sample actions">
                  <Button variant="primary">Primary action</Button>
                  <Button variant="secondary">Secondary action</Button>
                </ButtonGroup>
              </div>
              <RouterLink to="/" className="bcds-sample-page--back-link">
                ← Back to component showcase
              </RouterLink>
            </div>
          </section>
        </main>
      </PageBand>

      <Footer />
    </div>
  );
}
