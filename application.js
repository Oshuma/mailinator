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
    $('#example-output').slideDown();
    return false;
  });

  $('#example-form').click(function() {
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
