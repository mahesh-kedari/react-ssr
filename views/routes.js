'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _photoContainer = require('./components/photoContainer');

var _photoContainer2 = _interopRequireDefault(_photoContainer);

var _photoView = require('./components/photoView');

var _photoView2 = _interopRequireDefault(_photoView);

var _api = require('./shared/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    exact: true,
    component: _photoContainer2.default
}, {
    path: '/photo/:id',
    component: _photoView2.default,
    fetchInitialData: function fetchInitialData() {
        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return (0, _api.fetchPhotoDetails)(path.split('/').pop());
    }
}];

exports.default = routes;