import { isAxiosError } from "axios";

export const filterError = (err: unknown): string => {
  const def = "Something went wrong";

  return isAxiosError(err)
    ? (err.response?.data?.error ?? err.response?.data ?? def)
    : def;
};

function parseGrowthSpanRange(growthSpan: string): [number, number] {
  // Match patterns like "80 - 100 days" OR "6 - 8 months"
  const match = growthSpan.match(/(\d+)\s*-\s*(\d+)\s*(days|months)/i);
  if (!match) throw new Error("Invalid growth span format");

  let min = parseInt(match[1], 10);
  let max = parseInt(match[2], 10);
  const unit = match[3].toLowerCase();

  if (unit === "months") {
    // Convert months → days (approx 30 days per month)
    min *= 30;
    max *= 30;
  }

  return [min, max];
}

/**
 * Returns:
 * - Days left until harvest window opens.
 * - 0 if harvest window is open.
 * - -1 if harvest window has passed.
 */
export function getHarvestStatus(
  plantingDate: string | Date,
  growthSpan: string,
): number | string {
  const [minDays, maxDays] = parseGrowthSpanRange(growthSpan);
  const start = new Date(plantingDate);

  const earliestHarvest = new Date(start);
  earliestHarvest.setDate(start.getDate() + minDays);

  const latestHarvest = new Date(start);
  latestHarvest.setDate(start.getDate() + maxDays);

  const now = new Date();

  if (now < earliestHarvest) {
    // Days left to start harvest window
    const diffMs = earliestHarvest.getTime() - now.getTime();
    return `${Math.ceil(diffMs / (1000 * 60 * 60 * 24))} days`;
  } else if (now <= latestHarvest) {
    // Window open
    return 0;
  } else {
    // Window passed
    return -1;
  }
}
