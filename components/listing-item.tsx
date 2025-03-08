import Image from "next/image"
import { MoreHorizontal, Truck, User, FileText, Copy, Edit, Archive, AlertTriangle, Trash2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

interface ListingItemProps {
  id: string
  title: string
  price: string
  status: "Published" | "Inactive" | "Hidden" | "Unverified" | "Deleted"
  category: string
  location: string
  seller: {
    name: string
    email: string
    type: "Private" | "Business"
  }
  image: string
  readyToShip?: boolean
}

export function ListingItem({ 
  id, 
  title, 
  price, 
  status, 
  category, 
  location, 
  seller, 
  image,
  readyToShip
}: ListingItemProps) {
  const statusColor = {
    Published: "text-green-600",
    Inactive: "text-gray-500",
    Hidden: "text-gray-400",
    Unverified: "text-amber-500",
    Deleted: "text-red-500"
  }

  const copyToClipboard = (text: string, description: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`${description} copied to clipboard`)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
        toast.error("Failed to copy to clipboard")
      })
  }

  return (
    <div className="w-full">
      <div className="flex items-start gap-4 px-4 py-6 hover:bg-muted/30 transition-colors">
        <div className="relative w-32 h-24 overflow-hidden rounded-lg border border-gray-200 shrink-0">
          {readyToShip && (
            <div className="absolute top-0 left-0 z-10 rounded-tl-md rounded-br-lg overflow-hidden">
              <div className="bg-amber-100 text-black px-2 py-1.5 flex items-center gap-1.5">
                <Truck className="h-4 w-4" />
                <span className="text-xs font-medium">Fiks ferdig</span>
              </div>
            </div>
          )}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-medium leading-none text-blue-600">{title}</h3>
              <p className="text-sm font-bold mt-1">{price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs font-medium ${statusColor[status]}`}>{status}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{category}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{location}</span>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-blue-600">{seller.name}</p>
            <p className="text-xs text-muted-foreground">{seller.email}</p>
            <p className="text-xs text-muted-foreground mt-1">{seller.type}</p>
          </div>
        </div>
        <div className="shrink-0 self-center">
          <Button variant="outline" className="text-xs text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700">
            Preview
          </Button>
        </div>
        <div className="shrink-0 self-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Go to Listing Details</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Go to User Details</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <span>View on Site</span>
                </DropdownMenuItem>
                
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Copy Information</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => copyToClipboard(id, "Listing ID")}>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Listing ID</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => copyToClipboard(title, "Listing title")}>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Listing Title</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => copyToClipboard(seller.name, "User name")}>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Username</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => copyToClipboard(seller.email, "Email address")}>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Email Address</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                
                <DropdownMenuItem>
                  <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
                  <span>Flag for Review</span>
                </DropdownMenuItem>
                
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </div>
  )
} 