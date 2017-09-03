(function(global, doc) {

  var fixture = doc.getElementById('qunit-fixture');

  var verifyFirstOrLastChild = function(assert, position) {
    var el = fixture.querySelector('li:' + position + '-child');
    assert.ok(el.is(':' + position + '-child'));

    var wrongEl = fixture.querySelectorAll('li')[1];
    assert.notOk(wrongEl.is(':' + position + '-child'));
  };

  QUnit.test('first-child', function(assert) {
    verifyFirstOrLastChild(assert, 'first');
  });

  QUnit.test('last-child', function(assert) {
    verifyFirstOrLastChild(assert, 'last');
  });

  QUnit.test('visibility', function(assert) {
    var hiddenEl = fixture.querySelectorAll('li')[1];
    var visibleEl = fixture.querySelectorAll('li')[2];

    assert.ok(hiddenEl.is(':hidden'));
    assert.notOk(visibleEl.is(':hidden'));

    assert.ok(visibleEl.is(':visible'));
    assert.notOk(hiddenEl.is(':visible'));
  });

  QUnit.test('contains', function(assert) {
    var el = fixture.querySelector('li:first-child');
    assert.ok(el.is(':contains("Script")'));
  });

  QUnit.test('matches', function(assert) {
    var el = fixture.querySelector('li:first-child');
    assert.ok(el.is('li'));
    assert.notOk(el.is('ul'));
  });

  QUnit.test('checked', function(assert) {
    var el = fixture.querySelector('li:first-child > input');
    assert.ok(el.is(':checked'));
  });

  QUnit.test('selected', function(assert) {
    var select = fixture.querySelector('select');
    var first = select.querySelector('option:first-child');
    var last = select.querySelector('option:last-child');

    assert.notOk(first.is(':selected'));
    assert.ok(last.is(':selected'));
  });

}(window, document));
