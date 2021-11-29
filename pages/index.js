import Head from 'next/head'
import Layout from '../Layout/Layout'

export default function Home(props) {

  return (
    <div className="container">
      <Head>
        <title>demo NextJS The gioi di dong</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8"></meta>
        <meta http-equiv="content-language" content="vi"></meta>
        <meta name="title" content="Demo the gioi di dong"></meta>
        <meta name="Description" CONTENT="Vu Ngoc Anh demo"></meta>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>

      <Layout
        categories={props.categories}
      >
        <h1>Trang chủ</h1>
        <div>
          
        </div>
      </Layout>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const json = await res.json()
  return { categories: json }
}

