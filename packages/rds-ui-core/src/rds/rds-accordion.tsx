"use client";

/**
 * RDS Accordion
 *
 * Collapsible content sections for organizing information.
 * Re-exports shadcn/ui Accordion with RDS naming.
 */

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../primitives/accordion";

export {
  Accordion as RdsAccordion,
  AccordionItem as RdsAccordionItem,
  AccordionTrigger as RdsAccordionTrigger,
  AccordionContent as RdsAccordionContent,
};
