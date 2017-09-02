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

  var isHidden = function() {
    return !isVisible.call(this);
  };

  var isChecked = function() {
    return this.checked;
  };

  var isSelected = function() {
    return this.selected;
  };

  var matches = function(selector) {
    return (this.matches || this.matchesSelector || this.msMatchesSelector ||
            this.mozMatchesSelector || this.webkitMatchesSelector || this.oMatchesSelector)
           .call(this, selector);
  };

  var contains = function(value) {
    return this.innerText.indexOf(value) >= 0;
  };

  N.is = function(value) {
    if (value.indexOf(':contains(') === 0) {
      return contains.call(this, value.match(/\(\"(.*)\"\)$/)[1]);
    }

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
