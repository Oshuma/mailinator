$(document).ready(function() {
  var exampleName = $('#example-name').val();

  $('#example-name').click(function() {
    if ($(this).val() == exampleName) $(this).val('');
  });

  $('#example-form').submit(function() {
    $('#example').css('border-bottom', 'none')
                 .css('-moz-border-radius-bottomright', '0')
                 .css('-moz-border-radius-bottomleft', '0')
                 .css('-webkit-border-radius-bottomright', '0')
                 .css('-webkit-border-radius-bottomleft', '0');
    $('#example-output').slideDown();
    return false;
  });

  $('#example-form').click(function() {
    $('#example-output').slideUp(function() {
      $('#example').css('border-bottom', '3px solid #039')
                   .css('-moz-border-radius-bottomright', '10px')
                   .css('-moz-border-radius-bottomleft', '10px')
                   .css('-webkit-border-radius-bottomright', '10px')
                   .css('-webkit-border-radius-bottomleft', '10px');
    });
  });

  $('#download-tab').click(function() {
  });
}); // $(document).ready()
