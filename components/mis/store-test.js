import React, { PureComponent } from 'react';

export default class extends PureComponent {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        { this.props.store.users.map(user => (
          <p key={`user-${user.id}`}>{ user.name }</p>
        ))}
      </div>
    );
  }
}