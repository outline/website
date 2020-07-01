webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),

/***/ "./node_modules/react-tabs/esm/components/Tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/Tab.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tab; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var DEFAULT_CLASS = 'react-tabs__tab';

var Tab = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Tab, _Component);

  function Tab() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.checkFocus();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.checkFocus();
  };

  _proto.checkFocus = function checkFocus() {
    var _this$props = this.props,
        selected = _this$props.selected,
        focus = _this$props.focus;

    if (selected && focus) {
      this.node.focus();
    }
  };

  _proto.render = function render() {
    var _cx,
        _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        disabledClassName = _this$props2.disabledClassName,
        focus = _this$props2.focus,
        id = _this$props2.id,
        panelId = _this$props2.panelId,
        selected = _this$props2.selected,
        selectedClassName = _this$props2.selectedClassName,
        tabIndex = _this$props2.tabIndex,
        tabRef = _this$props2.tabRef,
        attributes = _objectWithoutPropertiesLoose(_this$props2, ["children", "className", "disabled", "disabledClassName", "focus", "id", "panelId", "selected", "selectedClassName", "tabIndex", "tabRef"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", _extends({}, attributes, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, (_cx = {}, _cx[selectedClassName] = selected, _cx[disabledClassName] = disabled, _cx)),
      ref: function ref(node) {
        _this.node = node;
        if (tabRef) tabRef(node);
      },
      role: "tab",
      id: id,
      "aria-selected": selected ? 'true' : 'false',
      "aria-disabled": disabled ? 'true' : 'false',
      "aria-controls": panelId,
      tabIndex: tabIndex || (selected ? '0' : null)
    }), children);
  };

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Tab.defaultProps = {
  className: DEFAULT_CLASS,
  disabledClassName: DEFAULT_CLASS + "--disabled",
  focus: false,
  id: null,
  panelId: null,
  selected: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};

Tab.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  disabledClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  focus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  // private
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // private
  panelId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // private
  selected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  // private
  selectedClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  tabRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func // private

} : undefined;
Tab.tabsRole = 'Tab';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/TabList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/TabList.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabList; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var TabList = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabList, _Component);

  function TabList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["children", "className"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", _extends({}, attributes, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className),
      role: "tablist"
    }), children);
  };

  return TabList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

TabList.defaultProps = {
  className: 'react-tabs__tab-list'
};

TabList.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])
} : undefined;
TabList.tabsRole = 'TabList';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/TabPanel.js":
/*!************************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/TabPanel.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabPanel; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var DEFAULT_CLASS = 'react-tabs__tab-panel';

var TabPanel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabPanel, _Component);

  function TabPanel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabPanel.prototype;

  _proto.render = function render() {
    var _cx;

    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        forceRender = _this$props.forceRender,
        id = _this$props.id,
        selected = _this$props.selected,
        selectedClassName = _this$props.selectedClassName,
        tabId = _this$props.tabId,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["children", "className", "forceRender", "id", "selected", "selectedClassName", "tabId"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, attributes, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, (_cx = {}, _cx[selectedClassName] = selected, _cx)),
      role: "tabpanel",
      id: id,
      "aria-labelledby": tabId
    }), forceRender || selected ? children : null);
  };

  return TabPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

TabPanel.defaultProps = {
  className: DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};

TabPanel.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // private
  selected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  // private
  selectedClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  tabId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string // private

} : undefined;
TabPanel.tabsRole = 'TabPanel';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/Tabs.js":
/*!********************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/Tabs.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/propTypes */ "./node_modules/react-tabs/esm/helpers/propTypes.js");
/* harmony import */ var _UncontrolledTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UncontrolledTabs */ "./node_modules/react-tabs/esm/components/UncontrolledTabs.js");
/* harmony import */ var _helpers_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/count */ "./node_modules/react-tabs/esm/helpers/count.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var MODE_CONTROLLED = 0;
var MODE_UNCONTROLLED = 1;

