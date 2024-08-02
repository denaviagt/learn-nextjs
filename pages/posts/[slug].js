import Head from "next/head";
import Link from "next/link";
import { getPost, getSlugs } from "../../lib/post";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: { post },
    // props: {
    //   post: {
    //     title: "Postingan Pertama",
    //     body: "Ini body ",
    //   },
    // },
  };
}

function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" value="Web"></meta>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
