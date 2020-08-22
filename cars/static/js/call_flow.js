
$(document).ready(function () {

    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  
    $.post('outage/checkOutage/', {
      csrfmiddlewaretoken: csrfmiddlewaretoken
    }, success = function (data) {
      if (data == '1') {
        console.log(data)
  
        var elem = document.querySelector('.topbar');
  
        // Set the background color to a light gray
        elem.style.backgroundColor = 'red';
  
      } else {
        var elem = document.querySelector('.topbar');
  
        // Set the background color to a light gray
        elem.style.backgroundColor = '#1e88e5';
      }
  
    });
  
    $.post('outage/getOutageEvents/', {
      csrfmiddlewaretoken: csrfmiddlewaretoken
    }, success = function (getEvents) {
      console.log("Debug getOutageEvents")
      $('#responce').html(getEvents).show();
    });
  
  
  
  });
  
// Search Call Flow for Customer
$(document).on('click', '#callFlowSearchBtn', function () {
    console.log("Input from call Flow Search")
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var callFlowSearch = $('#callFlowSearch').val();

    

    $.ajax({
      url: '/callFlow/',
      type: 'POST',
  
      data: {
        callFlowSearch: callFlowSearch,
        csrfmiddlewaretoken: csrfmiddlewaretoken
   
      },
      success: function (data) {
      
        console.log(data)

        $('#callFloeSearchResults').html(data).show();
        
  
      },
      error: function () {
        alert('Could not get Data');
      }
    })
  });

  
  // search call flow
$(document).on('click', '#test', function () {
  console.log("Testing")
});




