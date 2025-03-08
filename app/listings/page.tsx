"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ListingsFilter } from "@/components/listings-filter"
import { ListingItem } from "@/components/listing-item"
import { listings } from "@/data/listings"
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
import { Download, Expand, Minimize } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState, useEffect, useRef } from "react"
import { ListingSkeleton } from "@/components/listing-skeleton"

export default function ListingsPage() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [sortOption, setSortOption] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showItems, setShowItems] = useState(true)
  const [activeTab, setActiveTab] = useState("all")
  const contentRef = useRef<HTMLDivElement>(null)
  const itemsPerPage = 12
  const totalPages = Math.ceil(listings.length / itemsPerPage)

  // Function to handle page changes with scroll to top
  const handlePageChange = (page: number) => {
    // Don't do anything if clicking the current page
    if (page === currentPage) return
    
    // First, set loading state to true and hide current items
    // This ensures skeletons are visible before scrolling starts
    setIsLoading(true)
    setShowItems(false)
    
    // Small delay to ensure the skeleton is rendered before scrolling starts
    setTimeout(() => {
      // Use requestAnimationFrame to ensure the scroll happens in the next paint
      requestAnimationFrame(() => {
        // Try to scroll the content container first
        if (contentRef.current) {
          contentRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        } else {
          // Fall back to window scroll if ref isn't available
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
      })
      
      // Change the page after scrolling has started
      setCurrentPage(page)
      
      // Wait for scroll animation to complete before showing new content
      // Most smooth scroll animations take about 500-800ms
      setTimeout(() => {
        setIsLoading(false)
        
        // Small delay before showing items for a smoother transition
        setTimeout(() => {
          setShowItems(true)
        }, 50)
      }, 600) // Reduced from 800ms to 600ms for a more responsive feel
    }, 50) // Small delay to ensure skeleton is rendered
  }

  // Handle tab change
  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return
    
    setActiveTab(tab)
    
    // Similar loading pattern for tab changes
    setIsLoading(true)
    setShowItems(false)
    
    // Small delay to ensure the skeleton is rendered before scrolling starts
    setTimeout(() => {
      // Use requestAnimationFrame to ensure the scroll happens in the next paint
      requestAnimationFrame(() => {
        // Try to scroll the content container first
        if (contentRef.current) {
          contentRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        } else {
          // Fall back to window scroll if ref isn't available
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
      })
      
      // Reset to first page when changing tabs
      setCurrentPage(1)
      
      // Wait for scroll animation to complete before showing new content
      setTimeout(() => {
        setIsLoading(false)
        
        setTimeout(() => {
          setShowItems(true)
        }, 50)
      }, 600) // Reduced from 800ms to 600ms for a more responsive feel
    }, 50) // Small delay to ensure skeleton is rendered
  }

  // Filter listings based on tab
  const getFilteredListings = (tab: string) => {
    switch (tab) {
      case "all":
        return listings
      case "published":
        return listings.filter(listing => listing.status === "Published")
      case "inactive":
        return listings.filter(listing => listing.status === "Inactive")
      case "hidden":
        return listings.filter(listing => listing.status === "Hidden")
      case "unverified":
        return listings.filter(listing => listing.status === "Unverified")
      case "deleted":
        return listings.filter(listing => listing.status === "Deleted")
      default:
        return listings
    }
  }

  // Get paginated listings
  const getPaginatedListings = (tab: string) => {
    const filtered = getFilteredListings(tab)
    const startIndex = (currentPage - 1) * itemsPerPage
    return filtered.slice(startIndex, startIndex + itemsPerPage)
  }

  // Generate pagination items
  const renderPaginationItems = (totalPages: number) => {
    const items = []
    
    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            handlePageChange(1)
          }}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    )
    
    // Show ellipsis if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      )
    }
    
    // Show current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue // Skip first and last page as they're always shown
      
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(i)
            }}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
    
    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      )
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(totalPages)
            }}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      )
    }
    
    return items
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b bg-background">
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
        <div className="flex-1 overflow-auto" ref={contentRef}>
          <div className="flex flex-col gap-4 p-8 pt-8">
          <div className="mx-auto w-full max-w-[1080px]">
            <ListingsFilter />
            
              <div className="mt-12">
                <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
                  <div className="flex items-end justify-between mb-4">
                    <TabsList className="overflow-x-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="published">Published ({listings.filter(l => l.status === "Published").length})</TabsTrigger>
                      <TabsTrigger value="inactive">Inactive ({listings.filter(l => l.status === "Inactive").length})</TabsTrigger>
                      <TabsTrigger value="hidden">Hidden ({listings.filter(l => l.status === "Hidden").length})</TabsTrigger>
                      <TabsTrigger value="unverified">Unverified ({listings.filter(l => l.status === "Unverified").length})</TabsTrigger>
                      <TabsTrigger value="deleted">Deleted ({listings.filter(l => l.status === "Deleted").length})</TabsTrigger>
              </TabsList>
                    
                    <div className="flex items-end gap-4">
                      <Button variant="outline" size="icon" title="Download">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        title={isExpanded ? "Collapse" : "Expand"}
                        onClick={() => setIsExpanded(!isExpanded)}
                      >
                        {isExpanded ? (
                          <Minimize className="h-4 w-4" />
                        ) : (
                          <Expand className="h-4 w-4" />
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
                    <div className="space-y-0">
                      {getPaginatedListings("all").length > 0 ? (
                        <>
                          <div className="min-h-[400px]">
                            {isLoading && (
                              <div className="space-y-0">
                                {Array(Math.min(itemsPerPage, getFilteredListings("all").length))
                                  .fill(0)
                                  .map((_, index, array) => (
                                    <ListingSkeleton 
                                      key={`skeleton-${index}`} 
                                      isLast={index === array.length - 1}
                                    />
                                  ))}
                              </div>
                            )}
                            
                            <div className={isLoading ? "hidden" : "block"}>
                              {showItems && getPaginatedListings("all").map((listing, index, array) => (
                                <div 
                                  key={listing.id}
                                  className="animate-in fade-in slide-in-from-bottom-4 duration-300"
                                  style={{ 
                                    opacity: 0,
                                    animation: 'fadeInUp 0.3s ease forwards',
                                    animationDelay: `${index * 75}ms`
                                  }}
                                >
                                  <ListingItem 
                                    {...listing} 
                                    isLast={index === array.length - 1}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="py-6">
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      if (currentPage > 1) {
                                        handlePageChange(currentPage - 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === 1}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                                
                                {renderPaginationItems(Math.ceil(getFilteredListings("all").length / itemsPerPage))}
                                
                                <PaginationItem>
                                  <PaginationNext 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      const maxPage = Math.ceil(getFilteredListings("all").length / itemsPerPage)
                                      if (currentPage < maxPage) {
                                        handlePageChange(currentPage + 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === Math.ceil(getFilteredListings("all").length / itemsPerPage)}
                                    className={currentPage === Math.ceil(getFilteredListings("all").length / itemsPerPage) ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        </>
                      ) : (
                        <div className="min-h-[400px] rounded-xl border bg-card p-6 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    No listings found. Try adjusting your filters.
                  </div>
                        </div>
                      )}
                </div>
              </TabsContent>
                  <TabsContent value="published">
                    <div className="space-y-0">
                      {getPaginatedListings("published").length > 0 ? (
                        <>
                          <div className="min-h-[400px]">
                            {isLoading && (
                              <div className="space-y-0">
                                {Array(Math.min(itemsPerPage, getFilteredListings("published").length))
                                  .fill(0)
                                  .map((_, index, array) => (
                                    <ListingSkeleton 
                                      key={`skeleton-${index}`} 
                                      isLast={index === array.length - 1}
                                    />
                                  ))}
                              </div>
                            )}
                            
                            <div className={isLoading ? "hidden" : "block"}>
                              {showItems && getPaginatedListings("published").map((listing, index, array) => (
                                <div 
                                  key={listing.id}
                                  className="animate-in fade-in slide-in-from-bottom-4 duration-300"
                                  style={{ 
                                    opacity: 0,
                                    animation: 'fadeInUp 0.3s ease forwards',
                                    animationDelay: `${index * 75}ms`
                                  }}
                                >
                                  <ListingItem 
                                    {...listing} 
                                    isLast={index === array.length - 1}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="py-6">
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      if (currentPage > 1) {
                                        handlePageChange(currentPage - 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === 1}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                                
                                {renderPaginationItems(Math.ceil(getFilteredListings("published").length / itemsPerPage))}
                                
                                <PaginationItem>
                                  <PaginationNext 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      const maxPage = Math.ceil(getFilteredListings("published").length / itemsPerPage)
                                      if (currentPage < maxPage) {
                                        handlePageChange(currentPage + 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === Math.ceil(getFilteredListings("published").length / itemsPerPage)}
                                    className={currentPage === Math.ceil(getFilteredListings("published").length / itemsPerPage) ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        </>
                      ) : (
                        <div className="min-h-[400px] rounded-xl border bg-card p-6 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    No published listings found.
                  </div>
                        </div>
                      )}
                </div>
              </TabsContent>
                  <TabsContent value="inactive">
                    <div className="space-y-0">
                      {getPaginatedListings("inactive").length > 0 ? (
                        <>
                          <div className="min-h-[400px]">
                            {isLoading && (
                              <div className="space-y-0">
                                {Array(Math.min(itemsPerPage, getFilteredListings("inactive").length))
                                  .fill(0)
                                  .map((_, index, array) => (
                                    <ListingSkeleton 
                                      key={`skeleton-${index}`} 
                                      isLast={index === array.length - 1}
                                    />
                                  ))}
                              </div>
                            )}
                            
                            <div className={isLoading ? "hidden" : "block"}>
                              {showItems && getPaginatedListings("inactive").map((listing, index, array) => (
                                <div 
                                  key={listing.id}
                                  className="animate-in fade-in slide-in-from-bottom-4 duration-300"
                                  style={{ 
                                    opacity: 0,
                                    animation: 'fadeInUp 0.3s ease forwards',
                                    animationDelay: `${index * 75}ms`
                                  }}
                                >
                                  <ListingItem 
                                    {...listing} 
                                    isLast={index === array.length - 1}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="py-6">
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      if (currentPage > 1) {
                                        handlePageChange(currentPage - 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === 1}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                                
                                {renderPaginationItems(Math.ceil(getFilteredListings("inactive").length / itemsPerPage))}
                                
                                <PaginationItem>
                                  <PaginationNext 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      const maxPage = Math.ceil(getFilteredListings("inactive").length / itemsPerPage)
                                      if (currentPage < maxPage) {
                                        handlePageChange(currentPage + 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === Math.ceil(getFilteredListings("inactive").length / itemsPerPage)}
                                    className={currentPage === Math.ceil(getFilteredListings("inactive").length / itemsPerPage) ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        </>
                      ) : (
                        <div className="min-h-[400px] rounded-xl border bg-card p-6 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    No inactive listings found.
                  </div>
                        </div>
                      )}
                </div>
              </TabsContent>
                  <TabsContent value="hidden">
                    <div className="space-y-0">
                      {getPaginatedListings("hidden").length > 0 ? (
                        <>
                          <div className="min-h-[400px]">
                            {isLoading && (
                              <div className="space-y-0">
                                {Array(Math.min(itemsPerPage, getFilteredListings("hidden").length))
                                  .fill(0)
                                  .map((_, index, array) => (
                                    <ListingSkeleton 
                                      key={`skeleton-${index}`} 
                                      isLast={index === array.length - 1}
                                    />
                                  ))}
                              </div>
                            )}
                            
                            <div className={isLoading ? "hidden" : "block"}>
                              {showItems && getPaginatedListings("hidden").map((listing, index, array) => (
                                <div 
                                  key={listing.id}
                                  className="animate-in fade-in slide-in-from-bottom-4 duration-300"
                                  style={{ 
                                    opacity: 0,
                                    animation: 'fadeInUp 0.3s ease forwards',
                                    animationDelay: `${index * 75}ms`
                                  }}
                                >
                                  <ListingItem 
                                    {...listing} 
                                    isLast={index === array.length - 1}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="py-6">
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      if (currentPage > 1) {
                                        handlePageChange(currentPage - 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === 1}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                                
                                {renderPaginationItems(Math.ceil(getFilteredListings("hidden").length / itemsPerPage))}
                                
                                <PaginationItem>
                                  <PaginationNext 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      const maxPage = Math.ceil(getFilteredListings("hidden").length / itemsPerPage)
                                      if (currentPage < maxPage) {
                                        handlePageChange(currentPage + 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === Math.ceil(getFilteredListings("hidden").length / itemsPerPage)}
                                    className={currentPage === Math.ceil(getFilteredListings("hidden").length / itemsPerPage) ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        </>
                      ) : (
                        <div className="min-h-[400px] rounded-xl border bg-card p-6 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    No hidden listings found.
                  </div>
                        </div>
                      )}
                </div>
              </TabsContent>
                  <TabsContent value="unverified">
                    <div className="space-y-0">
                      {getPaginatedListings("unverified").length > 0 ? (
                        <>
                          <div className="min-h-[400px]">
                            {isLoading && (
                              <div className="space-y-0">
                                {Array(Math.min(itemsPerPage, getFilteredListings("unverified").length))
                                  .fill(0)
                                  .map((_, index, array) => (
                                    <ListingSkeleton 
                                      key={`skeleton-${index}`} 
                                      isLast={index === array.length - 1}
                                    />
                                  ))}
                              </div>
                            )}
                            
                            <div className={isLoading ? "hidden" : "block"}>
                              {showItems && getPaginatedListings("unverified").map((listing, index, array) => (
                                <div 
                                  key={listing.id}
                                  className="animate-in fade-in slide-in-from-bottom-4 duration-300"
                                  style={{ 
                                    opacity: 0,
                                    animation: 'fadeInUp 0.3s ease forwards',
                                    animationDelay: `${index * 75}ms`
                                  }}
                                >
                                  <ListingItem 
                                    {...listing} 
                                    isLast={index === array.length - 1}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="py-6">
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      if (currentPage > 1) {
                                        handlePageChange(currentPage - 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === 1}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                                
                                {renderPaginationItems(Math.ceil(getFilteredListings("unverified").length / itemsPerPage))}
                                
                                <PaginationItem>
                                  <PaginationNext 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      const maxPage = Math.ceil(getFilteredListings("unverified").length / itemsPerPage)
                                      if (currentPage < maxPage) {
                                        handlePageChange(currentPage + 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === Math.ceil(getFilteredListings("unverified").length / itemsPerPage)}
                                    className={currentPage === Math.ceil(getFilteredListings("unverified").length / itemsPerPage) ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        </>
                      ) : (
                        <div className="min-h-[400px] rounded-xl border bg-card p-6 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    No unverified listings found.
                  </div>
                        </div>
                      )}
                </div>
              </TabsContent>
                  <TabsContent value="deleted">
                    <div className="space-y-0">
                      {getPaginatedListings("deleted").length > 0 ? (
                        <>
                          <div className="min-h-[400px]">
                            {isLoading && (
                              <div className="space-y-0">
                                {Array(Math.min(itemsPerPage, getFilteredListings("deleted").length))
                                  .fill(0)
                                  .map((_, index, array) => (
                                    <ListingSkeleton 
                                      key={`skeleton-${index}`} 
                                      isLast={index === array.length - 1}
                                    />
                                  ))}
                              </div>
                            )}
                            
                            <div className={isLoading ? "hidden" : "block"}>
                              {showItems && getPaginatedListings("deleted").map((listing, index, array) => (
                                <div 
                                  key={listing.id}
                                  className="animate-in fade-in slide-in-from-bottom-4 duration-300"
                                  style={{ 
                                    opacity: 0,
                                    animation: 'fadeInUp 0.3s ease forwards',
                                    animationDelay: `${index * 75}ms`
                                  }}
                                >
                                  <ListingItem 
                                    {...listing} 
                                    isLast={index === array.length - 1}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="py-6">
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      if (currentPage > 1) {
                                        handlePageChange(currentPage - 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === 1}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                                
                                {renderPaginationItems(Math.ceil(getFilteredListings("deleted").length / itemsPerPage))}
                                
                                <PaginationItem>
                                  <PaginationNext 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      const maxPage = Math.ceil(getFilteredListings("deleted").length / itemsPerPage)
                                      if (currentPage < maxPage) {
                                        handlePageChange(currentPage + 1)
                                      }
                                    }}
                                    aria-disabled={currentPage === Math.ceil(getFilteredListings("deleted").length / itemsPerPage)}
                                    className={currentPage === Math.ceil(getFilteredListings("deleted").length / itemsPerPage) ? "pointer-events-none opacity-50" : ""}
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        </>
                      ) : (
                        <div className="min-h-[400px] rounded-xl border bg-card p-6 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    No deleted listings found.
                  </div>
                        </div>
                      )}
                </div>
              </TabsContent>
            </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 