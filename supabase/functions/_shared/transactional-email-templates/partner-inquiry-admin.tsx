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
  name?: string
  organization?: string
  role?: string
  email?: string
  orgType?: string
  areaOfInterest?: string
  collaborationType?: string
  details?: string
  website?: string
  linkedin?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={labelStyle}>{label}: </span>
      <span style={valueStyle}>{value}</span>
    </Text>
  ) : null

const Email = ({
  name,
  organization,
  role,
  email,
  orgType,
  areaOfInterest,
  website,
  linkedin,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New partner inquiry from {name || 'Unknown'} ({organization || 'Unknown org'})</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New partner inquiry</Heading>
        <Text style={intro}>
          A new partnership inquiry was submitted for TOP 1000 Innovators of Poland in Silicon Valley — Summit II.
        </Text>

        <Section style={card}>
          <Text style={sectionTitle}>Inquiry details</Text>
          <Row label="Name" value={name} />
          <Row label="Organization" value={organization} />
          <Row label="Role / Title" value={role} />
          <Row label="Email" value={email} />
          <Row label="Type of organization" value={orgType} />
          <Row label="Area of interest" value={areaOfInterest} />
          <Row label="Website" value={website} />
          <Row label="LinkedIn" value={linkedin} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          You can review all inquiries in the admin panel under Partners 2026.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'New partner inquiry — Summit II',
  displayName: 'Partner inquiry (admin notification)',
  to: 'agata.braja@polsv.org',
  previewData: {
    name: 'Anna Kowalska',
    organization: 'Warsaw University of Technology',
    role: 'Director of Innovation',
    email: 'anna@example.com',
    orgType: 'University / Research',
    areaOfInterest: 'Joint research programs and student exchange',
    website: 'https://example.com',
    linkedin: 'https://linkedin.com/in/example',
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
