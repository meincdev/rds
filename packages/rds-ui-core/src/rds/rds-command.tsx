"use client";

/**
 * RDS Command
 *
 * Command palette / search component built on cmdk.
 * Re-exports shadcn/ui Command with RDS naming.
 */

import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "../primitives/command";

export {
  Command as RdsCommand,
  CommandDialog as RdsCommandDialog,
  CommandInput as RdsCommandInput,
  CommandList as RdsCommandList,
  CommandEmpty as RdsCommandEmpty,
  CommandGroup as RdsCommandGroup,
  CommandItem as RdsCommandItem,
  CommandShortcut as RdsCommandShortcut,
  CommandSeparator as RdsCommandSeparator,
};
