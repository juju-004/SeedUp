"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import React, { useActionState, useEffect, useTransition } from "react";
import crops from "@/data/crops.json";
import { ChevronUpIcon } from "@/assets/icons";
import flatpickr from "flatpickr";
import { toast } from "sonner";
import { filterError } from "@/lib/helpers";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "@/context/SessionContext";

function AddCrops() {
  const router = useRouter();
  const session = useSession();

  const cropOptions = crops.map((crop) => ({
    label: crop.cropName,
    value: crop.cropName.split(" ")[0].toLowerCase(),
  }));

  const [error, submitAction, isPending] = useActionState(
    async (previousState: unknown, formData: FormData) => {
      try {
        const crop = formData.get("cropname");
        const date = formData.get("date");

        await axios.post("/api/crop", {
          crop,
          date,
          user_id: session?.id,
        });
        toast.success("Crop Added");
        router.push("/");
      } catch (error: unknown) {
        toast.error(filterError(error));
        return null;
      }
    },
    null,
  );

  useEffect(() => {
    // Init flatpickr
    flatpickr(".form-datepicker", {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
    });
  }, []);
  return (
    <>
      <div className="grid max-w-2xl grid-cols-1 gap-9">
        <ShowcaseSection title="Add crop" className="!p-6.5">
          <form action={submitAction}>
            <Select
              label="Crop"
              placeholder="Select crop"
              className="mb-4.5"
              name="cropname"
              items={cropOptions}
            />
            <div className="mb-4.5">
              <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                Select planting date (optional)
              </label>
              <div className="relative">
                <input
                  className="form-datepicker w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
                  placeholder="mm/dd/yyyy"
                  data-class="flatpickr-right"
                  name="date"
                />

                <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center text-dark-4 dark:text-dark-6">
                  <ChevronUpIcon className="rotate-180" />
                </div>
              </div>
            </div>
            <TextAreaGroup label="Additional Notes (optional)" placeholder="" />

            <button
              disabled={isPending}
              className="mt-6 flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </form>
        </ShowcaseSection>
      </div>
    </>
  );
}

export default AddCrops;
