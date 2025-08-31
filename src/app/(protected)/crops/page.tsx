"use client";

import React from "react";
import { OverviewCard } from "./_components/card";
import crops from "@/data/crops.json";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

function Crops() {
  return (
    <>
      <Breadcrumb pageName="Crops" />
      <span className="mb-2 ml-3 mt-3">Click to a crop view more details</span>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {crops.map((c, i) => (
          <OverviewCard key={i} crop={c} />
        ))}
      </div>
    </>
  );
}

export default Crops;
