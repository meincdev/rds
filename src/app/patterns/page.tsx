import type { Metadata } from 'next'
import { CodeBlock } from '@/app/components/code-block'

export const metadata: Metadata = {
  title: 'Patterns',
  description: 'Common UI patterns built from RDS components.',
}

export default function PatternsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Patterns</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Common UI patterns built from RDS components. Copy these directly into
          your project.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Responsive Dialog + Drawer</h2>
        <p className="text-sm text-muted-foreground">
          Show a Dialog on desktop and a Drawer on mobile using a media query
          hook.
        </p>
        <CodeBlock>{`const isDesktop = useMediaQuery("(min-width: 768px)")

if (isDesktop) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>...</DialogContent>
    </Dialog>
  )
}

return (
  <Drawer open={open} onOpenChange={setOpen}>
    <DrawerContent>...</DrawerContent>
  </Drawer>
)`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Combobox (Command + Popover)</h2>
        <p className="text-sm text-muted-foreground">
          Combine Command and Popover for a searchable dropdown.
        </p>
        <CodeBlock>{`<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button variant="outline" role="combobox" aria-expanded={open}>
      {value || "Select framework..."}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[200px] p-0">
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup>
          {frameworks.map((fw) => (
            <CommandItem key={fw.value} onSelect={() => { setValue(fw.value); setOpen(false) }}>
              {fw.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Date Picker (Calendar + Popover)</h2>
        <p className="text-sm text-muted-foreground">
          Combine Calendar and Popover for an inline date picker.
        </p>
        <CodeBlock>{`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      {date ? format(date, "PPP") : "Pick a date"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
  </PopoverContent>
</Popover>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Settings Panel (Switch Groups)</h2>
        <p className="text-sm text-muted-foreground">
          Group labeled switches for a settings page.
        </p>
        <CodeBlock>{`<div className="space-y-4">
  {settings.map((setting) => (
    <div key={setting.id} className="flex items-center justify-between rounded-lg border p-4">
      <div className="space-y-0.5">
        <Label htmlFor={setting.id}>{setting.label}</Label>
        <p className="text-sm text-muted-foreground">{setting.description}</p>
      </div>
      <Switch id={setting.id} checked={setting.checked} onCheckedChange={setting.onChange} />
    </div>
  ))}
</div>`}</CodeBlock>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Data Table with Selection</h2>
        <p className="text-sm text-muted-foreground">
          Combine Table with Checkbox for row selection.
        </p>
        <CodeBlock>{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <Checkbox checked={allSelected} onCheckedChange={toggleAll} />
      </TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.id}>
        <TableCell>
          <Checkbox checked={row.selected} onCheckedChange={() => toggle(row.id)} />
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell><Badge variant={row.status === "active" ? "default" : "secondary"}>{row.status}</Badge></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}</CodeBlock>
      </section>
    </div>
  )
}
