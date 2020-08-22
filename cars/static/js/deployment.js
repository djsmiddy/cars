$(document).ready(function () {
  console.log("Deployment JS Loaded")
 

  $('#spinner').hide()

  //Load Job list 
  $(document).on('click', '#jobList', function () {
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();

    $.ajax({
      url: 'jobList/',
      type: 'POST',

      data: {
        csrfmiddlewaretoken: csrfmiddlewaretoken
      },
      success: function (data) {
        console.log("Deployment list clicked ")

        $('#deployment_main').html(data).show();

      },
      error: function () {
        console.log("Vlan error")
      }
    })

  });

  //Load Request Page 
  $(document).on('click', '#requestbtn', function () {
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();

    $.ajax({
      url: 'request/',
      type: 'POST',

      data: {
        csrfmiddlewaretoken: csrfmiddlewaretoken
      },
      success: function (data) {
        console.log("Deployment list clicked ")

        $('#deployment_main').html(data).show();

      },
      error: function () {
        console.log("Vlan error")
      }
    })

  });

  //Load Approval Page 
  $(document).on('click', '#approvalbtn', function () {
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();

    $.ajax({
      url: 'jobApproval/',
      type: 'POST',

      data: {
        csrfmiddlewaretoken: csrfmiddlewaretoken
      },
      success: function (data) {
        console.log("Deployment list clicked ")

        $('#deployment_main').html(data).show();

      },
      error: function () {
        console.log("Vlan error")
      }
    })

  });


  
  //Save Request
  $(document).on('click', '#requestSubmit', function () {
    $('#spinner').show()
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var customerName = $('#customerName').val();
    var dc = $('#dc').val();
    var vlanid = $('#vlanid').val();
    var subnetid = $('#subnet').val();
    var subnetid2 = $('#subnet2').val();
    var size = $('#size').val();
    var resiliant = $('#resiliant').val();
    var primaryMBGIP = $('#primaryMBGIP').val();
    var primaryMBGName = $('#primaryMBGName').val();
    var primaryMBGSubnet = $('#primaryMBGSubnet').val();
    var primaryMBGGateway = $('#primaryMBGGateway').val();
    var primaryMBGMNG = $('#primaryMBGMNG').val();
    var primaryMBGMNGSubnet = $('#primaryMBGMNGSubnet').val();
    var seconderyMBGName = $('#seconderyMBGName').val();
    var seconderyMBGIP = $('#seconderyMBGIP').val();
    var seconderyMBGSubnet = $('#seconderyMBGSubnet').val();
    var seconderyMBGGateway = $('#seconderyMBGGateway').val();
    var seconderyMBGMNG = $('#seconderyMBGMNG').val();
    var micollabName = $('#micollabName').val();
    var micollabLANIP = $('#micollabLANIP').val();
    var micollabLANSubnet = $('#micollabLANSubnet').val();
    var micollabWANIP = $('#micollabWANIP').val();
    var micollabWANSubnet = $('#micollabWANSubnet').val();
    var micollabWANMNG = $('#micollabWANMNG').val();
    var micollabWANMNGSubnet = $('#micollabWANMNGSubnet').val();
    var micollabWANGateway = $('#micollabWANGateway').val();

    if($("#upgradeBTN").is(':checked')){
      console.log("Upgrade No")
      var upgrade = 'no' 
    } else {
      var upgrade = 'yes'; 
      console.log("Upgrade Yes")
    }
      
    var domain = $('#domain').val();
    var cwticket = $('#cwticket').val();
    
    
    $.ajax({
      url: 'saveRequest/',
      type: 'POST',

      data: {
        primaryMBGName:primaryMBGName,
        seconderyMBGName:seconderyMBGName,
        micollabName:micollabName,
        primaryMBGSubnet:primaryMBGSubnet,
        seconderyMBGSubnet:seconderyMBGSubnet,
        micollabLANSubnet:micollabLANSubnet,
        micollabWANSubnet:micollabWANSubnet,
        micollabWANMNGSubnet:micollabWANMNGSubnet,
        csrfmiddlewaretoken: csrfmiddlewaretoken,
        customerName: customerName,
        dc: dc,
        vlanid: vlanid,
        subnetid: subnetid,
        subnetid2: subnetid2,
        size: size,
        resiliant: resiliant,
        primaryMBGIP: primaryMBGIP,
        primaryMBGGateway: primaryMBGGateway,
        primaryMBGMNG: primaryMBGMNG,
        seconderyMBGIP: seconderyMBGIP,
        seconderyMBGGateway: seconderyMBGGateway,
        seconderyMBGMNG: seconderyMBGMNG,
        micollabLANIP: micollabLANIP,
        micollabWANMNG: micollabWANMNG,
        micollabWANGateway: micollabWANGateway,
        micollabWANIP: micollabWANIP,
        upgrade: upgrade,
        primaryMBGMNGSubnet: primaryMBGMNGSubnet,
        domain: domain,
        cwticket:cwticket

      },
      success: function (data) {
        console.log("Deployment Request save clicked ")
        $('#spinner').hide()
        $('#deployment_main').html(data).show();

      },
      error: function () {
        console.log("Vlan error")
      }
    })

  });


  //Approve or reject Request
  $(document).on('click', '#approveSubmit', function () {
    $('#spinner').show()
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var customerName = $('#customerName').val();
    var dc = $('#dc').val();
    var vlanid = $('#vlanid').val();
    var subnetid = $('#subnet').val();
    var subnetid2 = $('#subnet2').val();
    var size = $('#size').val();
    var resiliant = $('#resiliant').val();
    var primaryMBGIP = $('#primaryMBGIP').val();
    var primaryMBGName = $('#primaryMBGName').val();
    var primaryMBGSubnet = $('#primaryMBGSubnet').val();
    var primaryMBGGateway = $('#primaryMBGGateway').val();
    var primaryMBGMNG = $('#primaryMBGMNG').val();
    var primaryMBGMNGSubnet = $('#primaryMBGMNGSubnet').val();
    var seconderyMBGName = $('#seconderyMBGName').val();
    var seconderyMBGIP = $('#seconderyMBGIP').val();
    var seconderyMBGSubnet = $('#seconderyMBGSubnet').val();
    var seconderyMBGGateway = $('#seconderyMBGGateway').val();
    var seconderyMBGMNG = $('#seconderyMBGMNG').val();
    var micollabName = $('#micollabName').val();
    var micollabLANIP = $('#micollabLANIP').val();
    var micollabLANSubnet = $('#micollabLANSubnet').val();
    var micollabWANIP = $('#micollabWANIP').val();
    var micollabWANSubnet = $('#micollabWANSubnet').val();
    var micollabWANMNG = $('#micollabWANMNG').val();
    var micollabWANMNGSubnet = $('#micollabWANMNGSubnet').val();
    var micollabWANGateway = $('#micollabWANGateway').val();
    var upgrade =  $('#upgrade').val();
    var domain = $('#domain').val();
    var jobid = $('#jobid').val();
    var cwticket = $('#cwticket').val();
    
    
    $.ajax({
      url: 'approveRequest/',
      type: 'POST',

      data: {
        jobid: jobid,
        primaryMBGName:primaryMBGName,
        seconderyMBGName:seconderyMBGName,
        micollabName:micollabName,
        primaryMBGSubnet:primaryMBGSubnet,
        seconderyMBGSubnet:seconderyMBGSubnet,
        micollabLANSubnet:micollabLANSubnet,
        micollabWANSubnet:micollabWANSubnet,
        micollabWANMNGSubnet:micollabWANMNGSubnet,
        csrfmiddlewaretoken: csrfmiddlewaretoken,
        customerName: customerName,
        dc: dc,
        vlanid: vlanid,
        subnetid: subnetid,
        subnetid2: subnetid2,
        size: size,
        resiliant: resiliant,
        primaryMBGIP: primaryMBGIP,
        primaryMBGGateway: primaryMBGGateway,
        primaryMBGMNG: primaryMBGMNG,
        seconderyMBGIP: seconderyMBGIP,
        seconderyMBGGateway: seconderyMBGGateway,
        seconderyMBGMNG: seconderyMBGMNG,
        micollabLANIP: micollabLANIP,
        micollabWANMNG: micollabWANMNG,
        micollabWANGateway: micollabWANGateway,
        micollabWANIP: micollabWANIP,
        upgrade:upgrade,
        primaryMBGMNGSubnet: primaryMBGMNGSubnet,
        domain: domain,
        cwticket: cwticket
       

      },
      success: function (data) {
        console.log("Deployment Request save clicked ")
        $('#spinner').hide()
        $('#deployment_main').html(data).show();

      },
      error: function () {
        console.log(" error")
      }
    })

  });



  //reject Request
  $(document).on('click', '#rejectSubmit', function () {
    $('#spinner').show()
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var jobid = $('#jobid').val();
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var customerName = $('#customerName').val();
    var dc = $('#dc').val();
    var vlanid = $('#vlanid').val();
    var subnetid = $('#subnet').val();
    var subnetid2 = $('#subnet2').val();
    var size = $('#size').val();
    var resiliant = $('#resiliant').val();
    var primaryMBGIP = $('#primaryMBGIP').val();
    var primaryMBGName = $('#primaryMBGName').val();
    var primaryMBGSubnet = $('#primaryMBGSubnet').val();
    var primaryMBGGateway = $('#primaryMBGGateway').val();
    var primaryMBGMNG = $('#primaryMBGMNG').val();
    var primaryMBGMNGSubnet = $('#primaryMBGMNGSubnet').val();
    var seconderyMBGName = $('#seconderyMBGName').val();
    var seconderyMBGIP = $('#seconderyMBGIP').val();
    var seconderyMBGSubnet = $('#seconderyMBGSubnet').val();
    var seconderyMBGGateway = $('#seconderyMBGGateway').val();
    var seconderyMBGMNG = $('#seconderyMBGMNG').val();
    var micollabName = $('#micollabName').val();
    var micollabLANIP = $('#micollabLANIP').val();
    var micollabLANSubnet = $('#micollabLANSubnet').val();
    var micollabWANIP = $('#micollabWANIP').val();
    var micollabWANSubnet = $('#micollabWANSubnet').val();
    var micollabWANMNG = $('#micollabWANMNG').val();
    var micollabWANMNGSubnet = $('#micollabWANMNGSubnet').val();
    var micollabWANGateway = $('#micollabWANGateway').val();
    var upgrade =  $('#upgrade').val();
    var domain = $('#domain').val();
    var jobid = $('#jobid').val();
    var cwticket = $('#cwticket').val();
    $.ajax({
      url: 'rejectRequest/',
      type: 'POST',

      data: {
        jobid: jobid,
        primaryMBGName:primaryMBGName,
        seconderyMBGName:seconderyMBGName,
        micollabName:micollabName,
        primaryMBGSubnet:primaryMBGSubnet,
        seconderyMBGSubnet:seconderyMBGSubnet,
        micollabLANSubnet:micollabLANSubnet,
        micollabWANSubnet:micollabWANSubnet,
        micollabWANMNGSubnet:micollabWANMNGSubnet,
        csrfmiddlewaretoken: csrfmiddlewaretoken,
        customerName: customerName,
        dc: dc,
        vlanid: vlanid,
        subnetid: subnetid,
        subnetid2: subnetid2,
        size: size,
        resiliant: resiliant,
        primaryMBGIP: primaryMBGIP,
        primaryMBGGateway: primaryMBGGateway,
        primaryMBGMNG: primaryMBGMNG,
        seconderyMBGIP: seconderyMBGIP,
        seconderyMBGGateway: seconderyMBGGateway,
        seconderyMBGMNG: seconderyMBGMNG,
        micollabLANIP: micollabLANIP,
        micollabWANMNG: micollabWANMNG,
        micollabWANGateway: micollabWANGateway,
        micollabWANIP: micollabWANIP,
        upgrade: upgrade,
        primaryMBGMNGSubnet: primaryMBGMNGSubnet,
        domain: domain,
        cwticket: cwticket
      
      }, 
      success: function (data) {
        console.log("Deployment Request save clicked ")

        $('#deployment_main').html(data).show();
        $('#spinner').hide()
      },
      error: function () {
        console.log("Vlan error")
      }
    })

  });

 //Get Job form
 $(document).on('click', '.getid', function() {
  let jobid = $(this).closest('tr').find('.getid').text();
  console.log(jobid);
 
  var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  console.log("Get Job Form for approval")

  $.ajax({
    url: 'getJobForm/',
    type: 'POST',

    data: {
      csrfmiddlewaretoken: csrfmiddlewaretoken,
      jobid: jobid
    },
    success: function (data) {
      console.log("Deployment Request save clicked ")

      $('#deployment_main').html(data).show();

    },
    error: function () {
      console.log("Vlan error")
    }
  })

});


  //  check if upgrade and remove Subnet IP
  
  $(document).on('change', '#upgradeBTN', function () {
      console.log("Upgrade is set to yes ")
      $(".upgrade").toggle();
      $(".upgrade_alert").toggle();

      
      
      var x = document.getElementById("prMBGLable");
      if (x.innerHTML === "MBG IP") {
        x.innerHTML = "Primary MBG Temp IP";
      } else {
        x.innerHTML = "MBG IP";
      }

      var x = document.getElementById("drMBGLable");
      if (x.innerHTML === "MBG IP") {
        x.innerHTML = "Secondery MBG Temp IP";
      } else {
        x.innerHTML = "MBG IP";
      }

      var x = document.getElementById("micollabLable");
      if (x.innerHTML === "MiCollab LAN IP") {
        x.innerHTML = "MiCollab Temp IP";
      } else {
        x.innerHTML = "iCollab LAN IP";
      }
      
      
  });


  //Get Customer List
  // $(document).on('keyup', '#customerName', function () {
  //   console.log("get customer")

  //   var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  //   var customerName = $('#customerName').val();
  //   $.ajax({
  //     url: 'getCustomers/',
  //     type: 'POST',

  //     data: {
  //       csrfmiddlewaretoken: csrfmiddlewaretoken,
  //       customerName: customerName
  //     },
  //     success: function (data) {
  //       console.log("Vlan Saved")

  //       $('#customerResult').html(data).show();

  //     },
  //     error: function () {
  //       console.log("Vlan error")
  //     }
  //   })

  // });


  //end
});