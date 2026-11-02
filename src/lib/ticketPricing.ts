export type TicketType = "university" | "business";

export const TICKET_PRICES: Record<TicketType, number> = {
  university: 4499,
  business: 6499,
};

export const TICKET_LABELS: Record<TicketType, string> = {
  university: "University",
  business: "Business",
};

export const MAX_TICKETS = 10;

export const formatUsd = (n: number) => n.toLocaleString("en-US");

export const ticketTotal = (type: TicketType, quantity: number) =>
  TICKET_PRICES[type] * quantity;
