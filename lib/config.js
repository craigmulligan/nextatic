let store = {}

module.exports = {
  set: (data) => {
    store = Object.assign({}, store, data)
    return store;
  },
  store: () => {
    return store;
  }
};
