"use client"

import { useState, useEffect } from "react"
import { CalendarIcon, ChevronDown, HelpCircle, Search, X } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ListingsFilter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()
  const [emailAddress, setEmailAddress] = useState("")
  const [adType1, setAdType1] = useState("")
  const [adType2, setAdType2] = useState("")
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const [advertiserType, setAdvertiserType] = useState("")
  const [moderationStatus, setModerationStatus] = useState("")
  const [region, setRegion] = useState("")
  const [contentVisible, setContentVisible] = useState(false)

  // Handle animation timing
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showMoreFilters) {
      // Small delay before showing content
      timeout = setTimeout(() => {
        setContentVisible(true);
      }, 150); // Slightly longer delay to match the animation
    } else {
      // Hide content immediately when closing
      setContentVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [showMoreFilters]);

  // Ensure content is hidden on initial render
  useEffect(() => {
    setContentVisible(showMoreFilters);
  }, []);

  const handleClearFilters = () => {
    setSearchQuery("")
    setStartDate(undefined)
    setEndDate(undefined)
    setEmailAddress("")
    setAdType1("")
    setAdType2("")
    setAdvertiserType("")
    setModerationStatus("")
    setRegion("")
  }

  return (
    <Card className="bg-muted/50 border-0">
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium">Search</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Search by listing title, description, or ID</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative mt-1.5">
              <Input
                placeholder="Search listings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-8 bg-background"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center">
              <span className="text-sm font-medium">Modified date</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-1.5">
              <div className="flex-1 flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "dd/MM/yyyy") : "dd/mm/yyyy"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-sm text-muted-foreground">-</span>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "dd/MM/yyyy") : "dd/mm/yyyy"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/*<h3 className="text-lg font-medium">Filters</h3>*/}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">Email address</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter by user email address</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                placeholder="Email address"
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="mt-1.5 bg-background"
              />
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">Ad types</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter by advertisement type</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select value={adType1} onValueChange={setAdType1}>
                <SelectTrigger className="mt-1.5 bg-background">
                  <SelectValue placeholder="Select ad type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="for_sale">For Sale</SelectItem>
                  <SelectItem value="wanted">Wanted</SelectItem>
                  <SelectItem value="rental">Rental</SelectItem>
                  <SelectItem value="job">Job</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">Catergory</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter by advertisement category</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select value={adType2} onValueChange={setAdType2}>
                <SelectTrigger className="mt-1.5 bg-background">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="vehicles">Vehicles</SelectItem>
                  <SelectItem value="real_estate">Real Estate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Collapsible
            open={showMoreFilters}
            onOpenChange={setShowMoreFilters}
            className="overflow-hidden"
          >
            <CollapsibleContent 
              className="space-y-6 pt-4 data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up"
            >
              <div className={cn(
                "grid grid-cols-12 gap-4 transition-all duration-500 ease-in-out",
                contentVisible 
                  ? "opacity-100 transform-none" 
                  : "opacity-0 transform translate-y-2"
              )}>
                <div className="col-span-12 md:col-span-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium">Advertiser type</span>
                  </div>
                  <Select value={advertiserType} onValueChange={setAdvertiserType}>
                    <SelectTrigger className="mt-1.5 bg-background">
                      <SelectValue placeholder="Select advertiser type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="dealer">Dealer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium">Moderation status</span>
                  </div>
                  <Select value={moderationStatus} onValueChange={setModerationStatus}>
                    <SelectTrigger className="mt-1.5 bg-background">
                      <SelectValue placeholder="Select moderation status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="flagged">Flagged</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium">Region</span>
                  </div>
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger className="mt-1.5 bg-background">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="south">South</SelectItem>
                      <SelectItem value="central">Central</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CollapsibleContent>

            <div className="flex items-center justify-between mt-2">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex items-center p-0 h-auto">
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300 mr-1",
                      showMoreFilters && "rotate-180"
                    )}
                  />
                  <span className="text-sm font-medium text-primary">
                    {showMoreFilters ? "Less filter options" : "More filter options"}
                  </span>
                </Button>
              </CollapsibleTrigger>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                >
                  Clear
                </Button>
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  Apply search
                </Button>
              </div>
            </div>
          </Collapsible>
        </div>
      </CardContent>
    </Card>
  )
} 