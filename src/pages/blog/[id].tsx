import { RenderBlocks } from "@components/library/content/RenderBlocks";
import { getBlocks, getItem, posts } from "@utils/notion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface Props {
  id: string;
  post: any;
  blocks: [any];
}

const NotionPost: NextPage<Props> = (props) => {
  console.log(props);

  return <RenderBlocks blocks={props.blocks} />;
};

export default NotionPost;

export const getStaticProps: GetStaticProps = async (ctx) => {
  let { id } = ctx.params as IParams;
  // Get the dynamic id
  let page_result = await getItem(id);
  // Fetch the post
  let { results } = await getBlocks(id);
  // Get the children
  return {
    props: {
      id,
      post: page_result,
      blocks: results,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let { results } = await posts();
  // Get all posts
  return {
    paths: results.map((post) => {
      // Go through every post
      return {
        params: {
          // set a params object with an id in it
          id: post.id,
        },
      };
    }),
    fallback: false,
  };
};
