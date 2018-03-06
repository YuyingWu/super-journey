import React, { PureComponent } from 'react';
import { Button, List, message, Row, Col } from 'antd';
import AV from '../leancloud';
import { LeanCloudResParser } from '../utils';
import { getUid, getRecords } from '../apis';
const moment = require('moment');

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      uid: '',
      records: []
    }

    this.renderTask = this.renderTask.bind(this);
    this.claimTask = this.claimTask.bind(this);
    this.fetchGameLog = this.fetchGameLog.bind(this);
    this.fetchTaskList = this.fetchTaskList.bind(this);
  }

  componentWillMount() {
    this.init();
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

  fetchTaskList() {
    const query = new AV.Query('Task');

    query.find().then(results => {
      let data = [];

      results.map(r => {
        data.push(LeanCloudResParser(r));
      })

      this.setState({
        tasks: [...data]
      });
    }, function (error) {
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

  claimTask(task) {
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
    const { tasks } = this.state;

    return (
      <List
        header={<div>任务中心</div>}
        footer={<div>选择你需要确认的任务，并点击“完成”</div>}
        bordered
        dataSource={tasks}
        renderItem={item => (
          <List.Item>
            <p>
              { item.name }：体力值{item.physical}，精神值{item.wisdom}，里程{item.mileage} 
              <Button type="primary" onClick={() => this.claimTask(item)}>完成</Button>
            </p>
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
                {item.physical ? `体力${item.physical}` : null}
                {item.wisdom ? `精神${item.wisdom}` : null}
                {item.mileage ? `里程${item.mileage}` : null}
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