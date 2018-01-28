import React, { PureComponent } from 'react';
import Link from 'next/link';
import Footer from './footer';
// import AV from 'leancloud-storage';
// import { Helmet } from "react-helmet";

export default class extends PureComponent {
  // componentDidMount() {
  //   console.log(AV._installationId);
  //   if(!AV._installationId){
  //     const appId = 'Do5NpSTuP2APFE9wQAvDxmxM-gzGzoHsz';
  //     const appKey = 'TL0dh8sMu3m6MMaEukSxPfon';
  //     AV.init({ appId, appKey });
  //   }
  // }
  render() {
    const { children } = this.props;

    return (
      <div>
        <style jsx>{`
          .wgt-nav{
            width: 100%;
            height: 56px;
            background: #2e928a;
            display: flex;
            justify-content: space-between;
          }
          .wgt-nav a{
            line-height: 56px;
            color: #fff;
            text-decoration: none;
            padding-left: 12px;
            padding-right: 12px;
            font-size: 1.8rem;
          }
          .navTitle{
            font-size: 2.4rem;
          }
        `}</style>
        <nav className="wgt-nav">
          <Link href="/">
            <a className="navTitle">首页</a>
          </Link>
          {/*<a href="/blog/">Blog</a>*/}
        </nav>

        <main className="container">
          {children}
        </main>
      </div>
    );
  }
}

// export default ({ children }) =>
//   <div>
//     <style jsx>{`
//     .wgt-nav{
//       width: 100%;
//       height: 56px;
//       background: #2e928a;
//       display: flex;
//       justify-content: space-between;
//     }
//     .wgt-nav a{
//       line-height: 56px;
//       color: #fff;
//       text-decoration: none;
//       padding-left: 12px;
//       padding-right: 12px;
//       font-size: 1.8rem;
//     }
//     .navTitle{
//       font-size: 2.4rem;
//     }
//   `}</style>
//     <nav className="wgt-nav">
//       <Link href="/">
//         <a className="navTitle">首页</a>
//       </Link>
//       {/*<a href="/blog/">Blog</a>*/}
//     </nav>

//     <main className="container">
//       {children}
//     </main>
//   </div>