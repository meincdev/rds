"use client";

/**
 * RDS Form
 *
 * Form components built on react-hook-form.
 * Re-exports shadcn/ui Form with RDS naming.
 */

import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "../primitives/form";

export {
  useFormField as useRdsFormField,
  Form as RdsForm,
  FormItem as RdsFormItem,
  FormLabel as RdsFormLabel,
  FormControl as RdsFormControl,
  FormDescription as RdsFormDescription,
  FormMessage as RdsFormMessage,
  FormField as RdsFormField,
};
