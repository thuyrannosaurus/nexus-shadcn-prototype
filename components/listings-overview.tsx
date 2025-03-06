"use client"

import * as React from "react"
import { CalendarIcon, ChevronDown, CircleHelp, Search, X, FileIcon, DownloadIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function ListingsOverview() {
  const [searchQuery, setSearchQuery] = React.useState("Teenage Engineering")
  const [isOpen, setIsOpen] = React.useState(false)
  const [dateFrom, setDateFrom] = React.useState<Date | undefined>(undefined)
  const [dateTo, setDateTo] = React.useState<Date | undefined>(undefined)
  const [activeTab, setActiveTab] = React.useState("all")
  const [sortOption, setSortOption] = React.useState("newest")

  const clearFilters = () => {
    setSearchQuery("")
    setDateFrom(undefined)
    setDateTo(undefined)
  }

  return (
    <TooltipProvider>
      <div className="w-full">
        <Card className="mb-6 w-full">
          <CardHeader>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-4">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Label htmlFor="search" className="text-sm font-medium">
                    Search
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleHelp className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Search for listings by name or description</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="relative">
                  <Input
                    id="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10 bg-background"
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                      onClick={() => setSearchQuery("")}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Clear search</span>
                    </Button>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Label className="text-sm font-medium">Modified date</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleHelp className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter listings by modification date</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                  <DatePickerWithRange date={dateFrom} setDate={setDateFrom} />
                  <span className="text-muted-foreground">-</span>
                  <DatePickerWithRange date={dateTo} setDate={setDateTo} />
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <CardTitle className="text-lg mb-4">Filters</CardTitle>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleHelp className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter listings by email address</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input id="email" className="bg-background" />
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Label className="text-sm font-medium">Ad types</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleHelp className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter by advertisement type</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select ad type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="display">Display</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="native">Native</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Label className="text-sm font-medium">Ad types</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleHelp className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter by advertisement type</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select ad type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="display">Display</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="native">Native</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6">
              <CollapsibleContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Advertiser type</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select advertiser type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agency">Agency</SelectItem>
                        <SelectItem value="direct">Direct</SelectItem>
                        <SelectItem value="partner">Partner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">Moderation status</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">Region</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="na">North America</SelectItem>
                        <SelectItem value="eu">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-6">
            <div>
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="inline-block">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 text-primary p-0 h-auto">
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", {
                      "transform rotate-180": isOpen
                    })} />
                    <span>{isOpen ? "Fewer filter options" : "More filter options"}</span>
                  </Button>
                </CollapsibleTrigger>
              </Collapsible>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-primary" onClick={clearFilters}>
                Clear
              </Button>
              <Button size="sm" className="gap-2">
                <Search className="h-4 w-4" />
                Apply search
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="flex items-center justify-between mb-6">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="published">Published (24)</TabsTrigger>
              <TabsTrigger value="inactive">Inactive (347)</TabsTrigger>
              <TabsTrigger value="hidden">Hidden</TabsTrigger>
              <TabsTrigger value="unverified">Unverified (3)</TabsTrigger>
              <TabsTrigger value="deleted">Deleted (4)</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <FileIcon className="h-4 w-4" />
                  <span className="sr-only">Export</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export listings</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <DownloadIcon className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download listings</p>
              </TooltipContent>
            </Tooltip>

            <div className="flex items-center gap-2">
              <Label htmlFor="sort" className="text-sm font-medium">
                Sort by
              </Label>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger id="sort" className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest modified</SelectItem>
                  <SelectItem value="oldest">Oldest modified</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

interface DatePickerProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
}

function DatePickerWithRange({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("w-full justify-start text-left font-normal bg-background", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "dd/MM/yyyy") : "dd/mm/yyyy"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  )
}

