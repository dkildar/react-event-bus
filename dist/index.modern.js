import React, { createContext, useContext, useEffect } from 'react';
import mitt from 'mitt';

var MittContext = createContext({
  client: mitt()
});

function MittProvider(_ref) {
  var children = _ref.children;
  return React.createElement(MittContext.Provider, {
    value: {
      client: mitt()
    }
  }, children);
}

function useMittEmit() {
  var context = useContext(MittContext);
  return {
    emit: function emit(key, data) {
      context.client.emit(key, data);
    }
  };
}

function useMittOn(key, cb) {
  var context = useContext(MittContext);
  useEffect(function () {
    context.client.on(key, cb);
  }, []);
}

function useMittOff(key, cb) {
  var context = useContext(MittContext);
  useEffect(function () {
    context.client.on(key, cb);
  }, []);
}

function useMittClear() {
  var context = useContext(MittContext);
  return {
    clear: function clear() {
      return context.client.all.clear();
    }
  };
}

export { MittContext, MittProvider, useMittClear, useMittEmit, useMittOff, useMittOn };
//# sourceMappingURL=index.modern.js.map
