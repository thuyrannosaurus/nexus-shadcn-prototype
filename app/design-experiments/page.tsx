"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shapes, Layers, Wand2, Paintbrush, Lightbulb, List, LayoutGrid } from "lucide-react"
import Link from "next/link"

export default function DesignExperimentsPage() {
  const experiments = [
    {
      title: "Listings Toolbar",
      description: "A horizontal toolbar for listings with tabs, sorting, and options menu.",
      icon: List,
      href: "/design-experiments/listings-toolbar",
    },
    {
      title: "Buttons & Controls",
      description: "Interactive UI controls and button variations for different states and purposes.",
      icon: Shapes,
      href: "/design-experiments/buttons",
    },
    {
      title: "Card Layouts",
      description: "Explore different card designs, layouts, and interactive patterns.",
      icon: Layers,
      href: "/design-experiments/cards",
    },
    {
      title: "Animations",
      description: "Motion design experiments and interactive animations for UI elements.",
      icon: Wand2,
      href: "/design-experiments/animations",
    },
    {
      title: "Color System",
      description: "Color palette explorations, accessibility tests, and theme variations.",
      icon: Paintbrush,
      href: "/design-experiments/color-system",
    },
    {
      title: "Prototypes",
      description: "Interactive prototypes and concept explorations for new features.",
      icon: Lightbulb,
      href: "/design-experiments/prototypes",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Design Experiments</h1>
        <p className="text-muted-foreground">
          Explore interactive design elements and experimental UI components.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experiments.map((experiment) => (
          <Card key={experiment.href} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <experiment.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>{experiment.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-sm">
                {experiment.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link 
                href={experiment.href}
                className="text-sm text-primary hover:underline"
              >
                Explore {experiment.title}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 