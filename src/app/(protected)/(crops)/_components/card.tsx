"use client";

import { MapPin, Sprout } from "lucide-react";
import { Crop } from "../page";
import crops from "@/data/crops.json";
import { getHarvestStatus } from "@/lib/helpers";

export function OverviewCard({ crop }: { crop: Crop }) {
  const mcrop = crops.filter(
    (c) =>
      c.cropName.toLowerCase() === crop.crop_name.split(" ")[0].toLowerCase(),
  )[0];
  console.log(mcrop);

  const harvestPeriod = getHarvestStatus(crop.planting_date, mcrop.growthSpan);
  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <Sprout className="stroke-primary" />

      <div className="mt-6 flex items-end justify-between">
        <dl className="w-full">
          <dt className="mb-1.5 text-heading-6 font-bold capitalize text-dark dark:text-white">
            {crop.crop_name}
          </dt>

          <dd className="text-sm font-medium text-dark-6">
            Planted on {crop.planting_date}
          </dd>
          <div className="mt-3 flex w-full flex-col">
            {typeof harvestPeriod === "string" && (
              <span>
                {getHarvestStatus(crop.planting_date, mcrop.growthSpan)} to
                harvest period
              </span>
            )}
            {harvestPeriod === 0 && <span>Harvest now</span>}
            {harvestPeriod === -1 && <span>Harvest overdue</span>}
          </div>
        </dl>
      </div>
    </div>
  );
}
