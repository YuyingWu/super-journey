import React, { Component } from 'react';
import { Button, List, message, Row, Col, Select } from 'antd';
import mobx, { observable, action, computed, autorun, reaction } from 'mobx';
import mobxReact, { observer } from 'mobx-react';
import AV from '../leancloud';
import { LeanCloudResParser } from '../utils';
import { getUid, getRecords, getTaskList, getGroupTaskList, setVehicle, setUserData } from '../apis';
const moment = require('moment');
const Option = Select.Option;
// import { UserStore } from '../../stores/user';

@observer
export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      uid: '',
      records: [],
      groupTasks: {},
      activeTaskId: ''
    }

    this.renderTask = this.renderTask.bind(this);
    this.claimTask = this.claimTask.bind(this);
    this.fetchGameLog = this.fetchGameLog.bind(this);
    this.fetchTaskList = this.fetchTaskList.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  componentWillMount() {
    this.init();

    this.groupTask();
  }

  async init() {
    const uid = await getUid();

    this.setState({
      uid,
    }, () => {
      this.fetchTaskList();
      this.fetchGameLog();
    });
  }

  async fetchTaskList() {
    const data = await getTaskList();

    this.setState({
      tasks: [...data]
    });
  }

  async groupTask() {
    const group = await getGroupTaskList();

    this.setState({
      groupTasks: group
    });
  }

  async fetchGameLog() {
    const list = await getRecords();

    if (list && list.length) {
      this.setState({
        records: [...list]
      });
    }
  }

  claimTask() {
    const { tasks, activeTaskId: id } = this.state;

    if (!id) {
      return;
    }

    const task = tasks.find(t => t.id === id);
    const { mileage, physical, wisdom } = task;
    const { mileage: uMile, physical: uPhy, wisdom: uWis } = this.props.userstore.user;
    const { uid } = this.state;
    const User = AV.Object.createWithoutData('_User', uid);
    const Task = AV.Object.createWithoutData('Task', task.id);
    const Game = new AV.Object('Game');// 构建 Comment 对象
    Game.set('user', User);
    Game.set('task', Task);

    Game.save().then(results => {
      if (results) {
        message.info('提交成功');

        setUserData({
          mileage: mileage + uMile,
          physical: physical + uPhy,
          wisdom: wisdom + uWis
        }, this.props.userstore.fetchUserData);

        this.setState({
          records: [Object.assign(task, {
            createdAt: moment()
          }), ...this.state.records],
          activeTaskId: ''
        })
      }
    });
  }

  selectChange(id) {
    this.setState({
      activeTaskId: id
    });
  }

  renderTask() {
    const { groupTasks, activeTaskId } = this.state;
    const keys = Object.keys(groupTasks) || [];
    let groupArray = [];

    if (keys.length) {
      keys.map(key => {
        groupArray.push({
          key: key,
          list: groupTasks[key]
        });
      });
    }

    return (
      <div>
      { groupArray.length ? (
        <List
          header={<div>任务中心</div>}
          footer={<div>选择你需要确认的任务，并点击“完成”</div>}
          bordered
          dataSource={groupArray}
          renderItem={item => (
            <List.Item>
              <div style={{
                display: 'block'
              }}>
                <h1>{item.key}</h1><br/>

                <Select defaultValue="请选择" style={{ width: 240 }} onChange={this.selectChange}>
                  { item && item.list && item.list.map(task => (
                    <Option value={task.id} key={`select-${task.id}`}>{ task.name }（{ task.physical ? `体力值 +${task.physical} ` : null}
                    { task.wisdom ? `精神值 +${task.wisdom} ` : null}
                    { task.mileage ? `里程 +${task.mileage}` : null}）</Option>
                  ))}
                </Select>
                
                { activeTaskId ? (
                  <Button type="primary" onClick={this.claimTask}>确认</Button>
                ) : (
                  <Button type="primary" disabled>确认</Button>
                ) }
                
              </div>
            </List.Item>
          )}
        />
      ) : null }
      </div>
    );
  }

  renderRecords() {
    const { records } = this.state;

    return (
      <List
        header={<div>任务打卡</div>}
        footer={<div>打卡的记录</div>}
        bordered
        dataSource={records}
        renderItem={item => (
          <List.Item>
            <div>
              <p>{ moment(item.createdAt).format('HH:mm MMM Do YYYY') }</p>
              <p>
                <span className="text-primary">{item.name}</span>：
                {item.physical ? `体力 +${item.physical}` : null}
                {item.wisdom ? `精神 +${item.wisdom}` : null}
                {item.mileage ? `里程 +${item.mileage}` : null}
              </p>
            </div>
          </List.Item>
        )}
      />
    );
  }

  render() {
    const { tasks, records } = this.state;

    return (
      <div>
        <Row>
          <Col lg={12} md={12} xs={24}>
            { records.length ? this.renderRecords() : null }
          </Col>
          <Col lg={12} md={12} xs={24}>
            <div>
              { tasks.length ? this.renderTask() : null }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}