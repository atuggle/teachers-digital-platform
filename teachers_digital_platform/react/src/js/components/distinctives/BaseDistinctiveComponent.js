import React from "react";


export default class BaseDistinctive extends React.Component {
  render() {
    return (
      <div className="Distinctive">
        <div>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <p>{this.props.criteria}</p>
          <p>{this.props.estimatedtime}</p>
        </div>
      </div>
    );
  }
}
