import React, { Component } from 'react';
import * as WorkSpace from './WorkspaceComponents';

class ImagePreview extends Component {
  render() {
    return (
      <div className="ImagePreview" 
        style={{ 'backgroundImage': 'url(' + this.props.image + ')' }}>
        <div className="WorkspaceOverview">
          <WorkSpace.Information
            name="Coworking Name Space, South Korea"
            price={this.props.price}
            duration="1"
          />
          <WorkSpace.Meta
            people={this.props.people}
          />
        </div>
      </div>
    );
  }
}

export default ImagePreview;
