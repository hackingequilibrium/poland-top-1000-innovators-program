/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

export interface Holder { full_name?: string; position?: string; organization?: string }

interface Props {
  contactName?: string
  ticketLabel?: string
  unitPrice?: string
  quantity?: number
  total?: string
  holders?: Holder[]
  billingOrg?: string
  billingAddress?: string
  taxId?: string
}

const Email = ({ contactName, ticketLabel, unitPrice, quantity, total, holders = [], billingOrg, billingAddress, taxId }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your TOP 1000 Summit II registration — invoice coming soon</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank you for registering</Heading>
        <Text style={p}>Dear {contactName || 'participant'},</Text>
        <Text style={p}>
          Thank you for registering for the <strong>TOP 1000 Innovators Summit II</strong>, taking place{' '}
          <strong>14–17 December 2026</strong> in Silicon Valley (UC San Francisco, Stanford University, UC Berkeley and the Computer History Museum).
        </Text>
        <Text style={p}>
          We have received your registration. <strong>Our team will send your invoice with payment details within the next 2 business days.</strong>{' '}
          Your place is confirmed once payment is received.
        </Text>

        <Section style={card}>
          <Text style={title}>Registration summary</Text>
          <Text style={row}>Ticket type: {ticketLabel} — USD {unitPrice} per participant</Text>
          <Text style={row}>Number of tickets: {quantity}</Text>
          <Text style={row}><strong>Total: USD {total}</strong></Text>
        </Section>

        <Section style={card}>
          <Text style={title}>Ticket holders</Text>
          {holders.map((h, i) => (
            <Text key={i} style={row}>
              {i + 1}. {h.full_name} — {h.position}, {h.organization}
            </Text>
          ))}
        </Section>

        <Section style={card}>
          <Text style={title}>Billing details</Text>
          <Text style={row}>Organization: {billingOrg}</Text>
          <Text style={row}>Address: {billingAddress}</Text>
          <Text style={row}>Tax ID: {taxId || '—'}</Text>
        </Section>

        <Text style={p}>
          If any of these details need correcting, simply reply to this email or write to{' '}
          <Link href="mailto:info@polsv.org" style={link}>info@polsv.org</Link>.
        </Text>
        <Text style={p}>
          <strong>Planning your stay:</strong> our group rate at the San Francisco Airport Marriott Waterfront is USD 209/night
          (13–18 December 2026); book by 20 November 2026 via the link on our{' '}
          <Link href="https://top1000.polsv.org/hotels" style={link}>Travel &amp; Stay page</Link>.
        </Text>
        <Text style={p}>We look forward to welcoming you in December.</Text>
        <Hr style={hr} />
        <Text style={p}>
          Warm regards,<br />The PolSV Team<br />
          Poland In Silicon Valley Center for Science, Innovation, and Entrepreneurship<br />
          <Link href="https://top1000.polsv.org" style={link}>top1000.polsv.org</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Your TOP 1000 Summit II registration — invoice coming soon',
  displayName: 'Ticket registration (confirmation)',
  previewData: {
    contactName: 'Anna Kowalska', ticketLabel: 'University', unitPrice: '4,499', quantity: 2, total: '8,998',
    holders: [
      { full_name: 'Anna Kowalska', position: 'Professor', organization: 'Warsaw University of Technology' },
      { full_name: 'Jan Nowak', position: 'Founder', organization: 'NovaTech' },
    ],
    billingOrg: 'Warsaw University of Technology', billingAddress: 'Pl. Politechniki 1, 00-661 Warsaw, Poland', taxId: 'PL5250005834',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Roboto, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = { color: '#002266', fontSize: '24px', fontWeight: 600, margin: '0 0 16px' }
const p = { color: '#33363d', fontSize: '15px', lineHeight: '22px', margin: '0 0 14px' }
const card = { backgroundColor: '#F4F7FC', borderLeft: '3px solid #8FC7F5', padding: '14px 18px', margin: '14px 0' }
const title = { color: '#002266', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, margin: '0 0 8px' }
const row = { color: '#0A1A3F', fontSize: '14px', lineHeight: '20px', margin: '0 0 4px' }
const link = { color: '#002266', textDecoration: 'underline' }
const hr = { borderColor: '#E3E8F0', margin: '24px 0' }
