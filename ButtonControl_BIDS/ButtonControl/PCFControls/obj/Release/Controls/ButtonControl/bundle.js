var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ButtonControl/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ButtonControl/index.ts":
/*!********************************!*\
  !*** ./ButtonControl/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar ButtonControl =\n/** @class */\nfunction () {\n  function ButtonControl() {\n    // Value of the field is stored and used inside the control\n    this._value = \"\";\n  }\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If control is marked control-type='standard', it receives an empty div element within which it can render its content.\r\n   */\n\n\n  ButtonControl.prototype.init = function (context, notifyOutputChanged, state, container) {\n    this._context = context; // set the context\n\n    debugger; //Create a button\n\n    this.button = document.createElement(\"button\"); // Get the localized string from localized string\n\n    this._label = context.parameters.btnLabel.raw;\n    this.button.innerHTML = this._label.toString(); //this.button.classList.add(\"SimpleIncrement_Button_Style\");\n\n    this._notifyOutputChanged = notifyOutputChanged; //this.button.addEventListener(\"click\", (event) => { this._value = this._value + 1; this._notifyOutputChanged();});\n\n    this.button.addEventListener(\"click\", this.onButtonClick.bind(this)); // Adding the label and button created to the container DIV.\n\n    this._container = document.createElement(\"div\");\n\n    this._container.appendChild(this.button);\n\n    container.appendChild(this._container);\n  };\n  /**\r\n   * Button Event handler for the button created as part of this control\r\n   * @param event\r\n   */\n\n\n  ButtonControl.prototype.onButtonClick = function (event) {\n    //this._value = this._context.parameters.btnPurpose.raw;\n    this._value = \"true\";\n\n    this._notifyOutputChanged();\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  ButtonControl.prototype.updateView = function (context) {\n    // This method would render the control with the updated values after we call NotifyOutputChanged\n    //set the value of the field control to the raw value from the configured field\n    this._context = context; // set the context    \n\n    this._label = context.parameters.btnLabel.raw;\n    this.button.innerHTML = this._label.toString(); //this._notifyOutputChanged();\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  ButtonControl.prototype.getOutputs = function () {\n    // custom code goes here - remove the line below and return the correct output\n    var result = {\n      btnValue: this._value\n    };\n    return result;\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. canceling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  ButtonControl.prototype.destroy = function () {};\n\n  return ButtonControl;\n}();\n\nexports.ButtonControl = ButtonControl;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ButtonControl/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('BIDS.ButtonControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ButtonControl);
} else {
	var BIDS = BIDS || {};
	BIDS.ButtonControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ButtonControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}