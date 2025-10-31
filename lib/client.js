(() => {
  const colo = {
    doPostMessage: true,

    init(config) {
      if (colo.doPostMessage && window.parent) {
        window.parent.postMessage({ type: 'gameLoadingFinished', config }, '*');
      }
    },

    gameLoadingFinished() {
      console.log('Game loading finished!');

      if (colo.doPostMessage && window.parent) {
        window.parent.postMessage({ type: 'gameLoadingFinished' }, '*');
      }
    },
  };

  // Allow the library to be used in different module systems:
  (((root, factory) => {
    if (typeof define === 'function' && define.amd) {
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      const mod = factory();
      module.exports = mod;
      module.exports.default = mod;
      module.exports.__esModule = true;
    } else {
      (root || (typeof globalThis !== 'undefined' ? globalThis : window)).colo = factory();
    }
  })(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : this, () => {
    if (typeof window !== 'undefined') {
      window.colo = colo;
    }
    return colo;
  }));
})();
