"use client";

import React, { useEffect, useState } from "react";
import { OverviewCard } from "./_components/card";
import { OverviewCardsSkeleton } from "./_components/skeleton";
import axios from "axios";
import { useSession } from "@/context/SessionContext";
import { toast } from "sonner";
import { filterError } from "@/lib/helpers";
import { Button } from "@/components/ui-elements/button";
import { useRouter } from "next/navigation";

export interface Crop {
  _id: string;
  user_id: string;
  crop_name: string;
  planting_date: string;
}

function MyCrops() {
  const [crops, setCrops] = useState<null | Crop[]>(null);
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    const getCrops = async () => {
      try {
        const { data } = await axios.get(`/api/crop?user_id=${session?.id}`);
        setCrops(data);
      } catch (error) {
        toast.error(filterError(error));
        setCrops([]);
      }
    };

    crops === null && getCrops();
  }, [crops]);

  return (
    <>
      {crops === null ? (
        <OverviewCardsSkeleton />
      ) : crops.length === 0 ? (
        <div className="fx w-full flex-col gap-9 pt-10 text-center">
          <span>No crops to show</span>
          <Button
            label="Add crop"
            shape={"rounded"}
            onClick={() => router.push("/add-crop")}
            variant="primary"
          ></Button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {crops.map((c, i) => (
            <OverviewCard key={i} crop={c} />
          ))}
        </div>
      )}
    </>
  );
}

export default MyCrops;
