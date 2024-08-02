import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/post";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Halaman Home</title>
        <meta name="description" value="Web"></meta>
      </Head>
      <main>
        <h1>Hallo</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
