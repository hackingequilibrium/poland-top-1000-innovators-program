/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'
import type { Holder } from './ticket-registration-confirmation.tsx'

interface Props {
  contactName?: string
  contactEmail?: string
  contactPhone?: string
  country?: string
  ticketLabel?: string
  unitPrice?: string
  quantity?: number
  total?: string
  holders?: Holder[]
  billingOrg?: string
  billingAddress?: string
  taxId?: string
  notes?: string
}

const Email = (d: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New ticket registration: {d.ticketLabel} × {d.quantity} — {d.billingOrg}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New ticket registration</Heading>
        <Text style={p}>An invoice needs to be sent within 2 business days.</Text>
        <Section style={card}>
          <Text style={title}>Order</Text>
          <Text style={row}>Ticket type: {d.ticketLabel} — USD {d.unitPrice} per participant</Text>
          <Text style={row}>Number of tickets: {d.quantity}</Text>
          <Text style={row}><strong>Total: USD {d.total}</strong></Text>
        </Section>
        <Section style={card}>
          <Text style={title}>Contact person</Text>
          <Text style={row}>Name: {d.contactName}</Text>
          <Text style={row}>Email: {d.contactEmail}</Text>
          <Text style={row}>Phone: {d.contactPhone}</Text>
          <Text style={row}>Country: {d.country}</Text>
        </Section>
        <Section style={card}>
          <Text style={title}>Ticket holders</Text>
          {(d.holders || []).map((h, i) => (
            <Text key={i} style={row}>{i + 1}. {h.full_name} — {h.position}, {h.organization}</Text>
          ))}
        </Section>
        <Section style={card}>
          <Text style={title}>Billing details</Text>
          <Text style={row}>Organization: {d.billingOrg}</Text>
          <Text style={row}>Address: {d.billingAddress}</Text>
          <Text style={row}>Tax ID: {d.taxId || '—'}</Text>
        </Section>
        {d.notes ? (
          <Section style={card}>
            <Text style={title}>Notes</Text>
            <Text style={row}>{d.notes}</Text>
          </Section>
        ) : null}
        <Text style={footer}>All registrations are listed in the admin panel under Ticket Registrations.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) => `New ticket registration — ${data.ticketLabel ?? ''} × ${data.quantity ?? ''}`,
  displayName: 'Ticket registration (team notice)',
  previewData: {
    contactName: 'Anna Kowalska', contactEmail: 'anna@example.com', contactPhone: '+48 600 000 000', country: 'Poland',
    ticketLabel: 'University', unitPrice: '4,499', quantity: 1, total: '4,499',
    holders: [{ full_name: 'Anna Kowalska', position: 'Professor', organization: 'Warsaw University of Technology' }],
    billingOrg: 'Warsaw University of Technology', billingAddress: 'Pl. Politechniki 1, Warsaw', taxId: '', notes: '',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Roboto, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = { color: '#002266', fontSize: '24px', fontWeight: 600, margin: '0 0 12px' }
const p = { color: '#55575d', fontSize: '15px', lineHeight: '22px' }
const card = { backgroundColor: '#F4F7FC', borderLeft: '3px solid #8FC7F5', padding: '14px 18px', margin: '14px 0' }
const title = { color: '#002266', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, margin: '0 0 8px' }
const row = { color: '#0A1A3F', fontSize: '14px', lineHeight: '20px', margin: '0 0 4px' }
const footer = { color: '#8a8d94', fontSize: '12px' }
