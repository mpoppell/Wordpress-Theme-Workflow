
var $ = require('jquery')

$(function () {
  var toggleTags = []
  var responsibilitiesTags = []
  var allTags = []

  var tagDictionary = function (key) {
    $.getJSON('/wp-content/themes/underscores-child/js/keyDict.json', function (data) {

    }
    )
  }

  $.getJSON('/wp-content/themes/underscores-child/js/employers.json', function (data) {
    // Renders the template
    var html = MyApp.templates.employer(data)
    $('#cv').html(html)
    // Grabs tags from json file
    $.each(data, function (key, file) {
      for (var employer in file) {
        for (var itemsArray in file[employer].responsibilities.items) {
          // turns tags string into an array
          var ntags = file[employer].responsibilities.items[itemsArray].tags.split(' ')
          // adds new tags to array
          responsibilitiesTags = responsibilitiesTags.concat(ntags)
          console.log('tags: ' + responsibilitiesTags)
        }
        // creates selector class based on current employer
        var employerSelectorClass = '.' + file[employer].class.toString()
        // concatenates all available tags
        allTags = allTags.concat(responsibilitiesTags)
        // removes duplicate tags and turns into string
        var employerTags = uniqArray(responsibilitiesTags).join(' ')
        // adds classes to employer selector class
        addTagClasses(employerTags, employerSelectorClass)
        console.log(allTags)
      }
      allTags = allTags.concat()
    }
  )
  }) // getJSON

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
}) // function

// "achievements":
// {
//   "items":
//   [
//     {
//       "tags": {
//         "webdev": "Web Development",
//         "frontend":"Front End",
//         "design":"Design"
//       },
//       "text": "Design & develop appealing websites of various functionalities using a mixture of CSS, SASS, HTML, PHP & Javascript with a focus on UI & UX"
//     },
//     {
//       "tags": "account-management project-management client-facing communication",
//       "text": "Translate the needs of a client into website functionality requirements"
//     },
//     {
//       "tags": "project-management development",
//       "text": "Manage and develop a range of projects through all stages of the development lifecycle"
//     }
//   ]
// }

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
