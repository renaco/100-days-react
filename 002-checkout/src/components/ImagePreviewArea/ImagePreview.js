import React from 'react';
import * as WorkSpace from './WorkspaceComponents';

const ImagePreview = (props) => {
  return (
    <div className="ImagePreview"
      style={{ 'backgroundImage': 'url(' + props.image + ')' }}>
      <div className="WorkspaceOverview">
        <WorkSpace.Information
          name="Coworking Name Space, South Korea"
          price={props.price}
          duration="1"
        />
        <WorkSpace.Meta
          people={props.people}
        />
      </div>
    </div>
  );
}

export default ImagePreview;
