import { Annotation } from "@utils/types/notion.types";

export const transformer = (rawBlocks: Array<any>) => {
  const final = rawBlocks.map((block) => {});
  return [];
};

export const applyStyles = (block: any) => {
  const para = block["paragraph"];

  const rich_text = para.rich_text;

  const final = [];

  rich_text.forEach((text) => {
    const { bold, italic, strikethrough, underline, code, color } =
      text.annotations;
    if (bold) {
      return `<strong>${text}</strong>`;
    }
    if (italic) {
      return `<em>${text}</em>`;
    }
    if (underline) {
      return `<em>${text}</em>`;
    }
    if (bold && italic) {
      return `<strong><em>${text}</em></strong>`;
    }
    if (code) {
      return `<code>${text}</code>`;
    }
  });
};

export const annotationsToHtml = (annotation: Annotation, text: string) => {
  let htmlTag = text;

  const annoToTagMap = {
    bold: "strong",
    italic: "em",
    strikethrough: "s",
    underline: "u",
    code: "code",
  };

  Object.entries(annotation).forEach(([annoKey, annoValue]) => {
    if (annoValue === true) {
      console.log("annoKey", annoKey);
      const tag = annoToTagMap[annoKey];
      console.log("tag", tag);
      htmlTag = surroundWithTag(tag, htmlTag);
    }
  });

  return htmlTag;
};

const surroundWithTag = (tag: string, innerContent: string) => {
  return `<${tag}>${innerContent}</${tag}>`;
};
