"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../primitives/alert-dialog";
import { buttonVariants } from "../primitives/button";
import { cn } from "../lib/utils";
import { Loader2 } from "lucide-react";

export interface RdsConfirmDialogProps {
  /** Whether the dialog is open */
  open: boolean;
  /** Callback when open state changes */
  onOpenChange: (open: boolean) => void;
  /** Dialog title */
  title: string;
  /** Dialog description/message */
  description: string;
  /** Text for the confirm button */
  confirmText?: string;
  /** Text for the cancel button */
  cancelText?: string;
  /** Variant for the confirm button */
  variant?: "default" | "destructive";
  /** Whether the action is loading */
  loading?: boolean;
  /** Callback when user confirms - can be async */
  onConfirm: () => void | Promise<void>;
  /** Callback when user cancels */
  onCancel?: () => void;
}

/**
 * rds Confirmation Dialog
 *
 * A reusable confirmation dialog for destructive or important actions.
 * Supports async confirm handlers with loading state.
 *
 * @example
 * ```tsx
 * <RdsConfirmDialog
 *   open={showDeleteDialog}
 *   onOpenChange={setShowDeleteDialog}
 *   title="Delete file"
 *   description="Are you sure you want to delete this file? This action cannot be undone."
 *   confirmText="Delete"
 *   variant="destructive"
 *   onConfirm={handleDelete}
 * />
 * ```
 */
export function RdsConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default",
  loading = false,
  onConfirm,
  onCancel,
}: RdsConfirmDialogProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await onConfirm();
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  const isDisabled = loading || isLoading;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel} disabled={isDisabled}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={isDisabled}
            className={cn(
              variant === "destructive" &&
                buttonVariants({ variant: "destructive" })
            )}
          >
            {isDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// =============================================================================
// useConfirmDialog Hook
// =============================================================================

export interface UseConfirmDialogOptions {
  /** Default title for the dialog */
  defaultTitle?: string;
  /** Default description for the dialog */
  defaultDescription?: string;
  /** Default confirm button text */
  defaultConfirmText?: string;
  /** Default cancel button text */
  defaultCancelText?: string;
  /** Default variant */
  defaultVariant?: "default" | "destructive";
}

export interface ConfirmDialogState {
  open: boolean;
  title: string;
  description: string;
  confirmText: string;
  cancelText: string;
  variant: "default" | "destructive";
  itemName?: string;
  onConfirm: () => void | Promise<void>;
}

/**
 * Hook for managing confirmation dialog state
 *
 * @example
 * ```tsx
 * const { dialogProps, confirm } = useConfirmDialog({
 *   defaultTitle: "Delete item",
 *   defaultVariant: "destructive",
 * });
 *
 * const handleDelete = async (item: Item) => {
 *   const confirmed = await confirm({
 *     description: `Are you sure you want to delete "${item.name}"?`,
 *     itemName: item.name,
 *   });
 *
 *   if (confirmed) {
 *     await deleteItem(item.id);
 *     toast.success(`"${item.name}" deleted successfully`);
 *   }
 * };
 *
 * return (
 *   <>
 *     <Button onClick={() => handleDelete(item)}>Delete</Button>
 *     <RdsConfirmDialog {...dialogProps} />
 *   </>
 * );
 * ```
 */
export function useConfirmDialog(options: UseConfirmDialogOptions = {}) {
  const {
    defaultTitle = "Confirm",
    defaultDescription = "Are you sure you want to proceed?",
    defaultConfirmText = "Confirm",
    defaultCancelText = "Cancel",
    defaultVariant = "default",
  } = options;

  const [state, setState] = React.useState<ConfirmDialogState>({
    open: false,
    title: defaultTitle,
    description: defaultDescription,
    confirmText: defaultConfirmText,
    cancelText: defaultCancelText,
    variant: defaultVariant,
    onConfirm: () => {},
  });

  const resolveRef = React.useRef<((value: boolean) => void) | null>(null);

  const confirm = React.useCallback(
    (
      overrides: Partial<Omit<ConfirmDialogState, "open" | "onConfirm">> = {}
    ): Promise<boolean> => {
      return new Promise((resolve) => {
        resolveRef.current = resolve;
        setState((prev) => ({
          ...prev,
          title: overrides.title ?? defaultTitle,
          description: overrides.description ?? defaultDescription,
          confirmText: overrides.confirmText ?? defaultConfirmText,
          cancelText: overrides.cancelText ?? defaultCancelText,
          variant: overrides.variant ?? defaultVariant,
          itemName: overrides.itemName,
          open: true,
          onConfirm: () => {
            resolve(true);
            setState((p) => ({ ...p, open: false }));
          },
        }));
      });
    },
    [defaultTitle, defaultDescription, defaultConfirmText, defaultCancelText, defaultVariant]
  );

  const handleOpenChange = React.useCallback((open: boolean) => {
    if (!open) {
      resolveRef.current?.(false);
      resolveRef.current = null;
    }
    setState((prev) => ({ ...prev, open }));
  }, []);

  const dialogProps: RdsConfirmDialogProps = {
    open: state.open,
    onOpenChange: handleOpenChange,
    title: state.title,
    description: state.description,
    confirmText: state.confirmText,
    cancelText: state.cancelText,
    variant: state.variant,
    onConfirm: state.onConfirm,
  };

  return {
    dialogProps,
    confirm,
    itemName: state.itemName,
  };
}
