import { useEffect, useMemo, useState } from 'react';
import { Download, Save } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { defaultTracking, registrationsCsv, type TicketRegistration, type InvoiceTracking, type InvoiceStatus } from '@/lib/ticketInvoices';
import type { Json } from '@/integrations/supabase/types';

async function loadTracking(): Promise<InvoiceTracking[]> {
  const rows: InvoiceTracking[] = [];
  for (let start = 0; ; start += 1000) {
    const { data, error } = await supabase.from('ticket_invoice_tracking').select('*').order('registration_id').range(start, start + 999);
    if (error) throw error;
    rows.push(...data.map(row => ({ ...row, invoice_mode: row.invoice_mode as InvoiceTracking['invoice_mode'], individual_statuses: row.individual_statuses as unknown as InvoiceTracking['individual_statuses'] })));
    if (data.length < 1000) return rows;
  }
}

export async function loadTicketRegistrations(): Promise<TicketRegistration[]> {
  const rows: TicketRegistration[] = [];
  for (let start = 0; ; start += 1000) {
    const { data, error } = await supabase.from('ticket_registrations').select('*').order('created_at', { ascending: false }).order('id').range(start, start + 999);
    if (error) throw error;
    rows.push(...data as unknown as TicketRegistration[]);
    if (data.length < 1000) return rows;
  }
}

function StatusFields({ label, status, disabled, onChange }: { label: string; status: InvoiceStatus; disabled: boolean; onChange: (status: InvoiceStatus) => void }) {
  return <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-2">
    <span className="min-w-0 basis-full font-medium lg:basis-auto lg:flex-1">{label}</span>
    {(['issued', 'paid'] as const).map(field => <label key={field} className="flex items-center gap-2 cursor-pointer">
      <Checkbox aria-label={`${label}: ${field === 'issued' ? 'Invoice issued' : 'Paid'}`} checked={status[field]} disabled={disabled}
        className="border-summit-muted data-[state=checked]:bg-summit-accent data-[state=checked]:text-summit focus-visible:ring-summit-accent"
        onCheckedChange={checked => onChange({ ...status, [field]: checked === true })} />
      {field === 'issued' ? 'Invoice issued' : 'Paid'}
    </label>)}
  </div>;
}

