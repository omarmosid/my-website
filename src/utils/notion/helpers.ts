import { NotionHeadingType } from "@utils/types/notion.types";

export const getHeading = (block: any, headingType: NotionHeadingType) => {
  return block[headingType].rich_text[0].plain_text;
};

export const getImage = (block: any) => {
  return block["image"].external.url;
};

export const getPara = (block: any) => {
  return block["paragraph"].rich_text[0]?.text?.content;
};

export const getTitle = (post: any) => {
  return post.properties.Name.title[0].plain_text;
};
