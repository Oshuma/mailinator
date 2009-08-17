jQuery.fn.slideToggle = function() {
  if (this.css('display') == 'none') this.slideDown();
  else this.slideUp();
}

$(document).ready(function() {
  var exampleName = $('#example-name').val();

  $('#example-name').click(function() {
    if ($(this).val() == exampleName) $(this).val('');
  });

  $('#example-form').submit(function() {
    $('#example').css('border-bottom', 'none')
                 .css('-moz-border-radius-bottomright', '0')
                 .css('-moz-border-radius-bottomleft', '0')
                 .css('-webkit-border-bottom-right-radius', '0')
                 .css('-webkit-border-bottom-left-radius', '0');

    // Create an email from the input field.
    var mail = new Mailinator($('#example-name').val());

    $('#inbox-url').attr('target', '_blank')
                   .attr('href', mail.inboxURL)
                   .html(mail.inboxURL);
    $('#rss-url').attr('target', '_blank')
                 .attr('href', mail.rssURL)
                 .html(mail.rssURL);

    $('#example-output').slideDown();
    return false;
  });

  // Slide up and hide the example output before the default action.
  $('#example-form button[type="reset"]').click(function() {
    $('#example-output').slideUp(function() {
      $('#example').css('border-bottom', '3px solid #039')
                   .css('-moz-border-radius-bottomright', '10px')
                   .css('-moz-border-radius-bottomleft', '10px')
                   .css('-webkit-border-bottom-right-radius', '10px')
                   .css('-webkit-border-bottom-left-radius', '10px');
    });
  });

  $('.toggle-download').click(function() {
    $('#download').slideToggle();
  });
}); // $(document).ready()
