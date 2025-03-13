"use client"

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
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
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

  // Extract Level 2 categories (Wanted, Giveaway, Sell, etc.) from Recommerce
  const level2Categories = React.useMemo(() => {
    if (!recommerceCategory) return [];
    return recommerceCategory.children || [];
  }, [recommerceCategory]);

  // Find the "recommerce-sell" category specifically
  const recommerceSellCategory = React.useMemo(() => {
    if (!level2Categories.length) return null;
    return level2Categories.find(cat => 
      cat.id.toLowerCase().includes("recommerce-sell") || 
      (cat.id.toLowerCase().includes("sell") && cat.id.toLowerCase().includes("recommerce"))
    );
  }, [level2Categories]);

  // Get Level 3 categories specifically from recommerce-sell
  const recommerceSellLevel3Categories = React.useMemo(() => {
    if (!recommerceSellCategory) return [];
    return recommerceSellCategory.children || [];
  }, [recommerceSellCategory]);

  // Function to find a category by ID
  const findCategoryById = (id: string, cats: Category[]): Category | null => {
    if (!cats || !Array.isArray(cats)) return null
    
    for (const cat of cats) {
      if (cat.id === id) return cat
      if (cat.children && cat.children.length > 0) {
        const found = findCategoryById(id, cat.children)
        if (found) return found
      }
    }
    return null
  }

  // Function to get the full path of a category
  const getCategoryPath = (id: string, cats: Category[]): string => {
    const category = findCategoryById(id, cats)
    if (!category) return ""
    return category.name
  }

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
  const handleSelect = (categoryId: string, parentId?: string) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryPath(getCategoryPath(categoryId, categories));
    
    // Check if the selected category is or belongs to Recommerce
    const isRecommerce = isRecommerceCategory(categoryId);
    setIsRecommerceSelected(isRecommerce);
    
    setOpen(false);
  };

  // Function to handle Level 2 type selection
  const handleLevel2TypeChange = (value: string) => {
    setSelectedLevel2Type(value);
  };

  // Render category name with optional ID
  const renderCategoryName = (category: Category) => (
    <div>
      <span>{category.name}</span>
      {showIds && (
        <span className="ml-2 text-xs text-muted-foreground">({category.id})</span>
      )}
    </div>
  )

  // Recursive function to render nested categories for the dropdown menu
  const renderNestedCategories = (cats: Category[]) => {
    if (!cats || !Array.isArray(cats)) return null
    
    return cats.map((category) => {
      // For Concept 3, if this is the Recommerce category, render it differently
      if (variant === "concept3" && recommerceCategory && category.id === recommerceCategory.id) {
        return (
          <DropdownMenuSub key={category.id}>
            <DropdownMenuSubTrigger>
              {renderCategoryName(category)}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleSelect(category.id)}>
                  <Check 
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCategory === category.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {renderCategoryName(category)} (All)
                </DropdownMenuItem>
                
                {/* Render only Level 3 categories from recommerce-sell */}
                {recommerceSellLevel3Categories.map((level3Cat) => {
                  // Check if this Level 3 category has children
                  const hasChildren = level3Cat.children && level3Cat.children.length > 0;
                  
                  if (hasChildren) {
                    return (
                      <DropdownMenuSub key={level3Cat.id}>
                        <DropdownMenuSubTrigger>
                          {renderCategoryName(level3Cat)}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem onClick={() => handleSelect(level3Cat.id, recommerceSellCategory?.id)}>
                              <Check 
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedCategory === level3Cat.id ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {renderCategoryName(level3Cat)} (All)
                            </DropdownMenuItem>
                            {renderNestedCategories(level3Cat.children)}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    );
                  }
                  
                  return (
                    <DropdownMenuItem 
                      key={level3Cat.id}
                      onClick={() => handleSelect(level3Cat.id, recommerceSellCategory?.id)}
                    >
                      <Check 
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedCategory === level3Cat.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {renderCategoryName(level3Cat)}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        );
      }
      
      // Default rendering for other categories with children
      if (category.children && category.children.length > 0) {
        return (
          <DropdownMenuSub key={category.id}>
            <DropdownMenuSubTrigger>
              {renderCategoryName(category)}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleSelect(category.id)}>
                  <Check 
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCategory === category.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {renderCategoryName(category)} (All)
                </DropdownMenuItem>
                {renderNestedCategories(category.children)}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        )
      }
      
      // Rendering for categories without children
      return (
        <DropdownMenuItem 
          key={category.id}
          onClick={() => handleSelect(category.id)}
        >
          <Check 
            className={cn(
              "mr-2 h-4 w-4",
              selectedCategory === category.id ? "opacity-100" : "opacity-0"
            )}
          />
          {renderCategoryName(category)}
        </DropdownMenuItem>
      )
    })
  }

  // Flatten all categories for search
  const flattenCategories = (cats: Category[]): Category[] => {
    let result: Category[] = []
    if (!cats || !Array.isArray(cats)) return result
    
    for (const cat of cats) {
      result.push(cat)
      if (cat.children && cat.children.length > 0) {
        result = [...result, ...flattenCategories(cat.children)]
      }
    }
    return result
  }

  const allCategories = flattenCategories(categories)
  
  // Filter categories based on search query
  const filteredCategories = searchQuery
    ? allCategories.filter(category => 
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.id.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allCategories

  // Concept 3: Modified dropdown that keeps Level 1 categories but streamlines Recommerce
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
                {renderNestedCategories(categories)}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-[180px]">
            {/* Enhanced second Select component with structured options */}
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-between"
                  disabled={!isRecommerceSelected}
                >
                  {selectedLevel2Type === "recommerce-sell" ? "Selling" : 
                   selectedLevel2Type === "recommerce-wanted" ? "Wanted" :
                   selectedLevel2Type === "recommerce-giveaway" ? "Give away" :
                   selectedLevel2Type === "webstore" ? "Webstore" :
                   selectedLevel2Type === "bap-sell" ? "BAP: Sell" :
                   selectedLevel2Type === "bap-wanted" ? "BAP: Wanted" :
                   selectedLevel2Type === "bap-giveaway" ? "BAP: Give away" :
                   selectedLevel2Type === "bap-gift-wish" ? "BAP: Gift wish" :
                   selectedLevel2Type === "bap-gift-offer" ? "BAP: Gift offer" :
                   "Select type"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command value={selectedLevel2Type}>
                  <CommandList>
                    <CommandGroup heading="Main types">
                      <CommandItem 
                        value="recommerce-sell"
                        onSelect={() => handleLevel2TypeChange("recommerce-sell")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "recommerce-sell" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Selling
                      </CommandItem>
                      <CommandItem 
                        value="recommerce-wanted"
                        onSelect={() => handleLevel2TypeChange("recommerce-wanted")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "recommerce-wanted" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Wanted
                      </CommandItem>
                      <CommandItem 
                        value="recommerce-giveaway"
                        onSelect={() => handleLevel2TypeChange("recommerce-giveaway")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "recommerce-giveaway" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Give away
                      </CommandItem>
                      <CommandItem 
                        value="webstore"
                        onSelect={() => handleLevel2TypeChange("webstore")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "webstore" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Webstore
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="BAP">
                      <CommandItem 
                        value="bap-sell"
                        onSelect={() => handleLevel2TypeChange("bap-sell")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "bap-sell" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Sell
                      </CommandItem>
                      <CommandItem 
                        value="bap-wanted"
                        onSelect={() => handleLevel2TypeChange("bap-wanted")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "bap-wanted" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Wanted
                      </CommandItem>
                      <CommandItem 
                        value="bap-giveaway"
                        onSelect={() => handleLevel2TypeChange("bap-giveaway")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "bap-giveaway" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Give away
                      </CommandItem>
                      <CommandItem 
                        value="bap-gift-wish"
                        onSelect={() => handleLevel2TypeChange("bap-gift-wish")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "bap-gift-wish" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Gift wish
                      </CommandItem>
                      <CommandItem 
                        value="bap-gift-offer"
                        onSelect={() => handleLevel2TypeChange("bap-gift-offer")}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedLevel2Type === "bap-gift-offer" ? "opacity-100" : "opacity-0"
                          )}
                        />
                        Gift offer
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {isRecommerceSelected && (
          <div className="text-sm text-muted-foreground">
            Selected: {recommerceCategory?.name}
            {selectedLevel2Type && ` > ${selectedLevel2Type.includes("bap") ? "BAP: " : ""}${
              selectedLevel2Type === "recommerce-sell" ? "Selling" : 
              selectedLevel2Type === "recommerce-wanted" ? "Wanted" :
              selectedLevel2Type === "recommerce-giveaway" ? "Give away" :
              selectedLevel2Type === "webstore" ? "Webstore" :
              selectedLevel2Type === "bap-sell" ? "Sell" :
              selectedLevel2Type === "bap-wanted" ? "Wanted" :
              selectedLevel2Type === "bap-giveaway" ? "Give away" :
              selectedLevel2Type === "bap-gift-wish" ? "Gift wish" :
              selectedLevel2Type === "bap-gift-offer" ? "Gift offer" : ""
            }`}
            {selectedCategoryPath && selectedCategory !== recommerceCategory?.id && ` > ${selectedCategoryPath}`}
          </div>
        )}
      </div>
    );
  }

  // Concept 2: Nested dropdown menu
  if (variant === "concept2") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {selectedCategoryPath || "Select category"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {renderNestedCategories(categories)}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  // Concept 1: Default combobox style
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedCategoryPath || "Select category"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput
            placeholder="Search category..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {filteredCategories.map((category) => (
                <CommandItem
                  key={category.id}
                  value={category.id}
                  onSelect={() => handleSelect(category.id)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCategory === category.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {renderCategoryName(category)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
} 