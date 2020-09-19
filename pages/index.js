import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date/date';
import Layout, { siteTitle } from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/Alert/Alert';
import fetch from 'node-fetch';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ json, allPostsData }) {
  console.log(json);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Alert type="error">Hello there. This is an alert item</Alert>
      <section className={utilStyles.headingMd}>
        <p>
          Hey there. I am a software developer and an entrepreneur. I develop
          apps and websites
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const json = await res.json();
  const allPostsData = getSortedPostsData();
  return {
    props: {
      json,
      allPostsData,
    },
  };
}
