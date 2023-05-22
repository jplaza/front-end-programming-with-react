import './App.css';
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <LowerSection />
        </Section>
      </Section>
    </Section>
  );
}

function LowerSection() {
  return (
    <Section>
      <Heading>Sub-sub-heading</Heading>
      <Heading>Sub-sub-heading</Heading>
      <Heading>Sub-sub-heading</Heading>
    </Section>
  )
}
