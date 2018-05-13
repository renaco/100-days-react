import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">Wilsao Oliver</div>
          <div className="image">
            <img src="http://placecage.com/512/512" alt="profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;