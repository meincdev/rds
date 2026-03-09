"use client";

import * as React from "react";

export interface RdsAiPromptProps {
  /** Placeholder text */
  placeholder?: string;
  /** Whether input is disabled */
  disabled?: boolean;
  /** Whether AI is generating */
  isGenerating?: boolean;
  /** Callback when prompt is submitted */
  onSubmit?: (prompt: string) => void;
  /** Optional suggested prompts */
  suggestions?: string[];
  /** Callback when suggestion is clicked */
  onSuggestionClick?: (suggestion: string) => void;
}

/**
 * RDS AI Prompt Component (stub)
 *
 * TODO: This is a placeholder. Will support multi-line input,
 * file attachments, and voice input.
 */
export function RdsAiPrompt({
  placeholder = "What would you like to know?",
  disabled = false,
  isGenerating = false,
  onSubmit,
  suggestions = [],
  onSuggestionClick,
}: RdsAiPromptProps) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && onSubmit) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="space-y-3">
      {/* Suggestions */}
      {suggestions.length > 0 && !value && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick?.(suggestion)}
              className="px-3 py-1.5 rounded-full border text-xs hover:bg-muted transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled || isGenerating}
            rows={1}
            className="w-full rounded-lg border bg-background px-4 py-3 pr-12 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            disabled={!value.trim() || disabled || isGenerating}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50"
          >
            {isGenerating ? (
              <span className="animate-spin text-xs">◌</span>
            ) : (
              <span className="text-xs">↑</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
