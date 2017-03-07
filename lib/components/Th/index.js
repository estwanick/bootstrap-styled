'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _background = require('../../styled/utilities/background');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Table Header Cell
 */
var Th = _styledComponents2.default.th.withConfig({
  displayName: 'Th__Th',
  componentId: 'Th__Th-cqlclo'
})(['', '/* Reboot Scss*//* Centered by default, but left-align-ed to match the \'td\'s below. */text-align: left;'], (0, _background.getBackgroundUtilities)());

exports.default = Th;