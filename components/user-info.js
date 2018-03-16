import React, { Component } from 'react';
import { Progress } from 'antd';
import mobx, { observable, action, computed, autorun, reaction } from 'mobx';
import mobxReact, { observer } from 'mobx-react';
import { getUserLevel } from './apis';

@observer
export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      physical: 0,
      wisdom: 0,
      mileage: 0,
      level: 1,
      levelPhysical: 100,
      levelWisdom: 100,
    }
  }

  componentDidMount() {
    this.fetchUserLevel();
  }

  async fetchUserLevel() {
    const {
      physical: levelPhysical,
      wisdom: levelWisdom
    } = await getUserLevel();

    this.setState({
      levelPhysical,
      levelWisdom
    });
  }

  renderProgress(rate) {
    return (
      <div>
        <div style={{
          background: '#f5f5f5',
          height: '8px',
          position: 'relative'
        }}>
          <div style={{
            background: '#1890ff',
            width: rate,
            height: '8px',
            position: 'absolute',
            top: 0
          }} />
        </div>
      </div>
    );
  }

  render() {
    const { levelPhysical, levelWisdom } = this.state;
    const { username, physical, wisdom, mileage, level } = this.props.userstore.user;

    return (
      <div>
        <h1>{ username }</h1>
        <p>等级：Lv.{ level }</p>

        <div style={{ width: 170 }}>
          <p>体力值：{`${physical} / ${levelPhysical}`}</p>
          <p>精神值：{`${wisdom} / ${levelWisdom}`}</p>
          <p>里程数：{`${mileage} / 50`}</p>
        </div>
      </div>
    );
  }
}