import React, { type FC } from "react";

type JsonLdProps = {
  /** A single schema.org object or an array of them. */
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Injects schema.org structured data as a JSON-LD script tag.
 * Render inside a Server Component (page / layout).
 */
export const JsonLd: FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
