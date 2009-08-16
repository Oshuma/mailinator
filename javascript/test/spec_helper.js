Screw.Unit(function() {
  before(function() {
    $('dom_test').empty();
  });
});

// RegExp type matcher.
Screw.Matchers["have"] = {
  match: function(expected, actual) {
    var pattern = new RegExp(expected);
    return pattern.test(actual);
  },
  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' to not have ' : ' to have ') + $.print(expected);
  }
}

// Shorthand helper.
function element(id) {
  return document.getElementById(id);
}

// Helper to output a debug test message.
function debug(message) {
  if (!message) return;
  var domTest = document.getElementById('dom_test');
  domTest.innerHTML += ('<div class="debug">' + message + '</div>');
}
