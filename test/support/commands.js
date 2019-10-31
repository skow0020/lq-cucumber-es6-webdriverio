module.exports = {
  getFile: function (name) {
    return this.options.resources.find((file) => { file.includes(name); });
  }
};
