'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('./actions');

function photos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    photos: [],
    photoDetails: ''
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REQUEST_PHOTOS:
    case _actions.REQUEST_PHOTO_DETAILS:
      return Object.assign({}, state, { isFetching: true });
    case _actions.RECEIVE_PHOTOS:
      return Object.assign({}, state, {
        isFetching: false,
        photos: action.photos
      });
    case _actions.RECEIVE_PHOTO_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        photoDetails: action.photoDetails
      });
    default:
      return state;
  }
}

exports.default = photos;