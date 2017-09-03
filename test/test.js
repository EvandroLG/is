(function(global, doc, Q) {

  var fixture = doc.getElementById('qunit-fixture');

  var verifyFirstOrLastChild = function(assert, position) {
    var el = fixture.querySelector('li:' + position + '-child');
    assert.ok(el.is(':' + position + '-child'));

    var wrongEl = fixture.querySelectorAll('li')[1];
    assert.notOk(wrongEl.is(':' + position + '-child'));
  };

  Q.test('first-child', function(assert) {
    verifyFirstOrLastChild(assert, 'first');
  });

  Q.test('last-child', function(assert) {
    verifyFirstOrLastChild(assert, 'last');
  });

  Q.test('visibility', function(assert) {
    var hiddenEl = fixture.querySelectorAll('li')[1];
    var visibleEl = fixture.querySelectorAll('li')[2];

    assert.ok(hiddenEl.is(':hidden'));
    assert.notOk(visibleEl.is(':hidden'));

    assert.ok(visibleEl.is(':visible'));
    assert.notOk(hiddenEl.is(':visible'));
  });

  Q.test('contains', function(assert) {
    var el = fixture.querySelector('li:first-child');
    assert.ok(el.is(':contains("Script")'));
  });

  Q.test('matches', function(assert) {
    var el = fixture.querySelector('li:first-child');
    assert.ok(el.is('li'));
    assert.notOk(el.is('ul'));
  });

  Q.test('checked', function(assert) {
    var el = fixture.querySelector('li:first-child > input');
    assert.ok(el.is(':checked'));
  });

  Q.test('selected', function(assert) {
    var select = fixture.querySelector('select');
    var first = select.querySelector('option:first-child');
    var last = select.querySelector('option:last-child');

    assert.notOk(first.is(':selected'));
    assert.ok(last.is(':selected'));
  });

}(window, document, window.QUnit));
