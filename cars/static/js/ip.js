$(document).ready(function () {
  $('#spinner').hide()


    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  


    $.ajax({
      url: 'onboarding/',
      type: 'POST',

      data: {
        csrfmiddlewaretoken: csrfmiddlewaretoken,
       
      },
      success: function (data) {
        console.log("Onboarding ")

        $('#onboarding').html(data).show();

      },
      error: function () {
        console.log("Onboarding error")
      }
    })

  

  //Get Customer List
  $(document).on('keyup', '#customerName', function () {
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var customerName = $('#customerName').val();
    $.ajax({
      url: 'getCustomers/',
      type: 'POST',

      data: {
        csrfmiddlewaretoken: csrfmiddlewaretoken,
        customerName: customerName
      },
      success: function (data) {
        console.log("Vlan Saved")

        $('#getCustomerSearch').html(data).show();

      },
      error: function () {
        console.log("Vlan error")
      }
    })

  });

  //Get Customer List for Add valn 
  $(document).on('keyup', '#customerNamesubnet', function () {
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var customerName = $('#customerNamesubnet').val();
    $.ajax({
      url: 'getCustomersAddSubnet/',
      type: 'POST',

      data: {
        csrfmiddlewaretoken: csrfmiddlewaretoken,
        customerName: customerName
      },
      success: function (data) {
        console.log("Vlan Saved")

        $('#getCustomerSearchvlan').html(data).show();

      },
      error: function () {
        console.log("Vlan error")
      }
    })

  });

    //Add Subnet for Vlan 
    $(document).on('click', '#addSubnetBtn', function () {
      var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
      var getCustomerSearchvlan = $('#getCustomerSearchvlan').val();
      var getvlanSearch = $('#getvlanSearch').val();
      $.ajax({
        url: 'addSubnet/',
        type: 'POST',
  
        data: {
          csrfmiddlewaretoken: csrfmiddlewaretoken,
          customerName: customerName
        },
        success: function (data) {
          console.log("Vlan Saved")
  
          $('#getCustomerSearchvlan').html(data).show();
  
        },
        error: function () {
          console.log("Vlan error")
        }
      })
  
    });


//End of script
});