import React, {Component} from 'react';
import Photo from './photo';

class PhotoContainer extends Component {

  Cardbaker(props) {

    let photos = [];
    for (let photo of props.photos) {
      photos.push(
        <Photo path={photo.display_src} key={photo.id}></Photo>
      );
    }

    return (
      <div className="photo-container">
        {photos}
      </div>
    )
  }

  render() {
    return (<this.Cardbaker photos={this.props.photos}/>);
  }
}

export default PhotoContainer;