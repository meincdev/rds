/**
 * =============================================================================
 * rds Calendar
 * =============================================================================
 *
 * Full-page calendar component for displaying events in a month view.
 * For inline date pickers, use shadcn's Calendar component directly.
 *
 * Pattern: shadcn > rds > melabel
 * - Inline/date picker: Use shadcn Calendar directly
 * - Full-page view: Use RdsCalendarPage (this component)
 *
 * Usage:
 *   import { RdsCalendarPage } from "@/components/rds";
 *
 *   <RdsCalendarPage
 *     events={events}
 *     onDayClick={(date, events) => console.log(date, events)}
 *     onEventClick={(event) => router.push(`/events/${event.id}`)}
 *   />
 */

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "../primitives/button";

// =============================================================================
// RdsCalendarPage - Full month view for page-level displays
// =============================================================================

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  color?: string;
  allDay?: boolean;
}

export interface RdsCalendarPageProps {
  /** Events to display on the calendar */
  events?: CalendarEvent[];
  /** Current month being displayed */
  month?: Date;
  /** Called when month changes */
  onMonthChange?: (date: Date) => void;
  /** Called when a day is clicked */
  onDayClick?: (date: Date, events: CalendarEvent[]) => void;
  /** Called when an event is clicked */
  onEventClick?: (event: CalendarEvent, e: React.MouseEvent) => void;
  /** Max events to show per day before "+N more" */
  maxEventsPerDay?: number;
  /** Custom class name */
  className?: string;
  /** Loading state */
  loading?: boolean;
  /** Whether week starts on Monday (default: Sunday) */
  weekStartsOnMonday?: boolean;
  /** Show navigation controls */
  showNavigation?: boolean;
  /** Additional content to render in the header (e.g., view toggles) */
  headerActions?: React.ReactNode;
}

/**
 * Full-page calendar view with event display
 */
function RdsCalendarPage({
  events = [],
  month: controlledMonth,
  onMonthChange,
  onDayClick,
  onEventClick,
  maxEventsPerDay = 3,
  className,
  loading = false,
  weekStartsOnMonday = false,
  showNavigation = true,
  headerActions,
}: RdsCalendarPageProps) {
  const [internalMonth, setInternalMonth] = React.useState(new Date());
  const month = controlledMonth ?? internalMonth;

  const handleMonthChange = React.useCallback(
    (newMonth: Date) => {
      if (onMonthChange) {
        onMonthChange(newMonth);
      } else {
        setInternalMonth(newMonth);
      }
    },
    [onMonthChange]
  );

  // Calendar helpers
  const getDaysInMonth = React.useCallback((date: Date) => {
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month: monthIndex };
  }, []);

  const getEventsForDay = React.useCallback(
    (day: number) => {
      const date = new Date(month.getFullYear(), month.getMonth(), day);
      const dateStr = date.toISOString().split("T")[0];

      return events.filter((event) => {
        const eventStart = event.date.toISOString().split("T")[0];
        const eventEnd = event.endDate
          ? event.endDate.toISOString().split("T")[0]
          : eventStart;
        return dateStr >= eventStart && dateStr <= eventEnd;
      });
    },
    [events, month]
  );

  const navigateMonth = React.useCallback(
    (direction: "prev" | "next") => {
      const newDate = new Date(month);
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      handleMonthChange(newDate);
    },
    [month, handleMonthChange]
  );

  const goToToday = React.useCallback(() => {
    handleMonthChange(new Date());
  }, [handleMonthChange]);

  const { daysInMonth, startingDayOfWeek, year, month: monthIndex } =
    getDaysInMonth(month);
  const monthName = new Date(year, monthIndex).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekDays = weekStartsOnMonday
    ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Adjust starting day if week starts on Monday
  const adjustedStartingDay = weekStartsOnMonday
    ? (startingDayOfWeek + 6) % 7
    : startingDayOfWeek;

  if (loading) {
    return (
      <div className={cn("space-y-4", className)}>
        {showNavigation && (
          <div className="flex justify-between items-center">
            <div className="h-10 w-32 bg-muted animate-pulse rounded" />
            <div className="h-8 w-40 bg-muted animate-pulse rounded" />
            <div className="h-10 w-32 bg-muted animate-pulse rounded" />
          </div>
        )}
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-7 bg-muted">
            {weekDays.map((day) => (
              <div
                key={day}
                className="p-2 text-center text-sm font-semibold border-r last:border-r-0 h-10"
              />
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="border-r border-b min-h-24 p-2 bg-muted/20 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Navigation */}
      {showNavigation && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Navigation button group */}
          <div className="inline-flex rounded-md border border-input">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth("prev")}
              className="h-8 px-2 rounded-none rounded-l-md border-r border-input"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToToday}
              className="h-8 px-3 rounded-none border-r border-input"
            >
              Today
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth("next")}
              className="h-8 px-2 rounded-none rounded-r-md"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <h2 className="text-xl font-semibold">{monthName}</h2>

          {/* Slot for additional controls (view toggles, etc.) */}
          <div className="min-w-[120px] flex justify-end">{headerActions}</div>
        </div>
      )}

      {/* Calendar Grid */}
      <div className="border rounded-lg overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 bg-muted">
          {weekDays.map((day) => (
            <div
              key={day}
              className="p-2 text-center text-sm font-semibold border-r last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: adjustedStartingDay }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="border-r border-b bg-muted/50 min-h-24"
            />
          ))}

          {/* Days of month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayEvents = getEventsForDay(day);
            const today = new Date();
            const isToday =
              day === today.getDate() &&
              monthIndex === today.getMonth() &&
              year === today.getFullYear();

            return (
              <div
                key={day}
                className={cn(
                  "border-r border-b last:border-r-0 min-h-24 p-2 hover:bg-muted/50 transition-colors",
                  onDayClick && "cursor-pointer"
                )}
                onClick={() => {
                  if (onDayClick) {
                    const clickedDate = new Date(year, monthIndex, day);
                    onDayClick(clickedDate, dayEvents);
                  }
                }}
              >
                <div
                  className={cn(
                    "text-sm font-mono font-medium mb-1",
                    isToday &&
                      "bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center"
                  )}
                >
                  {day}
                </div>
                <div className="space-y-1">
                  {dayEvents.slice(0, maxEventsPerDay).map((event) => (
                    <div
                      key={event.id}
                      className="text-xs p-1 rounded truncate hover:opacity-80 transition-opacity cursor-pointer"
                      style={{
                        backgroundColor: event.color || "#3b82f6",
                        color: "white",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick?.(event, e);
                      }}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > maxEventsPerDay && (
                    <div className="text-xs text-muted-foreground px-1">
                      +{dayEvents.length - maxEventsPerDay} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
RdsCalendarPage.displayName = "RdsCalendarPage";

export { RdsCalendarPage };
