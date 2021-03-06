'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var describeFocus = function describeFocus(reducer, expect, _ref) {
  var fromJS = _ref.fromJS;
  return function () {
    it('should set visited on focus and update active with no previous state', function () {
      var state = reducer(undefined, (0, _actions.focus)('foo', 'myField'));
      expect(state).toEqualMap({
        foo: {
          fields: {
            myField: {
              visited: true,
              active: true
            }
          },
          active: 'myField'
        }
      });
    });

    it('should set visited on focus and update active on deep field with no previous state', function () {
      var state = reducer(undefined, (0, _actions.focus)('foo', 'myField.subField'));
      expect(state).toEqualMap({
        foo: {
          fields: {
            myField: {
              subField: {
                visited: true,
                active: true
              }
            }
          },
          active: 'myField.subField'
        }
      });
    });

    it('should set visited on focus and update current with previous state', function () {
      var state = reducer(fromJS({
        foo: {
          values: {
            myField: 'initialValue'
          },
          initial: {
            myField: 'initialValue'
          },
          fields: {
            myField: {},
            otherField: {
              visited: true,
              active: true
            }
          },
          active: 'otherField'
        }
      }), (0, _actions.focus)('foo', 'myField'));
      expect(state).toEqualMap({
        foo: {
          values: {
            myField: 'initialValue'
          },
          initial: {
            myField: 'initialValue'
          },
          fields: {
            otherField: {
              visited: true
            },
            myField: {
              visited: true,
              active: true
            }
          },
          active: 'myField'
        }
      });
    });
  };
};

exports.default = describeFocus;