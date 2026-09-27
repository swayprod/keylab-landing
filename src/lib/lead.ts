import type { ProblemKey } from "@/i18n/types";

export interface LeadPayload {
  name: string;
  contact: string;
  problems: ProblemKey[];
}

export type LeadField = "name" | "contact";
export type LeadErrors = Partial<Record<LeadField, true>>;

const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
const TELEGRAM_PATTERN = /^@?[a-zA-Z0-9_]{5,32}$/;
const MOCK_DELAY_MS = 1200;

export function validateLead({ name, contact }: LeadPayload): LeadErrors {
  const errors: LeadErrors = {};
  if (name.trim().length < 2) errors.name = true;
  const value = contact.trim();
  if (!PHONE_PATTERN.test(value) && !TELEGRAM_PATTERN.test(value)) errors.contact = true;
  return errors;
}

export async function submitLead(payload: LeadPayload): Promise<LeadPayload> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
  return payload;
}
