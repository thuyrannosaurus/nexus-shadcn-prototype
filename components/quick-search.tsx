"use client"

import * as React from "react"
import { Search, User, Building2, Clock, File } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Mock data for recent items
const recentUsers = [
  { id: "1", name: "Anne Drager", type: "Private" },
  { id: "2", name: "Tomas Bruhn", type: "Private" },
  { id: "3", name: "Thomas Indrias", type: "Private" },
]

const recentCompanies = [
  { id: "1", name: "Fjordkloden Helse", type: "Company" },
  { id: "2", name: "NMG G Huset", type: "Company" },
]

const recentItems = [
  { id: "1", title: "Nintendo Game Boy Classic", type: "Listing" },
  { id: "2", title: "Tiger Electronics Handheld Game", type: "Listing" },
  { id: "3", title: "Email Log", type: "Page" },
]

export function QuickSearch() {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const router = useRouter()

  // Only run on client side
  React.useEffect(() => {
    setMounted(true)
    
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Show toast when dialog opens with a slight delay
  React.useEffect(() => {
    if (open && mounted) {
      // Add a slight delay to show the toast after the dialog is fully open
      const timeoutId = setTimeout(() => {
        toast("🚀 Pro tip: Use ⌘K to open this anytime!", {
          duration: 3000,
        })
      }, 500) // 500ms delay
      
      return () => clearTimeout(timeoutId)
    }
  }, [open, mounted])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              className="relative h-9 w-60 justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
              onClick={() => setOpen(true)}
              aria-label="Quick search"
            >
              <span className="inline-flex">
                <Search className="mr-2 h-4 w-4" />
                Instant search...
              </span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Search (⌘K)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      {/* Only render the CommandDialog on the client side */}
      {mounted && (
        <CommandDialog open={open} onOpenChange={handleOpenChange}>
          <CommandInput placeholder="Quick search for User ID, AdID, Name etc..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Recent Users">
              {recentUsers.map((user) => (
                <CommandItem
                  key={user.id}
                  onSelect={() => runCommand(() => router.push(`/users/${user.id}`))}
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>{user.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{user.type}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent Companies">
              {recentCompanies.map((company) => (
                <CommandItem
                  key={company.id}
                  onSelect={() => runCommand(() => router.push(`/organizations/${company.id}`))}
                >
                  <Building2 className="mr-2 h-4 w-4" />
                  <span>{company.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{company.type}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent Items">
              {recentItems.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => runCommand(() => router.push(`/listings/${item.id}`))}
                >
                  {item.type === "Page" ? (
                    <File className="mr-2 h-4 w-4" />
                  ) : (
                    <Clock className="mr-2 h-4 w-4" />
                  )}
                  <span>{item.title}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{item.type}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      )}
    </>
  )
} 