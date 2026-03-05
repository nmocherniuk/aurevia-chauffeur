export const formatPhoneTyping = (value: string): string => {
  const digits = value.replaceAll(/\D/g, "").slice(0, 9);

  if (!digits) return "";

  const parts: string[] = [];

  parts.push(digits[0]);

  for (let i = 1; i < digits.length; i += 2) {
    parts.push(digits.slice(i, i + 2));
  }

  return parts.join(" ");
};

export const formatPhoneNumber = formatPhoneTyping;

export const normalizeFrenchPhone = (value: string): string => {
  let digits = value.replaceAll(/\D/g, "");

  if (digits.startsWith("0033")) {
    digits = digits.slice(4);
  } else if (
    digits.startsWith("33") &&
    (digits.length > 9 || ["6", "7"].includes(digits.charAt(2)))
  ) {
    digits = digits.slice(2);
  }

  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  return digits.slice(0, 9);
};

export const normalizePhoneNumber = (value: string): string =>
  value.replaceAll(/\D/g, "");
