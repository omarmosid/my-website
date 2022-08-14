import { Client } from "@notionhq/client";

/**
 * @credit https://www.section.io/engineering-education/create-a-nextjs-blog-using-typescript-and-notion-api/
 */

const client = new Client({
  auth: process.env.NOTION_KEY,
});

/**
 * Get List of Items from notion database
 */
const getItems = async (database_id: string) => {
  const items = await client.databases.query({
    database_id,
  });
  return items;
};

async function posts() {
  const posts = await getItems(process.env.NOTION_POSTS_DATABASE);
  return posts;
}

async function tips() {
  const tips = await getItems(process.env.NOTION_TIPS_DATABASE);
  return tips;
}

async function projects() {
  const projects = await getItems(process.env.NOTION_PROJECTS_DATABASE);
  return projects;
}

async function getItem(id: string) {
  const myPost = await client.pages.retrieve({
    page_id: id,
  });
  return myPost;
}

async function getBlocks(id: string) {
  const myBlocks = await client.blocks.children.list({
    block_id: id,
  });
  return myBlocks;
}

export { posts, tips, projects, getItems, getItem, getBlocks };
