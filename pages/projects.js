import Layout from "../components/layout";
import Head from "next/head";

export default function projectPage() {
  return (
    <Layout>
      <Head>
        <title>소희 블로그</title>
        <meta name="description" content="오늘도 블로깅!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
}
