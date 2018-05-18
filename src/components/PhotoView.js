import React, { Component } from 'react';


class PhotoView extends Component {

  render() {

    const comments =  this.state.comments.map((option,index) => (
      <div className="" key= {index}>       
        <span className="userColor">{option.user} </span>
        <span> {option.text}</span>
      </div>  
    ));

    return (
      <div className= "row photoDiv mainImgBox ">
        <div className="col-md-6 imgDiv mainImgDiv noPadding">
            <img height="" width="100%" src={this.state.photo.display_src} />
        </div> 
        <div className="col-md-5 userCommentBox">
        {comments}
        </div>
      </div>
    );
  }
}

export default PhotoView;