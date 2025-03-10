"use client"

import { Card } from "@/components/ui/card"
import { ListingsToolbar } from "@/components/design-experiments/listings-toolbar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clipboard } from "lucide-react"

export default function ListingsToolbarPage() {
  const [style, setStyle] = useState<"default" | "compact">("default")
  const [activeTab, setActiveTab] = useState("preview")

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Listings Toolbar</h1>
        <p className="text-muted-foreground">
          A horizontal toolbar for listings with tabs, sorting, and options menu.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-end">
            
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Style:</span>
                  <Select value={style} onValueChange={(value) => setStyle(value as any)}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="compact">Compact</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                

              </div>
            </div>

            <Card className="p-6 mt-4">
              <TabsContent value="preview" className="mt-0">
                <ListingsToolbar variant={style} />
              </TabsContent>
              
              <TabsContent value="code" className="mt-0">
                <pre className="rounded-lg bg-muted p-4 overflow-auto">
                  <code className="text-sm">
{`"use client"

import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowDownWideNarrow, Download, MoreHorizontal, LayoutGrid, CheckCircle2, EyeOff, Eye, AlertCircle, Trash2, XCircle } from "lucide-react"
import { useState } from "react"

interface ListingsToolbarProps {
  variant?: "default" | "compact"
}

export function ListingsToolbar({ variant = "default" }: ListingsToolbarProps) {
  const [showDescriptions, setShowDescriptions] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Toolbar */}
      <div className={\`flex \${variant === 'compact' ? 'flex-row items-center' : 'flex-col'} gap-4\`}>
        {/* Top row */}
        <div className={\`flex items-center justify-between \${variant === 'compact' ? 'flex-1' : 'w-full border-b pb-4'}\`}>
          {variant !== 'compact' && (
            <div className="flex items-center space-x-1 overflow-x-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={\`px-4 py-2 text-sm font-medium rounded-md \${
                  activeTab === "all"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }\`}
              >
                All (494)
              </button>
              <button
                onClick={() => setActiveTab("published")}
                className={\`px-4 py-2 text-sm font-medium \${
                  activeTab === "published"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }\`}
              >
                Published (352)
              </button>
              {/* Additional tabs... */}
            </div>
          )}
          
          {variant === 'compact' && (
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  {activeTab === "all" && <LayoutGrid className="mr-2 h-4 w-4" />}
                  {activeTab === "published" && <CheckCircle2 className="mr-2 h-4 w-4" />}
                  {activeTab === "admin-hidden" && <EyeOff className="mr-2 h-4 w-4" />}
                  {activeTab === "hidden" && <Eye className="mr-2 h-4 w-4" />}
                  {activeTab === "unverified" && <AlertCircle className="mr-2 h-4 w-4" />}
                  {activeTab === "deleted" && <Trash2 className="mr-2 h-4 w-4" />}
                  {activeTab === "refused" && <XCircle className="mr-2 h-4 w-4" />}
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="flex items-center">
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  All Listings (494)
                </SelectItem>
                <SelectItem value="published" className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Published (352)
                </SelectItem>
                {/* Additional items... */}
              </SelectContent>
            </Select>
          )}
          
          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className={variant === 'compact' ? 'w-[42px] px-2' : 'w-[160px]'}>
                <ArrowDownWideNarrow className="h-4 w-4" />
                {variant === 'compact' ? (
                  <span className="sr-only">
                    <SelectValue placeholder="Sort by" />
                  </span>
                ) : (
                  <SelectValue placeholder="Sort by" />
                )}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest" className="flex items-center">
                  <ArrowDownWideNarrow className="mr-2 h-4 w-4" />
                  Newest first
                </SelectItem>
                {/* Additional items... */}
              </SelectContent>
            </Select>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <div className="flex items-center justify-between px-2 py-2">
                  <Label htmlFor="show-descriptions" className="cursor-pointer text-sm font-normal">Show descriptions</Label>
                  <Switch 
                    id="show-descriptions" 
                    checked={showDescriptions} 
                    onCheckedChange={setShowDescriptions}
                  />
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  Download Ad summary
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}`}
                  </code>
                </pre>
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 