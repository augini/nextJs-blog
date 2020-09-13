import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>Welcome to the first post</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <h1>First Post</h1>
      <h2 className="postItem">
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
