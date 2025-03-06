"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  FileText,
  Users,
  Store,
  MessageSquare,
  KeyRound,
  Link,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Thuy",
    email: "thuyrannosaurus@finn.no",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "FINN.no",
      logo: "/logos/logo-finn.png",
      plan: "Nexus",
    },
    {
      name: "Blocket.se",
      logo: "/logos/logo-blocket.png",
      plan: "Nexus",
    },
    {
      name: "Tori.fi",
      logo: "/logos/logo-tori.png",
      plan: "Nexus",
    },
    {
      name: "DBA.dk",
      logo: "/logos/logo-dba.png",
      plan: "Nexus",
    },
  ],
  navMain: [
    {
      title: "Listings",
      url: "#",
      icon: FileText,
      isActive: true,
      items: [
        {
          title: "Recommerce",
          url: "#",
        },
        {
          title: "Real estate",
          url: "#",
        },
        {
          title: "Mobility",
          url: "#",
        },
        {
          title: "Jobs",
          url: "#",
        },  
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Search",
          url: "#",
        },
        {
          title: "Testfield",
          url: "#",
        },
        {
          title: "X",
          url: "#",
        },
      ],
    },
    {
      title: "Organizations",
      url: "#",
      icon: Store,
      items: [
        {
            title: "Search",
            url: "#",
            },
            {
            title: "Email Log",
             url: "#",
            },                 
      ],
    },
    {
      title: "Conversations",
      url: "#",
      icon: MessageSquare,
      items: [
        {
          title: "Search",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Access Control",
      url: "#",
      icon: KeyRound,
    },
    {
      name: "External links",
      url: "#",
      icon: Link,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
