"use client"

import { useTheme } from "next-themes"
import {
  BadgeCheck,
  Bell,
  Bot,
  BotMessageSquare,
  ChevronsUpDown,
  CreditCard,
  Globe,
  Heart,
  LifeBuoy,
  LogOut,
  Sparkles,
  Sun,
  SunMoon,
  Moon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  const [language, setLanguage] = useState("en")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Ensure theme state is properly initialized
  const currentTheme = mounted ? theme || "system" : "system"

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} width={32} height={32} />
                <AvatarFallback className="rounded-lg">
                  {user.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} width={32} height={32} />
                  <AvatarFallback className="rounded-lg">
                    {user.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            
              <DropdownMenuItem className="p-2">
                <Globe className="mr-2 h-4 w-4" />
                <div className="flex-1">Language</div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="h-7 w-[110px] border-none px-2 py-0 gap-1 shadow-none  [&>span]:truncate flex justify-end">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="no">Norwegian</SelectItem>
                    <SelectItem value="sv">Swedish</SelectItem>
                    <SelectItem value="da">Danish</SelectItem>
                    <SelectItem value="fi">Finnish</SelectItem>
                  </SelectContent>
                </Select>
              </DropdownMenuItem>

              <DropdownMenuItem className="p-2">
                <SunMoon className="mr-2 h-4 w-4" />
                <div className="flex-1">Theme</div>
                <Select value={currentTheme} onValueChange={setTheme}>
                  <SelectTrigger className="h-7 w-[110px] border-none px-2 py-0 gap-1 shadow-none [&>span]:truncate flex justify-end">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">
                      <div className="flex items-center">
                        <SunMoon className="mr-2 h-4 w-4" />
                        <span>Automatic</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="light">
                      <div className="flex items-center">
                        <Sun className="mr-2 h-4 w-4" />
                        <span>Light theme</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center">
                        <Moon className="mr-2 h-4 w-4" />
                        <span>Dark theme</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BotMessageSquare className="mr-2 h-4 w-4" />
                Try Nexus Chatbot
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                Give Feedback
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                Get Support
              </DropdownMenuItem>
              
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
