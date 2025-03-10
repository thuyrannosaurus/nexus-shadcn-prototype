"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowDownWideNarrow, Download, Filter, FilterIcon, MoreHorizontal, Search, LayoutGrid, CheckCircle2, EyeOff, Eye, AlertCircle, Trash2, XCircle } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ListingsToolbarProps {
  variant?: "default" | "compact"
}

export function ListingsToolbar({ variant = "default" }: ListingsToolbarProps) {
  const [showDescriptions, setShowDescriptions] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  // Toggle a filter
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Toolbar */}
      <div className={`flex ${variant === 'compact' ? 'flex-row items-center' : 'flex-col'} gap-4`}>
        {/* Top row */}
        <div className={`flex items-center justify-between ${variant === 'compact' ? 'flex-1' : 'w-full border-b pb-4'}`}>
          {/* Custom tabs that match the screenshot style - only shown in non-compact variants */}
          {variant !== 'compact' && (
            <div className="flex items-center space-x-1 overflow-x-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "all"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All (494)
              </button>
              <button
                onClick={() => setActiveTab("published")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "published"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Published (352)
              </button>
              <button
                onClick={() => setActiveTab("admin-hidden")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "admin-hidden"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Admin hidden (43)
              </button>
              <button
                onClick={() => setActiveTab("hidden")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "hidden"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Hidden (3)
              </button>
              <button
                onClick={() => setActiveTab("unverified")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "unverified"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Unverified (51)
              </button>
              <button
                onClick={() => setActiveTab("deleted")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "deleted"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Deleted (2)
              </button>
              <button
                onClick={() => setActiveTab("refused")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "refused"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Refused (43)
              </button>
            </div>
          )}
          
          {/* Dropdown for compact variant - positioned on the left */}
          {variant === 'compact' && (
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  {activeTab === "all"}
                  {activeTab === "published"}
                  {activeTab === "admin-hidden"}
                  {activeTab === "hidden"}
                  {activeTab === "unverified"}
                  {activeTab === "deleted"}
                  {activeTab === "refused"}
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="flex items-center">
                
                  All Listings (494)
                </SelectItem>
                <SelectItem value="published" className="flex items-center">

                  Published (352)
                </SelectItem>
                <SelectItem value="admin-hidden" className="flex items-center">

                  Admin hidden (43)
                </SelectItem>
                <SelectItem value="hidden" className="flex items-center">

                  Hidden (3)
                </SelectItem>
                <SelectItem value="unverified" className="flex items-center">

                  Unverified (51)
                </SelectItem>
                <SelectItem value="deleted" className="flex items-center">

                  Deleted (2)
                </SelectItem>
                <SelectItem value="refused" className="flex items-center">

                  Refused (43)
                </SelectItem>
              </SelectContent>
            </Select>
          )}
          
          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className={variant === 'compact' ? 'w-[42px] px-2' : 'w-[160px]'}>
                <ArrowDownWideNarrow className={variant === 'compact' ? 'h-6 w-6' : 'w-4 h-4'} />
                {variant === 'compact' ? (
                  <span className="sr-only">
                    <SelectValue placeholder="Sort by" />
                  </span>
                ) : (
                  <SelectValue placeholder="Sort by" />
                )}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest" className="flex items-center">
                  Newest first
                </SelectItem>
                <SelectItem value="oldest" className="flex items-center">
                  Oldest first
                </SelectItem>
                <SelectItem value="price-high" className="flex items-center">
                  Price: High to low
                </SelectItem>
                <SelectItem value="price-low" className="flex items-center">
                  Price: Low to high
                </SelectItem>
                <SelectItem value="popular" className="flex items-center">
                  Most popular
                </SelectItem>
              </SelectContent>
            </Select>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <div className="flex items-center justify-between px-2 py-2">
                  <Label htmlFor="show-descriptions" className="cursor-pointer text-sm font-normal">Show descriptions</Label>
                  <Switch 
                    id="show-descriptions" 
                    checked={showDescriptions} 
                    onCheckedChange={setShowDescriptions}
                  />
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  Download Ad summary
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {/* Example content to demonstrate the "Show descriptions" toggle */}
      <div className="grid gap-4">
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle className="text-base">Example Listing {item}</CardTitle>
              {showDescriptions && (
                <CardDescription>
                  This is a description for the listing. It will only show when the "Show descriptions" toggle is enabled.
                </CardDescription>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
} 