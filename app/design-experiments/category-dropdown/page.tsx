"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { CategoryDropdown, Category } from "@/components/design-experiments/category-dropdown"
import { parseCategories, generateMockCategories } from "@/components/design-experiments/category-dropdown/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
// Import the JSON file directly
import categoriesJson from "@/data/Adcategories (2).json"

export default function CategoryDropdownPage() {
  const [style, setStyle] = useState<"concept1" | "concept2" | "concept3">("concept1")
  const [activeTab, setActiveTab] = useState("preview")
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [useMockData, setUseMockData] = useState(false)
  const [showIds, setShowIds] = useState(true)

  useEffect(() => {
    try {
      setIsLoading(true)
      
      // Log the structure of the imported JSON to help with debugging
      console.log('Imported JSON structure:', 
        Object.keys(categoriesJson),
        categoriesJson.data ? `data property found with keys: ${Object.keys(categoriesJson.data).join(', ')}` : 'No data property'
      )
      
      // Parse the imported JSON directly using our updated parseCategories function
      const parsedCategories = parseCategories(categoriesJson)
      
      if (parsedCategories && parsedCategories.length > 0) {
        console.log(`Successfully loaded ${parsedCategories.length} categories`)
        setCategories(parsedCategories)
        setUseMockData(false)
      } else {
        console.warn('No categories parsed from JSON, using mock data')
        setCategories(generateMockCategories())
        setUseMockData(true)
      }
    } catch (error) {
      console.error('Error loading categories:', error)
      console.warn('Using mock data instead')
      setCategories(generateMockCategories())
      setUseMockData(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getConceptDescription = () => {
    switch (style) {
      case "concept1":
        return "Searchable dropdown with flat list of all categories.";
      case "concept2":
        return "Traditional nested dropdown menu showing the category hierarchy.";
      case "concept3":
        return "Nested dropdown that maintains the full hierarchy but simplifies RECOMMERCE navigation by showing only categories from 'Sell' directly, with a second dropdown for selecting different types (Selling, Wanted, Give away, Webstore, and BAP options).";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Category Dropdown</h1>
        <p className="text-muted-foreground">
          A multilevel dropdown for displaying hierarchical categories.
          {useMockData && (
            <span className="ml-2 text-yellow-500 font-medium">
              (Using mock data - JSON file could not be loaded)
            </span>
          )}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-2">
                <Label htmlFor="show-ids" className="text-sm font-medium">Show IDs:</Label>
                <Switch 
                  id="show-ids" 
                  checked={showIds} 
                  onCheckedChange={setShowIds} 
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Concept:</span>
                <Select value={style} onValueChange={(value) => setStyle(value as any)}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select concept" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concept1">Concept 1</SelectItem>
                    <SelectItem value="concept2">Concept 2</SelectItem>
                    <SelectItem value="concept3">Concept 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card className="p-6 mt-4">
              <div className="mb-4">
                <h3 className="text-sm font-medium">Current Concept:</h3>
                <p className="text-sm text-muted-foreground">{getConceptDescription()}</p>
              </div>
              
              <TabsContent value="preview" className="mt-0">
                {isLoading ? (
                  <div className="flex items-center justify-center h-40">
                    <p>Loading categories...</p>
                  </div>
                ) : categories.length === 0 ? (
                  <div className="flex items-center justify-center h-40">
                    <p>No categories available. Please check the console for errors.</p>
                  </div>
                ) : (
                  <div className="max-w-sm mx-auto">
                    <CategoryDropdown categories={categories} variant={style} showIds={showIds} />
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="code" className="mt-0">
                <pre className="rounded-lg bg-muted p-4 overflow-auto">
                  <code className="text-sm">
{`"use client"

import * as React from "react"
import { Check, ChevronsUpDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Define the category type based on the JSON structure
export interface Category {
  name: string
  id: string
  children: Category[]
  __typename: string
}

interface CategoryDropdownProps {
  categories: Category[]
  variant?: "concept1" | "concept2" | "concept3"
  showIds?: boolean
}

export function CategoryDropdown({ 
  categories, 
  variant = "concept1",
  showIds = false
}: CategoryDropdownProps) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<string>("")
  const [selectedCategoryPath, setSelectedCategoryPath] = React.useState<string>("")
  const [selectedLevel2Type, setSelectedLevel2Type] = React.useState<string>("recommerce-sell")
  const [isRecommerceSelected, setIsRecommerceSelected] = React.useState(false)

  // Find the Recommerce category if it exists
  const recommerceCategory = React.useMemo(() => {
    return categories.find(cat => 
      cat.id.toLowerCase().includes("recommerce") || 
      cat.name.toLowerCase().includes("recommerce")
    );
  }, [categories]);

  // Find the "recommerce-sell" category specifically
  const recommerceSellCategory = React.useMemo(() => {
    if (!recommerceCategory || !recommerceCategory.children) return null;
    return recommerceCategory.children.find(cat => 
      cat.id.toLowerCase().includes("recommerce-sell")
    );
  }, [recommerceCategory]);

  // Function to check if a category is or belongs to Recommerce
  const isRecommerceCategory = (categoryId: string): boolean => {
    if (!recommerceCategory) return false;
    
    // Check if it's the Recommerce category itself
    if (categoryId === recommerceCategory.id) return true;
    
    // Check if it's a child of Recommerce
    const category = findCategoryById(categoryId, [recommerceCategory]);
    return !!category;
  }

  // Function to handle category selection
  const handleSelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryPath(getCategoryPath(categoryId, categories));
    
    // Check if the selected category is or belongs to Recommerce
    const isRecommerce = isRecommerceCategory(categoryId);
    setIsRecommerceSelected(isRecommerce);
    
    setOpen(false);
  }

  // Function to handle Level 2 type selection
  const handleLevel2TypeChange = (value: string) => {
    setSelectedLevel2Type(value);
  }

  // Concept 3: Modified dropdown with nested structure showing only recommerce-sell categories
  if (variant === "concept3") {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            {/* Main dropdown using nested menu structure */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  {selectedCategoryPath || "Select category"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {/* Nested categories with special handling for Recommerce */}
                {/* When hovering over Recommerce, shows only categories from recommerce-sell */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-[180px]">
            {/* Enhanced second dropdown with structured options */}
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-between"
                  disabled={!isRecommerceSelected}
                >
                  {selectedLevel2Type === "recommerce-sell" ? "Selling" : "Select type"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandList>
                    <CommandGroup heading="Main types">
                      <CommandItem onSelect={() => handleLevel2TypeChange("recommerce-sell")}>Selling</CommandItem>
                      <CommandItem onSelect={() => handleLevel2TypeChange("recommerce-wanted")}>Wanted</CommandItem>
                      <CommandItem onSelect={() => handleLevel2TypeChange("recommerce-giveaway")}>Give away</CommandItem>
                      <CommandItem onSelect={() => handleLevel2TypeChange("webstore")}>Webstore</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="BAP">
                      <CommandItem onSelect={() => handleLevel2TypeChange("bap-sell")}>Sell</CommandItem>
                      <CommandItem onSelect={() => handleLevel2TypeChange("bap-wanted")}>Wanted</CommandItem>
                      <CommandItem onSelect={() => handleLevel2TypeChange("bap-giveaway")}>Give away</CommandItem>
                      <CommandItem onSelect={() => handleLevel2TypeChange("bap-gift-wish")}>Gift wish</CommandItem>
                      <CommandItem onSelect={() => handleLevel2TypeChange("bap-gift-offer")}>Gift offer</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    );
  }

  // Rest of the component code...
}`}
                  </code>
                </pre>
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 