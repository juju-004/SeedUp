"use client";

import { Leaf, MapPin, Sprout } from "lucide-react";
import crops from "@/data/crops.json";
import { getHarvestStatus } from "@/lib/helpers";
import Link from "next/link";

interface Crop {
  cropName: string;
  type: string;
  plantingSeason: string;
  growthSpan: string;
  harvestPeriod: string;
  preferredSoil: string;
  irrigation: string;
  commonVarieties: string[];
  uses: string;
}
export function OverviewCard({ crop }: { crop: Crop }) {
  return (
    <Link
      href={`/crops/${crop.cropName.split(" ")[0].toLowerCase()}`}
      className="cursor-pointer rounded-[10px] bg-white p-6 shadow-1 duration-200 hover:scale-105 dark:bg-gray-dark"
    >
      <Leaf className="stroke-primary" />

      <div className="mt-6 flex items-end justify-between">
        <dl className="w-full">
          <dt className="mb-1.5 text-heading-6 font-bold capitalize text-dark dark:text-white">
            {crop.cropName}
          </dt>

          <dd className="text-sm font-medium text-dark-6">{crop.type}</dd>
        </dl>
      </div>
    </Link>
  );
}
