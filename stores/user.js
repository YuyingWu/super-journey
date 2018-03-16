import React, { Component } from 'react';
import mobx, { observable, action, computed, autorun, reaction } from 'mobx';
import mobxReact, { observer } from 'mobx-react';
import { queryUser } from '../components/apis';

mobx.useStrict(true);

export class Store {
  @observable user = {
    username: '加载中',
    physical: 0,
    wisdom: 0,
    mileage: 0,
    level: 1
  };
  
  constructor() {
    autorun(()=>this.user, user=>{
      console.log(`Name changed: ${JSON.stringify(user)}`);
    });

    reaction(()=>this.user, (user)=>{
      console.log(`reaction changed: ${JSON.stringify(user)}`);
    });

    this.setUsers = this.setUsers.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);

    this.fetchUserData();
  }

  @action setUsers(user) {
    this.user = Object.assign(this.user, user || {});
  }

  @action async fetchUserData() {
    const data = await queryUser();

    this.setUsers(data);
  }
  
  @computed get currentUser() { 
		return this.user;
  }
}

export const UserStore = new Store();