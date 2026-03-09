"use client";

/**
 * RDS Chart
 *
 * Chart components built on Recharts.
 * Re-exports shadcn/ui Chart utilities with RDS naming.
 */

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  type ChartConfig,
} from "../primitives/chart";

export {
  ChartContainer as RdsChartContainer,
  ChartTooltip as RdsChartTooltip,
  ChartTooltipContent as RdsChartTooltipContent,
  ChartLegend as RdsChartLegend,
  ChartLegendContent as RdsChartLegendContent,
  ChartStyle as RdsChartStyle,
};

export type { ChartConfig as RdsChartConfig };
