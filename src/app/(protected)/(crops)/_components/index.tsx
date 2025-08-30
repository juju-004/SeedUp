import { compactFormat } from "@/lib/format-number";
// import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";

export async function OverviewCardsGroup() {
  // const { views, profit, products, users } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard />

      <OverviewCard />

      <OverviewCard />

      <OverviewCard />
    </div>
  );
}
