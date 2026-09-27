import type { Dictionary } from "../../types";

export const lead: Dictionary["lead"] = {
  title: "We'll audit your business in 24 hours",
  subtitle: "We'll show where you lose clients and offer a growth plan. Free and with no commitment.",
  perks: ["Website and ads audit", "Prioritised growth plan", "Estimate and timeline"],
  form: {
    name: "Name",
    namePlaceholder: "How should we call you",
    contact: "Phone or Telegram",
    contactPlaceholder: "+1 555 000-0000 or @username",
    problems: "What isn't working now",
    problemOptions: { site: "Website", visual: "Visuals", traffic: "Traffic", all: "Everything" },
    submit: "Get a free audit",
    sending: "Sending…",
    consent: "By clicking the button, you agree to the",
    consentLink: "privacy policy",
    errors: {
      name: "Enter your name",
      contact: "Enter a phone number or Telegram username",
      submit: "Couldn't send the request. Please try again.",
    },
    successTitle: "This is a demo form",
    successText: "This site is a portfolio concept, so requests go nowhere. Want one like it for your business? Message the author:",
    again: "Send another one",
  },
};
