import React, { Component } from 'react';
import pluralize from 'pluralize';

class Information extends Component {
  
  render() {

    this.props.duration > 1 ? this.props.duration + ' days' : this.props.duration + ' day'

    return (
      <div className="WorkspaceInformation">
        <div className="WorkspaceName">
          { this.props.name }
        </div>
        <div className="WorkspacePrice">
          <div className="Price">
            { this.props.price } GBP
          </div>
          <div className="Duration">
           {this.props.duration} / { pluralize('day', parseInt(this.props.duration)) }
          </div>
        </div>
      </div>
    );
  }
}

class Meta extends Component {
  
  render() {
    return(
      <div className="WorkspaceMeta">
        <div className="Description">
          Entire office for <strong>
          {this.props.people} { pluralize('person', this.props.people) }
          </strong>
        </div>
        <div className="Dates">
        <strong>Mon, 9 May</strong> to 
        <strong> Mon, 23 Dec</strong>
        </div>
      </div>
    );
  }
}

export { Information, Meta}
