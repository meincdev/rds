'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const searchItems = [
  { group: 'Documentation', label: 'Introduction', path: '/introduction' },
  { group: 'Documentation', label: 'Getting Started', path: '/getting-started' },
  { group: 'Documentation', label: 'Principles', path: '/principles' },
  { group: 'Documentation', label: 'Guidelines', path: '/guidelines' },
  { group: 'Documentation', label: 'Changelog', path: '/changelog' },
  { group: 'Documentation', label: 'Contributing', path: '/contributing' },
  { group: 'Documentation', label: 'Templates', path: '/templates' },
  { group: 'Documentation', label: 'Patterns', path: '/patterns' },
  { group: 'Tokens', label: 'Colors', path: '/tokens/colors' },
  { group: 'Tokens', label: 'Typography', path: '/tokens/typography' },
  { group: 'Tokens', label: 'Spacing', path: '/tokens/spacing' },
  { group: 'Tokens', label: 'Shadows & Radius', path: '/tokens/shadows' },
  { group: 'Tokens', label: 'Motion', path: '/tokens/motion' },
  { group: 'UI Components', label: 'Accordion', path: '/elements/ui/accordion' },
  { group: 'UI Components', label: 'Alert', path: '/elements/ui/alert' },
  { group: 'UI Components', label: 'Alert Dialog', path: '/elements/ui/alert-dialog' },
  { group: 'UI Components', label: 'Aspect Ratio', path: '/elements/ui/aspect-ratio' },
  { group: 'UI Components', label: 'Avatar', path: '/elements/ui/avatar' },
  { group: 'UI Components', label: 'Badge', path: '/elements/ui/badge' },
  { group: 'UI Components', label: 'Breadcrumb', path: '/elements/ui/breadcrumb' },
  { group: 'UI Components', label: 'Button', path: '/elements/ui/button' },
  { group: 'UI Components', label: 'Calendar', path: '/elements/ui/calendar' },
  { group: 'UI Components', label: 'Card', path: '/elements/ui/card' },
  { group: 'UI Components', label: 'Carousel', path: '/elements/ui/carousel' },
  { group: 'UI Components', label: 'Checkbox', path: '/elements/ui/checkbox' },
  { group: 'UI Components', label: 'Collapsible', path: '/elements/ui/collapsible' },
  { group: 'UI Components', label: 'Command', path: '/elements/ui/command' },
  { group: 'UI Components', label: 'Context Menu', path: '/elements/ui/context-menu' },
  { group: 'UI Components', label: 'Dialog', path: '/elements/ui/dialog' },
  { group: 'UI Components', label: 'Drawer', path: '/elements/ui/drawer' },
  { group: 'UI Components', label: 'Dropdown Menu', path: '/elements/ui/dropdown-menu' },
  { group: 'UI Components', label: 'Form', path: '/elements/ui/form' },
  { group: 'UI Components', label: 'Hover Card', path: '/elements/ui/hover-card' },
  { group: 'UI Components', label: 'Input', path: '/elements/ui/input' },
  { group: 'UI Components', label: 'Input OTP', path: '/elements/ui/input-otp' },
  { group: 'UI Components', label: 'Label', path: '/elements/ui/label' },
  { group: 'UI Components', label: 'Menubar', path: '/elements/ui/menubar' },
  { group: 'UI Components', label: 'Navigation Menu', path: '/elements/ui/navigation-menu' },
  { group: 'UI Components', label: 'Pagination', path: '/elements/ui/pagination' },
  { group: 'UI Components', label: 'Popover', path: '/elements/ui/popover' },
  { group: 'UI Components', label: 'Progress', path: '/elements/ui/progress' },
  { group: 'UI Components', label: 'Radio Group', path: '/elements/ui/radio-group' },
  { group: 'UI Components', label: 'Resizable', path: '/elements/ui/resizable' },
  { group: 'UI Components', label: 'Scroll Area', path: '/elements/ui/scroll-area' },
  { group: 'UI Components', label: 'Select', path: '/elements/ui/select' },
  { group: 'UI Components', label: 'Separator', path: '/elements/ui/separator' },
  { group: 'UI Components', label: 'Sheet', path: '/elements/ui/sheet' },
  { group: 'UI Components', label: 'Skeleton', path: '/elements/ui/skeleton' },
  { group: 'UI Components', label: 'Slider', path: '/elements/ui/slider' },
  { group: 'UI Components', label: 'Sonner (Toast)', path: '/elements/ui/sonner' },
  { group: 'UI Components', label: 'Switch', path: '/elements/ui/switch' },
  { group: 'UI Components', label: 'Table', path: '/elements/ui/table' },
  { group: 'UI Components', label: 'Tabs', path: '/elements/ui/tabs' },
  { group: 'UI Components', label: 'Textarea', path: '/elements/ui/textarea' },
  { group: 'UI Components', label: 'Toggle', path: '/elements/ui/toggle' },
  { group: 'UI Components', label: 'Toggle Group', path: '/elements/ui/toggle-group' },
  { group: 'UI Components', label: 'Tooltip', path: '/elements/ui/tooltip' },
  { group: 'Media', label: 'Media Components', path: '/elements/media' },
  { group: 'AI', label: 'AI Components', path: '/elements/ai' },
  { group: 'Charts', label: 'Charts', path: '/elements/charts' },
]

export function DocsSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const filtered = query
    ? searchItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems

  const groups = filtered.reduce<Record<string, typeof searchItems>>(
    (acc, item) => {
      if (!acc[item.group]) acc[item.group] = []
      acc[item.group].push(item)
      return acc
    },
    {}
  )

  const handleSelect = (path: string) => {
    setOpen(false)
    setQuery('')
    router.push(path)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-between rounded-md border px-3 py-2 text-sm text-muted-foreground hover:bg-muted w-48"
      >
        Search docs...
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs sm:flex">
          <span className="text-xs">{'\u2318'}</span>K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2 rounded-lg border bg-background shadow-lg">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search docs..."
              className="w-full border-b bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <div className="max-h-[300px] overflow-y-auto p-2">
              {Object.keys(groups).length === 0 && (
                <p className="px-2 py-4 text-center text-sm text-muted-foreground">
                  No results found.
                </p>
              )}
              {Object.entries(groups).map(([group, items]) => (
                <div key={group}>
                  <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {group}
                  </p>
                  {items.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleSelect(item.path)}
                      className="w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
