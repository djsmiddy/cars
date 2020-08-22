$(document).ready(function () {
    console.log("In VQ")
    $('#spinner').hide()



//Get List of Logs
    $('#connectServer').on('click', function (event) {
        $('#spinner').show()
        console.log("Get list of logs")
        $("#connectServer").prop("value", "Refresh");
        var serverIP = $('#serverIP').val();
        var username = $('#username').val();
        var password = $('#password').val();
        var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
        event.preventDefault();
        $.ajax({
          url: "connectServer",
          type: 'POST',
      
          data: {
         
            csrfmiddlewaretoken: csrfmiddlewaretoken,
            serverIP:serverIP,
            username:username,
            password:password

          },
          success: function (data) {
              $('#spinner').hide()
    
              $('#logListShow').html(data);
    
          },
          error: function () {
            alert('Could not connect to the server, make sure that the details you have entered are correct and that the server can reach 10.100.215.219');
          }
        })

    });

    //Get log page

    $('#logPage').on('click', function (event) {
      $('#spinner').show()
      console.log("Get list of logs")
      var serverIP = $('#serverIP').val();
      var username = $('#username').val();
      var password = $('#password').val();
      var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
      event.preventDefault();
      $.ajax({
        url: "listLogs",
        type: 'POST',
    
        data: {
       
          csrfmiddlewaretoken: csrfmiddlewaretoken,
          serverIP:serverIP,
          username:username,
          password:password

        },
        success: function (data) {
            $('#spinner').hide()
  
            $('#logListShow').html(data);
  
        },
        error: function () {
          alert('Could not get Data');
        }
      })

  });











    //EOF
});