var Tabs = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleSelected = function (index, last, event) {
      var onSelect = _this.props.onSelect;
      var mode = _this.state.mode; // Call change event handler

      if (typeof onSelect === 'function') {
        // Check if the change event handler cancels the tab change
        if (onSelect(index, last, event) === false) return;
      }

      var state = {
        // Set focus if the change was triggered from the keyboard
        focus: event.type === 'keydown'
      };

      if (mode === MODE_UNCONTROLLED) {
        // Update selected index
        state.selectedIndex = index;
      }

      _this.setState(state);
    };

    _this.state = Tabs.copyPropsToState(_this.props, {}, props.defaultFocus);
    return _this;
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    return Tabs.copyPropsToState(props, state);
  };

  Tabs.getModeFromProps = function getModeFromProps(props) {
    return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
  };

  // preserve the existing selectedIndex from state.
  // If the state has not selectedIndex, default to the defaultIndex or 0
  Tabs.copyPropsToState = function copyPropsToState(props, state, focus) {
    if (focus === void 0) {
      focus = false;
    }

    if ( true && state.mode !== undefined && state.mode !== Tabs.getModeFromProps(props)) {
      throw new Error("Switching between controlled mode (by using `selectedIndex`) and uncontrolled mode is not supported in `Tabs`.\nFor more information about controlled and uncontrolled mode of react-tabs see the README.");
    }

    var newState = {
      focus: focus,
      mode: Tabs.getModeFromProps(props)
    };

    if (newState.mode === MODE_UNCONTROLLED) {
      var maxTabIndex = Object(_helpers_count__WEBPACK_IMPORTED_MODULE_4__["getTabsCount"])(props.children) - 1;
      var selectedIndex = null;

      if (state.selectedIndex != null) {
        selectedIndex = Math.min(state.selectedIndex, maxTabIndex);
      } else {
        selectedIndex = props.defaultIndex || 0;
      }

      newState.selectedIndex = selectedIndex;
    }

    return newState;
  };

  var _proto = Tabs.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        defaultIndex = _this$props.defaultIndex,
        defaultFocus = _this$props.defaultFocus,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "defaultIndex", "defaultFocus"]);

    var _this$state = this.state,
        focus = _this$state.focus,
        selectedIndex = _this$state.selectedIndex;
    props.focus = focus;
    props.onSelect = this.handleSelected;

    if (selectedIndex != null) {
      props.selectedIndex = selectedIndex;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UncontrolledTabs__WEBPACK_IMPORTED_MODULE_3__["default"], props, children);
  };

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Tabs.defaultProps = {
  defaultFocus: false,
  forceRenderTabPanel: false,
  selectedIndex: null,
  defaultIndex: null
};

Tabs.propTypes =  true ? {
  children: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__["childrenPropType"],
  direction: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['rtl', 'ltr']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  defaultFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  defaultIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  disabledTabClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  domRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  forceRenderTabPanel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSelect: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__["onSelectPropType"],
  selectedIndex: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__["selectedIndexPropType"],
  selectedTabClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  selectedTabPanelClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
} : undefined;
Tabs.tabsRole = 'Tabs';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/UncontrolledTabs.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/UncontrolledTabs.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UncontrolledTabs; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _helpers_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/uuid */ "./node_modules/react-tabs/esm/helpers/uuid.js");
/* harmony import */ var _helpers_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/propTypes */ "./node_modules/react-tabs/esm/helpers/propTypes.js");
/* harmony import */ var _helpers_count__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/count */ "./node_modules/react-tabs/esm/helpers/count.js");
/* harmony import */ var _helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }










function isNode(node) {
  return node && 'getAttribute' in node;
} // Determine if a node from event.target is a Tab element


function isTabNode(node) {
  return isNode(node) && node.getAttribute('role') === 'tab';
} // Determine if a tab node is disabled


function isTabDisabled(node) {
  return isNode(node) && node.getAttribute('aria-disabled') === 'true';
}

var canUseActiveElement;

try {
  canUseActiveElement = !!(typeof window !== 'undefined' && window.document && window.document.activeElement);
} catch (e) {
  // Work around for IE bug when accessing document.activeElement in an iframe
  // Refer to the following resources:
  // http://stackoverflow.com/a/10982960/369687
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
  canUseActiveElement = false;
}

