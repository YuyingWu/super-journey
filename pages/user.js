import React from 'react';
// import AV from 'leancloud-storage';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { Router } from '../routes';
import Layout from '../components/layout';
import { LeanCloudResParser } from '../components/utils';
import AV from '../components/leancloud';
import Dashboard from '../components/dashboard/dashboard';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '无名氏',
      uid: '',
    }

    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    var currentUser = AV.User.current();

    if (currentUser) {
      const { id, username } = LeanCloudResParser(currentUser);
      this.setState({
        username,
        uid: id
      });
    }
    else {
      Router.push('/login');
    }
  }

  logOut() {
    AV.User.logOut();

    setTimeout(function(){
      Router.push('/login');
    }, 1500);
  }

  render () {
    const { username } = this.state;

    return (
      <Layout>
        <style jsx>{`
        `}</style>

        <Helmet>
          <title>User - 超凡之旅</title>
        </Helmet>

        <h1>User Information - {username}</h1>

        <p onClick={this.logOut}>退出</p>

        <Dashboard />
      </Layout>
    );
  }
}