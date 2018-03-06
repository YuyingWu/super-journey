import React, { PureComponent } from 'react';
import { Menu, Row, Col } from 'antd';
import Task from './task';
import Travel from './travel';
import UserInfo from '../user-info';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'task',
    }

    this.handleClick = this.handleClick.bind(this);
    this.getTab = this.getTab.bind(this);
  }

  handleClick(data) {
    const { key } = data;

    this.setState({
      tab: key
    });
  }

  getTab() {
    const { tab } = this.state;
    let content;

    switch (tab) {
      case 'travel':
        content = <Travel />;
        break;
      default:
        content = <Task />;
    }

    return content;
  }

  render() {
    const { tab } = this.state;

    return (
      <section>
        <style jsx global>{`
          .wgt-menu{
            margin-bottom: 10px;
          }
        `}</style>
        <Row>
          <Col lg={4} md={12} xs={24}>
            <UserInfo />
          </Col>
          <Col lg={20} md={12} xs={24}>
            <div>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[tab]}
                mode="horizontal"
                className="wgt-menu"
              >
                <Menu.Item key="task">
                  任务
                </Menu.Item>
                <Menu.Item key="travel">
                  用户信息
                </Menu.Item>
              </Menu>
              { this.getTab() }
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}