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

  isChecked = function() {
    return this.checked;
  };

  matches = function(selector) {
    return (this.matches || this.matchesSelector || this.msMatchesSelector ||
            this.mozMatchesSelector || this.webkitMatchesSelector || this.oMatchesSelector)
           .call(this, selector);
  };

  N.is = function(value) {
    if (value.indexOf(':') === 0) {
      var options = {
        'first-child': isFirstChild,
        'last-child': isLastChild,
        'visible': isVisible,
        'hidden': isHidden,
        'checked': isChecked
      };

      return options[value.split(':')[1]].call(this);
    }

    return matches.call(this, value);
  };

}(window, document, Node.prototype));
