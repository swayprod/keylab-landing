"use client";

import Link from "next/link";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { LeadSuccess } from "./lead-success";
import { ProblemPicker } from "./problem-picker";
import { LEAD_FIELD_IDS, useLeadForm } from "./use-lead-form";

interface LeadFormProps {
  locale: Locale;
  t: Dictionary["lead"]["form"];
}

export function LeadForm({ locale, t }: LeadFormProps) {
  const reducedMotion = useReducedMotion();
  const form = useLeadForm();
  const sending = form.status === "sending";

  return (
    <div className="rounded-3xl border border-line bg-surface/80 p-4 backdrop-blur-xl sm:p-6 md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {form.status === "success" ? (
          <m.div key="success" {...fadeUp(reducedMotion)}>
            <LeadSuccess title={t.successTitle} text={t.successText} again={t.again} onReset={form.reset} />
          </m.div>
        ) : (
          <m.form key="form" noValidate onSubmit={form.submit} className="space-y-6" {...fadeUp(reducedMotion)}>
            <FormField
              id={LEAD_FIELD_IDS.name}
              label={t.name}
              placeholder={t.namePlaceholder}
              autoComplete="name"
              value={form.name}
              onChange={form.setName}
              error={form.errors.name ? t.errors.name : undefined}
            />
            <FormField
              id={LEAD_FIELD_IDS.contact}
              label={t.contact}
              placeholder={t.contactPlaceholder}
              autoComplete="tel"
              value={form.contact}
              onChange={form.setContact}
              error={form.errors.contact ? t.errors.contact : undefined}
            />
            <ProblemPicker legend={t.problems} options={t.problemOptions} value={form.problems} onChange={form.setProblems} />

            <Button type="submit" size="lg" withArrow={!sending} disabled={sending} className="w-full">
              {sending && <Loader2 aria-hidden="true" className="h-4 w-4 motion-safe:animate-spin" />}
              {sending ? t.sending : t.submit}
            </Button>

            <p role="status" className="text-sm text-muted">
              {form.status === "error" ? (
                <span className="text-danger">{t.errors.submit}</span>
              ) : (
                <>
                  {t.consent}{" "}
                  <Link href={localePath(locale, "/privacy")} className="text-fg underline decoration-line underline-offset-4 hover:decoration-fg">
                    {t.consentLink}
                  </Link>
                </>
              )}
            </p>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
