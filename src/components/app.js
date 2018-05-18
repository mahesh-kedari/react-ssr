import React, {Component} from 'react'
import {connect} from 'react-redux'
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {fetchPhotosIfNeeded} from '../redux/actions'


import PhotoContainer from './photoContainer'

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchPhotosIfNeeded())
  }

  render() {
    const {isFetching, photos} = this.props;

    return (
      <div>
        {isFetching && photos.length === 0 && <h2>Loading...</h2>}
        {!isFetching && photos.length === 0 && <h2>Empty.</h2>}
        <PhotoContainer photos={photos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, photos} = state

  return {isFetching, photos}
}

export default connect(mapStateToProps)(App)