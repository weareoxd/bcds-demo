import { Link as RouterLink } from "react-router-dom";
import "./SamplePage.css";
import {
  Footer,
  Header,
  Heading,
  Text,
} from "@bcgov/design-system-react-components";

export default function SamplePage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header
        title="Single Digital Gateway"
        logoLinkElement={<a href="/" title="Home" />}
        skipLinks={[<a href="#main">Skip to main content</a>]}
      />
      <div className="sdg-full-width">
        <div className="sdg-border">
          <div className="sdg-contain">
            <div className="sdg-breadcrumbs-contain">
              {/* <div className="gradient-left" aria-label="Move Left" aria-hidden="true"><button class="chevron chevron-left"><img src="/icons/chevron-right-blue.svg" alt=""></button></div> */}
              <div className="scrollable">
                <div className="sdg-breadcrumbs">
                  <span>Services</span>
                  <span>
                    <a href="#">Person with Disability Designation</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sdg-contain">
          <nav className="sdg-sidenav" aria-label="On this page">
            Sidenav
          </nav>
          <main
            id="main"
            style={{
              flex: 1,
              maxWidth: "820px",
              width: "100%",
              margin: "0 auto",
              padding: "2rem 1.5rem",
            }}
          >
            <Heading level={1}>Sample Page</Heading>
            <Text elementType="p">
              This is a sample page using the BC Design System. Add your content
              here.
            </Text>
            <RouterLink
              to="/"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              ← Back to component showcase
            </RouterLink>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
