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

export default function ListingsPage() {
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
            
            <Tabs defaultValue="all" className="w-full mt-12">
              <TabsList className="mb-4 overflow-x-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="published">Published (24)</TabsTrigger>
                <TabsTrigger value="inactive">Inactive (347)</TabsTrigger>
                <TabsTrigger value="hidden">Hidden</TabsTrigger>
                <TabsTrigger value="unverified">Unverified (3)</TabsTrigger>
                <TabsTrigger value="deleted">Deleted (4)</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <div className="min-h-[400px] rounded-xl border bg-card p-6">
                  <div className="text-center text-muted-foreground">
                    No listings found. Try adjusting your filters.
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="published" className="mt-0">
                <div className="min-h-[400px] rounded-xl border bg-card p-6">
                  <div className="text-center text-muted-foreground">
                    No published listings found.
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="inactive" className="mt-0">
                <div className="min-h-[400px] rounded-xl border bg-card p-6">
                  <div className="text-center text-muted-foreground">
                    No inactive listings found.
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="hidden" className="mt-0">
                <div className="min-h-[400px] rounded-xl border bg-card p-6">
                  <div className="text-center text-muted-foreground">
                    No hidden listings found.
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="unverified" className="mt-0">
                <div className="min-h-[400px] rounded-xl border bg-card p-6">
                  <div className="text-center text-muted-foreground">
                    No unverified listings found.
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="deleted" className="mt-0">
                <div className="min-h-[400px] rounded-xl border bg-card p-6">
                  <div className="text-center text-muted-foreground">
                    No deleted listings found.
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 