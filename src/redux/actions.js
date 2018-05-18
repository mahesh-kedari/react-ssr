export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const REQUEST_PHOTO_DETAILS = 'REQUEST_PHOTO_DETAILS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const RECEIVE_PHOTO_DETAILS = 'RECEIVE_PHOTO_DETAILS';

function requestPhotos() {
  return {type: REQUEST_PHOTOS}
}

function requestPhotoDetails() {
  return {type: REQUEST_PHOTO_DETAILS}
}

function receivePhotos(json) {
  return {type: RECEIVE_PHOTOS, photos: json}
}

function receivePhotoDetails(json){
  return {type : RECEIVE_PHOTO_DETAILS, photoDetails : json}
}

function fetchPhotos() {
  return dispatch => {
    dispatch(requestPhotos())
    return fetch(`server/data/photos.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePhotos(json)))
  }
}

function fetchPhotoDetails() {
  return dispatch => {
    dispatch()
  }
}

function shouldFetchPhotos(state) {
  const photos = state.photos
  if (photos.length == 0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchPhotosIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPhotos(getState())) {
      return dispatch(fetchPhotos())
    }
  }
}
