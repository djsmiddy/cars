// Run when Page loads





  //Add New Car 
  $(document).on('click', '#addCar', function () {
    event.preventDefault()
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    
    $.ajax({
      url: 'getAddCarForm/',
      type: 'POST',

      data: {
        csrfmiddlewaretoken: csrfmiddlewaretoken,
        
      },
      success: function (data) {
        

        $('#workingPage').html(data).show();

      },
      error: function () {
        
      }
    })

  });




