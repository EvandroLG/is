(function(global, doc, N) {

  var options = {
    'first-child': function() {
      return this.parentNode.firstElementChild === this;
    },

    'last-child': function() {
      return this.parentNode.lastElementChild === this;
    },

    'visible': function() {
      return !!( this.offsetWith || this.offsetHeight || this.getClientRects().length );
    },

    'hidden': function() {
      return !options.visible.call(this);
    },

    'checked': function() {
      return this.checked;
    },

    'selected': function() {
      return this.selected;
    }
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
      return options[value.split(':')[1]].call(this);
    }

    return matches.call(this, value);
  };

}(window, document, Node.prototype));
