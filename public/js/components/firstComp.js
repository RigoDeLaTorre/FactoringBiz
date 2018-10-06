webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Load = __webpack_require__(120);

var _Load2 = _interopRequireDefault(_Load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadHistory = function LoadHistory(_ref) {
  var loads = _ref.loads,
      selectedLoad = _ref.selectedLoad;

  var loadList = loads.map(function (load, i) {
    return _react2.default.createElement(_Load2.default, { key: i, load: load, selectedLoad: selectedLoad });
  });
  return _react2.default.createElement(
    'section',
    { id: 'load-history' },
    _react2.default.createElement(
      'ul',
      null,
      loadList
    )
  );
};

exports.default = LoadHistory;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  upload1: 'Bill Lading',
  upload2: 'Bill Lading',
  upload1Category: 'Bill of Lading',
  upload2Category: '',
  invoiceAmount: '5000',
  billTo: 'JB Hunt',
  billToAddress: '1212 cherry rd, Paramount, CA',
  firstPickup: '2913 Millenium ct, Long Beach, CA 20929',
  finalDestination: '234 Monrdth ave, Sacramento, CA  10029',
  loadNumber: '1',
  equipmentType: 'dryVan',
  loadLength: '48ft',
  isPayed: false

}, {
  upload1: 'Bill Lading',
  upload2: 'Bill Lading',
  upload1Category: 'Bill of Lading',
  upload2Category: '',
  invoiceAmount: '5000',
  billTo: 'JB Hunt',
  billToAddress: '1212 cherry rd, Paramount, CA',
  firstPickup: '2913 Millenium ct, Long Beach, CA 20929',
  finalDestination: '234 Monrdth ave, Sacramento, CA  10029',
  loadNumber: '1',
  equipmentType: 'dryVan',
  loadLength: '48ft',
  isPayed: false

}, {
  upload1: 'Bill Lading',
  upload2: 'Bill Lading',
  upload1Category: 'Bill of Lading',
  upload2Category: '',
  invoiceAmount: '5000',
  billTo: 'JB Hunt',
  billToAddress: '1212 cherry rd, Paramount, CA',
  firstPickup: '2913 Millenium ct, Long Beach, CA 20929',
  finalDestination: '234 Monrdth ave, Sacramento, CA  10029',
  loadNumber: '1',
  equipmentType: 'dryVan',
  loadLength: '48ft',
  isPayed: false

}, {
  upload1: 'Bill Lading',
  upload2: 'Bill Lading',
  upload1Category: 'Bill of Lading',
  upload2Category: '',
  invoiceAmount: '5000',
  billTo: 'JB Hunt',
  billToAddress: '1212 cherry rd, Paramount, CA',
  firstPickup: '2913 Millenium ct, Long Beach, CA 20929',
  finalDestination: '234 Monrdth ave, Sacramento, CA  10029',
  loadNumber: '1',
  equipmentType: 'dryVan',
  loadLength: '48ft',
  isPayed: false

}];

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'nav' },
        _react2.default.createElement(
          'div',
          { className: 'nav-container' },
          _react2.default.createElement('div', { className: 'top-half' }),
          _react2.default.createElement(
            'div',
            { className: 'nav-links' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/upload', activeClassName: 'selected' },
                'Upload'
              ),
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/credit', activeClassName: 'selected' },
                'Credit'
              ),
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/loadhistory', activeClassName: 'selected' },
                'History'
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upload = function (_Component) {
  _inherits(Upload, _Component);

  function Upload() {
    _classCallCheck(this, Upload);

    var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this));

    _this.handleSubmit = function (e) {
      var _load;

      e.preventDefault();
      console.log('testing submit');

      var load = (_load = {
        upload1: _this.state.upload1
      }, _defineProperty(_load, 'upload1', _this.state.upload1), _defineProperty(_load, 'upload1Category', _this.state.upload1Category), _defineProperty(_load, 'upload2Category', _this.state.upload2Category), _defineProperty(_load, 'invoiceAmount', _this.state.invoiceAmount), _defineProperty(_load, 'billTo', _this.state.billTo), _defineProperty(_load, 'billToAddress', _this.state.billToAddress), _defineProperty(_load, 'firstPickup', _this.state.firstPickup), _defineProperty(_load, 'finalDestination', _this.state.finalDestination), _defineProperty(_load, 'loadNumber', _this.state.loadNumber), _defineProperty(_load, 'equipmentType', _this.state.equipmentType), _defineProperty(_load, 'loadLength', _this.state.loadLength), _defineProperty(_load, 'isPayed', _this.state.isPayed), _load);
      _this.props.handleLoads(load);
      _this.setState(_this.initialState);
    };

    _this.handleChange = function (e) {
      if (e.target.type == 'checkbox') {
        _this.setState(_defineProperty({}, e.target.name, e.target.checked));
      } else {
        _this.setState(_defineProperty({}, e.target.name, e.target.value));
      }
    };

    _this.state = {
      upload1: '',
      upload2: '',
      upload1Category: '',
      upload2Category: '',
      invoiceAmount: '',
      billTo: '',
      billToAddress: '',
      firstPickup: '',
      finalDestination: '',
      loadNumber: '',
      equipmentType: '',
      loadLength: '',
      isPayed: false

    };

    return _this;
  }

  _createClass(Upload, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.initialState = this.state;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'upload' },
        _react2.default.createElement(
          'div',
          { className: 'upload-container' },
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'section',
              { className: 'group-container invoice-section' },
              _react2.default.createElement(
                'h2',
                { className: 'form-title' },
                'Upload your Documents *'
              ),
              _react2.default.createElement(
                'div',
                { className: 'file-upload' },
                _react2.default.createElement(
                  'div',
                  { className: 'group upload-group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'upload1', className: 'custom-file-upload' },
                    ' Upload a file ',
                    this.state.upload1
                  ),
                  _react2.default.createElement('input', { id: 'upload1', type: 'file', name: 'upload1', value: this.state.myFile1, onChange: this.handleChange })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'select',
                    { name: 'upload1Category', value: this.state.upload1Category, onChange: this.handleChange },
                    _react2.default.createElement(
                      'option',
                      { value: 'bol' },
                      'Bill of Lading'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'rateConfirmation' },
                      'Rate Confirmation'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'invoice' },
                      'Invoice'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'file-upload' },
                _react2.default.createElement(
                  'div',
                  { className: 'group upload-group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'upload2', className: 'custom-file-upload' },
                    ' Upload a file ',
                    this.state.upload2
                  ),
                  _react2.default.createElement('input', { id: 'upload2', type: 'file', name: 'upload2', value: this.state.upload2, onChange: this.handleChange })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'select',
                    { name: 'upload2Category', value: this.state.upload2Category, onChange: this.handleChange },
                    _react2.default.createElement(
                      'option',
                      { value: 'bol' },
                      'Bill of Lading'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'rateConfirmation' },
                      'Rate Confirmation'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'invoice' },
                      'Invoice'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group invoice-details' },
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'invoiceAmount' },
                    'Total Invoice Amount'
                  ),
                  _react2.default.createElement('input', { type: 'text', placeholder: '$ 0.00', name: 'invoiceAmount', value: this.state.invoiceAmount, onChange: this.handleChange })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'billTo' },
                    'Bill To Company'
                  ),
                  _react2.default.createElement('input', { type: 'text', placeholder: 'Company Name', name: 'billTo', value: this.state.billTo, onChange: this.handleChange })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'invoiceAmount' },
                    'Bill To Company Address'
                  ),
                  _react2.default.createElement('input', { type: 'text', placeholder: 'Company Address', name: 'billToAddress', value: this.state.billToAddress, onChange: this.handleChange })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details-button' },
                  _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: this.handleSubmit },
                    'Details'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'group-container load-details' },
              _react2.default.createElement(
                'div',
                { className: 'group' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'firstPickup' },
                  'First Pickup'
                ),
                _react2.default.createElement('input', { type: 'text', placeholder: 'Los Angeles, California', name: 'firstPickup', value: this.state.firstPickup, onChange: this.handleChange })
              ),
              _react2.default.createElement(
                'div',
                { className: 'group' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'finalDestination' },
                  'Final Destination'
                ),
                _react2.default.createElement('input', { type: 'text', placeholder: 'Long Beach, California', name: 'finalDestination', value: this.state.finalDestination, onChange: this.handleChange })
              ),
              _react2.default.createElement(
                'div',
                { className: 'group' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'loadNumber' },
                  'Load Number'
                ),
                _react2.default.createElement('input', { type: 'text', placeholder: '0', name: 'loadNumber', value: this.state.loadNumber, onChange: this.handleChange })
              ),
              _react2.default.createElement(
                'div',
                { className: 'group equipment' },
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'equipmentType' },
                    'Equipment Type'
                  ),
                  _react2.default.createElement(
                    'select',
                    { name: 'equipmentType', value: this.state.equipmentType, onChange: this.handleChange },
                    _react2.default.createElement(
                      'option',
                      { value: 'dryVan' },
                      'Dry Van'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'flatBed' },
                      'Flat Bed'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'loadLength' },
                    'Load Length *'
                  ),
                  _react2.default.createElement('input', { type: 'text', placeholder: 'Ft 00', name: 'loadLength', value: this.state.loadLength, onChange: this.handleChange })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'load-info' },
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Wire Transfer Needed ',
                    _react2.default.createElement(
                      'span',
                      null,
                      '$25'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'label',
                    { className: 'switch' },
                    _react2.default.createElement('input', { type: 'checkbox', name: 'isPayed', value: this.state.isPayed, onChange: this.handleChange }),
                    _react2.default.createElement('span', { className: 'slider round' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'load-info' },
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'h6',
                    null,
                    'Your Rate 0%'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'group' },
                  _react2.default.createElement(
                    'h6',
                    null,
                    'TOTAL TO BE PAID'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Upload;
}(_react.Component);

exports.default = Upload;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Load = function Load(_ref) {
  var load = _ref.load;


  return _react2.default.createElement(
    'li',
    { className: 'load-item' },
    _react2.default.createElement(
      'div',
      { className: 'load-list' },
      _react2.default.createElement(
        'h1',
        null,
        load.billTo
      ),
      _react2.default.createElement(
        'h2',
        null,
        '$ ',
        load.invoiceAmount
      ),
      _react2.default.createElement(
        'div',
        { className: 'load-address' },
        _react2.default.createElement(
          'p',
          null,
          load.firstPickup
        ),
        _react2.default.createElement(
          'p',
          null,
          load.finalDestination
        )
      ),
      _react2.default.createElement(
        'a',
        { href: '#' },
        'Details'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'pay-info' },
      _react2.default.createElement(
        'h2',
        null,
        'Paid'
      ),
      _react2.default.createElement(
        'h3',
        null,
        '2017'
      ),
      _react2.default.createElement(
        'h1',
        null,
        'Thu, Apr 13'
      )
    )
  );
};
exports.default = Load;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(41);

var _upload = __webpack_require__(118);

var _upload2 = _interopRequireDefault(_upload);

var _nav = __webpack_require__(117);

var _nav2 = _interopRequireDefault(_nav);

var _LoadHistory = __webpack_require__(115);

var _LoadHistory2 = _interopRequireDefault(_LoadHistory);

var _data = __webpack_require__(116);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.handleLoads = function (load) {
      _this.setState(function (prevState) {
        return {
          loads: [].concat(_toConsumableArray(prevState.loads), [load])
        };
      });
    };

    _this.getValue = function () {
      console.log(_this.first.value);
      console.log(_this.last.value);
      console.log(_this.email.value);
    };

    _this.state = {
      loads: _data2.default,
      selectedLoad: ''
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'home' },
          _react2.default.createElement(_nav2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/upload',
            render: function render(props) {
              return _react2.default.createElement(_upload2.default, _extends({}, props, { handleLoads: _this2.handleLoads }));
            } }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/loadhistory',
            render: function render(props) {
              return _react2.default.createElement(_LoadHistory2.default, _extends({}, props, { loads: _this2.state.loads }));
            } }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/load',
            render: function render(props) {
              return _react2.default.createElement(Load, props);
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _upload2.default })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[121]);