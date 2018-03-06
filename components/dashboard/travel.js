import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { setVehicle, getVehicleList, getMyVehicle } from '../apis';
import classNames from 'classnames';

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      myVehicle: 'foot'
    }
  }

  componentWillMount() {
    this.fetchVehicles();

    // setVehicle('foot');
    this.fetchMyVehicle();
  }

  async fetchVehicles() {
    const vehicles = await getVehicleList();

    if (vehicles && vehicles.length) {
      this.setState({
        vehicles,
      });
    }
  }

  async fetchMyVehicle() {
    const { vehicle, garage } = await getMyVehicle();
    const garageVehicles = this.getGarage(garage);
    
    this.setState({
      myVehicle: vehicle,
      garage: garageVehicles,
    });
  }

  getGarage(data) {
    if (!data) {
      return;
    }

    const keys = data.split(',');
    let result = [];

    if (keys && keys.length) {
      const { vehicles } = this.state;

      keys.map(key => {
        const matchItem = vehicles.find(v => key === v.key);

        if (matchItem && matchItem !== -1) {
          
          result.push(matchItem); 
        }
      });
    }
    console.log(result)
    return result;
  }

  render() {
    const { vehicles, myVehicle, garage } = this.state;

    return (
      <div>
        { garage && garage.length ? (
          <p>我目前的交通工具仓库：
            { garage.map(v => <span key={`garage-${v.name}`}>{v.name}</span>) }
          </p>
        ) : null }

        <Row type="flex" justify="center">
        { vehicles && vehicles.map(v => {
          const cls = classNames({
            'bg-info': v.key === myVehicle,
            'bg-danger': v.key !== myVehicle
          });

          return (
            <Col key={`v-${v.id}`} span={4}>
              <div className={cls}>{ v.name }</div>
            </Col>
          );
        })}
        </Row>
      </div>
    );
  }
}