import Layout from "@components/legacy/Layout";
import { getPost, getPostPaths } from "@utils/mdx";
import { GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import CustomLink from "../../components/legacy/CustomLink";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../../components/legacy/TestComponent")),
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { frontMatter, source } = await getPost(params.slug);

  return {
    props: {
      source,
      frontMatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostPaths();

  return {
    paths,
    fallback: false,
  };
};
