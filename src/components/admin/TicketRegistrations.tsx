import { useEffect, useMemo, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { defaultTracking, registrationsCsv, universityOptions, filterRegistrations, registrationSummary, type TicketRegistration, type InvoiceTracking, type InvoiceStatus } from '@/lib/ticketInvoices';
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

function RegistrationCard({ registration: r, tracking, ready, onSaved, onDeleted }: { registration: TicketRegistration; tracking: InvoiceTracking; ready: boolean; onSaved: (tracking: InvoiceTracking) => void; onDeleted: (id: string) => void }) {
  const [draft, setDraft] = useState(tracking);
  const [saving, setSaving] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const saved = useRef(tracking);
  useEffect(() => { saved.current = tracking; setDraft(tracking); }, [tracking]);
  const holders = Array.isArray(r.holders) ? r.holders : [];

  async function persist(next: InvoiceTracking) {
    setDraft(next);
    setSaving(true);
    try {
      const { data, error } = await supabase.from('ticket_invoice_tracking').upsert({ ...next, individual_statuses: next.individual_statuses as unknown as Json }).select().single();
      if (error) throw error;
      const confirmed: InvoiceTracking = { ...data, invoice_mode: data.invoice_mode as InvoiceTracking['invoice_mode'], individual_statuses: data.individual_statuses as unknown as InvoiceTracking['individual_statuses'] };
      saved.current = confirmed;
      setDraft(confirmed);
      onSaved(confirmed);
    } catch {
      setDraft(saved.current);
      toast.error('Could not save invoice tracking. Your change was not saved.');
    } finally { setSaving(false); }
  }

  async function remove() {
    setDeleting(true);
    try {
      const { error } = await supabase.from('ticket_registrations').delete().eq('id', r.id);
      if (error) throw error;
      onDeleted(r.id);
      toast.success('Registration deleted');
    } catch {
      setConfirmingDelete(false);
      toast.error('Could not delete this registration.');
    } finally { setDeleting(false); }
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
            onClick={() => persist({ ...draft, invoice_mode: mode })}>{mode === 'group' ? 'Group invoice' : 'Individual invoices'}</Button>)}
        </div>
        <span role="status" aria-live="polite" className="text-xs text-summit-muted">{saving ? 'Saving…' : 'Changes save automatically'}</span>
      </div>
      {draft.invoice_mode === 'group'
        ? <StatusFields label="Group invoice" status={{ issued: draft.group_issued, paid: draft.group_paid }} disabled={!ready || saving}
            onChange={status => persist({ ...draft, group_issued: status.issued, group_paid: status.paid })} />
        : holders.map((h, i) => <StatusFields key={i} label={`${i + 1}. ${h.full_name}`} status={draft.individual_statuses[String(i)] ?? { issued: false, paid: false }} disabled={!ready || saving}
            onChange={status => persist({ ...draft, individual_statuses: { ...draft.individual_statuses, [String(i)]: status } })} />)}
      <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
        {confirmingDelete
          ? <>
              <span className="text-xs text-summit-muted">Delete this registration and its invoice tracking? This cannot be undone.</span>
              <Button size="sm" variant="destructive" disabled={deleting} onClick={remove}>{deleting ? 'Deleting…' : 'Yes, delete'}</Button>
              <Button size="sm" variant="summit" disabled={deleting} onClick={() => setConfirmingDelete(false)}>Cancel</Button>
            </>
          : <Button size="sm" variant="summit" disabled={!ready || saving} onClick={() => setConfirmingDelete(true)}>Delete</Button>}
      </div>
    </div>
  </article>;
}

export function TicketRegistrations({ registrations, onDeleted }: { registrations: TicketRegistration[]; onDeleted: (id: string) => void }) {
  const [tracking, setTracking] = useState<InvoiceTracking[]>([]);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [ticketType, setTicketType] = useState('all');
  const [university, setUniversity] = useState('all');
  const universities = useMemo(() => universityOptions(registrations), [registrations]);
  const filtered = useMemo(() => filterRegistrations(registrations, ticketType, university), [registrations, ticketType, university]);
  const summary = useMemo(() => registrationSummary(filtered, tracking, university), [filtered, tracking, university]);
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
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="w-full sm:w-44">
        <label className="block text-sm text-summit-muted mb-2" id="ticket-type-label">Ticket type</label>
        <Select value={ticketType} onValueChange={value => { setTicketType(value); if (value === 'business') setUniversity('all'); }}>
          <SelectTrigger aria-labelledby="ticket-type-label" className="bg-summit-foreground/5 border-summit-foreground/20"><SelectValue /></SelectTrigger>
          <SelectContent><SelectItem value="all">All ticket types</SelectItem><SelectItem value="university">University</SelectItem><SelectItem value="business">Business</SelectItem></SelectContent>
        </Select>
      </div>
      <div className="min-w-0 w-full sm:flex-1">
        <label className="block text-sm text-summit-muted mb-2" id="university-label">University / institution</label>
        <Select value={university} onValueChange={value => { setUniversity(value); if (value !== 'all') setTicketType('university'); }}>
          <SelectTrigger aria-labelledby="university-label" className="bg-summit-foreground/5 border-summit-foreground/20 [&>span]:truncate"><SelectValue /></SelectTrigger>
          <SelectContent className="max-w-[min(600px,90vw)]"><SelectItem value="all">All universities / institutions</SelectItem>{universities.map(name => <SelectItem key={name} value={name} className="break-words">{name}</SelectItem>)}</SelectContent>
        </Select>
      </div>
    </div>
    <dl aria-label="Registration summary" className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-summit-foreground/15 py-5 mb-6">
      {([['Registrations', summary.registrations], ['Tickets', summary.tickets]] as const).map(([label, count]) =>
        <div key={label}><dt className="text-sm text-summit-muted">{label}</dt><dd className="text-2xl font-semibold mt-1">{count}</dd></div>)}
    </dl>
    {!ready && <div role="status" className="mb-4 text-summit-muted">{failed ? <><span>Invoice tracking could not be loaded. </span><Button variant="summit" size="sm" onClick={refresh}>Retry</Button></> : 'Loading invoice tracking…'}</div>}
    {registrations.length === 0 ? <p className="text-summit-muted text-center py-12">No ticket registrations yet.</p>
      : filtered.length === 0 ? <p className="text-summit-muted text-center py-12">No registrations match these filters.</p>
      : <div className="space-y-4">{filtered.map(r => <RegistrationCard key={r.id} registration={r} ready={ready}
          tracking={trackingByRegistration.get(r.id) ?? defaultTracking(r.id)}
          onSaved={saved => setTracking(current => [...current.filter(t => t.registration_id !== saved.registration_id), saved])}
          onDeleted={onDeleted} />)}</div>}
  </div>;
}