var $ = require('jquery')

$(function () {
  $.getJSON('/wp-content/themes/underscores-child/js/data.json', function (data) {
    var html = MyApp.templates.employer(data)
    $('#cv').html(html)
  }) // getJSON
}) // function
