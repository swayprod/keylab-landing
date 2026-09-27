import type { ComponentType } from "react";
import type { BenefitKey } from "@/i18n/types";
import {
  LaunchIllustration,
  LeadsIllustration,
  SiteIllustration,
  TrafficIllustration,
  VisualIllustration,
} from "@/components/illustrations";

export const BENEFIT_ILLUSTRATIONS: Record<BenefitKey, ComponentType> = {
  site: SiteIllustration,
  visual: VisualIllustration,
  traffic: TrafficIllustration,
  leads: LeadsIllustration,
  launch: LaunchIllustration,
};
