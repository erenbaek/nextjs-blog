import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
    console.log('Home!!');
    console.log('NODE_ENV : ', process.env.NODE_ENV);
    console.log('TZ : ', process.env.TZ);
    console.log('NEXT_PUBLIC_ENV_KEY : ', process.env.NEXT_PUBLIC_ENV_KEY);
    
    return (
        <Layout home>
            {/* Keep the existing code here */}
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Full stack programmer at KAURA INC.]</p>
                {/* <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p> */}
            </section>

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
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

// [Static Generation with Data]
// can only be exported from a page. 
// only runs on the server-side
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        }
    }
}

// context : 요청 파라미터
// only if you need to pre-render a page whose data must be fetched at request time.
// Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.
// export async function getServerSideProps(context) {
//     return {
//         props: {

//         }
//     }
// }