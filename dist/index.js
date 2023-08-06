function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var mitt = _interopDefault(require('mitt'));

var MittContext = React.createContext({
  client: mitt()
});

function MittProvider(_ref) {
  var children = _ref.children;
  return React__default.createElement(MittContext.Provider, {
    value: {
      client: mitt()
    }
  }, children);
}

function useMittEmit() {
  var context = React.useContext(MittContext);
  return {
    emit: function emit(key, data) {
      context.client.emit(key, data);
    }
  };
}

function useMittOn(key, cb) {
  var context = React.useContext(MittContext);
  React.useEffect(function () {
    context.client.on(key, cb);
  }, []);
}

function useMittOff(key, cb) {
  var context = React.useContext(MittContext);
  React.useEffect(function () {
    context.client.on(key, cb);
  }, []);
}

function useMittClear() {
  var context = React.useContext(MittContext);
  return {
    clear: function clear() {
      return context.client.all.clear();
    }
  };
}

exports.MittContext = MittContext;
exports.MittProvider = MittProvider;
exports.useMittClear = useMittClear;
exports.useMittEmit = useMittEmit;
exports.useMittOff = useMittOff;
exports.useMittOn = useMittOn;
//# sourceMappingURL=index.js.map
