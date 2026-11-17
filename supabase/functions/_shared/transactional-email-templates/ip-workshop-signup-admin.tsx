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
  surname?: string
  organization?: string
  email?: string
  mobile?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={labelStyle}>{label}: </span>
      <span style={valueStyle}>{value}</span>
    </Text>
  ) : null

const Email = ({ name, surname, organization, email, mobile }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      New IP workshop signup: {`${name || ''} ${surname || ''}`.trim() || 'Unnamed'}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New IP workshop signup</Heading>
        <Text style={intro}>
          A participant signed up for the IP workshop with Soody Tronson (Tuesday, December 15,
          2026 · Stanford University) at TOP 1000 Innovators of Poland in Silicon Valley — Summit II.
        </Text>

        <Section style={card}>
          <Text style={sectionTitle}>Participant</Text>
          <Row label="Name" value={name} />
          <Row label="Surname" value={surname} />
          <Row label="Organization" value={organization} />
          <Row label="Email" value={email} />
          <Row label="Mobile" value={mobile} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          You can review all signups in the admin panel under IP Workshop.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'New IP workshop signup — Summit II',
  displayName: 'IP workshop signup (admin notification)',
  to: 'agata.braja@polsv.org',
  previewData: {
    name: 'Jane',
    surname: 'Kowalska',
    organization: 'AGH University',
    email: 'jane@example.com',
    mobile: '+48 600 000 000',
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
