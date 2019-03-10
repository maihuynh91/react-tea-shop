import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h1>Page Not Found</h1>
            <span>{this.props.location.pathname} was not found!</span>
          </div>
        </div>
      </div>
    );
  }
}
