"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tickCore = _interopRequireDefault(require("../tick/tick.core.module"));

var _tickViewFlip = _interopRequireDefault(require("./tick.view.flip.module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_tickCore["default"].plugin.add(_tickViewFlip["default"]);

var _default = _tickCore["default"];
exports["default"] = _default;