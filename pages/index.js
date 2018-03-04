import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

export default class extends React.Component {
  render () {
    return (
      <Layout>
        <Helmet>
          <title>Home - 超凡之旅</title>
        </Helmet>

        <h1>Hello, world</h1>
      </Layout>
    );
  }
}