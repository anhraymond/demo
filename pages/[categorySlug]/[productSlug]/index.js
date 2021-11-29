import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const ProductDetail = (props) => {
    console.log(props.product)
    return (
        !!props.product ? 
        <Fragment>
            <Head>
                <title>{props.product.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta http-equiv="content-type" content="text/html; charset=utf-8"></meta>
                <meta http-equiv="content-language" content="vi"></meta>
                <meta name="title" content={props.product.title}></meta>
                <meta name="description" content={props.product.description}></meta>
                <meta name="robots" content="noindex,nofollow"></meta>

                <meta property="og:title" content={props.product.title} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="http://google.com" />
                <meta property="og:image" content={props.product.image} />
            </Head>
            <div className="product-detail">
                    <div className="product-box-detail">
                        <h1>{props.product.title}</h1>
                        <p>Thuộc danh mục: {props.product.category}</p>
                        <img src={props.product.image} title={props.product.image} />
                        <h3>Mô tả sản phẩm:</h3>
                        <p>{props.product.description}</p>
                    </div>
                    <Link href={`/${props.categorySlug}`}>
                        <a>Trở lại</a>
                    </Link>
            </div>
        </Fragment>
        : <p>Sản phẩm không tồn tại</p>
    )
}

ProductDetail.getInitialProps = async (ctx) => {
    let json = {}
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${ctx.query.productSlug}`)
        json = await res.json()
    } catch (e) {
        json = {}
    }
    console.log(ctx.query, 'ctx.query')
    return { product: json,  categorySlug: ctx.query.categorySlug }
}

export default ProductDetail