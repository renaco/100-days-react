import React from 'react';
import pluralize from 'pluralize';

const Information = (props) => {

  const remainDays = (duration) => {
    return duration > 1 ? `${duration} days` : `${duration} day`;
  }

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
          {remainDays(props.duration)} / {pluralize('day', parseInt(props.duration))}
        </div>
      </div>
    </div>
  );
}

const Meta = (props) => {

  return (
    <div className="WorkspaceMeta">
      <div className="Description">
        Entire office for <strong>
          {props.people} {pluralize('person', props.people)}
        </strong>
      </div>
      <div className="Dates">
        <strong>Mon, 9 May</strong> to
        <strong> Mon, 23 Dec</strong>
      </div>
    </div>
  );
}

export { Information, Meta }
