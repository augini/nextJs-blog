import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/Alert/Alert';

export default function Home() {
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
    </Layout>
  );
}
