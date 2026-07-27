import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Accordion,
  AccordionGroup,
  AlertBanner,
  AlertDialog,
  Button,
  ButtonGroup,
  Calendar,
  Callout,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Dialog,
  DialogTrigger,
  Footer,
  Form,
  Header,
  Heading,
  InlineAlert,
  Link,
  Modal,
  NumberField,
  ProgressBar,
  ProgressCircle,
  Radio,
  RadioGroup,
  Select,
  Separator,
  Switch,
  TagGroup,
  TagList,
  Text,
  TextArea,
  TextField,
  TimeField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  TooltipTrigger,
} from "@bcgov/design-system-react-components";
import { useStyle } from "./styleContext";
import type { StyleMode } from "./styles";

const SECTIONS = [
  { id: "accordion", label: "Accordion" },
  { id: "alert-banner", label: "Alert Banner" },
  { id: "alert-dialog", label: "Alert Dialog" },
  { id: "button", label: "Button" },
  { id: "calendar", label: "Calendar" },
  { id: "callout", label: "Callout" },
  { id: "checkbox", label: "Checkbox" },
  { id: "date-picker", label: "Date Picker" },
  { id: "dialog", label: "Dialog" },
  { id: "form", label: "Form" },
  { id: "heading-text", label: "Heading & Text" },
  { id: "inline-alert", label: "Inline Alert" },
  { id: "link", label: "Link" },
  { id: "number-field", label: "Number Field" },
  { id: "progress", label: "Progress" },
  { id: "radio", label: "Radio Group" },
  { id: "select", label: "Select" },
  { id: "separator", label: "Separator" },
  { id: "switch", label: "Switch" },
  { id: "tags", label: "Tags" },
  { id: "textarea", label: "Text Area" },
  { id: "textfield", label: "Text Field" },
  { id: "timefield", label: "Time Field" },
  { id: "toggle-button", label: "Toggle Button" },
  { id: "tooltip", label: "Tooltip" },
];

const MODES: StyleMode[] = ["plain", "inline", "bootstrap", "tailwind"];

