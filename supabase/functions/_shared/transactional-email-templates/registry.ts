/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  to?: string
}

import { template as speakerSuggestionAdmin } from './speaker-suggestion-admin.tsx'
import { template as partnerInquiryAdmin } from './partner-inquiry-admin.tsx'
import { template as contactMessageAdmin } from './contact-message-admin.tsx'
import { template as ticketRegistrationConfirmation } from './ticket-registration-confirmation.tsx'
import { template as ticketRegistrationAdmin } from './ticket-registration-admin.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'speaker-suggestion-admin': speakerSuggestionAdmin,
  'partner-inquiry-admin': partnerInquiryAdmin,
  'contact-message-admin': contactMessageAdmin,
  'ticket-registration-confirmation': ticketRegistrationConfirmation,
  'ticket-registration-admin': ticketRegistrationAdmin,
}
