"use client"

import * as React from "react"
import { FileText, Users, Store, MessagesSquare, Settings, ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // This effect ensures we only render theme-dependent UI after mounting
  // to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Direct toggle function
  const toggleTheme = () => {
    console.log("Current theme:", theme)
    console.log("Resolved theme:", resolvedTheme)
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    console.log("Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen transition-all duration-300 ease-in-out border-r border-border bg-card",
        collapsed ? "w-[72px]" : "w-64",
        className,
      )}
      {...props}
    >
      <div className="space-y-4 py-4 px-4 flex-1">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="px-2">
              <h2 className="text-lg font-semibold tracking-tight">Nexus</h2>
              <p className="text-sm text-muted-foreground">shadcn-prototype</p>
            </div>
          )}
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className={cn("bg-background", collapsed && "mx-auto")}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>
        <Separator className="my-2" />
        <div className="space-y-1">
          <Button variant="ghost" className={cn("w-full", collapsed ? "justify-center" : "justify-start gap-2")}>
            <FileText className="h-4 w-4" />
            {!collapsed && <span>Listings</span>}
          </Button>
          <Button variant="ghost" className={cn("w-full", collapsed ? "justify-center" : "justify-start gap-2")}>
            <Users className="h-4 w-4" />
            {!collapsed && <span>Users</span>}
          </Button>
          <Button variant="secondary" className={cn("w-full", collapsed ? "justify-center" : "justify-start gap-2")}>
            <Store className="h-4 w-4" />
            {!collapsed && <span>Organizations</span>}
          </Button>
          <Button variant="ghost" className={cn("w-full", collapsed ? "justify-center" : "justify-start gap-2")}>
            <MessagesSquare className="h-4 w-4" />
            {!collapsed && <span>Conversations</span>}
          </Button>
          <Button variant="ghost" className={cn("w-full", collapsed ? "justify-center" : "justify-start gap-2")}>
            <Settings className="h-4 w-4" />
            {!collapsed && <span>Settings</span>}
          </Button>
        </div>
      </div>

      {/* Collapse button at the bottom */}
      <div className="p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

