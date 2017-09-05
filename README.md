# is
Inspired by jQuery method `.is()`, this library is a simple way to check whether the current element matched against a selector.

# Installation
To install `is`, simply execute:
```shell
  npm install is_dom
```

or Bower too:
```shell
  bower install is-dom
```

Or pick up the minified file.

## Browser Support
* Chrome 1.0+
* Firefox 4.0+
* Internet Explorer 8.0+
* Opera 10.5+
* Safari 3.2+

## How to use?
`is` doesn't depend on jQuery or any other library to work. You need only to include the script at the end of your HTML code. Then it will add the method `.is()` in the Node object.

## Parameters
* `.is(":first-child"):Boolean`
Checks whether the element is the first child element

* `.is(":last-child"):Boolean`
Checks whether the element is the last child element

* `.is(":visible"):Boolean`
Returns true whether the element is visible; if not, it returns false

* `.is(":hidden"):Boolean`
Returns true whether the element is hidden; if not, it returns false

* `.is(":checked"):Boolean`
Checks whether the element is checked

* `.is(":checked"):Boolean`
Checks whether the element is selected

* `.is(':contains("<String>")'):Boolean`
Returns true whether part of the string exists in the element; false, if not

* `.is("<Selector>"):Boolean`
Receives a valid selector and returns true if there's match from the given argument.

## Licence
The MIT License (MIT)

Copyright (c) 2017 Evandro Leopoldino Gonçalves

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
