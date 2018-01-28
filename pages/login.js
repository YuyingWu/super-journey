import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import AV from '../components/leancloud';
import { Router } from '../routes';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit() {
    const {
      username: { value: usernameValue },
      password: { value: passwordValue }
    } = this; 

    if (!usernameValue || !passwordValue) {
      alert('Incorrect username or password!');
      return;
    }

    AV.User.logIn(usernameValue, passwordValue).then(function (loginedUser) {
      Router.push('/user');
    }, function (error) {
      alert(`error: ${JSON.stringify(error)}`);
    });
  }

  render () {
    return (
      <Layout>
        <style jsx>{`
        `}</style>

        <Helmet>
          <title>Login - 超凡之旅</title>
        </Helmet>

        <h1>Login</h1>

        <form>
          <label>
            User name:
            <input type="text" ref={ref => this.username = ref}/>
          </label>
          <label>
            Password:
            <input type="password" ref={ref => this.password = ref}/>
          </label>

          <p role="submit" className="btn btn-primary" onClick={this.submit}>Login</p>
        </form>
      </Layout>
    );
  }
}