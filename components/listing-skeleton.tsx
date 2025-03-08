import { Skeleton } from "@/components/ui/skeleton"

interface ListingSkeletonProps {
  isLast?: boolean
}

export function ListingSkeleton({ isLast = false }: ListingSkeletonProps) {
  return (
    <div className="w-full">
      <div className="flex items-start gap-4 px-4 py-6 hover:bg-muted/30 transition-colors">
        {/* Image skeleton - matches ListingItem dimensions exactly */}
        <Skeleton className="w-32 h-24 rounded-lg shrink-0" />
        
        <div className="flex-1 space-y-3">
          {/* Title skeleton */}
          <Skeleton className="h-5 w-3/4" />
          
          {/* Price skeleton */}
          <Skeleton className="h-5 w-24" />
          
          {/* Status and category skeleton */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4 rounded-full" /> {/* Dot separator */}
            <Skeleton className="h-4 w-28" />
          </div>
          
          {/* Location and seller skeleton */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-4 rounded-full" /> {/* Dot separator */}
            <Skeleton className="h-4 w-36" />
          </div>
        </div>
        
        {/* Right side buttons skeleton */}
        <div className="flex flex-col items-end gap-2">
          <Skeleton className="h-9 w-32 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
      
      {/* Separator - only show if not the last item */}
      {!isLast && <Skeleton className="h-px w-full" />}
    </div>
  )
} 