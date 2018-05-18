'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../redux/actions');

var _photoContainer = require('./photoContainer');

var _photoContainer2 = _interopRequireDefault(_photoContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      dispatch((0, _actions.fetchPhotosIfNeeded)());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isFetching = _props.isFetching,
          photos = _props.photos;


      return _react2.default.createElement(
        'div',
        null,
        isFetching && photos.length === 0 && _react2.default.createElement(
          'h2',
          null,
          'Loading...'
        ),
        !isFetching && photos.length === 0 && _react2.default.createElement(
          'h2',
          null,
          'Empty.'
        ),
        _react2.default.createElement(_photoContainer2.default, { photos: photos })
      );
    }
  }]);

  return App;
}(_react.Component);

function mapStateToProps(state) {
  var isFetching = state.isFetching,
      photos = state.photos;


  return { isFetching: isFetching, photos: photos };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);