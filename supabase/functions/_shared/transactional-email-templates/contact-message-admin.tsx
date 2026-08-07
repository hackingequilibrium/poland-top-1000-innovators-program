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
  email?: string
  organization?: string
  subject?: string
  message?: string
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
  email,
  organization,
  subject,
  message,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact message from {name || 'Unknown'}: {subject || 'No subject'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact message</Heading>
        <Text style={intro}>
          A new message was submitted through the Contact Us form on the TOP 1000 Innovators of Poland in Silicon Valley website.
        </Text>

        <Section style={card}>
          <Text style={sectionTitle}>Message details</Text>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          <Row label="Organization" value={organization} />
          <Row label="Subject" value={subject} />
        </Section>

        {message ? (
          <Section style={card}>
            <Text style={sectionTitle}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>
          You can review all contact messages in the admin panel under Contact Messages.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New contact message: ${data.subject || 'No subject'}`,
  displayName: 'Contact message (admin notification)',
  to: 'agata.braja@polsv.org',
  previewData: {
    name: 'Anna Kowalska',
    email: 'anna@example.com',
    organization: 'Warsaw University of Technology',
    subject: 'Question about Summit II registration',
    message:
      'Hello, I would like to know more about the registration process for Summit II. Is there a deadline for purchasing tickets?',
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
const messageText = {
  color: '#0A1A3F',
  fontSize: '14px',
  lineHeight: '22px',
  whiteSpace: 'pre-wrap' as const,
}
const hr = { borderColor: '#E3E8F0', margin: '24px 0' }
const footer = { color: '#8a8d94', fontSize: '12px' }
