import React, { PureComponent } from 'react';
import { Row, Col, Button, message } from 'antd';
import classNames from 'classnames';
import AV from '../leancloud';
import { getVehicleList, getMyVehicle, getUid, getDestinationList, getMyDestination } from '../apis';
const moment = require('moment');

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      myVehicle: 'foot',
      enableTravel: false,
    }

    this.createTravel = this.createTravel.bind(this);
    this.updateTravelStatus = this.updateTravelStatus.bind(this);
  }

  componentWillMount() {
    this.init();
    this.fetchVehicles();
    this.fetchMyVehicle();
    this.fetchMyDestination();
  }

  async init() {
    const uid = await getUid();

    this.setState({
      uid,
    });
  }

  updateTravelStatus() {
    const { travelEndTime } = this.state;

    let enableTravel = true;

    if (travelEndTime) {
      enableTravel = moment().isAfter(travelEndTime);
    }

    this.setState({
      enableTravel,
    });
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

    return result;
  }

  async createTravel() {
    const { uid } = this.state;
    const User = AV.Object.createWithoutData('_User', uid);

    //random
    const destinationList = await getDestinationList();
    const random = Math.floor((Math.random() * destinationList.length));
    const desId = destinationList[random].id;
    const Destination = AV.Object.createWithoutData('Destination', desId);
    //random

    const Travel = new AV.Object('Travel');
    Travel.set('user', User);
    Travel.set('destination', Destination);
    Travel.set('startTime', moment().toDate());
    Travel.set('endTime', moment().hour(24).toDate());

    Travel.save().then(results => {
      if (results) {
        const { id } = results;
        const travel = AV.Object.createWithoutData('Travel', id);

        User.set('travel', travel);

        User.save().then(res => {
          message.info('提交成功');

          this.setState({
            enableTravel: false,
          });
        });
      }
    });
  }

  async fetchMyDestination () {
    const destination = await getMyDestination();

    this.setState({
      travelEndTime: destination.endTime || null
    }, () => {
      this.updateTravelStatus();
    });
  }

  render() {
    const { vehicles, myVehicle, garage, enableTravel } = this.state;

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

        <Button type="primary" onClick={() => {this.createTravel()}} disabled={!enableTravel}>去旅行</Button>
      </div>
    );
  }
}