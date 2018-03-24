var $ = require('jquery')

// var Mustache = require('mustache')
// $(function () {
//   $.getJSON('/wp-content/themes/underscores-child/js/data.json', function (data) {
//     $.get('/wp-content/themes/underscores-child/js/employer.mst', function (template) {
//       var html = Mustache.to_html(template, data)
//       $('#cv').html(html)
//     }, 'html')
//   }) // getJSON
// }) // function

var Handlebars = require('handlebars')

$(function () {
  $.getJSON('/wp-content/themes/underscores-child/js/data.json', function (data) {
    $.get('/wp-content/themes/underscores-child/js/employer.hbs', function (template) {
      var renderer = Handlebars.compile(template)
      var html = renderer(data)
      $('#cv').html(html)
    }, 'html')
  }) // getJSON
}) // function
