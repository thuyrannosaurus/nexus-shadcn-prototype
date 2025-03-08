"use client"

import * as React from "react"
import { ExternalLink } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
          <DialogTitle>External Links</DialogTitle>
          <DialogDescription>
            Quick access to other Nexus tools and services.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-6">
          {externalLinksCategories.map((category, index) => (
            <div key={category.category} className="space-y-3">
              {index > 0 && <Separator />}
              <h3 className="text-sm font-medium text-muted-foreground pt-2">
                {category.category}
              </h3>
              <div className="grid gap-2">
                {category.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
} 