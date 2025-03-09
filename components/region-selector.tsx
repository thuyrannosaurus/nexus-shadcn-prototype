"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Norwegian regions
const norwegianRegions = [
  { value: "oslo", label: "Oslo" },
  { value: "viken", label: "Viken" },
  { value: "innlandet", label: "Innlandet" },
  { value: "vestfold-telemark", label: "Vestfold og Telemark" },
  { value: "agder", label: "Agder" },
  { value: "rogaland", label: "Rogaland" },
  { value: "vestland", label: "Vestland" },
  { value: "more-romsdal", label: "Møre og Romsdal" },
  { value: "trondelag", label: "Trøndelag" },
  { value: "nordland", label: "Nordland" },
  { value: "troms-finnmark", label: "Troms og Finnmark" },
  { value: "svalbard", label: "Svalbard" },
]

interface RegionSelectorProps {
  value: string
  onChange: (value: string) => void
}

export function RegionSelector({ value, onChange }: RegionSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  
  // Filter regions based on search query
  const filteredRegions = React.useMemo(() => {
    if (!searchQuery) return norwegianRegions
    
    return norwegianRegions.filter((region) => 
      region.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? norwegianRegions.find((region) => region.value === value)?.label
            : "Select region..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <div className="flex flex-col">
          <div className="flex items-center border-b px-3">
            <input
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {filteredRegions.length === 0 ? (
              <div className="py-6 text-center text-sm">No region found.</div>
            ) : (
              <div className="overflow-hidden p-1 text-foreground">
                {filteredRegions.map((region) => (
                  <div
                    key={region.value}
                    className={cn(
                      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                      value === region.value && "bg-accent text-accent-foreground"
                    )}
                    onClick={() => {
                      onChange(region.value === value ? "" : region.value)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === region.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {region.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
} 