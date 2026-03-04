export type FormStepProps = {
    getValue: (name: string, isCheckbox: boolean) => string | boolean;
    setValue: (name: string, value: string | boolean) => void;
    errors: Record<string, string | null>;
    handleBlur: (name: string) => () => void;
};
