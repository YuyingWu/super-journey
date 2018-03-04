import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import Task from './task';
import Travel from './travel';
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
        <Menu
          onClick={this.handleClick}
          selectedKeys={[tab]}
          mode="horizontal"
        >
          <Menu.Item key="task">
            任务
          </Menu.Item>
          <Menu.Item key="travel">
            旅行
          </Menu.Item>
        </Menu>

        <div>
          { this.getTab() }
        </div>
      </section>
    );
  }
}