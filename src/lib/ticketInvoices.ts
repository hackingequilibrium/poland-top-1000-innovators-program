export interface TicketHolder {
  full_name: string;
  email?: string;
  position: string;
  organization: string;
}

export interface TicketRegistration {
  id: string; ticket_type: string; quantity: number; contact_name: string; contact_email: string;
  contact_phone: string; country: string; holders: TicketHolder[]; billing_org: string; billing_address: string;
  tax_id: string | null; discount_codes: string | null; notes: string | null; created_at: string;
}

export interface InvoiceStatus { issued: boolean; paid: boolean }
export interface InvoiceTracking {
  registration_id: string;
  invoice_mode: 'group' | 'individual';
  group_issued: boolean;
  group_paid: boolean;
  individual_statuses: Record<string, InvoiceStatus>;
}

export const defaultTracking = (id: string): InvoiceTracking => ({
  registration_id: id, invoice_mode: 'group', group_issued: false, group_paid: false, individual_statuses: {},
});

export function holderStatus(tracking: InvoiceTracking, index: number): InvoiceStatus {
  if (tracking.invoice_mode === 'group') return { issued: tracking.group_issued, paid: tracking.group_paid };
  const status = tracking.individual_statuses[String(index)];
  return { issued: status?.issued === true, paid: status?.paid === true };
}

// Quote every cell, preserve Unicode, and neutralize spreadsheet formula injection.
export function spreadsheetCell(value: unknown): string {
  const text = String(value ?? '');
  const safe = /^[\s\uFEFF]*[=+@-]/.test(text) || /^[\t\r\n]/.test(text) ? `'${text}` : text;
  return `"${safe.replace(/"/g, '""')}"`;
}

export function registrationsCsv(registrations: TicketRegistration[], tracking: InvoiceTracking[]): string {
  const statuses = new Map(tracking.map(t => [t.registration_id, t]));
  const rows: unknown[][] = [[
    'Registration ID', 'Registered at', 'Ticket type', 'Quantity', 'Contact name', 'Contact email',
    'Contact phone', 'Country', 'Holder number', 'Holder name', 'Holder email', 'Position', 'Organization',
    'Billing organization', 'Billing address', 'Tax ID', 'Discount codes', 'Notes', 'Invoice type',
    'Invoice reference', 'Invoice issued', 'Paid',
  ]];
  for (const r of registrations) {
    const t = statuses.get(r.id) ?? defaultTracking(r.id);
    const holders = Array.isArray(r.holders) && r.holders.length ? r.holders : [null];
    holders.forEach((h, i) => {
      const status = holderStatus(t, i);
      rows.push([r.id, r.created_at, r.ticket_type, r.quantity, r.contact_name, r.contact_email,
        r.contact_phone, r.country, h ? i + 1 : '', h?.full_name, h?.email, h?.position, h?.organization,
        r.billing_org, r.billing_address, r.tax_id, r.discount_codes, r.notes, t.invoice_mode,
        t.invoice_mode === 'group' ? `${r.id}/group` : `${r.id}/holder-${i + 1}`,
        status.issued ? 'Yes' : 'No', status.paid ? 'Yes' : 'No']);
    });
  }
  return '\uFEFF' + rows.map(row => row.map(spreadsheetCell).join(',')).join('\r\n');
}