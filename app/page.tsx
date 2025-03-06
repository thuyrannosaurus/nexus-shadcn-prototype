import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-lg font-semibold">Listings</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-medium mb-4">Filters</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md" 
                  placeholder="Search listings..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Modified date</label>
                <div className="flex gap-2">
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border rounded-md" 
                  />
                  <span className="flex items-center">-</span>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border rounded-md" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email address</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border rounded-md" 
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button className="px-4 py-2 text-sm">Clear</button>
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md">Apply search</button>
            </div>
          </div>
          
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            <button className="px-3 py-1 text-sm rounded-md bg-muted/50">All</button>
            <button className="px-3 py-1 text-sm rounded-md">Published (24)</button>
            <button className="px-3 py-1 text-sm rounded-md">Inactive (347)</button>
            <button className="px-3 py-1 text-sm rounded-md">Hidden</button>
            <button className="px-3 py-1 text-sm rounded-md">Unverified (3)</button>
            <button className="px-3 py-1 text-sm rounded-md">Deleted (4)</button>
          </div>
          
          <div className="min-h-[400px] rounded-xl border bg-card p-6">
            <div className="text-center text-muted-foreground">
              No listings found. Try adjusting your filters.
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

