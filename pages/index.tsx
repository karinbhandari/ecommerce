import React from 'react'
import { NextPage } from 'next'
import Layout from '../src/modules/core/components/Layout'
import ProductCard from '../src/modules/core/components/Product/ProductCard/ProductCard'

const Home: NextPage = () => {
  return (
    <Layout>
      <div
        style={{
          width: '100%',
          height: '320px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <ProductCard />

        <ProductCard />
      </div>
    </Layout>
  )
}

export default Home
