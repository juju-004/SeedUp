"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import crops from "@/data/crops.json";
import React from "react";

export default function Crop({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = React.use(params);
  const currentCrop = crops.filter(
    (c) => c.cropName.split(" ")[0].toLowerCase() === name,
  )[0];

  return (
    <div className="mx-auto w-full max-w-[970px]">
      <Breadcrumb pageName={name} />

      <div className="overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="mt-4 space-y-7">
            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">
                Planting Season
              </h4>
              <p className="mt-1">{currentCrop.plantingSeason}</p>
            </div>
            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">
                Growth Span
              </h4>
              <p className="mt-1">{currentCrop.growthSpan}</p>
            </div>
            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">
                Harvest Period
              </h4>
              <p className="mt-1">{currentCrop.harvestPeriod}</p>
            </div>
            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">
                Preferred soil
              </h4>
              <p className="mt-1">{currentCrop.preferredSoil}</p>
            </div>
            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">
                Irrigation
              </h4>
              <p className="mt-1">{currentCrop.irrigation}</p>
            </div>
            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">Uses</h4>
              <p className="mt-1">{currentCrop.uses}</p>
            </div>

            {/* <SocialAccounts /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
