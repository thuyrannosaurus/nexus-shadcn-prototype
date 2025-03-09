"use client"

import * as React from "react"
import { ExternalLink, X } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// External links data with categories
const externalLinksCategories = [
  {
    category: "Content Moderation",
    links: [
      { name: "Ad moderation", url: "#" },
      { name: "User moderation", url: "#" },
      { name: "Message moderation", url: "#" },
      { name: "Rating & Reviews moderation", url: "#" },
    ]
  },
  {
    category: "Search & Management",
    links: [
      { name: "Ad search", url: "#" },
      { name: "User search", url: "#" },
      { name: "Transaction journey backoffice (ReCommmerce)", url: "#" },
    ]
  },
  {
    category: "Administration",
    links: [
      { name: "Ambassador", url: "#" },
      { name: "Feriehjem", url: "#" },
      { name: "Broadcast message to all users", url: "#" },
      { name: "Roles and Rights", url: "#" },
    ]
  }
]

interface ExternalLinksDialogProps {
  trigger?: React.ReactNode
}

export function ExternalLinksDialog({ trigger }: ExternalLinksDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">External Links</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold leading-none tracking-tight">External Links</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1.5">
            Quick access to other Nexus tools and services.
          </DialogDescription>
        </DialogHeader>
        <div className="py-2 space-y-6">
          {externalLinksCategories.map((category, index) => (
            <div key={category.category} className="space-y-3">
              {index > 0 && <Separator className="my-2" />}
              <h3 className="text-sm font-medium text-muted-foreground pt-2">
                {category.category}
              </h3>
              <div className="grid">
                {category.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={0}
                    aria-label={`Open ${link.name} in new window`}
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span>{link.name} </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
} 