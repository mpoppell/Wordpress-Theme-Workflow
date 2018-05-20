
var $ = require('jquery')

// TODO: add year filter
// TODO: use aria controls

$(function () {
  $.getJSON('/wordpress/wp-content/themes/underscores-child/js/employers.json', function (data) {
    $.getJSON('/wordpress/wp-content/themes/underscores-child/js/keyDict.json', function (keyDict) {
      var allTags = []
      $.each(data, function (key, file) {
        // Renders the template - key grabs appropriate template named after json key
        var html = MyApp.templates[key](data)
        $('#cv-' + key).html(html)
        // Grabs tags from json file
        var dataKeys = ['responsibilities', 'achievements']
        // adds relevent classes to cv items and returns array of tags used
        var cvTags = cvTagClassManager(file, dataKeys, key)
        allTags = allTags.concat(cvTags)
      })
      // removes duplicate tags and sorts alphabetically
      var uniqTags = uniqArray(allTags).sort()
      // returns a key value pair object based on dictionary
      var dictTags = tagDictionary(uniqTags, keyDict)
      // creates and handles button events based on array
      tagButtons(dictTags)
    }) // getJSON dictionary
  }) // getJSON data

  function tagButtons (data) {
    $('#cv-toggles').append('<button class="btn btn-primary btn-success all">No Filters</button>')

    $.each(data, function (key, value) {
      key = 'cv-' + key
      // creates the tag buttons
      $('#cv-toggles').append('<a href="#" class="' + key +
      '">' + value + '</a>')
      // tag button controls
      $('#cv-toggles a.' + key).click(function () {
        // activates toggle function and edits buttons
        $('.cv-container').addClass('active')
        $('#cv-toggles button.all').removeClass('btn-success')
        $('#cv-toggles button.all').html('Reset Filters')
        $(this).toggleClass('filter-on')
        // adds classes to toggleable areas
        $('.cv-container .' + key).toggleClass('toggled-' + key)
        // removes the active class if no tags are toggled
        if ($('.extended-info li[class*="toggled-"]').length === 0) {
          $('.cv-container').removeClass('active')
          $('#cv-toggles button.all').addClass('btn-success')
          $('#cv-toggles button.all').html('No Filters')
        }
      })
      $('#cv-toggles button.all').click(function () {
        $(this).addClass('btn-success')
        $('#cv-toggles button.all').html('No Filters')
        $('#cv-toggles a.' + key).removeClass('filter-on')
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
    var cvArray = []
    for (var entry in array) {
      cvArray.push('cv-' + array[entry])
    }
    $(selector).addClass(cvArray)
  }

  function tagDictionary (keyArray, keyDict) {
    var dictObj = {}
    for (var key in keyArray) {
      var dKey = keyArray[key]
      var dValue = keyDict[keyArray[key]]
      if (dValue) {
        dictObj[dKey] = dValue
      } else {
        console.log(dKey + ' does not have a value yet')
      }
    }
    return dictObj
  }

  function cvTagClassManager (file, dataKeys, key) {
    var allCvTypeTags = []
    for (var cvType in file) {
      var cvTypeSingleTags = []

      // creates selector class based on current cvType
      var cvTypeItemSelectorClass = '.' + file[cvType].class.toString()
      for (var dataKey in dataKeys) {
        var objectKey = dataKeys[dataKey]
        var itemTags = []
        if (file[cvType][objectKey]) {
          for (var itemsArray in file[cvType][objectKey].items) {
            // turns tags string into an array
            var newTags = file[cvType][objectKey].items[itemsArray].tags.split(' ')
            // adds new tags to array
            itemTags = itemTags.concat(newTags)
            var listSelectorClass = cvTypeItemSelectorClass + ' .' + objectKey + ' li:nth-child(' + (parseInt(itemsArray) + 1) + ')'
            console.log(newTags)
            console.log(listSelectorClass)
            addTagClasses(newTags, listSelectorClass)
          }
        }
        // creates selector class based on employer class and the datakeys
        var tagsSelectorClass = cvTypeItemSelectorClass + ' .' + objectKey
        // creates list of all unique tags used for data key
        var uniqItemTags = uniqArray(itemTags)
        addTagClasses(uniqItemTags, tagsSelectorClass)
        // concatenates all available tags
        cvTypeSingleTags = cvTypeSingleTags.concat(itemTags)
      }
      if (file[cvType].tags) {
        var cvItemTags = file[cvType].tags.split(' ')
        cvTypeSingleTags = cvTypeSingleTags.concat(cvItemTags)
      }
      // removes duplicate tags and turns into string
      var uniqCvTypeTags = uniqArray(cvTypeSingleTags)
      // adds classes to the cv types selector class
      addTagClasses(uniqCvTypeTags, cvTypeItemSelectorClass)
      allCvTypeTags = allCvTypeTags.concat(cvTypeSingleTags)
    }
    // creates class for selecting the cv typre container
    var cvTypeSelectorClass = '.cv-type-container.' + key
    // removes duplicate tags and turns into string
    var uniqAllCvTypeTags = uniqArray(allCvTypeTags)

    addTagClasses(uniqAllCvTypeTags, cvTypeSelectorClass)
    return allCvTypeTags
  }
}) // Self Invoked function
