import React from 'react';
import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../src/modules/core/components/Layout';
import ProductCard from '../src/modules/core/components/Product/ProductCard/ProductCard';
import { Button } from '@material-ui/core';
import { incrementCounter, decrementCounter } from '../src/redux/counter/counter.actions';
import { getCount } from '../src/redux/counter/counter.selectors';

const Home: NextPage = () => {
  // const dispatch = useDispatch();
  // const counter = useSelector(getCount);
  return (
    <Layout>
      <div
        style={{
          width: '100%',
          height: '320px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Layout>
  );
};

export default Home;
