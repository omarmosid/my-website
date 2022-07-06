import { AuthorType } from "./author.types";
import { TagType } from "./tag.types";

export type StatusType = "DRAFT" | "PUBLISHED";

export type PostFrontMatterType = {
  id: string;
  title: string;
  slug: string;
  createdAt: Date;
  excerpt?: string;
  tags?: Array<TagType>;
  author?: AuthorType;
  updatedAt?: Date;
  status?: StatusType;
};

export type PostType = PostFrontMatterType & {
  content: string;
}
