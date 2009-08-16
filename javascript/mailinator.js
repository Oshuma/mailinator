Mailinator.BASE_URL = 'http://mailinator.com';

function Mailinator(name) {
  this.name = name;
  this.email = formatEmail(name);

  this.inboxURL = actionURL('maildir');
  this.rssURL = actionURL('rss');

  this.widgetURL = function(width, height) {
    url  = Mailinator.BASE_URL + '/widget/mailin8r.jsp';
    url += '?w=' + width;
    url += '&h=' + height;
    url += '&b=' + this.name;
    return url;
  };

  function actionURL(action) {
    return Mailinator.BASE_URL + '/' + action + '.jsp?email=' + name;
  };

  function formatEmail(name) {
    if (name == /^[a-zA-Z0-9]+@mailinator.com$/) return name;
    else return name + '@mailinator.com';
  };
};
