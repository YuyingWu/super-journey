import React, { PureComponent } from 'react';
import { Button, List, message, Row, Col, Select } from 'antd';
import AV from '../leancloud';
import { LeanCloudResParser } from '../utils';
import { getUid, getRecords, getTaskList, getGroupTaskList, setVehicle } from '../apis';
const moment = require('moment');
const Option = Select.Option;

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      uid: '',
      records: [],
      groupTasks: {}
    }

    this.renderTask = this.renderTask.bind(this);
    this.claimTask = this.claimTask.bind(this);
    this.fetchGameLog = this.fetchGameLog.bind(this);
    this.fetchTaskList = this.fetchTaskList.bind(this);
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

  claimTask(id) {
    const { tasks } = this.state;
    const task = tasks.find(t => t.id === id);
    const { uid } = this.state;
    const User = AV.Object.createWithoutData('_User', uid);
    const Task = AV.Object.createWithoutData('Task', task.id);

    const Game = new AV.Object('Game');// 构建 Comment 对象
    Game.set('user', User);
    Game.set('task', Task);

    Game.save().then(results => {
      if (results) {
        message.info('提交成功');

        this.setState({
          records: [Object.assign(task, {
            createdAt: moment()
          }), ...this.state.records]
        })
      }
    });
  }

  renderTask() {
    const { groupTasks } = this.state;
    const keys = Object.keys(groupTasks);
    let groupArray = [];

    keys.map(key => {
      groupArray.push({
        key: key,
        list: groupTasks[key]
      });
    });

    return (
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

              <Select defaultValue="请选择" style={{ width: 240 }} onChange={this.claimTask}>
                { item.list.map(task => (
                  <Option value={task.id} key={`select-${task.id}`}>{ task.name }（{ task.physical ? `体力值 +${task.physical} ` : null}
                  { task.wisdom ? `精神值 +${task.wisdom} ` : null}
                  { task.mileage ? `里程 +${task.mileage}` : null}）</Option>
                ))}
              </Select>
            </div>
          </List.Item>
        )}
      />
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