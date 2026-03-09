"use client";

/**
 * RDS Pagination
 *
 * Pagination controls for data lists.
 * Re-exports shadcn/ui Pagination with RDS naming.
 */

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../primitives/pagination";

export {
  Pagination as RdsPagination,
  PaginationContent as RdsPaginationContent,
  PaginationEllipsis as RdsPaginationEllipsis,
  PaginationItem as RdsPaginationItem,
  PaginationLink as RdsPaginationLink,
  PaginationNext as RdsPaginationNext,
  PaginationPrevious as RdsPaginationPrevious,
};
