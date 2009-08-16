Screw.Unit(function() {

  describe('Mailinator', function() {

    // Setup
    var mail = null;
    var randomName = null;
    var primaryEmail = null;

    before(function() {
      randomName   = "awesomeemail" + Math.floor(Math.random() * 420);
      primaryEmail = randomName + '@mailinator.com';
      mail = new Mailinator(randomName);
    });

    it('should have a primary email address', function() {
      expect(mail.email).to(equal, primaryEmail);
    });

    it('should have an inbox URL', function() {
      inboxURL = 'http://mailinator.com/maildir.jsp?email=' + randomName;
      expect(mail.inboxURL).to(equal, inboxURL);
    });

    it('should have an RSS URL', function() {
      rssURL = 'http://mailinator.com/rss.jsp?email=' + randomName;
      expect(mail.rssURL).to(equal, rssURL);
    });

    it('should have a widget URL', function() {
      width  = '500';
      height = '250';
      widgetURL  = 'http://mailinator.com/widget/mailin8r.jsp';
      widgetURL += '?w=' + width;
      widgetURL += '&h=' + height;
      widgetURL += '&b=' + randomName;
      expect(mail.widgetURL(width, height)).to(equal, widgetURL);
    });

    it('should have an alternate email address', function() {
      expect('pending').to(equal, true);
    });

    it('should have an RSS feed', function() {
      expect('pending').to(equal, true);
    });

    it('should fetch a random primary email address', function() {
      expect('pending').to(equal, true);
    });

  }); // Mailinator

});
