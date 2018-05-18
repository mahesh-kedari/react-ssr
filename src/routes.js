import PhotoContainer from './components/photoContainer';
import PhotoView from './components/photoView';
import {fetchPhotoDetails } from './shared/api';

const routes = [
    {
        path : '/',
        exact : true,
        component : PhotoContainer,
    },{
        path : '/photo/:id',
        component : PhotoView,
        fetchInitialData: (path = '') => fetchPhotoDetails(path.split('/').pop())
    }
]

export default routes;