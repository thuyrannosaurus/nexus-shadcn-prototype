"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, MoreHorizontal, Share2, Star } from "lucide-react"
import { getAssetPath } from "@/utils/path"

export default function CardsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Card Layouts</h1>
        <p className="text-muted-foreground">
          Explore different card designs and layout patterns.
        </p>
      </div>

      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic">Basic Cards</TabsTrigger>
          <TabsTrigger value="profile">Profile Cards</TabsTrigger>
          <TabsTrigger value="product">Product Cards</TabsTrigger>
          <TabsTrigger value="interactive">Interactive Cards</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>A simple card with header, content and footer</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a basic card layout with a header containing a title and description, content area, and a footer with actions.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Card</CardTitle>
                <CardDescription>A card for displaying notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={getAssetPath("/avatars/shadcn.jpg")} alt="Avatar" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Shadcn</p>
                    <p className="text-sm text-muted-foreground">
                      Commented on your post: "This is a great design system!"
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">
                  Mark as read
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Stats Card</CardTitle>
                <CardDescription>A card for displaying statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Total Views</p>
                    <p className="text-2xl font-bold">12.5k</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Engagement Rate</p>
                    <p className="text-2xl font-bold">8.2%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Conversion</p>
                    <p className="text-2xl font-bold">3.1%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="profile" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <CardContent className="p-6 pt-0 -mt-12">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 border-4 border-background">
                    <AvatarImage src={getAssetPath("/avatars/shadcn.jpg")} alt="Avatar" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-semibold">Sarah Connor</h3>
                  <p className="text-sm text-muted-foreground">Product Designer</p>
                  <div className="mt-4 flex gap-2">
                    <Badge>UI/UX</Badge>
                    <Badge variant="outline">Design Systems</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t px-6 py-4">
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm">
                  View Profile
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={getAssetPath("/avatars/shadcn.jpg")} alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>John Doe</CardTitle>
                      <CardDescription>Software Engineer</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Full-stack developer with 5 years of experience in React, Node.js, and TypeScript.
                  Currently working on design systems and component libraries.
                </p>
                <div className="mt-4 flex gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">423</span> connections
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={getAssetPath("/avatars/shadcn.jpg")} alt="Avatar" />
                    <AvatarFallback>EM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Emma Miller</CardTitle>
                    <CardDescription>UX Researcher</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">About</p>
                    <p className="text-sm text-muted-foreground">
                      Passionate about creating user-centered designs through research and testing.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Contact</p>
                    <p className="text-sm text-muted-foreground">emma.miller@example.com</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button className="w-full">
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="product" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={getAssetPath("/images/listing-images/gameboy-console.jpg")}
                  alt="Product" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2">
                  <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-1">
                  <h3 className="font-semibold">Nintendo Game Boy Classic</h3>
                  <p className="text-sm text-muted-foreground">Vintage Gaming</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-bold">$120.00</p>
                  <div className="flex items-center">
                    <Star className="fill-primary text-primary h-4 w-4" />
                    <Star className="fill-primary text-primary h-4 w-4" />
                    <Star className="fill-primary text-primary h-4 w-4" />
                    <Star className="fill-primary text-primary h-4 w-4" />
                    <Star className="text-muted-foreground h-4 w-4" />
                    <span className="ml-1 text-xs text-muted-foreground">(4.0)</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Mechanical Keyboard</CardTitle>
                    <CardDescription>Cherry MX Brown Switches</CardDescription>
                  </div>
                  <Badge>New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Price:</span>
                    <span className="font-medium">$149.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Availability:</span>
                    <span className="text-green-600 font-medium">In Stock</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Rating:</span>
                    <div className="flex items-center">
                      <Star className="fill-primary text-primary h-3 w-3" />
                      <Star className="fill-primary text-primary h-3 w-3" />
                      <Star className="fill-primary text-primary h-3 w-3" />
                      <Star className="fill-primary text-primary h-3 w-3" />
                      <Star className="fill-primary text-primary h-3 w-3" />
                      <span className="ml-1 text-xs">(5.0)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" className="flex-1">Save</Button>
                <Button className="flex-1">Buy Now</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle>Wireless Headphones</CardTitle>
                <div className="flex items-center justify-between">
                  <CardDescription>Premium Audio Quality</CardDescription>
                  <p className="font-bold text-lg">$89.99</p>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Active Noise Cancellation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>30-hour Battery Life</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Bluetooth 5.0</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Built-in Microphone</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="interactive" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Hover Card</CardTitle>
                <CardDescription>Hover to see the effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has hover effects that make it more interactive. Try hovering over it to see what happens.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/10" />
              <CardHeader className="relative">
                <CardTitle>Layered Background</CardTitle>
                <CardDescription>Visual depth with layered elements</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p>This card uses layered background elements to create visual depth and interest.</p>
              </CardContent>
              <CardFooter className="relative">
                <Button variant="outline">Explore</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-dashed border-primary/50 bg-primary/5 transition-all duration-300 hover:border-primary hover:bg-primary/10">
              <CardHeader>
                <CardTitle className="text-primary">Call to Action</CardTitle>
                <CardDescription>A card designed to stand out</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card is designed to stand out from the others with a distinctive style that draws attention.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 