var UncontrolledTabs = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledTabs, _Component);

  function UncontrolledTabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.tabNodes = [];

    _this.handleKeyDown = function (e) {
      var direction = _this.props.direction;

      if (_this.isTabFromContainer(e.target)) {
        var index = _this.props.selectedIndex;
        var preventDefault = false;
        var useSelectedIndex = false;

        if (e.keyCode === 32 || e.keyCode === 13) {
          preventDefault = true;
          useSelectedIndex = false;

          _this.handleClick(e);
        }

        if (e.keyCode === 37 || e.keyCode === 38) {
          // Select next tab to the left
          if (direction === 'rtl') {
            index = _this.getNextTab(index);
          } else {
            index = _this.getPrevTab(index);
          }

          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 39 || e.keyCode === 40) {
          // Select next tab to the right
          if (direction === 'rtl') {
            index = _this.getPrevTab(index);
          } else {
            index = _this.getNextTab(index);
          }

          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 35) {
          // Select last tab (End key)
          index = _this.getLastTab();
          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 36) {
          // Select first tab (Home key)
          index = _this.getFirstTab();
          preventDefault = true;
          useSelectedIndex = true;
        } // This prevents scrollbars from moving around


        if (preventDefault) {
          e.preventDefault();
        } // Only use the selected index in the state if we're not using the tabbed index


        if (useSelectedIndex) {
          _this.setSelected(index, e);
        }
      }
    };

    _this.handleClick = function (e) {
      var node = e.target;

      do {
        if (_this.isTabFromContainer(node)) {
          if (isTabDisabled(node)) {
            return;
          }

          var index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);

          _this.setSelected(index, e);

          return;
        } // eslint-disable-next-line no-cond-assign

      } while ((node = node.parentNode) != null);
    };

    return _this;
  }

  var _proto = UncontrolledTabs.prototype;

  _proto.setSelected = function setSelected(index, event) {
    // Check index boundary
    if (index < 0 || index >= this.getTabsCount()) return;
    var _this$props = this.props,
        onSelect = _this$props.onSelect,
        selectedIndex = _this$props.selectedIndex; // Call change event handler

    onSelect(index, selectedIndex, event);
  };

  _proto.getNextTab = function getNextTab(index) {
    var count = this.getTabsCount(); // Look for non-disabled tab from index to the last tab on the right

    for (var i = index + 1; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from first on left to index


    for (var _i = 0; _i < index; _i++) {
      if (!isTabDisabled(this.getTab(_i))) {
        return _i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getPrevTab = function getPrevTab(index) {
    var i = index; // Look for non-disabled tab from index to first tab on the left

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from last tab on right to index


    i = this.getTabsCount();

    while (i-- > index) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getFirstTab = function getFirstTab() {
    var count = this.getTabsCount(); // Look for non disabled tab from the first tab

    for (var i = 0; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getLastTab = function getLastTab() {
    var i = this.getTabsCount(); // Look for non disabled tab from the last tab

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getTabsCount = function getTabsCount() {
    var children = this.props.children;
    return Object(_helpers_count__WEBPACK_IMPORTED_MODULE_5__["getTabsCount"])(children);
  };

  _proto.getPanelsCount = function getPanelsCount() {
    var children = this.props.children;
    return Object(_helpers_count__WEBPACK_IMPORTED_MODULE_5__["getPanelsCount"])(children);
  };

  _proto.getTab = function getTab(index) {
    return this.tabNodes["tabs-" + index];
  };

  _proto.getChildren = function getChildren() {
    var _this2 = this;

    var index = 0;
    var _this$props2 = this.props,
        children = _this$props2.children,
        disabledTabClassName = _this$props2.disabledTabClassName,
        focus = _this$props2.focus,
        forceRenderTabPanel = _this$props2.forceRenderTabPanel,
        selectedIndex = _this$props2.selectedIndex,
        selectedTabClassName = _this$props2.selectedTabClassName,
        selectedTabPanelClassName = _this$props2.selectedTabPanelClassName;
    this.tabIds = this.tabIds || [];
    this.panelIds = this.panelIds || [];
    var diff = this.tabIds.length - this.getTabsCount(); // Add ids if new tabs have been added
    // Don't bother removing ids, just keep them in case they are added again
    // This is more efficient, and keeps the uuid counter under control

    while (diff++ < 0) {
      this.tabIds.push(Object(_helpers_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
      this.panelIds.push(Object(_helpers_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
    } // Map children to dynamically setup refs


    return Object(_helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__["deepMap"])(children, function (child) {
      var result = child; // Clone TabList and Tab components to have refs

      if (Object(_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__["isTabList"])(child)) {
        var listIndex = 0; // Figure out if the current focus in the DOM is set on a Tab
        // If it is we should keep the focus on the next selected tab

        var wasTabFocused = false;

        if (canUseActiveElement) {
          wasTabFocused = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(child.props.children).filter(_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__["isTab"]).some(function (tab, i) {
            return document.activeElement === _this2.getTab(i);
          });
        }

        result = Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, {
          children: Object(_helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__["deepMap"])(child.props.children, function (tab) {
            var key = "tabs-" + listIndex;
            var selected = selectedIndex === listIndex;
            var props = {
              tabRef: function tabRef(node) {
                _this2.tabNodes[key] = node;
              },
              id: _this2.tabIds[listIndex],
              panelId: _this2.panelIds[listIndex],
              selected: selected,
              focus: selected && (focus || wasTabFocused)
            };
            if (selectedTabClassName) props.selectedClassName = selectedTabClassName;
            if (disabledTabClassName) props.disabledClassName = disabledTabClassName;
            listIndex++;
            return Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(tab, props);
          })
        });
      } else if (Object(_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__["isTabPanel"])(child)) {
        var props = {
          id: _this2.panelIds[index],
          tabId: _this2.tabIds[index],
          selected: selectedIndex === index
        };
        if (forceRenderTabPanel) props.forceRender = forceRenderTabPanel;
        if (selectedTabPanelClassName) props.selectedClassName = selectedTabPanelClassName;
        index++;
        result = Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, props);
      }

      return result;
    });
  };

  /**
   * Determine if a node from event.target is a Tab element for the current Tabs container.
   * If the clicked element is not a Tab, it returns false.
   * If it finds another Tabs container between the Tab and `this`, it returns false.
   */
  _proto.isTabFromContainer = function isTabFromContainer(node) {
    // return immediately if the clicked element is not a Tab.
    if (!isTabNode(node)) {
      return false;
    } // Check if the first occurrence of a Tabs container is `this` one.


    var nodeAncestor = node.parentElement;

    do {
      if (nodeAncestor === this.node) return true;
      if (nodeAncestor.getAttribute('data-tabs')) break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);

    return false;
  };

  _proto.render = function render() {
    var _this3 = this;

    // Delete all known props, so they don't get added to DOM
    var _this$props3 = this.props,
        children = _this$props3.children,
        className = _this$props3.className,
        disabledTabClassName = _this$props3.disabledTabClassName,
        domRef = _this$props3.domRef,
        focus = _this$props3.focus,
        forceRenderTabPanel = _this$props3.forceRenderTabPanel,
        onSelect = _this$props3.onSelect,
        selectedIndex = _this$props3.selectedIndex,
        selectedTabClassName = _this$props3.selectedTabClassName,
        selectedTabPanelClassName = _this$props3.selectedTabPanelClassName,
        attributes = _objectWithoutPropertiesLoose(_this$props3, ["children", "className", "disabledTabClassName", "domRef", "focus", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, attributes, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className),
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      ref: function ref(node) {
        _this3.node = node;
        if (domRef) domRef(node);
      },
      "data-tabs": true
    }), this.getChildren());
  };

  return UncontrolledTabs;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

UncontrolledTabs.defaultProps = {
  className: 'react-tabs',
  focus: false
};

UncontrolledTabs.propTypes =  true ? {
  children: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_4__["childrenPropType"],
  direction: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['rtl', 'ltr']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  disabledTabClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  domRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  focus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  forceRenderTabPanel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  selectedTabClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  selectedTabPanelClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
} : undefined;

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/childrenDeepMap.js ***!
  \****************************************************************/
/*! exports provided: deepMap, deepForEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMap", function() { return deepMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepForEach", function() { return deepForEach; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function isTabChild(child) {
  return Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTab"])(child) || Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabList"])(child) || Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabPanel"])(child);
}

function deepMap(children, callback) {
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return null;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (child.props && child.props.children && typeof child.props.children === 'object') {
      // Clone the child that has children and map them too
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, _objectSpread(_objectSpread({}, child.props), {}, {
        children: deepMap(child.props.children, callback)
      }));
    }

    return child;
  });
}
function deepForEach(children, callback) {
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTab"])(child) || Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabPanel"])(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === 'object') {
      if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabList"])(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/count.js":
/*!******************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/count.js ***!
  \******************************************************/
/*! exports provided: getTabsCount, getPanelsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabsCount", function() { return getTabsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelsCount", function() { return getPanelsCount; });
/* harmony import */ var _childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");


function getTabsCount(children) {
  var tabCount = 0;
  Object(_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__["deepForEach"])(children, function (child) {
    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTab"])(child)) tabCount++;
  });
  return tabCount;
}
function getPanelsCount(children) {
  var panelCount = 0;
  Object(_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__["deepForEach"])(children, function (child) {
    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabPanel"])(child)) panelCount++;
  });
  return panelCount;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/elementTypes.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/elementTypes.js ***!
  \*************************************************************/
/*! exports provided: isTab, isTabList, isTabPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTab", function() { return isTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabList", function() { return isTabList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabPanel", function() { return isTabPanel; });
function makeTypeChecker(tabsRole) {
  return function (element) {
    return !!element.type && element.type.tabsRole === tabsRole;
  };
}

var isTab = makeTypeChecker('Tab');
var isTabList = makeTypeChecker('TabList');
var isTabPanel = makeTypeChecker('TabPanel');

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/propTypes.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/propTypes.js ***!
  \**********************************************************/
/*! exports provided: childrenPropType, onSelectPropType, selectedIndexPropType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childrenPropType", function() { return childrenPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectPropType", function() { return onSelectPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedIndexPropType", function() { return selectedIndexPropType; });
/* harmony import */ var _childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");


function childrenPropType(props, propName, componentName) {
  var error;
  var tabsCount = 0;
  var panelsCount = 0;
  var tabListFound = false;
  var listTabs = [];
  var children = props[propName];
  Object(_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__["deepForEach"])(children, function (child) {
    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabList"])(child)) {
      if (child.props && child.props.children && typeof child.props.children === 'object') {
        Object(_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__["deepForEach"])(child.props.children, function (listChild) {
          return listTabs.push(listChild);
        });
      }

      if (tabListFound) {
        error = new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");
      }

      tabListFound = true;
    }

    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTab"])(child)) {
      if (!tabListFound || listTabs.indexOf(child) === -1) {
        error = new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components " + "have to be inside the 'TabList' component.");
      }

      tabsCount++;
    } else if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabPanel"])(child)) {
      panelsCount++;
    }
  });

  if (!error && tabsCount !== panelsCount) {
    error = new Error("There should be an equal number of 'Tab' and 'TabPanel' in `" + componentName + "`. " + ("Received " + tabsCount + " 'Tab' and " + panelsCount + " 'TabPanel'."));
  }

  return error;
}
function onSelectPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop && typeof prop !== 'function') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied " + ("to `" + componentName + "`, expected `function`."));
  } else if (props.selectedIndex != null && prop == null) {
    error = new Error("The " + location + " `" + name + "` is marked as required in `" + componentName + "`, but " + "its value is `undefined` or `null`.\n" + "`onSelect` is required when `selectedIndex` is also set. Not doing so will " + "make the tabs not do anything, as `selectedIndex` indicates that you want to " + "handle the selected tab yourself.\n" + "If you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.");
  }

  return error;
}
function selectedIndexPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop != null && typeof prop !== 'number') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied to " + ("`" + componentName + "`, expected `number`."));
  } else if (props.defaultIndex != null && prop != null) {
    return new Error("The " + location + " `" + name + "` cannot be used together with `defaultIndex` " + ("in `" + componentName + "`.\n") + ("Either remove `" + name + "` to let `" + componentName + "` handle the selected ") + "tab internally or remove `defaultIndex` to handle it yourself.");
  }

  return error;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/uuid.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/uuid.js ***!
  \*****************************************************/
/*! exports provided: default, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
// Get a universally unique identifier
var count = 0;
function uuid() {
  return "react-tabs-" + count++;
}
function reset() {
  count = 0;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-tabs/esm/index.js ***!
  \**********************************************/
/*! exports provided: Tabs, TabList, Tab, TabPanel, resetIdCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tabs */ "./node_modules/react-tabs/esm/components/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _components_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_TabList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TabList */ "./node_modules/react-tabs/esm/components/TabList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabList", function() { return _components_TabList__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Tab */ "./node_modules/react-tabs/esm/components/Tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _components_Tab__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_TabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TabPanel */ "./node_modules/react-tabs/esm/components/TabPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return _components_TabPanel__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _helpers_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/uuid */ "./node_modules/react-tabs/esm/helpers/uuid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIdCounter", function() { return _helpers_uuid__WEBPACK_IMPORTED_MODULE_4__["reset"]; });







/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Button */ "./components/Button.tsx");
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Card */ "./components/Card.tsx");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ "./components/Layout.tsx");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme */ "./theme.ts");
var _jsxFileName = "/Users/tommoor/Projects/outline-site/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Home() {
  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Your team\u2019s knowledge base"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "A modern team knowledgebase for your internal documentation, meeting notes, playbooks, onboarding, work logs, brainstorming, & more\u2026"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "//app.getoutline.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Get Started for Free \u2192")), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "screenshot-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/screenshot.png",
    alt: "Outline screenshot",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "screenshot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Why you\u2019ll love using Outline"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Just a few of the hundreds of features and little details."), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-g container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-3-5 feature-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "lil-wrapper video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("video", {
    width: "386",
    height: "344",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("source", {
    src: "/videos/slash-menu.mp4",
    type: "video/mp4",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }), "Your browser does not support the video tag."))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-2-5 feature-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("em", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, "Beautiful documents, without even trying."), " ", __jsx("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 70
    }
  }), "An intuitive editor with markdown support, slash commands, rich embeds, and more\u2026")))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-g container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-2-5 feature-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("em", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Integrated with Slack."), __jsx("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), "Search and share documents without ever leaving your team chat.")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-3-5 feature-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "lil-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/slack-integration.png",
    style: {
      maxWidth: "558px",
      maxHeight: "294px"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }))))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-g container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-3-5 feature-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-2-5 feature-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("em", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Blazing fast."), __jsx("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), "Outline is built with speed in mind. Documents load in milliseconds \u2013 no page reloads, no waiting.")))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-1-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Outline for:"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "Startups"), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "Support teams"), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, "Sales teams")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, "Title 1"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, "Title 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "Any content 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "Any content 2")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-1-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  })), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-g cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-1-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Blazing Fast",
    description: "Outline is fast, really fast. We\u2019ve worked hard to ensure millisecond response times \u2013 documents load instantly, search is speedy and navigating the UI is delightful.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-1-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Intuitive",
    description: "The Outline editor has been designed from the ground up to be as intuitive as possible. We want to make reading and writing docs enjoyable.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-1-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Organized",
    description: "Give your documentation structure \u2013 with nesting, collections, and automatic backlinks to build a tree of useful information.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-1-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Permissioned",
    description: "Manage the knowledge base with read & write permissions, user groups, guest users, public sharing, and more\u2026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-1-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/integrations",
    title: "Integrated \u2192",
    description: "Simple integrations into tools you use every day like Slack, Figma, Loom and many more. Can\u2019t find the integration you need? There is an open API too.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "pure-u-1 pure-u-md-1-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "https://github.com/outline",
    title: "Open Source \u2192",
    description: "Outline\u2019s source code is public, and the editor is open source so the community can help improve it too. Prefer to host on your own infrastructure? No problem.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  })))), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]) + " " + "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, "On the same page as us? Sign up in just a couple of clicks\u2026"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2222817029", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }, __jsx(components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "//app.getoutline.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }, "Get Started for Free \u2192"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2222817029",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary],
    __self: this
  }, ".feature.__jsx-style-dynamic-selector{width:95vw;padding:".concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, ";margin:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].xlarge, " 0;}.feature.dark.__jsx-style-dynamic-selector{background-image:url(/images/dot-pattern.png);background-repeat:repeat;color:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, ";}.feature-left.__jsx-style-dynamic-selector,.feature-right.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.feature-right.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.feature.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{font-size:2.2em;-webkit-letter-spacing:0.01em;-moz-letter-spacing:0.01em;-ms-letter-spacing:0.01em;letter-spacing:0.01em;font-weight:500;line-height:1.2;}.feature.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector em.__jsx-style-dynamic-selector{font-weight:600;font-style:normal;}.feature.dark.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].almostBlack, ";}.lil-wrapper.__jsx-style-dynamic-selector{display:inline-block;box-shadow:0px 10px 20px 0px rgba(0,0,0,0.1);background:white;padding:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";border-radius:8px;}.lil-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:block;width:100%;}.lil-wrapper.video.__jsx-style-dynamic-selector{padding:0;}.screenshot.__jsx-style-dynamic-selector{max-width:1140px;width:90vw;box-shadow:0px 10px 26px 0px rgba(0,0,0,0.3);border-radius:8px;}.screenshot-wrapper.__jsx-style-dynamic-selector{padding:24px;margin-bottom:0;background:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGrey, ";border-radius:12px;overflow:hidden;}main.__jsx-style-dynamic-selector{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.__jsx-style-dynamic-selector{margin:0;line-height:1.15;font-size:4rem;font-weight:600;}.subtitle.__jsx-style-dynamic-selector{margin:100px 0 -16px;line-height:1.15;font-weight:600;}.title.__jsx-style-dynamic-selector,.description.__jsx-style-dynamic-selector{text-align:center;}.description.__jsx-style-dynamic-selector{line-height:1.5;font-size:1.5rem;max-width:900px;color:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].textSecondary, ";}.video.__jsx-style-dynamic-selector{max-width:100%;}@media (max-width:48em){.title.__jsx-style-dynamic-selector{font-size:2.8rem;max-width:90vw;}.description.__jsx-style-dynamic-selector{font-size:1.3rem;max-width:90vw;}.feature.__jsx-style-dynamic-selector{padding:0;}}.cards.__jsx-style-dynamic-selector{margin:4em -1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0xrQixBQUdzQixBQU1tQyxBQU9qQyxBQUtZLEFBSVQsQUFPQSxBQUttQixBQUlkLEFBUVAsQUFLSixBQUlPLEFBT0osQUFRRSxBQVNOLEFBT1ksQUFPSCxBQUlGLEFBT0QsQUFLSSxBQUtBLEFBS1AsQUFLSyxTQTVDQSxDQTVCbkIsQUFvRUUsQ0F2SHFDLEVBOERyQixDQWhCTCxDQXdCSixBQWtDVCxDQWxGd0IsQUFPSixBQW9FRCxDQTFDTixBQXNETSxBQUtBLEFBVW5CLENBL0JBLEdBdkRrRCxBQWdEL0IsSUF2Q25CLENBaUNpQixFQXhCaUMsQ0FPUixHQStDeEMsQUFLQSxDQWpCZ0IsQ0FwRWxCLENBSUEsR0FxRGtCLEdBTkEsS0EzRVMsRUFMYSxBQXNFekIsQ0E0QnNCLEtBWHJDLEdBTkEsU0EzQ21CLEdBeUJFLEVBekRnQixFQWtEakIsQ0E1Q0MsU0EyQmtCLENBNER2QyxFQWxHQSxFQStEa0IsR0FQbEIsTUF4Q0EsT0FnREEsRUExREEsY0FpQ29CLENBbEJGLENBaURNLGVBaEROLENBa0JsQixlQWpCQSxjQVhBLGlDQTJEeUIsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAncmVhY3QtdGFicyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IENhcmQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IHNwYWNpbmcsIGNvbG9ycyB9IGZyb20gXCJ0aGVtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+WW91ciB0ZWFt4oCZcyBrbm93bGVkZ2UgYmFzZTwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBBIG1vZGVybiB0ZWFtIGtub3dsZWRnZWJhc2UgZm9yIHlvdXIgaW50ZXJuYWwgZG9jdW1lbnRhdGlvbiwgbWVldGluZ1xuICAgICAgICAgIG5vdGVzLCBwbGF5Ym9va3MsIG9uYm9hcmRpbmcsIHdvcmsgbG9ncywgYnJhaW5zdG9ybWluZywgJmFtcDsgbW9yZeKAplxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPEJ1dHRvbiBocmVmPVwiLy9hcHAuZ2V0b3V0bGluZS5jb21cIj5cbiAgICAgICAgICAgIEdldCBTdGFydGVkIGZvciBGcmVlICZyYXJyO1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic2NyZWVuc2hvdC13cmFwcGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zY3JlZW5zaG90LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJPdXRsaW5lIHNjcmVlbnNob3RcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2NyZWVuc2hvdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPldoeSB5b3XigJlsbCBsb3ZlIHVzaW5nIE91dGxpbmU8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIEp1c3QgYSBmZXcgb2YgdGhlIGh1bmRyZWRzIG9mIGZlYXR1cmVzIGFuZCBsaXR0bGUgZGV0YWlscy5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZyBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTMtNSBmZWF0dXJlLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWwtd3JhcHBlciB2aWRlb1wiPlxuICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzODZcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzQ0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIi92aWRlb3Mvc2xhc2gtbWVudS5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4gICAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0yLTUgZmVhdHVyZS1yaWdodFwiPlxuICAgICAgICAgICAgICA8aDI+PGVtPkJlYXV0aWZ1bCBkb2N1bWVudHMsIHdpdGhvdXQgZXZlbiB0cnlpbmcuPC9lbT4gPGJyIC8+XG4gICAgICAgICAgICAgIEFuIGludHVpdGl2ZSBlZGl0b3Igd2l0aCBtYXJrZG93biBzdXBwb3J0LCBzbGFzaCBjb21tYW5kcywgcmljaCBlbWJlZHMsIGFuZCBtb3Jl4oCmPC9oMj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWcgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0yLTUgZmVhdHVyZS1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICA8ZW0+SW50ZWdyYXRlZCB3aXRoIFNsYWNrLjwvZW0+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFNlYXJjaCBhbmQgc2hhcmUgZG9jdW1lbnRzIHdpdGhvdXQgZXZlciBsZWF2aW5nIHlvdXIgdGVhbSBjaGF0LlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0zLTUgZmVhdHVyZS1yaWdodFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NsYWNrLWludGVncmF0aW9uLnBuZ1wiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjU1OHB4XCIsIG1heEhlaWdodDogXCIyOTRweFwiIH19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWcgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0zLTUgZmVhdHVyZS1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0yLTUgZmVhdHVyZS1yaWdodFwiPlxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgPGVtPkJsYXppbmcgZmFzdC48L2VtPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIE91dGxpbmUgaXMgYnVpbHQgd2l0aCBzcGVlZCBpbiBtaW5kLiBEb2N1bWVudHMgbG9hZCBpbiBtaWxsaXNlY29uZHMg4oCTIG5vIHBhZ2UgcmVsb2Fkcywgbm8gd2FpdGluZy5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0yXCI+XG4gICAgICAgICAgICA8aDI+T3V0bGluZSBmb3I6PC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlN0YXJ0dXBzPC9saT5cbiAgICAgICAgICAgICAgPGxpPlN1cHBvcnQgdGVhbXM8L2xpPlxuICAgICAgICAgICAgICA8bGk+U2FsZXMgdGVhbXM8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgICA8VGFiPlRpdGxlIDE8L1RhYj5cbiAgICAgICAgICAgICAgICA8VGFiPlRpdGxlIDI8L1RhYj5cbiAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8aDI+QW55IGNvbnRlbnQgMTwvaDI+XG4gICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8aDI+QW55IGNvbnRlbnQgMjwvaDI+XG4gICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0yXCI+PC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZyBjYXJkc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0zXCI+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJCbGF6aW5nIEZhc3RcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiT3V0bGluZSBpcyBmYXN0LCByZWFsbHkgZmFzdC4gV2XigJl2ZSB3b3JrZWQgaGFyZCB0byBlbnN1cmVcbiAgICAgICAgICAgICAgICBtaWxsaXNlY29uZCByZXNwb25zZSB0aW1lcyDigJMgZG9jdW1lbnRzIGxvYWQgaW5zdGFudGx5LCBzZWFyY2hcbiAgICAgICAgICAgICAgICBpcyBzcGVlZHkgYW5kIG5hdmlnYXRpbmcgdGhlIFVJIGlzIGRlbGlnaHRmdWwuXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0zXCI+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJJbnR1aXRpdmVcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIE91dGxpbmUgZWRpdG9yIGhhcyBiZWVuIGRlc2lnbmVkIGZyb20gdGhlIGdyb3VuZCB1cCB0byBiZVxuICAgICAgICAgICAgICAgICAgYXMgaW50dWl0aXZlIGFzIHBvc3NpYmxlLiBXZSB3YW50IHRvIG1ha2UgcmVhZGluZyBhbmQgd3JpdGluZ1xuICAgICAgICAgICAgICAgICAgZG9jcyBlbmpveWFibGUuXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0zXCI+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJPcmdhbml6ZWRcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR2l2ZSB5b3VyIGRvY3VtZW50YXRpb24gc3RydWN0dXJlIOKAkyB3aXRoIG5lc3RpbmcsIGNvbGxlY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgYW5kIGF1dG9tYXRpYyBiYWNrbGlua3MgdG8gYnVpbGQgYSB0cmVlIG9mIHVzZWZ1bCBpbmZvcm1hdGlvbi5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTNcIj5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBlcm1pc3Npb25lZFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJNYW5hZ2UgdGhlIGtub3dsZWRnZSBiYXNlIHdpdGggcmVhZCAmYW1wOyB3cml0ZSBwZXJtaXNzaW9ucywgdXNlciBncm91cHMsIGd1ZXN0IHVzZXJzLCBwdWJsaWMgc2hhcmluZywgYW5kIG1vcmXigKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTNcIj5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBocmVmPVwiL2ludGVncmF0aW9uc1wiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJJbnRlZ3JhdGVkICZyYXJyO1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTaW1wbGUgaW50ZWdyYXRpb25zIGludG8gdG9vbHMgeW91IHVzZSBldmVyeSBkYXkgbGlrZSBTbGFjayxcbiAgICAgICAgICAgICAgICAgICAgRmlnbWEsIExvb20gYW5kIG1hbnkgbW9yZS4gQ2Fu4oCZdCBmaW5kIHRoZSBpbnRlZ3JhdGlvbiB5b3VcbiAgICAgICAgICAgICAgICAgICAgbmVlZD8gVGhlcmUgaXMgYW4gb3BlbiBBUEkgdG9vLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0zXCI+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk9wZW4gU291cmNlICZyYXJyO1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJPdXRsaW5l4oCZcyBzb3VyY2UgY29kZSBpcyBwdWJsaWMsIGFuZCB0aGUgZWRpdG9yIGlzIG9wZW4gc291cmNlXG4gICAgICAgICAgICAgICAgICBzbyB0aGUgY29tbXVuaXR5IGNhbiBoZWxwIGltcHJvdmUgaXQgdG9vLiBQcmVmZXIgdG8gaG9zdCBvbiB5b3VyIG93biBpbmZyYXN0cnVjdHVyZT8gTm8gcHJvYmxlbS5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIE9uIHRoZSBzYW1lIHBhZ2UgYXMgdXM/IFNpZ24gdXAgaW4ganVzdCBhIGNvdXBsZSBvZiBjbGlja3PigKZcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIvL2FwcC5nZXRvdXRsaW5lLmNvbVwiPlxuICAgICAgICAgICAgR2V0IFN0YXJ0ZWQgZm9yIEZyZWUgJnJhcnI7XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvcD5cblxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mZWF0dXJlIHtcbiAgICAgICAgICB3aWR0aDogOTV2dztcbiAgICAgICAgICBwYWRkaW5nOiAke3NwYWNpbmcubGFyZ2V9O1xuICAgICAgICAgIG1hcmdpbjogJHtzcGFjaW5nLnhsYXJnZX0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlLmRhcmsge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2VzL2RvdC1wYXR0ZXJuLnBuZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYWxtb3N0QmxhY2t9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmUtbGVmdCxcbiAgICAgICAgLmZlYXR1cmUtcmlnaHQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlLXJpZ2h0IHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmUgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZSBoMiBlbSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZS5kYXJrIGgyIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYWxtb3N0QmxhY2t9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbC13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6ICR7c3BhY2luZy5tZWRpdW19O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWwtd3JhcHBlciBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbC13cmFwcGVyLnZpZGVvIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmVlbnNob3Qge1xuICAgICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xuICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyZWVuc2hvdC13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDEwMHB4IDAgLTE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMudGV4dFNlY29uZGFyeX07XG4gICAgICAgIH1cblxuICAgICAgICAudmlkZW8ge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmVhdHVyZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkcyB7XG4gICAgICAgICAgbWFyZ2luOiA0ZW0gLTFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/index.tsx */")));
}

/***/ })

})
//# sourceMappingURL=index.js.4242dd441650244dd13b.hot-update.js.map