function StyleToggle() {
  const { mode, setMode } = useStyle();
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        height: "45px",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1.5rem",
        borderBottom: "1px solid #d8d8d8",
        background: "#f5f5f5",
      }}
    >
      <span
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "#474543",
          marginRight: "0.25rem",
        }}
      >
        Structure:
      </span>
      {MODES.map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          style={{
            padding: "0.2rem 0.75rem",
            fontSize: "0.75rem",
            borderRadius: "4px",
            border: "1px solid #013366",
            cursor: "pointer",
            fontWeight: mode === m ? 700 : 400,
            background: mode === m ? "#013366" : "#fff",
            color: mode === m ? "#fff" : "#013366",
            transition: "background 0.15s",
          }}
        >
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="demo-section">
      <Heading level={2}>{title}</Heading>
      {children}
    </section>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const { s } = useStyle();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -75% 0px" },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  }

  return (
    <div {...s.shell}>
      <Header
        title="BC Design System Components"
        logoLinkElement={<a href="/home" title="Home" />}
        skipLinks={[<a href="#main">Skip to main content</a>]}
      >
        <RouterLink to="/sample" style={{ color: "#fff", fontSize: "0.875rem" }}>
          Sample Page
        </RouterLink>
        <Button variant="secondary">Log in</Button>
      </Header>
      <StyleToggle />

      <div {...s.body}>
        {/* ── Side navigation ── */}
        <nav className="sidenav" aria-label="On this page">
          <p className="sidenav-heading">Components</p>
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`sidenav-link${activeId === id ? " active" : ""}`}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── Main content ── */}
        <main id="#main" className="demo-main">
          <Section id="accordion" title="Accordion">
            <AccordionGroup title="Frequently Asked Questions">
              <Accordion label="What is the BC Design System?">
                <Text>
                  A set of standardized React components for B.C. Government
                  digital services.
                </Text>
              </Accordion>
              <Accordion label="What font does it use?">
                <Text>
                  BC Sans — a customized Noto Sans optimized for government use.
                </Text>
              </Accordion>
              <Accordion label="Is it accessible?">
                <Text>
                  Yes. Components are built on React Aria for full WCAG 2.1
                  compliance.
                </Text>
              </Accordion>
            </AccordionGroup>
          </Section>

          <Separator />

          <Section id="alert-banner" title="Alert Banner">
            <div {...s.col}>
              <AlertBanner variant="info" isCloseable>
                Info — this is an informational alert banner.
              </AlertBanner>
              <AlertBanner variant="success" isCloseable>
                Success — the operation completed successfully.
              </AlertBanner>
              <AlertBanner variant="warning" isCloseable>
                Warning — please review before continuing.
              </AlertBanner>
              <AlertBanner variant="danger" isCloseable>
                Danger — a critical error has occurred.
              </AlertBanner>
            </div>
          </Section>

          <Separator />

          <Section id="alert-dialog" title="Alert Dialog">
            <div {...s.row}>
              <DialogTrigger>
                <Button variant="secondary">Info Dialog</Button>
                <Modal>
                  <AlertDialog
                    variant="info"
                    title="Information"
                    isCloseable
                    buttons={<Button variant="primary">Got it</Button>}
                  >
                    This is an informational alert dialog used to convey status.
                  </AlertDialog>
                </Modal>
              </DialogTrigger>

              <DialogTrigger>
                <Button variant="secondary">Warning Dialog</Button>
                <Modal>
                  <AlertDialog
                    variant="warning"
                    title="Unsaved changes"
                    isCloseable
                    buttons={
                      <>
                        <Button variant="primary">Save</Button>
                        <Button variant="secondary">Discard</Button>
                      </>
                    }
                  >
                    You have unsaved changes. Do you want to save before
                    leaving?
                  </AlertDialog>
                </Modal>
              </DialogTrigger>

              <DialogTrigger>
                <Button variant="primary" danger>
                  Destructive Dialog
                </Button>
                <Modal>
                  <AlertDialog
                    variant="destructive"
                    title="Delete record?"
                    isCloseable
                    buttons={
                      <>
                        <Button variant="primary" danger>
                          Delete
                        </Button>
                        <Button variant="secondary">Cancel</Button>
                      </>
                    }
                  >
                    This action cannot be undone. The record will be permanently
                    deleted.
                  </AlertDialog>
                </Modal>
              </DialogTrigger>
            </div>
          </Section>

          <Separator />

          <Section id="button" title="Button">
            <div {...s.col}>
              <div>
                <Text size="small" elementType="p" {...s.label}>
                  Variants
                </Text>
                <ButtonGroup ariaLabel="Button variants">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="tertiary">Tertiary</Button>
                  <Button variant="link">Link</Button>
                </ButtonGroup>
              </div>
              <div>
                <Text size="small" elementType="p" {...s.label}>
                  Sizes
                </Text>
                <ButtonGroup ariaLabel="Button sizes">
                  <Button size="xsmall">X-Small</Button>
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="large">Large</Button>
                </ButtonGroup>
              </div>
              <div>
                <Text size="small" elementType="p" {...s.label}>
                  Danger
                </Text>
                <ButtonGroup ariaLabel="Danger variants">
                  <Button variant="primary" danger>
                    Primary Danger
                  </Button>
                  <Button variant="secondary" danger>
                    Secondary Danger
                  </Button>
                </ButtonGroup>
              </div>
              <div>
                <Text size="small" elementType="p" {...s.label}>
                  Disabled
                </Text>
                <ButtonGroup ariaLabel="Disabled buttons">
                  <Button variant="primary" isDisabled>
                    Primary
                  </Button>
                  <Button variant="secondary" isDisabled>
                    Secondary
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </Section>

          <Separator />

          <Section id="calendar" title="Calendar">
            <Calendar aria-label="Select a date" />
          </Section>

          <Separator />

          <Section id="callout" title="Callout">
            <div {...s.col}>
              <Callout
                variant="lightBlue"
                title="Light Blue callout"
                description="Use for supplementary or informational content."
              />
              <Callout
                variant="lightGold"
                title="Light Gold callout"
                description="Use for cautionary or advisory context."
              />
              <Callout
                variant="lightGrey"
                title="Light Grey callout"
                description="Use for neutral supplementary content."
              />
              <Callout
                variant="Blue"
                title="Blue callout"
                description="Use for prominent informational callouts."
              />
            </div>
          </Section>

          <Separator />

          <Section id="checkbox" title="Checkbox">
            <div {...s.col}>
              <CheckboxGroup label="Vertical (default)" orientation="vertical">
                <Checkbox value="a">Option A</Checkbox>
                <Checkbox value="b">Option B</Checkbox>
                <Checkbox value="c" isDisabled>
                  Option C (disabled)
                </Checkbox>
              </CheckboxGroup>
              <CheckboxGroup label="Horizontal" orientation="horizontal">
                <Checkbox value="x">Option X</Checkbox>
                <Checkbox value="y">Option Y</Checkbox>
                <Checkbox value="z">Option Z</Checkbox>
              </CheckboxGroup>
            </div>
          </Section>

          <Separator />

          <Section id="date-picker" title="Date Picker">
            <div {...s.row}>
              <DatePicker
                label="Appointment date"
                description="Choose a date"
                showFormatHelpText
              />
              <DatePicker label="Small size" size="small" />
            </div>
          </Section>

          <Separator />

          <Section id="dialog" title="Dialog">
            <DialogTrigger>
              <Button variant="secondary">Open Dialog</Button>
              <Modal>
                <Dialog isCloseable>
                  <Heading slot="title">Dialog Title</Heading>
                  <Text elementType="p">
                    Use dialogs to focus the user's attention on a specific task
                    or piece of information without navigating away.
                  </Text>
                </Dialog>
              </Modal>
            </DialogTrigger>
          </Section>

          <Separator />

          <Section id="form" title="Form">
            <Form {...s.col} style={{ ...s.col.style, maxWidth: "480px" }}>
              <TextField label="Full name" isRequired />
              <TextField label="Email address" type="email" isRequired />
              <TextArea label="Message" description="Maximum 500 characters." />
              <ButtonGroup ariaLabel="Form actions">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
              </ButtonGroup>
            </Form>
          </Section>

          <Separator />

          <Section id="heading-text" title="Heading & Text">
            <div {...s.col}>
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Heading level={4}>Heading 4</Heading>
              <Heading level={5}>Heading 5</Heading>
              <Heading level={6}>Heading 6</Heading>
              <Separator />
              <Text size="large">Large body text</Text>
              <Text size="medium">Medium body text (default)</Text>
              <Text size="small">Small body text</Text>
              <Text color="secondary">Secondary colour text</Text>
              <Text color="danger">Danger colour text</Text>
            </div>
          </Section>

          <Separator />

          <Section id="inline-alert" title="Inline Alert">
            <div {...s.col}>
              <InlineAlert
                variant="info"
                title="Info"
                description="This is an informational inline alert."
              />
              <InlineAlert
                variant="success"
                title="Success"
                description="Your changes have been saved successfully."
              />
              <InlineAlert
                variant="warning"
                title="Warning"
                description="Review this before continuing."
              />
              <InlineAlert
                variant="danger"
                title="Error"
                description="Something went wrong. Please try again."
              />
            </div>
          </Section>

          <Separator />

          <Section id="link" title="Link">
            <div {...s.col}>
              <div {...s.row}>
                <Link href="#link" size="small">
                  Small link
                </Link>
                <Link href="#link" size="medium">
                  Medium link
                </Link>
                <Link href="#link" size="large">
                  Large link
                </Link>
              </div>
              <div {...s.row}>
                <Link href="#link" danger>
                  Danger link
                </Link>
                <Link href="#link" isButton buttonVariant="primary">
                  Link as Primary Button
                </Link>
                <Link href="#link" isButton buttonVariant="secondary">
                  Link as Secondary Button
                </Link>
              </div>
            </div>
          </Section>

          <Separator />

          <Section id="number-field" title="Number Field">
            <div {...s.row}>
              <NumberField label="Quantity" defaultValue={1} minValue={0} />
              <NumberField
                label="Amount"
                defaultValue={100}
                step={10}
                description="In increments of 10"
              />
              <NumberField label="Small size" size="small" defaultValue={5} />
            </div>
          </Section>

          <Separator />

          <Section id="progress" title="Progress">
            <div {...s.colLoose}>
              <div>
                <Text size="small" elementType="p" {...s.label}>
                  Progress Bar
                </Text>
                <div {...s.colTight}>
                  <ProgressBar aria-label="25% complete" value={25} />
                  <ProgressBar aria-label="65% complete" value={65} />
                  <ProgressBar aria-label="Complete" value={100} />
                </div>
              </div>
              <div>
                <Text size="small" elementType="p" {...s.label}>
                  Progress Circle
                </Text>
                <div {...s.rowCenter}>
                  <ProgressCircle
                    aria-label="25% complete"
                    value={25}
                    size="small"
                  />
                  <ProgressCircle
                    aria-label="65% complete"
                    value={65}
                    size="medium"
                  />
                  <ProgressCircle
                    aria-label="90% complete"
                    value={90}
                    size="large"
                  />
                </div>
              </div>
            </div>
          </Section>

          <Separator />

          <Section id="radio" title="Radio Group">
            <div {...s.rowWide}>
              <RadioGroup label="Vertical (default)" orientation="vertical">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
                <Radio value="maybe">Maybe</Radio>
              </RadioGroup>
              <RadioGroup label="Horizontal" orientation="horizontal">
                <Radio value="a">Option A</Radio>
                <Radio value="b">Option B</Radio>
                <Radio value="c">Option C</Radio>
              </RadioGroup>
            </div>
          </Section>

          <Separator />

          <Section id="select" title="Select">
            <div {...s.rowStart}>
              <Select
                label="Province or territory"
                placeholder="Select a province"
                items={[
                  { id: "bc", label: "British Columbia" },
                  { id: "ab", label: "Alberta" },
                  { id: "sk", label: "Saskatchewan" },
                  { id: "mb", label: "Manitoba" },
                  { id: "on", label: "Ontario" },
                  { id: "qc", label: "Quebec" },
                ]}
              />
              <Select
                label="Size (small)"
                size="small"
                placeholder="Choose…"
                items={[
                  { id: "1", label: "Option 1" },
                  { id: "2", label: "Option 2" },
                  { id: "3", label: "Option 3" },
                ]}
              />
            </div>
          </Section>

          <Separator />

          <Section id="separator" title="Separator">
            <div {...s.col}>
              <Text>Content above</Text>
              <Separator />
              <Text>Content below a default separator</Text>
              <Separator size="large" />
              <Text>Content below a large separator</Text>
            </div>
          </Section>

          <Separator />

          <Section id="switch" title="Switch">
            <div {...s.col}>
              <Switch>Enable notifications</Switch>
              <Switch defaultSelected>Dark mode</Switch>
              <Switch labelPosition="left">Label on left</Switch>
              <Switch isDisabled>Disabled option</Switch>
            </div>
          </Section>

          <Separator />

          <Section id="tags" title="Tags">
            <div {...s.col}>
              <TagGroup label="Status">
                <TagList
                  items={[
                    { id: "active", textValue: "Active", color: "green" },
                    { id: "pending", textValue: "Pending", color: "yellow" },
                    { id: "inactive", textValue: "Inactive", color: "grey" },
                    { id: "error", textValue: "Error", color: "red" },
                  ]}
                />
              </TagGroup>
              <TagGroup label="Colour variants">
                <TagList
                  items={[
                    { id: "bc-blue", textValue: "BC Blue", color: "bc-blue" },
                    { id: "bc-gold", textValue: "BC Gold", color: "bc-gold" },
                    { id: "blue", textValue: "Blue", color: "blue" },
                    { id: "dark", textValue: "Dark", color: "dark" },
                    { id: "green", textValue: "Green", color: "green" },
                    { id: "gray", textValue: "Gray", color: "gray" },
                  ]}
                />
              </TagGroup>
              <TagGroup label="Sizes">
                <TagList
                  items={[
                    { id: "sm", textValue: "Small", size: "small" },
                    { id: "md", textValue: "Medium", size: "medium" },
                  ]}
                />
              </TagGroup>
            </div>
          </Section>

          <Separator />

          <Section id="textarea" title="Text Area">
            <div {...s.col} style={{ ...s.col.style, maxWidth: "480px" }}>
              <TextArea
                label="Comments"
                description="Please provide any additional comments."
              />
              <TextArea
                label="Disabled"
                value="This field is disabled."
                isDisabled
              />
            </div>
          </Section>

          <Separator />

          <Section id="textfield" title="Text Field">
            <div {...s.col} style={{ ...s.col.style, maxWidth: "480px" }}>
              <TextField
                label="Default"
                description="Helper text appears here"
              />
              <TextField label="Required" isRequired />
              <TextField label="Small size" size="small" />
              <TextField label="Disabled" value="Disabled value" isDisabled />
              <TextField
                label="Error state"
                isInvalid
                errorMessage="This field contains an error."
              />
            </div>
          </Section>

          <Separator />

          <Section id="timefield" title="Time Field">
            <div {...s.rowStart}>
              <TimeField label="Appointment time" description="Select a time" />
              <TimeField label="Small size" size="small" />
            </div>
          </Section>

          <Separator />

          <Section id="toggle-button" title="Toggle Button">
            <div {...s.col}>
              <ToggleButtonGroup label="Text alignment" selectionMode="single">
                <ToggleButton id="left">Left</ToggleButton>
                <ToggleButton id="center">Center</ToggleButton>
                <ToggleButton id="right">Right</ToggleButton>
                <ToggleButton id="justify">Justify</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                label="Formatting (multi-select)"
                selectionMode="multiple"
              >
                <ToggleButton id="bold">Bold</ToggleButton>
                <ToggleButton id="italic">Italic</ToggleButton>
                <ToggleButton id="underline">Underline</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                label="Small size"
                size="small"
                selectionMode="single"
              >
                <ToggleButton id="a">Option A</ToggleButton>
                <ToggleButton id="b">Option B</ToggleButton>
                <ToggleButton id="c">Option C</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Section>

          <Separator />

          <Section id="tooltip" title="Tooltip">
            <div {...s.row}>
              <TooltipTrigger>
                <Button variant="secondary">Hover me</Button>
                <Tooltip>This is a helpful tooltip message.</Tooltip>
              </TooltipTrigger>
              <TooltipTrigger>
                <Button variant="primary">Another button</Button>
                <Tooltip>Additional context for this action.</Tooltip>
              </TooltipTrigger>
              <TooltipTrigger>
                <Link href="#tooltip">Link with tooltip</Link>
                <Tooltip>More information about this link.</Tooltip>
              </TooltipTrigger>
            </div>
          </Section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
