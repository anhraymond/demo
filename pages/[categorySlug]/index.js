import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const CategoryDetail = (props) => {
    return (
        <>
            <Head>
                <title>Danh mục quần áo</title>
                <link rel="icon" href="/favicon.ico" />
                <meta http-equiv="content-type" content="text/html; charset=utf-8"></meta>
                <meta http-equiv="content-language" content="vi"></meta>
                <meta name="title" content="Demo danh mục quần áo"></meta>
                <meta name="description" CONTENT="Demo danh mục quần áo description"></meta>
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>
            <h1>Danh mục</h1>
            <div className="row" style={{ margin: '0 -15px' }}>
                {
                    props.products?.length > 0 &&
                    props.products.map(product => (
                        <div key={product.id} className="col-md-3">
                            <div className="product-box">
                                <img src={product.image} title={product.title} />
                                <Link href={`/${props.categorySlug}/${product.id}`}>
                                    <a><h2>{product.title}</h2></a>
                                </Link>
                                <p>{product.description}</p>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

CategoryDetail.getInitialProps = async (ctx) => {
    const res = await fetch('https://fakestoreapi.com/products?limit=10')
    const json = await res.json()
    return { products: json, categorySlug: ctx.query.categorySlug }
}

export default CategoryDetail