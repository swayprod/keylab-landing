import type { Dictionary } from "../../types";

export const faq: Dictionary["faq"] = {
  title: "Frequently asked questions",
  asideTitle: "Didn't find an answer?",
  asideText: "Ask during the free audit — it takes 30 minutes and commits you to nothing.",
  items: [
    {
      id: "price",
      question: "How much do your services cost?",
      answer: "It depends on the task. After the audit you get a fixed estimate that won't grow along the way.",
    },
    {
      id: "timing",
      question: "What are the timelines?",
      answer: "A landing page takes from 2 weeks, a catalogue site from 4. Ads go live 3–5 days after approval.",
    },
    {
      id: "client",
      question: "What do you need from me?",
      answer: "One hour to get acquainted and access to your current resources. We take care of the rest, including copy.",
    },
    {
      id: "guarantee",
      question: "Do you give guarantees?",
      answer: "The contract fixes the timeline, scope and measurable targets: number of leads or cost per lead.",
    },
    {
      id: "partial",
      question: "Can I order only a website or only ads?",
      answer: "Yes. If a single service solves the problem, we'll take it. If not, we'll honestly say what's missing.",
    },
    {
      id: "remote",
      question: "Do you work with other cities?",
      answer: "Yes, we work remotely with clients across different countries. All meetings are online.",
    },
    {
      id: "after",
      question: "What happens after launch?",
      answer: "We stay in touch: run the ads, improve the website and send a monthly report in numbers.",
    },
  ],
};
