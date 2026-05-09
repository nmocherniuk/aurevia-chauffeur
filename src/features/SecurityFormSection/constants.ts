import { Location } from "@/src/components/SVGManager/Location";
import { Person } from "@/src/components/SVGManager/Person";
import { List } from "@/src/components/SVGManager/List";
import { ShieldCheck } from "@/src/components/SVGManager/ShieldCheck";

export const SECURITY_STEP_LABELS = [
  "Service",
  "Contact",
  "Details",
  "Review",
] as const;

export const SECURITY_LAST_STEP_INDEX = SECURITY_STEP_LABELS.length - 1;

export const SECURITY_STEP_ICONS = [Location, Person, List, ShieldCheck] as const;

export const SECURITY_STEP_ICON_SIZES = [25, 21, 22, 22] as const;
