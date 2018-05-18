import {REQUEST_PHOTOS, RECEIVE_PHOTOS, REQUEST_PHOTO_DETAILS, RECEIVE_PHOTO_DETAILS} from './actions';

function photos(state = {
  isFetching: false,
  photos: [],
  photoDetails: ''
}, action) {
  switch (action.type) {
    case REQUEST_PHOTOS:
    case REQUEST_PHOTO_DETAILS:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, {
        isFetching: false,
        photos: action.photos
      });
    case RECEIVE_PHOTO_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        photoDetails: action.photoDetails
      })
    default:
      return state
  }
}

export default photos
