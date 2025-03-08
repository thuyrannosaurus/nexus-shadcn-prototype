"use client"

import { useState, useEffect } from "react"
import { CalendarIcon, Check, ChevronDown, ChevronRight, HelpCircle, Search, X } from "lucide-react"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

export function ListingsFilter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()
  const [emailAddress, setEmailAddress] = useState("")
  const [adType1, setAdType1] = useState("")
  const [adType2, setAdType2] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const [advertiserType, setAdvertiserType] = useState("")
  const [moderationStatus, setModerationStatus] = useState("")
  const [region, setRegion] = useState("")
  const [contentVisible, setContentVisible] = useState(false)
  const [contentPreloaded, setContentPreloaded] = useState(false)
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)

  // Categories data for the Ad types dropdown
  const categories = [
    {
      name: "Vehicles",
      items: [
        "ATV for sale",
        "Boat dock",
        "Boat for rent",
        "Boat for sale",
        "Boat motors and parts",
        "Boat wanted",
        "Bus and minibus for sale",
        "Car for sale",
        "Car for sale by business user (LEGACY)",
        "Caravan for sale",
        "Leased car for sale",
        "Leased car sold by business user (LEGACY)",
        "Mobile home for sale",
        "Mopeds for sale",
        "Motorcycle for sale",
        "Motorcycles for sale",
        "New boats for sale",
        "New cars for sale",
        "New motorcycle for sale",
        "Snowmobile for sale",
        "Truck and trailer for sale",
      ],
    },
    {
      name: "Real Estate",
      items: [
        "Commercial plot for sale",
        "Commercial property for rent",
        "Commercial property for sale",
        "Company for sale",
        "Construction",
        "External property",
        "Leisure plot for sale",
        "Leisure property for sale",
        "New development project",
        "New development unit",
        "New leisure development project",
        "New leisure development unit",
        "Planned new development",
        "Plot for sale",
        "Property for rent",
        "Property for sale",
        "Property for sale abroad",
        "Property wanted for rent",
      ],
    },
    {
      name: "Jobs & Services",
      items: [
        "Full-time job available",
        "Full-time staffing",
        "Management position available",
        "Part-time job available",
        "Part-time staffing",
      ],
    },
    {
      name: "Marketplace & Offers",
      items: [
        "Marketplace (LEGACY) - Giveaway",
        "Marketplace (LEGACY) - Sell",
        "Marketplace (LEGACY) - Wanted",
        "Request Christmas aid",
        "Christmas aid offer",
        "SMP Recommerce Giveaway",
        "SMP Recommerce Sell",
        "SMP Recommerce Wanted",
      ],
    },
    {
      name: "Agriculture",
      items: [
        "Agricultural tools for sale",
        "Threshers for sale",
        "Tractors for sale",
      ],
    },
  ];

  // New categories data structure
  const productCategories = [
    {
      name: "Antiques and Art",
      items: [
        "Antique Furniture",
        "Cutlery and Silverware",
        "Ceramics, Porcelain, and Glass",
        "Art",
        "Other Antiques"
      ]
    },
    {
      name: "Car, Boat, and Motorcycle Accessories",
      items: [
        "Motorhome and Camper Accessories",
        "Car Parts",
        "Motorcycle Accessories and Spare Parts",
        "ATV Spare Parts",
        "Trailers",
        "Boat Spare Parts",
        "Other Car Accessories"
      ]
    },
    {
      name: "Electronics and Home Appliances",
      items: [
        "Small Home Appliances",
        "Home Appliances",
        "Phones and Accessories",
        "Computers",
        "Photography and Video",
        "Video Games and Consoles",
        "Sound and Vision",
        "Other Electronics and Home Appliances"
      ]
    },
    {
      name: "Animals and Pet Supplies",
      items: [
        "Aquariums",
        "Animal Feeding, Care, Breeding, and Stabling",
        "Horses",
        "Horse and Riding Equipment",
        "Insects and Spiders",
        "Cages",
        "Rodents and Rabbits",
        "Fish",
        "Cats",
        "Cat Accessories",
        "Dogs",
        "Dog Accessories",
        "Birds",
        "Reptiles",
        "Other Animals",
        "Other Pet Supplies"
      ]
    },
    {
      name: "Furniture and Interior",
      items: [
        "Shelves and Dressers",
        "Cabinets",
        "Kitchenware and Tableware",
        "Decorations and Interior Items",
        "Bedroom",
        "Carpets and Textiles",
        "Tables and Chairs",
        "Sofas and Armchairs",
        "Lamps",
        "Other Furniture and Interior"
      ]
    },
    {
      name: "Children and Parents",
      items: [
        "Children's Furniture",
        "Children's Shoes",
        "Children's Books",
        "Children's Clothing",
        "Children's Accessories and Safety",
        "Strollers and Prams",
        "Toys",
        "Car Seats",
        "Maternity Clothes",
        "Other"
      ]
    },
    {
      name: "Business and Services",
      items: [
        "Presentation Equipment",
        "Retail and Resale",
        "Machinery and Spare Parts",
        "Containers and Site Cabins",
        "Agriculture",
        "Freight and Cargo Transport",
        "Construction and Renovation",
        "Commercial Kitchen and Restaurant Industry",
        "Health and First Aid",
        "Office Supplies and Office Furniture",
        "Web Domains and Phone Numbers",
        "Other Business and Services"
      ]
    },
    {
      name: "Yard and Renovation",
      items: [
        "Garage Doors and Equipment",
        "Alarms and Security",
        "Kitchens",
        "Bathroom and Sauna",
        "Heating and Ventilation",
        "Cabin Equipment",
        "Yard and Garden",
        "Building Materials and Renovation",
        "Tools",
        "Other Home, Garden, and Construction"
      ]
    },
    {
      name: "Sports and Outdoors",
      items: [
        "Extreme Sports",
        "Fan Merchandise",
        "Golf",
        "Skiing and Snowboarding",
        "Ice Hockey and Skating",
        "Gym Equipment",
        "Hunting, Fishing, and Outdoor Activities",
        "Event Tickets",
        "Ball Sports",
        "Cycling",
        "Dietary Supplements",
        "Sports Watches and Activity Trackers",
        "Sports Clothing and Shoes",
        "Water Sports",
        "Other Sports"
      ]
    },
    {
      name: "Clothing, Cosmetics, and Accessories",
      items: [
        "Skincare and Haircare",
        "Watches and Wristwatches",
        "Shoes",
        "Jewelry and Jewelry Boxes",
        "Cosmetics",
        "Bags and Wallets",
        "Men's Clothing",
        "Costumes",
        "Women's Clothing",
        "Glasses and Lenses",
        "Other Clothing, Cosmetics, and Accessories"
      ]
    },
    {
      name: "Entertainment and Hobbies",
      items: [
        "Food and Beverages",
        "Collectibles",
        "Books and Magazines",
        "Handicrafts",
        "Travel and Travel Tickets",
        "Music and Movies",
        "Model Kits and Building Sets",
        "Radio-Controlled Toys",
        "Board Games",
        "Musical Instruments",
        "Other Entertainment and Hobbies"
      ]
    }
  ];

  // Track expanded categories
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Toggle category expansion
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Toggle category selection for multi-select
  const toggleCategorySelection = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Handle animation timing with improved sequence
  useEffect(() => {
    let preloadTimeout: NodeJS.Timeout;
    let visibilityTimeout: NodeJS.Timeout;
    
    if (showMoreFilters) {
      // Phase 1: Preload content (0ms) - Content is in DOM but invisible
      setContentPreloaded(true);
      
      // Phase 2: Start card expansion (50ms delay)
      // This happens automatically via CSS animation
      
      // Phase 3: Fade in content (250ms delay)
      visibilityTimeout = setTimeout(() => {
        setContentVisible(true);
      }, 250);
    } else {
      // When closing: Hide content immediately, but keep it preloaded briefly
      setContentVisible(false);
      
      // Remove content from preload after animation completes
      preloadTimeout = setTimeout(() => {
        setContentPreloaded(false);
      }, 300);
    }
    
    return () => {
      clearTimeout(preloadTimeout);
      clearTimeout(visibilityTimeout);
    };
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
    setSelectedCategories([])
    setAdvertiserType("")
    setModerationStatus("")
    setRegion("")
    setCategoryDropdownOpen(false)
  }

  return (
    <Card className="bg-muted/50 border-0">
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
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

          <div className="col-span-12 md:col-span-6">
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
            <div className="col-span-12 md:col-span-4">
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
            <div className="col-span-12 md:col-span-4">
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full mt-1.5 bg-background justify-between font-normal text-muted-foreground">
                    {adType1 || "Select ad type"}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[330px] max-h-[400px] overflow-auto">
                  <DropdownMenuItem 
                    onClick={() => setAdType1("")}
                    className="flex items-center justify-between font-normal"
                  >
                    None
                    {adType1 === "" && <Check className="h-4 w-4 ml-2" />}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {[...categories]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((category) => (
                    <DropdownMenuSub key={category.name}>
                      <DropdownMenuSubTrigger>
                        <span>{category.name}</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="max-h-[500px] overflow-auto">
                          {[...category.items]
                            .sort((a, b) => a.localeCompare(b))
                            .map((item) => (
                            <DropdownMenuItem 
                              key={item}
                              onClick={() => setAdType1(item)}
                              className="flex items-center justify-between"
                            >
                              {item}
                              {adType1 === item && <Check className="h-4 w-4 ml-2" />}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">Category</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Select multiple categories</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="relative">
                <DropdownMenu open={categoryDropdownOpen} onOpenChange={setCategoryDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full mt-1.5 justify-between bg-background group">
                      <div className="flex items-center justify-between w-full">
                        <span className="truncate">
                          {selectedCategories.length > 0 
                            ? `${selectedCategories.length} selected` 
                            : "Select categories"}
                        </span>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[330px] max-h-[400px] overflow-auto">
                    {productCategories.map((category) => (
                      <DropdownMenuSub key={category.name}>
                        <DropdownMenuSubTrigger>
                          <span>{category.name}</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent className="max-h-[300px] overflow-auto">
                            <DropdownMenuCheckboxItem 
                              checked={selectedCategories.includes(category.name)}
                              onCheckedChange={() => toggleCategorySelection(category.name)}
                              onSelect={(e) => e.preventDefault()}
                            >
                              {category.name}
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator />
                            {category.items.map((item) => (
                              <DropdownMenuCheckboxItem 
                                key={item}
                                checked={selectedCategories.includes(item)}
                                onCheckedChange={() => toggleCategorySelection(item)}
                                onSelect={(e) => e.preventDefault()}
                              >
                                {item}
                              </DropdownMenuCheckboxItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    ))}
                    {selectedCategories.length > 0 && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          onClick={() => {
                            setSelectedCategories([]);
                            setCategoryDropdownOpen(false);
                          }}
                          className="justify-center text-center font-medium text-destructive focus:text-destructive"
                        >
                          Clear selections
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => setCategoryDropdownOpen(false)}
                      className="justify-center text-center font-medium"
                    >
                      Done
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
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
              className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up"
            >
              {(contentPreloaded || showMoreFilters) && (
                <div className="space-y-4 pt-2 pb-4">
                  <div className={cn(
                    "grid grid-cols-12 gap-4 transition-all duration-450 ease-in-out",
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
                </div>
              )}
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