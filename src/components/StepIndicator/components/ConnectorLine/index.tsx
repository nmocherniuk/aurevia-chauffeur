import React from "react";
import { cn } from "@/src/lib/utils";
import { CONNECTOR_HEIGHT } from "../../constants";

export type ConnectorLineProps = {
  isCompleted?: boolean;
};

export function ConnectorLine({ isCompleted = false }: ConnectorLineProps) {
  return (
    <div
      className={cn(
        "min-w-6 flex-1 shrink-0 rounded-full",
        isCompleted ? "bg-primary" : "bg-(--grey)"
      )}
      style={{ height: CONNECTOR_HEIGHT }}
      aria-hidden
    />
  );
}
