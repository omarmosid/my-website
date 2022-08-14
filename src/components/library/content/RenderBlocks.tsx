import { getHeading, getImage, getPara } from "@utils/notion";
import Image from "next/image";
import React from "react";

type RenderBlocksProps = {
  blocks: Array<any>;
};

const renderBlock = (block: any) => {
  switch (block.type) {
    case "heading_1":
      // For a heading
      return <h1 key={block.id}>{getHeading(block, "heading_1")} </h1>;
    case "heading_2":
      // For a heading
      return <h1 key={block.id}>{getHeading(block, "heading_2")} </h1>;
    case "heading_3":
      // For a heading
      return <h1 key={block.id}>{getHeading(block, "heading_3")} </h1>;
    case "image":
      // For an image
      return (
        <Image key={block.id} src={getImage(block)} width={650} height={400} />
      );
    case "bulleted_list_item":
      // For an unordered list
      return (
        <ul>
          <li>{block["bulleted_list_item"].text[0].plain_text} </li>
        </ul>
      );
    case "paragraph":
      // For a paragraph
      return <p key={block.id}>{getPara(block)} </p>;
    default:
      // For an extra type
      return <p key={block.id}>Unsupported type </p>;
  }
};

const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks = [] }) => {
  return (
    <>
      {blocks.map((block) => {
        return renderBlock(block);
      })}
    </>
  );
};

export { RenderBlocks };
