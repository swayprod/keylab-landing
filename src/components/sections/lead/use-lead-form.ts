"use client";

import { useState, type FormEvent } from "react";
import type { ProblemKey } from "@/i18n/types";
import { submitLead, validateLead, type LeadErrors, type LeadField } from "@/lib/lead";

export type LeadStatus = "idle" | "sending" | "success" | "error";

export const LEAD_FIELD_IDS: Record<LeadField, string> = {
  name: "lead-name",
  contact: "lead-contact",
};

const FIELD_ORDER: LeadField[] = ["name", "contact"];

export function useLeadForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [problems, setProblems] = useState<ProblemKey[]>([]);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<LeadStatus>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = { name, contact, problems };
    const nextErrors = validateLead(payload);
    setErrors(nextErrors);
    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(LEAD_FIELD_IDS[firstInvalid])?.focus();
      return;
    }
    setStatus("sending");
    try {
      await submitLead(payload);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setName("");
    setContact("");
    setProblems([]);
    setStatus("idle");
  };

  return { name, setName, contact, setContact, problems, setProblems, errors, status, submit, reset };
}
