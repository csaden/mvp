var rValidShortid = /^[a-zA-Z0-9-_]{7,14}$/;

module.exports = {
  isValidShortid: function(shortid) {
    return shortid.match(rValidShortid);
  }
};