import type { ComponentType } from "react";
import type { CaseKey } from "@/i18n/types";
import { DentaMockup } from "./denta-mockup";
import { FormaMockup } from "./forma-mockup";
import { GarageMockup } from "./garage-mockup";
import { ZernoMockup } from "./zerno-mockup";

export const CASE_MOCKUPS: Record<CaseKey, ComponentType> = {
  clinic: DentaMockup,
  retail: FormaMockup,
  service: GarageMockup,
  cafe: ZernoMockup,
};
