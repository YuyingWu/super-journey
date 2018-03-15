import React, { Component } from 'react';
import mobx, { observable, action, computed } from 'mobx';
import mobxReact, { observer } from 'mobx-react';
import { getUser } from '../components/apis';

mobx.useStrict(true);

export class Store {
  @observable user = {};

  @computed get getUser() { 
		return this.user;
  }
  
  constructor() {
    this.setUsers(getUser());
  }

  @action setUsers(user) {
    this.user = Object.assign(this.user, user);
	}
}

export const UserStore = new Store();