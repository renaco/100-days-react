import React, { Component } from 'react';
import pluralize from 'pluralize';

export function Information(props) {
  let duration = pluralize('day', parseInt(props.duration));

  return (
    <div className="WorkspaceInformation">
      <div className="WorkspaceName">
        {props.name}
      </div>
      <div className="WorkspacePrice">
        <div className="Price">
          {props.price} GBP
        </div>
        <div className="Duration">
          / {duration}
        </div>
      </div>
    </div>
  )
};

export function Meta(props) {
  let people = pluralize('persons', props.people);
  return(
    <div className="WorkspaceMeta">
      <div className="Description">
        Entire office for <strong>{ people }</strong>
      </div>
      <div className="Dates">
      <strong>Mon, 9 May</strong> to
      <strong>Mon, 23 Dec</strong>
      </div>
    </div>
  )
}

class WorkspaceComponents extends Component {
  render() {
    return (
      <div>
        WorkspaceComponents
      </div>
    );
  }
}

export default WorkspaceComponents;