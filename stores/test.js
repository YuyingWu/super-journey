import React, { Component } from 'react';
import mobx, { observable, action, computed } from 'mobx';
import mobxReact, { observer } from 'mobx-react';

mobx.useStrict(true);

/*Mobx Store*/
export class Store {
	//Observable values can be watched by Observers
	@observable users = [];
	@observable selectedUser = {};
	@computed get selectedId() { 
		return this.selectedUser.id;
	}

	constructor() {
		//Managing Async tasks like ajax calls with Mobx actions
		this.setUsers([{
			"id": 1,
			"name": "Leanne Graham",
			"username": "Bret",
			"email": "Sincere@april.biz",
			"address": {
				"street": "Kulas Light",
				"suite": "Apt. 556",
				"city": "Gwenborough",
				"zipcode": "92998-3874",
				"geo": {
					"lat": "-37.3159",
					"lng": "81.1496"
				}
			},
			"phone": "1-770-736-8031 x56442",
			"website": "hildegard.org",
			"company": {
				"name": "Romaguera-Crona",
				"catchPhrase": "Multi-layered client-server neural-net",
				"bs": "harness real-time e-markets"
			}
		}]);
	}
	//In strict mode, only actions can modify mobx state
	@action setUsers(users) {
		this.users = [...users];
	}
	@action selectUser(user) {
		this.selectedUser = user;
	}
}

export const TestStore = new Store();
