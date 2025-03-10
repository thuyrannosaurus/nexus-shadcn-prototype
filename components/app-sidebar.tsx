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
    avatar: "/nexus-shadcn-prototype/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "FINN.no",
      logo: "/nexus-shadcn-prototype/logos/logo-finn.png",
      plan: "Nexus",
    },
    {
      name: "Blocket.se",
      logo: "/nexus-shadcn-prototype/logos/logo-blocket.png",
      plan: "Nexus",
    },
    {
      name: "Tori.fi",
      logo: "/nexus-shadcn-prototype/logos/logo-tori.png",
      plan: "Nexus",
    },
    {
      name: "DBA.dk",
      logo: "/nexus-shadcn-prototype/logos/logo-dba.png",
      plan: "Nexus",
    },
  ],
  navMain: [
    {
      title: "Listings",
      url: "/listings",
      icon: FileText,
      isActive: true,
      hasAccordion: true,
      items: [
        {
          title: "Recommerce",
          url: "/listings/recommerce",
        },
        {
          title: "Real estate",
          url: "/listings/real-estate",
        },
        {
          title: "Mobility",
          url: "/listings/mobility",
        },
        {
          title: "Jobs",
          url: "/listings/jobs",
        },  
      ],
    },
    {
      title: "Users",
      url: "/users",
      icon: Users,
      hasAccordion: false,
      items: [
      ],
    },
    {
      title: "Organizations",
      url: "/organizations",
      icon: Store,
      hasAccordion: true,
      items: [
            {
            title: "Email Log",
             url: "/organizations/email-log",
            },                 
      ],
    },
    {
      title: "Conversations",
      url: "/conversations",
      icon: MessageSquare,
      hasAccordion: false,
    },
  ],
  projects: [
    {
      name: "Access Control",
      url: "/access-control",
      icon: KeyRound,
      hasPopout: true,
    },
    {
      name: "External links",
      url: "/external-links",
      icon: Link,
      hasPopout: false,
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
