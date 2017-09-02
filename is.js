(function(global, doc, N) {

  var isFirstChild = function() {
    return this.parentNode.firstChild === this;
  };

  var isLastChild = function() {
    return this.parentNode.lastChild === this;
  };

  N.is.prototype = function(value) {
    if (value.indexOf(':') === 0) {
      var options = {
        'first-child': isFirstChild,
        'last-child': isLastChild
      };

      return options[value.split(':')[1]].call(this);
    }
  };

}(window, document, Node.prototype));
