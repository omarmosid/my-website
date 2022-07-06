import { posts } from "lib/notion";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  posts: [any];
}

const Notion: NextPage<Props> = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                {post.properties.Name.title[0].plain_text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Notion;

export async function getServerSideProps() {
  // Get the posts
  let { results } = await posts();
  // Return the result
  return {
    props: {
      posts: results,
    },
  };
}
