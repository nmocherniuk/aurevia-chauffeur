import type { Step, StepStatus } from "../types";

export function getStepsFromIndex(
  labels: string[],
  activeStepIndex: number,
  maxStepReached: number,
): Step[] {
  const current = Math.max(0, Number(activeStepIndex) || 0);
  const maxReached = Math.max(0, Number(maxStepReached) || 0);

  return labels.map((label, index): Step => {
    const status: StepStatus =
      index === current
        ? "current"
        : index < maxReached
          ? "completed"
          : index === maxReached
            ? "started"
            : "notStarted";
    return { label, status };
  });
}
