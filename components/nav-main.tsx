"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { useEffect, useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"

// Helper function to safely access localStorage (avoids SSR issues)
const getLocalStorage = (key: string, defaultValue: any) => {
  if (typeof window === "undefined") {
    return defaultValue;
  }
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return defaultValue;
  }
};

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    hasAccordion?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();
  
  // Initialize accordion state from localStorage
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  
  // Load accordion state from localStorage on component mount
  useEffect(() => {
    const savedState = getLocalStorage("sidebar_accordions", {});
    setOpenAccordions(savedState);
  }, []);
  
  // Save accordion state to localStorage when it changes
  const toggleAccordion = (title: string) => {
    const newState = { ...openAccordions, [title]: !openAccordions[title] };
    setOpenAccordions(newState);
    
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebar_accordions", JSON.stringify(newState));
    }
  };

  // Check if a URL is active (exact match or parent of current path)
  const isUrlActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }
    return pathname === url || pathname.startsWith(`${url}/`);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Search</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          item.hasAccordion ? (
            <Collapsible
              key={item.title}
              asChild
              open={openAccordions[item.title]}
              onOpenChange={() => toggleAccordion(item.title)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <div className="flex w-full">
                  <Link href={item.url} className="flex-1">
                    <SidebarMenuButton 
                      tooltip={item.title}
                      isActive={isUrlActive(item.url)}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                  {!isCollapsed && (
                    <CollapsibleTrigger asChild>
                      <button className="flex h-9 w-9 items-center justify-center rounded-md text-sidebar-foreground/70 hover:bg-sidebar-background-highlight hover:text-sidebar-foreground group-data-[collapsible=icon]/sidebar:hidden">
                        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        <span className="sr-only">Toggle</span>
                      </button>
                    </CollapsibleTrigger>
                  )}
                </div>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton 
                          asChild
                          isActive={isUrlActive(subItem.url)}
                        >
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.title}
                isActive={isUrlActive(item.url)}
              >
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
