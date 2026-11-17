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
  fullName?: string
  email?: string
  organization?: string
  photoVideoConsent?: string
  workshopPhotoConsent?: string
  posterConsent?: string
}

const LABELS: Record<string, string> = {
  consent: 'I consent',
  do_not_consent: 'I do not consent',
  not_applicable: 'Not applicable — not presenting a poster',
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={labelStyle}>{label}: </span>
      <span style={valueStyle}>{value}</span>
    </Text>
  ) : null

const Email = ({
  fullName,
  email,
  organization,
  photoVideoConsent,
  workshopPhotoConsent,
  posterConsent,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New consent form submission: {fullName || 'Unnamed'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New consent form submission</Heading>
        <Text style={intro}>
          A participant submitted the Media and Poster Publication Consent Form for TOP 1000
          Innovators of Poland in Silicon Valley — Summit II (December 14–17, 2026).
        </Text>

        <Section style={card}>
          <Text style={sectionTitle}>Participant</Text>
          <Row label="Full name" value={fullName} />
          <Row label="Email" value={email} />
          <Row label="Organization" value={organization} />
        </Section>

        <Section style={card}>
          <Text style={sectionTitle}>Consent preferences</Text>
          <Row label="Photography and video" value={photoVideoConsent ? LABELS[photoVideoConsent] : undefined} />
          <Row label="Workshop photography" value={workshopPhotoConsent ? LABELS[workshopPhotoConsent] : undefined} />
          <Row label="Poster publication" value={posterConsent ? LABELS[posterConsent] : undefined} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          You can review all submissions in the admin panel under Consent Forms.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'New consent form submission — Summit II',
  displayName: 'Consent form (admin notification)',
  to: 'agata.braja@polsv.org',
  previewData: {
    fullName: 'Jane Kowalska',
    email: 'jane@example.com',
    organization: 'AGH University',
    photoVideoConsent: 'consent',
    workshopPhotoConsent: 'do_not_consent',
    posterConsent: 'not_applicable',
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
