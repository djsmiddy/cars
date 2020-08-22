$(document).ready(function () {

  // Get 
  $(document).on('input', '#custName', function () {
    console.log("Input from Search")
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var search = $('#custName').val();
    if (search.length > 3) {
      $.ajax({
        url: 'searchCustomer/',
        type: 'POST',
    
        data: {
          search: search,
          csrfmiddlewaretoken: csrfmiddlewaretoken
        },
        success: function (data) {
          
          $('#responce').html(data).show();
    
        },
        error: function () {
          alert('Could not get Data');
        }
      })
    }
  
  });


  // Search Confluence 
$(document).on('input', '#search', function () {
  console.log("Input from Search")
  var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  var search = $('#search').val();
  $.ajax({
    url: 'searchConflu/',
    type: 'POST',

    data: {
      search: search,
      csrfmiddlewaretoken: csrfmiddlewaretoken
    },
    success: function (data) {


      $("#hiddenSearch").show();

      $('.searchResults').empty();

      var newdata = data.results[0].content.title
      console.log(newdata)
      for (i = 0; i < data.results.length; i++) {
        //get Title and ID of confluance pages
        title = data.results[i].content.title;
        id = data.results[i].content.id;
        console.log(title)
        $('.searchResults').append('<ul><li id="test" value="' + id + '">' + title + '</li></ul>');

      }

    },
    error: function () {
      alert('Could not get Data');
    }
  })
});

// Open confluance body
$('#searchResults').on('click', 'li', function () {
  var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();

  var contentID = $(this).attr('value');

  $.ajax({
    url: 'searchConflu/getContent/',
    type: 'POST',

    data: {
      contentID: contentID,
      csrfmiddlewaretoken: csrfmiddlewaretoken
    },
    success: function (data) {

      $('.searchResults').empty();
      var confluanceContent = data.body.view.value
      var confluanceTitle = data.title
      $('.confluanceTitle').html(confluanceTitle).show();
      $('.searchResults').html(confluanceContent).show();
    },
    error: function () {

    }
  })
});



//End of page load    
});