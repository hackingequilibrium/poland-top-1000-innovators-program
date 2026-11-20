/// <reference types="node" />
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { defaultTracking, holderStatus, registrationsCsv, spreadsheetCell, filterRegistrations, universityOptions, registrationSummary, type TicketRegistration } from './ticketInvoices';

const registration: TicketRegistration = {
  id: 'reg-1', ticket_type: 'university', quantity: 2, contact_name: 'Agata', contact_email: 'contact@example.com',
  contact_phone: '+48123456789', country: 'Poland', billing_org: 'University', billing_address: 'Street, Warsaw',
  tax_id: null, discount_codes: 'CODE1, CODE2', notes: 'Invoice notes', created_at: '2026-11-20T22:04:00Z',
  holders: [{ full_name: 'Łukasz', email: 'one@example.com', position: 'Professor', organization: 'University' },
    { full_name: 'Anna', email: 'two@example.com', position: 'Researcher', organization: 'University' }],
};

describe('ticket invoice rules', () => {
  test('university filter matches holder institutions and excludes business tickets', () => {
    const other = { ...registration, id: 'other', ticket_type: 'business' };
    assert.deepEqual(filterRegistrations([registration, other], 'all', ' university ').map(r => r.id), ['reg-1']);
    assert.deepEqual(universityOptions([registration, other]), ['University']);
    assert.equal(filterRegistrations([registration, other], 'business', 'all').length, 1);
  });
  test('summary counts a group invoice once and individual invoices per holder', () => {
    const other = { ...registration, id: 'other' };
    const statuses = [{ ...defaultTracking('reg-1'), group_issued: true, group_paid: true },
      { ...defaultTracking('other'), invoice_mode: 'individual' as const, individual_statuses: { '0': { issued: true, paid: false } } }];
    assert.deepEqual(registrationSummary([registration, other], statuses), { registrations: 2, tickets: 4, invoices: 3, issued: 2, paid: 1 });
  });
  test('university summary only counts matching holders and their individual invoices', () => {
    const mixed = { ...registration, holders: [registration.holders[0], { ...registration.holders[1], organization: 'Other University' }] };
    const t = { ...defaultTracking('reg-1'), invoice_mode: 'individual' as const, individual_statuses: { '0': { issued: true, paid: true }, '1': { issued: true, paid: true } } };
    assert.deepEqual(registrationSummary([mixed], [t], 'University'), { registrations: 1, tickets: 1, invoices: 1, issued: 1, paid: 1 });
  });
  test('group issued and paid status applies to every holder', () => {
    const t = { ...defaultTracking('reg-1'), group_issued: true, group_paid: true };
    assert.deepEqual(holderStatus(t, 0), { issued: true, paid: true });
    assert.deepEqual(holderStatus(t, 1), { issued: true, paid: true });
  });
  test('individual invoices have independent issued and paid statuses', () => {
    const t = { ...defaultTracking('reg-1'), invoice_mode: 'individual' as const, individual_statuses: { '0': { issued: true, paid: true }, '1': { issued: true, paid: false } } };
    assert.deepEqual(holderStatus(t, 0), { issued: true, paid: true });
    assert.deepEqual(holderStatus(t, 1), { issued: true, paid: false });
  });
  test('exports every registration, holder, billing details and invoice status', () => {
    const t = { ...defaultTracking('reg-1'), invoice_mode: 'individual' as const, individual_statuses: { '0': { issued: true, paid: true } } };
    const csv = registrationsCsv([registration, { ...registration, id: 'reg-2' }], [t]);
    assert.equal(csv.split('\r\n').length, 5);
    assert.ok(csv.includes('"Łukasz","one@example.com"'));
    assert.ok(csv.includes('"Street, Warsaw"'));
    assert.ok(csv.includes('"CODE1, CODE2"'));
    assert.ok(csv.includes('"reg-1/holder-1","Yes","Yes"'));
    assert.ok(csv.includes('"reg-1/holder-2","No","No"'));
    assert.ok(csv.includes('"reg-2/group","No","No"'));
  });
  test('spreadsheet export escapes quotes and blocks formula injection', () => {
    assert.equal(spreadsheetCell('=HYPERLINK("bad")'), '"\'=HYPERLINK(""bad"")"');
    assert.equal(spreadsheetCell('  +123'), '"\'  +123"');
    assert.equal(spreadsheetCell('Łukasz'), '"Łukasz"');
  });
});