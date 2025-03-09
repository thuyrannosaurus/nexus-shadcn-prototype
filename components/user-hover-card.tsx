"use client"

import * as React from "react"
import { Copy, ExternalLink, Mail, Phone, Calendar, MapPin } from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Utility functions
const getRandomColor = (name: string) => {
  // Generate a consistent color based on the name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  const hue = Math.abs(hash % 360)
  return `hsl(${hue}, 65%, 55%)`
}

const getInitials = (name: string) => {
  const parts = name.split(' ')
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const generateUserId = (name: string) => {
  // Generate a consistent user ID based on the name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash % 9000000000 + 1000000000).toString()
}

const generateJoinDate = (name: string) => {
  // Generate a consistent join date based on the name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  // Generate a date between 1 and 5 years ago
  const now = new Date()
  const yearsAgo = Math.abs(hash % 5) + 1
  const daysAgo = Math.abs((hash >> 5) % 365)
  
  const date = new Date(now.getFullYear() - yearsAgo, 0, 1)
  date.setDate(date.getDate() + daysAgo)
  
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const generatePhoneNumber = (name: string) => {
  // Generate a consistent phone number based on the name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  return `(${Math.abs(hash % 900 + 100)}) ${Math.abs((hash >> 10) % 900 + 100)}-${Math.abs((hash >> 20) % 10000).toString().padStart(4, '0')}`
}

const generateLocation = (name: string) => {
  // Generate a consistent location based on the name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  const locations = [
    "Oslo, Norway",
    "Bergen, Norway",
    "Trondheim, Norway",
    "Stavanger, Norway",
    "Tromsø, Norway",
    "Stockholm, Sweden",
    "Gothenburg, Sweden",
    "Malmö, Sweden",
    "Uppsala, Sweden",
    "Copenhagen, Denmark",
    "Aarhus, Denmark",
    "Helsinki, Finland",
    "Tampere, Finland",
    "Reykjavik, Iceland"
  ]
  
  return locations[Math.abs(hash) % locations.length]
}

interface UserHoverCardProps {
  name: string
  email: string
  type: "Private" | "Business"
  children?: React.ReactNode
}

export function UserHoverCard({ name, email, type, children }: UserHoverCardProps) {
  const userId = generateUserId(name)
  const joinDate = generateJoinDate(name)
  const phoneNumber = generatePhoneNumber(name)
  const location = generateLocation(name)
  const username = email.split('@')[0]
  
  const copyToClipboard = (text: string, description: string) => {
    navigator.clipboard.writeText(text)
    toast.success(`${description} copied to clipboard`)
  }

  return (
    <HoverCard openDelay={100} closeDelay={200}>
      <HoverCardTrigger asChild>
        {children || (
          <span className="text-primary hover:underline cursor-pointer">
            {name}
          </span>
        )}
      </HoverCardTrigger>
      <HoverCardContent 
        side="top" 
        align="center" 
        sideOffset={5}
        avoidCollisions={false}
        className="w-80 z-[9999] p-0 overflow-hidden"
      >
        <div className="bg-card rounded-t-md p-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarFallback style={{ backgroundColor: getRandomColor(name) }}>
                  {getInitials(name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-semibold text-foreground">{name}</h4>
                {type === "Business" ? (
                  <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900 px-2">
                    <span className="text-xs font-medium">Admin</span>
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/10 dark:hover:bg-primary/20 px-2">
                    <span className="text-xs font-medium">{type}</span>
                  </Badge>
                )}
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6"
              aria-label="View user details in new window"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border p-4 space-y-3 bg-card">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Email</span>
              <span className="text-sm text-muted-foreground">{email}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Phone</span>
              <span className="text-sm text-muted-foreground">{phoneNumber}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Joined</span>
              <span className="text-sm text-muted-foreground">{joinDate}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Location</span>
              <span className="text-sm text-muted-foreground">{location}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border p-4 flex gap-2 bg-card">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs"
            onClick={() => copyToClipboard(userId, "User ID")}
            aria-label={`Copy user ID: ${userId}`}
          >
            <Copy className="mr-2 h-3 w-3" />
            Copy User ID
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs"
            aria-label={`View details for ${name}`}
          >
            <ExternalLink className="mr-2 h-3 w-3" />
            View Details
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
} 