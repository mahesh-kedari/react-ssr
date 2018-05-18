import React, { Component } from 'react'

export default class Photo extends Component {
  render() {
    return (
      <div className="photo-card">
        <img src={this.props.path} alt="unable to render" />
      </div>
    )
  }
}
