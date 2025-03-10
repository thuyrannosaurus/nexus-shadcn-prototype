"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check, ChevronRight, Download, Loader2, Mail, Plus, Send, Trash } from "lucide-react"
import { useState } from "react"

export default function ButtonsPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Buttons & Controls</h1>
        <p className="text-muted-foreground">
          Explore different button styles, states, and interactive controls.
        </p>
      </div>

      <Tabs defaultValue="variants">
        <TabsList>
          <TabsTrigger value="variants">Button Variants</TabsTrigger>
          <TabsTrigger value="states">Button States</TabsTrigger>
          <TabsTrigger value="sizes">Button Sizes</TabsTrigger>
          <TabsTrigger value="icons">With Icons</TabsTrigger>
        </TabsList>
        
        <TabsContent value="variants" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Different button styles for different purposes and hierarchies.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="states" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Button States</CardTitle>
              <CardDescription>
                Different states that buttons can have during interaction.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
              <Button onClick={handleLoadingClick} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading
                  </>
                ) : (
                  "Click to Load"
                )}
              </Button>
              <Button variant="outline" asChild>
                <a href="#" onClick={(e) => e.preventDefault()}>As Link</a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sizes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
              <CardDescription>
                Different button sizes for different contexts.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Button size="lg">Large</Button>
                <Button>Default</Button>
                <Button size="sm">Small</Button>
                <Button size="icon"><Plus className="h-4 w-4" /></Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="lg">Large</Button>
                <Button variant="outline">Default</Button>
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline" size="icon"><Plus className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="icons" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Buttons with Icons</CardTitle>
              <CardDescription>
                Buttons with icons for better visual communication.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" /> Email
              </Button>
              <Button>
                Download <Download className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Send className="mr-2 h-4 w-4" /> Send
              </Button>
              <Button variant="secondary">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="destructive">
                <Trash className="mr-2 h-4 w-4" /> Delete
              </Button>
              <Button variant="outline" size="sm">
                <Check className="mr-2 h-4 w-4" /> Confirm
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 