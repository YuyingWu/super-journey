import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import mobx, { observable, action, computed } from 'mobx';
import mobxReact, { observer } from 'mobx-react';
import Layout from '../components/layout';
import { TestStore } from '../stores/test';
import Test from '../components/mis/store-test';

@observer
class Mis extends Component {
  render() {
    const pageTitle = '超凡之旅 - 管理后台';

    return (
      <Layout>
        <Helmet>
          <title>{ pageTitle }</title>
        </Helmet>

        <h1>{ pageTitle }</h1>

        <Test />
      </Layout>
    );
  }
}

export default Mis;