import React, { PureComponent } from 'react';
import { Progress } from 'antd';
import { getUser, getScore, getUserLevel } from './apis';

export default class extends PureComponent {
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

  componentWillMount() {
    this.fetchUserData();
    this.fetchUserScore();
    this.fetchUserLevel();
  }

  async fetchUserData () {
    const user = await getUser();
    const { username } = user;

    this.setState({
      username,
    });
  }

  async fetchUserScore() {
    const { physical, wisdom, mileage } = await getScore();

    this.setState({
      physical,
      wisdom,
      mileage,
    });
  }

  async fetchUserLevel() {
    const {
      level,
      physical: levelPhysical,
      wisdom: levelWisdom
    } = await getUserLevel();

    this.setState({
      level,
      levelPhysical,
      levelWisdom
    });
  }

  render() {
    const { username, physical, wisdom, mileage, level, levelPhysical, levelWisdom } = this.state;

    return (
      <div>
        <h1>{ username }</h1>
        <p>等级：Lv.{ level }</p>

        <div style={{ width: 170 }}>
          体力值：<Progress percent={ physical / levelPhysical * 100 } />
          精神值：<Progress percent={ wisdom / levelWisdom * 100 } />
          里程数：<Progress percent={ mileage / 50 * 100 } />
        </div>
      </div>
    );
  }
}