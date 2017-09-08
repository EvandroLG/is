/*
  * is - Simple way to check whether the current element matched against a selector
  * http://github.com/evandrolg/is
  * author: Evandro Leopoldino Goncalves <evandrolgoncalves@gmail.com>
  * http://github.com/evandrolg
  * License: MIT
*/


(function(global, doc, N) {

  var getFirstElementChild = function(element) {
    if ('firstElementChild' in element) {
      return element.firstElementChild;
    }

    var nodeList = element.childNodes;
    var i = 0;
    var node = nodeList[i++];

    while (node) {
      if (node.nodeType === 1) {
        return node;
      }

      node = nodeList[i++];
    }

    return null;
  };

  var getLastElementChild = function(element) {
    if ('lastElementChild' in element) {
      return element.lastElementChild;
    }

    var nodeList = element.childNodes;
    var i = nodeList.length - 1;
    var node = nodeList[i--];

    while (node) {
      if (node.nodeType === 1) {
        return node;
      }

      node = nodeList[i--];
    }

    return null;
  };

  var options = {
    'first-child': function() {
      return getFirstElementChild(this.parentNode) === this;
    },

    'last-child': function() {
      return getLastElementChild(this.parentNode) === this;
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

  var matchesSelector = function(selector) {
    var matches = doc.querySelectorAll(selector);
    var i = matches.length;

    while (--i >= 0 && matches.item(i) !== this) {}

    return i > -1;
  };

  var matches = function(selector) {
    return (this.matches || this.matchesSelector || this.msMatchesSelector ||
            this.mozMatchesSelector || this.webkitMatchesSelector ||
            this.oMatchesSelector || matchesSelector)
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
