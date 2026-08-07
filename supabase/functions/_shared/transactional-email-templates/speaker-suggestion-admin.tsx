/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  speakerName?: string
  speakerEmail?: string
  speakerTitle?: string
  speakerOrganization?: string
  speakerLinkedin?: string
  focusArea?: string
  whySpeaker?: string
  submitterName?: string
  submitterEmail?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={labelStyle}>{label}: </span>
      <span style={valueStyle}>{value}</span>
    </Text>
  ) : null

const Email = ({
  speakerName,
  speakerEmail,
  speakerTitle,
  speakerOrganization,
  speakerLinkedin,
  focusArea,
  whySpeaker,
  submitterName,
  submitterEmail,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New speaker suggestion: {speakerName || 'Unnamed'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New speaker suggestion</Heading>
        <Text style={intro}>
          A new speaker was suggested for TOP 1000 Innovators of Poland in Silicon Valley — Summit II.
        </Text>

        <Section style={card}>
          <Text style={sectionTitle}>Speaker</Text>
          <Row label="Name" value={speakerName} />
          <Row label="Email" value={speakerEmail} />
          <Row label="Title" value={speakerTitle} />
          <Row label="Organization" value={speakerOrganization} />
          <Row label="LinkedIn" value={speakerLinkedin} />
          <Row label="Focus area" value={focusArea} />
          <Row label="Why this speaker" value={whySpeaker} />
        </Section>

        <Section style={card}>
          <Text style={sectionTitle}>Submitted by</Text>
          <Row label="Name" value={submitterName} />
          <Row label="Email" value={submitterEmail} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          You can review all suggestions in the admin panel under Speakers 2026.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'New speaker suggestion — Summit II',
  displayName: 'Speaker suggestion (admin notification)',
  to: 'agata.braja@polsv.org',
  previewData: {
    speakerName: 'Jane Kowalska',
    speakerEmail: 'jane@example.com',
    speakerTitle: 'Professor of Bioengineering',
    speakerOrganization: 'Stanford University',
    speakerLinkedin: 'https://linkedin.com/in/example',
    focusArea: 'Biomed & Life Sciences',
    whySpeaker: 'Leading translational research with strong Poland ties.',
    submitterName: 'Adam Nowak',
    submitterEmail: 'adam@example.com',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Roboto, Arial, sans-serif',
}
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = {
  color: '#002266',
  fontSize: '24px',
  fontWeight: 600,
  margin: '0 0 12px',
}
const intro = { color: '#55575d', fontSize: '15px', lineHeight: '22px' }
const card = {
  backgroundColor: '#F4F7FC',
  borderLeft: '3px solid #8FC7F5',
  padding: '16px 18px',
  margin: '18px 0',
}
const sectionTitle = {
  color: '#002266',
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  margin: '0 0 10px',
}
const row = { fontSize: '14px', lineHeight: '20px', margin: '0 0 6px' }
const labelStyle = { color: '#55575d' }
const valueStyle = { color: '#0A1A3F', fontWeight: 500 }
const hr = { borderColor: '#E3E8F0', margin: '24px 0' }
const footer = { color: '#8a8d94', fontSize: '12px' }
