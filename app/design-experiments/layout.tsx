"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DesignExperimentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[280px_1fr]">
        <AppSidebar className="hidden border-r md:block" />
        <div className="flex flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6">
            <SidebarTrigger />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/design-experiments">Design Experiments</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {pathname !== "/design-experiments" && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        {pathname.split("/").pop()?.split("-").map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(" ")}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
} 