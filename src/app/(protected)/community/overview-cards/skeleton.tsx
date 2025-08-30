import { Skeleton } from "@/components/ui/skeleton";

export function OverviewCardsSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark"
        >
          <Skeleton className="mb-3 h-24 w-full" />
          <div className="mb-5 flex items-center gap-3">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="h-5 w-24" />
          </div>
          <Skeleton className="h-5 w-32" />
        </div>
      ))}
    </div>
  );
}
