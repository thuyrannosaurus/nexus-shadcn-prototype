"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ListingsFilter } from "@/components/listings-filter"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronsDownUpIcon, ChevronsUpDownIcon, Download, Expand, FileDown, FileDownIcon, Minimize } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ListingsPage() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [sortOption, setSortOption] = useState("newest")

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">Listings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-8 pt-8">
          <div className="mx-auto w-full max-w-[1080px]">
            <ListingsFilter />
            
            <div className="mt-12">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-end justify-between mb-4">
                  <TabsList className="overflow-x-auto">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="published">Published (24)</TabsTrigger>
                    <TabsTrigger value="inactive">Inactive (347)</TabsTrigger>
                    <TabsTrigger value="hidden">Hidden</TabsTrigger>
                    <TabsTrigger value="unverified">Unverified (3)</TabsTrigger>
                    <TabsTrigger value="deleted">Deleted (4)</TabsTrigger>
                  </TabsList>
                  
                  <div className="flex items-end gap-4">
                    <Button variant="outline" size="icon" title="Download">
                      <FileDownIcon className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      title={isExpanded ? "Collapse" : "Expand"}
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? (
                        <ChevronsDownUpIcon className="h-4 w-4" />
                      ) : (
                        <ChevronsUpDownIcon className="h-4 w-4" />
                      )}
                    </Button>
                    
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="sort-by" className="text-sm font-medium">
                        Sort by
                      </Label>
                      <Select value={sortOption} onValueChange={setSortOption}>
                        <SelectTrigger id="sort-by" className="w-[180px]">
                          <SelectValue placeholder="Select sort option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Newest modified</SelectItem>
                          <SelectItem value="oldest">Oldest modified</SelectItem>
                          <SelectItem value="a-z">A-Z</SelectItem>
                          <SelectItem value="z-a">Z-A</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <TabsContent value="all">
                  <div className="min-h-[400px] rounded-xl border bg-card p-6">
                    <div className="text-center text-muted-foreground">
                      No listings found. Try adjusting your filters.
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="published">
                  <div className="min-h-[400px] rounded-xl border bg-card p-6">
                    <div className="text-center text-muted-foreground">
                      No published listings found.
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="inactive">
                  <div className="min-h-[400px] rounded-xl border bg-card p-6">
                    <div className="text-center text-muted-foreground">
                      No inactive listings found.
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="hidden">
                  <div className="min-h-[400px] rounded-xl border bg-card p-6">
                    <div className="text-center text-muted-foreground">
                      No hidden listings found.
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="unverified">
                  <div className="min-h-[400px] rounded-xl border bg-card p-6">
                    <div className="text-center text-muted-foreground">
                      No unverified listings found.
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="deleted">
                  <div className="min-h-[400px] rounded-xl border bg-card p-6">
                    <div className="text-center text-muted-foreground">
                      No deleted listings found.
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 