"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoView = function (_Component) {
  _inherits(PhotoView, _Component);

  function PhotoView() {
    _classCallCheck(this, PhotoView);

    return _possibleConstructorReturn(this, (PhotoView.__proto__ || Object.getPrototypeOf(PhotoView)).apply(this, arguments));
  }

  _createClass(PhotoView, [{
    key: "render",
    value: function render() {

      var comments = this.state.comments.map(function (option, index) {
        return _react2.default.createElement(
          "div",
          { className: "", key: index },
          _react2.default.createElement(
            "span",
            { className: "userColor" },
            option.user,
            " "
          ),
          _react2.default.createElement(
            "span",
            null,
            " ",
            option.text
          )
        );
      });

      return _react2.default.createElement(
        "div",
        { className: "row photoDiv mainImgBox " },
        _react2.default.createElement(
          "div",
          { className: "col-md-6 imgDiv mainImgDiv noPadding" },
          _react2.default.createElement("img", { height: "", width: "100%", src: this.state.photo.display_src })
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-5 userCommentBox" },
          comments
        )
      );
    }
  }]);

  return PhotoView;
}(_react.Component);

exports.default = PhotoView;