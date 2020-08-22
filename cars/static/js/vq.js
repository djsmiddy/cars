$(document).ready(function () {
    console.log("In VQ")
    $('#spinner').hide()



//Upload Stats open Page
    $('#import_stats_open').on('click', function (event) {
        $('#spinner').show()
        console.log("open import Pressed")
        var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
        event.preventDefault();
        $.ajax({
          url: "uploadStatsopen",
          type: 'POST',
      
          data: {
         
            csrfmiddlewaretoken: csrfmiddlewaretoken
          },
          success: function (data) {
              $('#spinner').hide()
    
              $('#holder').html(data);
    
          },
          error: function () {
            alert('Could not get Data');
          }
        })

    });


  



//Open OpenAnalyse

$('#OpenAnalyse').on('click', function (event) {
  $('#spinner').show()
  console.log("Analyse  Pressed")
  var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  var customerName = $('#customerName').val();

    $.ajax({
      url: "openAnalyse",
      type: 'POST',
  
      data: {
          customerName: customerName,
        csrfmiddlewaretoken: csrfmiddlewaretoken
      },
      success: function (data) {
          $('#spinner').hide()

          $('#holder').html(data);

      },
      error: function () {
        alert('Could not get Data');
      }
    })


});







    //EOF
});