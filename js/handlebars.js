
var $ = require('jquery')

$(function () {
  var responsibilitiesTags = []
  var allTags = []

  $.getJSON('/wp-content/themes/underscores-child/js/employers.json', function (data) {
    $.getJSON('/wp-content/themes/underscores-child/js/keyDict.json', function (dData) {
    // Renders the template
      var html = MyApp.templates.employer(data)
      var listDataKeys = ['responsibilities', 'achievements']
      $('#cv').html(html)
    // Grabs tags from json file
      $.each(data, function (key, file) {
        for (var employer in file) {
          for (var itemsArray in file[employer].responsibilities.items) {
            // turns tags string into an array
            var ntags = file[employer].responsibilities.items[itemsArray].tags.split(' ')
            // adds new tags to array
            responsibilitiesTags = responsibilitiesTags.concat(ntags)
          }
          // creates selector class based on current employer
          var employerSelectorClass = '.' + file[employer].class.toString()
          // concatenates all available tags
          allTags = allTags.concat(responsibilitiesTags)
          // removes duplicate tags and turns into string
          var employerTags = uniqArray(responsibilitiesTags).join(' ')
          // adds classes to employer selector class
          addTagClasses(employerTags, employerSelectorClass)
        }
        // removes duplicate tags and sorts alphabetically
        var uniqTags = uniqArray(allTags).sort()
        // returns a key value pair object based on dictionary
        var dictTags = tagDictionary(uniqTags, dData)
        // creates and handles buttons
        tagButtons(dictTags)
        console.log('tags result1: ' + JSON.stringify(dictTags))
      // tagDictionary(uniqArray(allTags))
      })
    }) // getJSON dictionary
  }) // getJSON data

  function tagButtons (data) {
    $('#cv-toggles').append('<button class="btn btn-primary btn-success all">View All</button>')

    $.each(data, function (key, value) {
      // creates the tag buttons
      $('#cv-toggles').append('<button class="btn btn-primary ' + key +
      '" type="button" data-toggle="collapse" data-target="extended-info li.' + key +
      '" aria-expanded="false" aria-controls="collapseExample">' + value + '</button>')
      // tag button controls
      $('#cv-toggles button.' + key).click(function () {
        $('.cv-container').addClass('active')
        console.log('click registered')
        $(this).toggleClass('btn-success')
        $('#cv-toggles button.all').removeClass('btn-success')
        $('.extended-info li.' + key).toggleClass('toggled-' + key)
        if ($('.extended-info li[class*="toggled-"]').length === 0) {
          $('.cv-container').removeClass('active')
          $('#cv-toggles button.all').addClass('btn-success')
        }
      })
      $('#cv-toggles button.all').click(function () {
        $(this).addClass('btn-success')
        $('#cv-toggles button.' + key).removeClass('btn-success')
        $('.extended-info li.' + key).removeClass('toggled-' + key)
        $('.cv-container').removeClass('active')
      })
    })
  }
  function uniqArray (dupArray) {
    var seen = {}
    return dupArray.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true)
    })
  }

  function addTagClasses (array, selector) {
    console.log('tagsUn: ' + array)
    $(selector).addClass(array)
  }

  function tagDictionary (keyArray, dData) {
    var dictObj = {}
    for (var key in keyArray) {
      var dKey = keyArray[key]
      var dValue = dData[keyArray[key]]
      if (dValue) {
        dictObj[dKey] = dValue
        // createTagButton(dKey, dValue)
      } else {
        console.log(dKey + 'does not have a value yet')
      }
    }
    return dictObj
  }
}) // Self Invoked function

// {
//   "company":"Cubox",
//   "position":"Web Administrator",
//   "link":"http://www.cubox.com.au",
//   "location":"Brisbane, AU",
//   "businesstype":"eCommerce",
//   "yearfrom": 2013,
//   "yearto": 2014,
//   "responsibilities": {
//     "items": [
//       {
//         "tags": "webdev frontend eCommerce management",
//         "text": "Manage our online presence, including social media, an Ecommerce website and multiple ebay stores"
//       },
//       {
//         "tags": "management retail stock",
//         "text": "Stock management and product placement for our retail store"
//       },
//       {
//         "tags": "customer service",
//         "text": "Primary contact for our customers and select suppliers"
//       }
//     ]
//   },
//   "achievements": {
//     "items": [
//       {
//         "tags": "excel bpm automation",
//         "text": "Automated processes to reduce data entry time by over 90%"
//       },
//       {
//         "tags": "hardware",
//         "text": "Design & Implement a flight simulator installation"
//       },
//       {
//         "tags": "project-management website",
//         "text": "Managed an outsourced website development team through redevelopment of our website"
//       },
//       {
//         "tags": "social-media",
//         "text": "Managed social media accounts, increasing reach by over 250% with no increase in budget"
//       }
//     ]
//   }
// }
