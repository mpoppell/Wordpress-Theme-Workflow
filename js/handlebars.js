
var $ = require('jquery')

$(function () {
  $.getJSON('/wp-content/themes/underscores-child/js/employers.json', function (data) {
    $.getJSON('/wp-content/themes/underscores-child/js/keyDict.json', function (dData) {
    // Renders the template
      var html = MyApp.templates.employer(data)
      var dataKeys = ['responsibilities', 'achievements']
      $('#cv').html(html)
    // Grabs tags from json file
      $.each(data, function (key, file) {
        var allTags = []
        for (var employer in file) {
          var employerTags = []
          // creates selector class based on current employer
          var employerSelectorClass = '.' + file[employer].class.toString()
          for (var dataKey in dataKeys) {
            var objectKey = dataKeys[dataKey]
            var itemTags = []
            for (var itemsArray in file[employer][objectKey].items) {
              // turns tags string into an array
              var newTags = file[employer][objectKey].items[itemsArray].tags.split(' ')
              // adds new tags to array
              itemTags = itemTags.concat(newTags)
            }
            // creates selector class based on employer class and the datakeys
            var tagsSelectorClass = employerSelectorClass + ' .' + objectKey
            // creates list of all unique tags used for data key
            var uniqItemTags = uniqArray(itemTags).join(' ')
            addTagClasses(uniqItemTags, tagsSelectorClass)
            // concatenates all available tags
            employerTags = employerTags.concat(itemTags)
          }

          // removes duplicate tags and turns into string
          var uniqEmployerTags = uniqArray(employerTags).join(' ')
          // adds classes to employer selector class
          addTagClasses(uniqEmployerTags, employerSelectorClass)
          allTags = allTags.concat(itemTags)
        }
        // removes duplicate tags and sorts alphabetically
        var uniqTags = uniqArray(allTags).sort()
        // returns a key value pair object based on dictionary
        var dictTags = tagDictionary(uniqTags, dData)
        // creates and handles buttons
        tagButtons(dictTags)
      // tagDictionary(uniqArray(employerTags))
      })
    }) // getJSON dictionary
  }) // getJSON data

  function tagButtons (data) {
    $('#cv-toggles').append('<button class="btn btn-primary btn-success all">View All</button>')

    $.each(data, function (key, value) {
      // creates the tag buttons
      $('#cv-toggles').append('<button class="btn btn-primary ' + key +
      '">' + value + '</button>')
      // tag button controls
      $('#cv-toggles button.' + key).click(function () {
        // activates toggle function and edits buttons
        $('.cv-container').addClass('active')
        $('#cv-toggles button.all').removeClass('btn-success')
        $(this).toggleClass('btn-success')
        // adds classes to toggleable areas
        $('.cv-container .' + key).toggleClass('toggled-' + key)
        // removes the active class if no tags are toggled
        if ($('.extended-info li[class*="toggled-"]').length === 0) {
          $('.cv-container').removeClass('active')
          $('#cv-toggles button.all').addClass('btn-success')
        }
      })
      $('#cv-toggles button.all').click(function () {
        $(this).addClass('btn-success')
        $('#cv-toggles button.' + key).removeClass('btn-success')
        $('.cv-container .' + key).removeClass('toggled-' + key)
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
        console.log(dKey + ' does not have a value yet')
      }
    }
    return dictObj
  }
}) // Self Invoked function
