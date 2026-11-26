/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { agendaDays } from './agenda2026';

test('Stanford reception starts at 5:45 PM immediately after the AI workshop', () => {
  const day = agendaDays.find(day => day.id === 'day-2');
  assert.ok(day);
  const index = day.sessions.findIndex(session => session.title === 'Workshop: AI for Research Admin');
  assert.ok(index >= 0);
  assert.equal(day.sessions[index].time, '4:45–5:45 PM');
  assert.equal(day.sessions[index + 1].title, 'Reception');
  assert.equal(day.sessions[index + 1].time, '5:45–6:45 PM');
});