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

    // 新建 AVUser 对象实例
    var user = new AV.User();
    // 设置用户名
    user.setUsername(usernameValue);
    // 设置密码
    user.setPassword(passwordValue);

    user.signUp().then(function (loginedUser) {
      alert('Register successfully!');
      
      setTimeout(function(){
        Router.push('/user');
      }, 1500);
      // console.log(loginedUser);
      // Router.pushRoute('/user');
    }, function (error) {
      alert(`error: ${JSON.stringify(error)}`);
    });
  }

  render () {
    return (
      <Layout>
        <Helmet>
          <title>Register - 超凡之旅</title>
        </Helmet>

        <h1>Register</h1>

        <form>
          <label>
            User name:
            <input type="text" ref={ref => this.username = ref}/>
          </label>
          <label>
            Password:
            <input type="password" ref={ref => this.password = ref}/>
          </label>

          <p role="submit" className="btn btn-primary" onClick={this.submit}>Register</p>
        </form>
      </Layout>
    );
  }
}