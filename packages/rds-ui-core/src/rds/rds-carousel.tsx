"use client";

/**
 * RDS Carousel
 *
 * Image and content carousel built on Embla Carousel.
 * Re-exports shadcn/ui Carousel with RDS naming.
 */

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../primitives/carousel";

export {
  Carousel as RdsCarousel,
  CarouselContent as RdsCarouselContent,
  CarouselItem as RdsCarouselItem,
  CarouselPrevious as RdsCarouselPrevious,
  CarouselNext as RdsCarouselNext,
};

export type { CarouselApi as RdsCarouselApi };
