console.log("On Call Hit")

// Run when Page loads

$(document).ready(function () {



  var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();


    $(document).on('click', '#oncalltab', function () {

      console.log("On Call Tab clicked")
  
      $.post('oncallForm/', {
        csrfmiddlewaretoken: csrfmiddlewaretoken
      },
      success = function (data) {
        if (data != '') {
  
          $('#oncallform').html(data).show();
  
          $('#refresh').html(data).hide();
         
  
        }
      });
     
  
    });

    $(document).on('click', '#onlatestab', function () {
      $("#oncallt").hide();
      var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  
      $.post('onLateForm/', {
          csrfmiddlewaretoken: csrfmiddlewaretoken
        },
        success = function (data) {
          if (data != '') {
    
            $('#oncallform').html(data).show();
    
            $('#refresh').html(data).hide();
           
    
          }
        });
  
    });

    $(document).on('click', '#addoncallbtn', function () {
    event.preventDefault();

    var engineer_name = $('#engineer').val();
    var engineer_name2 = $('#engineer2').val();
    var start = $('#datefrom').val();
    var end = $('#dateto').val();
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var add_by = $('#addby').val();
    var escalation = $('#manager').val();
    var escalation2 = $('#manager2').val();
    var type = $('#type').val();


    $.post('addOnCall/', { 
      engineer_name: engineer_name,
      start: start,
      end: end,
      csrfmiddlewaretoken: csrfmiddlewaretoken,
      add_by: add_by,
      escalation: escalation,
      engineer_name2:engineer_name2,
      escalation2:escalation2,
      type:type
    }, success = function (data) {
      if (data != '') {

        $('#addoncallbtn').html(data).hide();
        $('#refresh').html('Please Refresh Page').show();
        alert(data)

      }
    });
  });

  $(document).on('click', '#addonlatebtn', function () {
   

    var engineer_name_late = $("#lateengineer option:selected").val();
    var start_late = $('#latesdatefrom').val();
    var end_late = $('#latesdateto').val();
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var add_by = $('#addby').val();
    var type_late = $('#latetype').val();


    $.post('addOnLates/', { 
      engineer_name_late: engineer_name_late,
      start_late: start_late,
      end_late: end_late,
      csrfmiddlewaretoken: csrfmiddlewaretoken,
      add_by: add_by,
      type_late:type_late
    }, success = function (data) {
      if (data != '') {

        $('#addonlatebtn').html(data).hide();
        $('#laterefresh').html('Please Refresh Page').show();
        alert(data)

      }
    });
  });

  //delete record in cal 
  $(document).on('click', '#deleteoncallbtn', function () {
    event.preventDefault();

    var engineer_name = $('#updateengineer').val();
    var engineer_name2 = $('#updateengineer2').val();
    var start = $('#datef').val();
    var end = $('#datet').val();
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var add_by = $('#addby').val();
    var escalation = $('#updatemanager').val();
    var escalation2 = $('#updatemanager2').val();
    var type = $('#type').val();
    var eventid = $('#eventid').val();

    $.post('deletOnCall/', { 
      engineer_name: engineer_name,
      start: start,
      end: end,
      csrfmiddlewaretoken: csrfmiddlewaretoken,
      add_by: add_by,
      escalation: escalation,
      engineer_name2:engineer_name2,
      escalation2:escalation2,
      type:type,
      eventid:eventid
    }, success = function (data) {
      if (data != '') {

        $('#deleteoncallbtn').html(data).show();
        
      }
    });
  });



    //Open Settings page  
    $(document).on('click', '#testoncallbtn', function () {
      event.preventDefault();
      console.log("Check On Call clicked")
      
      var start = '2019-07-03'
      var end = '2019-07-10'
      var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
      
  
      $.post('onCallSettings/', { 
        
        start: start,
        end: end,
        csrfmiddlewaretoken: csrfmiddlewaretoken,
        
      }, success = function (data) {
        if (data != '') {
  
          $('#calendar').html(data).show();
          $('#oncallform').hide();
          
        }
      });
    });

    //Update Contact Details 
    $(document).on('click', '#editcontactbtn', function () {
      event.preventDefault();
      var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
      var contact_name = $('#contact_name').val();
      var contact_email = $('#contact_email').val();
      var contact_mobile = $('#contact_mobile').val();
      var contact_role = $('#contact_role').val();
      
  
      $.post('editOnContact/', { 
        
        csrfmiddlewaretoken: csrfmiddlewaretoken,
        contact_name:contact_name,
        contact_email:contact_email,
        contact_mobile:contact_mobile,
        contact_role:contact_role

      }, success = function (data) {
        if (data != '') {
  
          $('#editcontactbtn').html(data).show();
         
          
        }
      });
    });


    // Get Add contact from 
    $(document).on('click', '#get_add_contact_btn',function(){
            
      var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
   
      $.post('getAddContact/', {
          csrfmiddlewaretoken: csrfmiddlewaretoken,
        
        }, success = function (data) {

          $('#updateoncalldetails').html(data).show();
        });

        $('#settingsModal').modal();

 });

 //Add new on call contact

     // Get Add contact from 
     $(document).on('click', '#add_contact_btn',function(){
            
      var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
      var add_contact_name = $('#add_contact_name').val();
      var add_contact_email = $('#add_contact_email').val();
      var add_contact_mobile = $('#add_contact_mobile').val();
      var add_contact_role = $('#add_contact_role').val();
   
      $.post('AddContact/', {
          csrfmiddlewaretoken: csrfmiddlewaretoken,
          add_contact_name:add_contact_name,
          add_contact_email:add_contact_email,
          add_contact_mobile:add_contact_mobile,
          add_contact_role:add_contact_role
        }, success = function (data) {

          $('#updateoncalldetails').html(data).show();
        });

        $('#settingsModal').modal();

 });



 $('#spinner').hide()
  //EOF
});