import { Location } from "@/src/components/SVGManager/Location";


export interface FormStep {
    label: string;
    icon: React.ReactNode;
}

export const FORM_STEPS: FormStep[] = [
    { label: "Journey", icon: <Location /> },
    { label: "Passenger", icon: <Location /> },
    { label: "Payment", icon: <Location /> },
    { label: "Review", icon: <Location /> },
];