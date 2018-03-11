import React, { PureComponent } from 'react';
import { Row, Col, Button, message, List, Modal } from 'antd';
import classNames from 'classnames';
import AV from '../leancloud';
import { getVehicleList, getMyVehicle, getUid, getDestinationList, getMyDestination, getTravelList } from '../apis';
import TravelHistory from '../travel/history';
const moment = require('moment');

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      myVehicle: 'foot',
      enableTravel: false,
      travelHistory: [],
      unreadTravelVisible: false,
      destination: {
        name: ''
      },
      lastTravelId: '',
      historyModalVisible: false,
    }

    this.createTravel = this.createTravel.bind(this);
    this.updateTravelStatus = this.updateTravelStatus.bind(this);
    // this.renderModal = this.renderModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.historyClose = this.historyClose.bind(this);
    this.checkMyTravel = this.checkMyTravel.bind(this);
  }

  componentWillMount() {
    this.init();
    this.fetchVehicles();
    this.fetchMyVehicle();
    this.fetchMyDestination();
    this.fetchTravelHistory();
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

  async fetchTravelHistory() {
    const list = await getTravelList();

    this.setState({
      travelHistory: [ ...list ]
    }, () => {
      this.renderLastTravel();
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
    Travel.set('endTime', moment().add(1, 'day').toDate());

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

  renderLastTravel() {
    const { travelHistory } = this.state;

    if (travelHistory && travelHistory.length) {
      const lastTravel = travelHistory[0];

      if (lastTravel.status === 'timesup') {
        this.setState({
          unreadTravelVisible: true,
          destination: lastTravel.destination,
          lastTravelId: lastTravel.travelId,
        });
      }
    }
  }

  handleOk() {
    this.setState({
      unreadTravelVisible: false
    });
  }

  historyClose() {
    this.setState({
      historyModalVisible: false
    });
  }

  checkMyTravel() {
    this.setState({
      historyModalVisible: true,
      unreadTravelVisible: false
    })
  }

  render() {
    const { vehicles, myVehicle, garage, enableTravel, travelHistory, unreadTravelVisible, destination, historyModalVisible, lastTravelId } = this.state;

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

        <Button type="primary" onClick={() => {this.checkMyTravel()}}>我的旅程</Button>

        {
          lastTravelId ? (
            <div>
              <Modal
                visible={unreadTravelVisible}
                title="旅行回来噜"
                closable={false}
                footer={[]}
              >
                <p>经过了一段时间，终于旅行回来噜~</p>
                <Button type="primary" onClick={() => {this.checkMyTravel()}} disabled={!enableTravel}>查看我的旅行</Button>
              </Modal>
            </div>
          ) : null
        }

        <TravelHistory history={travelHistory} onClose={this.historyClose} visible={historyModalVisible} id={lastTravelId} />
      </div>
    );
  }
}