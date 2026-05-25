import React, { FC, Fragment } from "react";
import MainContainer from "@/src/components/MainContainer";
import type {
  LegalBlock,
  LegalGroup,
  LegalPage,
  LegalSection,
} from "@/src/content/locales/fr/legal";

type LegalPageContentProps = {
  page: LegalPage;
};

const SECTION_HEADING_CLASS =
  "font-onest text-xl text-text-secondary font-medium";

const SECTION_HEADING_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-onest), sans-serif",
};

function renderTextWithBreaks(text: string | readonly string[]): React.ReactNode {
  if (typeof text === "string") return text;

  return text.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}

function renderBlock(block: LegalBlock, key: number): React.ReactNode {
  switch (block.type) {
    case "p":
      return <p key={key}>{renderTextWithBreaks(block.text)}</p>;
    case "ul":
      return (
        <ul key={key} className="list-disc list-inside space-y-1">
          {block.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    case "h3":
      return (
        <h3 key={key} className="text-white font-medium text-lg mt-6">
          {block.text}
        </h3>
      );
    case "address":
      return (
        <address key={key} className="not-italic text-gray-300 leading-relaxed">
          {block.lines.map((line, idx) => (
            <Fragment key={idx}>
              {idx > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </address>
      );
    default:
      return null;
  }
}

function LegalSectionView({
  section,
  headingLevel,
}: {
  section: LegalSection;
  headingLevel: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <section className="space-y-2" aria-labelledby={section.id}>
      <Heading
        id={section.id}
        className={SECTION_HEADING_CLASS}
        style={SECTION_HEADING_STYLE}
      >
        {section.heading}
      </Heading>
      {section.blocks.map((block, idx) => renderBlock(block, idx))}
    </section>
  );
}

function LegalGroupView({
  group,
  isFirst,
}: {
  group: LegalGroup;
  isFirst: boolean;
}) {
  const headingLevel: "h2" | "h3" = group.groupTitle ? "h3" : "h2";

  return (
    <Fragment>
      {group.groupTitle ? (
        <h2
          className={
            "text-2xl md:text-3xl font-semibold text-white mb-8 font-benzin" +
            (isFirst ? "" : " mt-13")
          }
        >
          {group.groupTitle}
        </h2>
      ) : null}
      {group.sections.map((section) => (
        <LegalSectionView
          key={section.id}
          section={section}
          headingLevel={headingLevel}
        />
      ))}
    </Fragment>
  );
}

export const LegalPageContent: FC<LegalPageContentProps> = ({ page }) => {
  return (
    <MainContainer className="pt-30">
      <article className="text-sm md:text-base text-text-primary leading-relaxed space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-8">
          {page.title}
        </h1>

        {page.intro?.map((block, idx) => renderBlock(block, idx))}

        {page.groups.map((group, idx) => (
          <LegalGroupView key={idx} group={group} isFirst={idx === 0} />
        ))}
      </article>
    </MainContainer>
  );
};
