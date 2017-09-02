(function(global, doc, N) {

  var isFirstChild = function() {
    return this.parentNode.firstChild === this;
  };

  var isLastChild = function() {
    return this.parentNode.lastChild === this;
  };

  var isVisible = function() {
    return !!( this.offsetWith || this.offsetHeight || this.getClientRects().length );
  };

  isHidden = function() {
    return !isVisible.call(this);
  };

  N.is.prototype = function(value) {
    if (value.indexOf(':') === 0) {
      var options = {
        'first-child': isFirstChild,
        'last-child': isLastChild,
        'visible': isVisible,
        'hidden': isHidden
      };

      return options[value.split(':')[1]].call(this);
    }
  };

}(window, document, Node.prototype));
