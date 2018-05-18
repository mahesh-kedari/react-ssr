'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPhotosIfNeeded = fetchPhotosIfNeeded;
var REQUEST_PHOTOS = exports.REQUEST_PHOTOS = 'REQUEST_PHOTOS';
var REQUEST_PHOTO_DETAILS = exports.REQUEST_PHOTO_DETAILS = 'REQUEST_PHOTO_DETAILS';
var RECEIVE_PHOTOS = exports.RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
var RECEIVE_PHOTO_DETAILS = exports.RECEIVE_PHOTO_DETAILS = 'RECEIVE_PHOTO_DETAILS';

function requestPhotos() {
  return { type: REQUEST_PHOTOS };
}

function requestPhotoDetails() {
  return { type: REQUEST_PHOTO_DETAILS };
}

function receivePhotos(json) {
  return { type: RECEIVE_PHOTOS, photos: json };
}

function receivePhotoDetails(json) {
  return { type: RECEIVE_PHOTO_DETAILS, photoDetails: json };
}

function fetchPhotos() {
  return function (dispatch) {
    dispatch(requestPhotos());
    return fetch('server/data/photos.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receivePhotos(json));
    });
  };
}

function fetchPhotoDetails() {
  return function (dispatch) {
    dispatch();
  };
}

function shouldFetchPhotos(state) {
  var photos = state.photos;
  if (photos.length == 0) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
}

function fetchPhotosIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchPhotos(getState())) {
      return dispatch(fetchPhotos());
    }
  };
}