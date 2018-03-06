import React, { PureComponent } from 'react';
import { Progress } from 'antd';
import { getUser, getScore } from './apis';

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      physical: 0,
      wisdom: 0,
      mileage: 0
    }
  }

  componentWillMount() {
    this.fetchUserData();
    this.fetchUserScore();
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

  render() {
    const { username, physical, wisdom, mileage } = this.state;

    return (
      <div>
        <h1>{ username }</h1>

        <div style={{ width: 170 }}>
          体力值：<Progress percent={ physical } />
          精神值：<Progress percent={ wisdom } />
          里程数：<Progress percent={ mileage } />
        </div>
      </div>
    );
  }
}