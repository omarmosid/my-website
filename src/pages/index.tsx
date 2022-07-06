import Link from "next/link";
import Layout from "@components/legacy/Layout";
import { getPosts } from "@utils/mdx";
import { HomeHero } from "@components/page-specific/home/HomeHero";

export default function Index({ posts }) {
  return (
    <Layout>
      
      <HomeHero />

      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
