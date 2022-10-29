import Head from 'next/head';
import styles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <form method='post' action='' className={styles.form}>
        {/* <label className={styles.label}>Username</label> */}
        <input
          className={styles.input}
          type='text'
          id='food'
          name='food'
          placeholder='Filter by name..'
          required
        />
      </form>
      <div className={styles.sortByRating}>
        <select>
          <option>Sort by rating</option>
          <option>5 stars</option>
          <option>4 stars</option>
          <option>3 stars</option>
          <option>2 stars</option>
          <option>1 stars</option>
        </select>
      </div>
    </Layout>
  );
}
