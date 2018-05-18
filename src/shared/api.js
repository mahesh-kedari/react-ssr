import fetch from 'isomorphic-fetch'

export function fetchPhotos () {
  const encodedURI = encodeURI()

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    });
}

export function fetchPhotoDetails (photoId) {
  const encodedURI = encodeURI()
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    });
}