function RegistrationCard({ registration: r, tracking, ready, onSaved }: { registration: TicketRegistration; tracking: InvoiceTracking; ready: boolean; onSaved: (tracking: InvoiceTracking) => void }) {
  const [draft, setDraft] = useState(tracking);
  const [saving, setSaving] = useState(false);
  useEffect(() => setDraft(tracking), [tracking]);
  const dirty = JSON.stringify(draft) !== JSON.stringify(tracking);
  const holders = Array.isArray(r.holders) ? r.holders : [];

  async function save() {
    setSaving(true);
    try {
      const { data, error } = await supabase.from('ticket_invoice_tracking').upsert({ ...draft, individual_statuses: draft.individual_statuses as unknown as Json }).select().single();
      if (error) throw error;
      onSaved({ ...data, invoice_mode: data.invoice_mode as InvoiceTracking['invoice_mode'], individual_statuses: data.individual_statuses as unknown as InvoiceTracking['individual_statuses'] });
      toast.success('Invoice tracking saved');
    } catch { toast.error('Could not save invoice tracking. Your changes have not been saved.'); }
    finally { setSaving(false); }
  }

  return <article className="rounded-lg border border-summit-foreground/15 bg-summit-foreground/5 p-4 text-sm text-summit-foreground break-words">
    <div className="flex flex-wrap justify-between gap-2 mb-2">
      <span className="font-semibold capitalize">{r.ticket_type} × {r.quantity}</span>
      <span className="text-summit-muted text-xs">{new Date(r.created_at).toLocaleString()}</span>
    </div>
    <div><span className="text-summit-muted">Contact:</span> {r.contact_name} · {r.contact_email} · {r.contact_phone} · {r.country}</div>
    <div className="mt-2 text-summit-muted">Ticket holders:</div>
    <ol className="list-decimal pl-5">{holders.map((h, i) => <li key={i}>{h.full_name} — {h.position}, {h.organization}{h.email ? ` · ${h.email}` : ''}</li>)}</ol>
    <div className="mt-2"><span className="text-summit-muted">Billing:</span> {r.billing_org}, {r.billing_address}{r.tax_id ? ` · Tax ID ${r.tax_id}` : ''}</div>
    {r.discount_codes && <div className="mt-1"><span className="text-summit-muted">Discount code(s):</span> {r.discount_codes}</div>}
    {r.notes && <div className="mt-1"><span className="text-summit-muted">Notes:</span> {r.notes}</div>}
    <div className="mt-4 border-t border-summit-foreground/15 pt-4">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <div role="group" aria-label={`Invoice type for ${r.contact_name}`} className="flex flex-wrap gap-1">
          {(['group', 'individual'] as const).map(mode => <Button key={mode} size="sm" variant="summit" aria-pressed={draft.invoice_mode === mode}
            className={draft.invoice_mode === mode ? 'bg-summit-foreground text-summit' : ''} disabled={!ready || saving}
            onClick={() => setDraft({ ...draft, invoice_mode: mode })}>{mode === 'group' ? 'Group invoice' : 'Individual invoices'}</Button>)}
        </div>
        <Button variant="summit" size="sm" disabled={!ready || saving || !dirty} onClick={save}><Save />{saving ? 'Saving…' : 'Save changes'}</Button>
      </div>
      {draft.invoice_mode === 'group'
        ? <StatusFields label="Group invoice" status={{ issued: draft.group_issued, paid: draft.group_paid }} disabled={!ready || saving}
            onChange={status => setDraft({ ...draft, group_issued: status.issued, group_paid: status.paid })} />
        : holders.map((h, i) => <StatusFields key={i} label={`${i + 1}. ${h.full_name}`} status={draft.individual_statuses[String(i)] ?? { issued: false, paid: false }} disabled={!ready || saving}
            onChange={status => setDraft({ ...draft, individual_statuses: { ...draft.individual_statuses, [String(i)]: status } })} />)}
    </div>
  </article>;
}

export function TicketRegistrations({ registrations }: { registrations: TicketRegistration[] }) {
  const [tracking, setTracking] = useState<InvoiceTracking[]>([]);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [exporting, setExporting] = useState(false);
  const trackingByRegistration = useMemo(() => new Map(registrations.map(r => [r.id, tracking.find(t => t.registration_id === r.id) ?? defaultTracking(r.id)])), [registrations, tracking]);
  async function refresh() {
    setReady(false); setFailed(false);
    try { setTracking(await loadTracking()); setReady(true); }
    catch { setFailed(true); toast.error('Could not load invoice tracking'); }
  }
  useEffect(() => { void refresh(); }, []);

  async function exportAll() {
    setExporting(true);
    try {
      const [allRegistrations, allTracking] = await Promise.all([loadTicketRegistrations(), loadTracking()]);
      if (!allRegistrations.length) { toast.error('No ticket registrations to export'); return; }
      const blob = new Blob([registrationsCsv(allRegistrations, allTracking)], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `ticket-registrations-2026-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
    } catch { toast.error('Could not export ticket registrations'); }
    finally { setExporting(false); }
  }

  return <div className="p-6 text-summit-foreground">
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h3 className="text-2xl font-semibold">Ticket Registrations 2026</h3>
      <Button variant="summit" onClick={exportAll} disabled={exporting || !ready || !registrations.length}><Download />{exporting ? 'Exporting…' : 'Export spreadsheet (.csv)'}</Button>
    </div>
    {!ready && <div role="status" className="mb-4 text-summit-muted">{failed ? <><span>Invoice tracking could not be loaded. </span><Button variant="summit" size="sm" onClick={refresh}>Retry</Button></> : 'Loading invoice tracking…'}</div>}
    {registrations.length === 0 ? <p className="text-summit-muted text-center py-12">No ticket registrations yet.</p>
      : <div className="space-y-4">{registrations.map(r => <RegistrationCard key={r.id} registration={r} ready={ready}
          tracking={trackingByRegistration.get(r.id) ?? defaultTracking(r.id)}
          onSaved={saved => setTracking(current => [...current.filter(t => t.registration_id !== saved.registration_id), saved])} />)}</div>}
  </div>;
}