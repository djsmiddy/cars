// Run when Page loads

$(document).ready(function () {

  // $('#spinner').show()

  var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();

  // $.post('outage/checkOutage/', {
  //   csrfmiddlewaretoken: csrfmiddlewaretoken
  // }, success = function (data) {
  //   if (data == '1') {
  //     console.log(data)

  //     var elem = document.querySelector('.topbar');

  //     // Set the background color to a light gray
  //     elem.style.backgroundColor = 'red';

  //   } else {
  //     var elem = document.querySelector('.topbar');

  //     // Set the background color to a light gray
  //     elem.style.backgroundColor = '#1e88e5';
  //   }

  // });

  // $.post('outage/getOutageEvents/', {
  //   csrfmiddlewaretoken: csrfmiddlewaretoken
  // }, success = function (getEvents) {
  //   console.log("Debug getOutageEvents")
  //   $('#responce').html(getEvents).show();
  // });



    $('#spinner').show()
    $.post('home/getTotals/', {
      csrfmiddlewaretoken: csrfmiddlewaretoken
    }, success = function (getEvents) {
      $('#dashboard').html(getEvents).show();
      $('#spinner').hide()
  
    });

   



//Major outage or incident

$(document).on('click', '#outage', function () {
  console.log("Major outage or incident")

  var elem = document.querySelector('.topbar');

  // Set the background color to a light gray
  elem.style.backgroundColor = 'red';
});

//Major outage or incident Clear

$(document).on('click', '#outageClear', function () {
  console.log("Major outage or incident Cleared ")

  var elem = document.querySelector('.topbar');

  // Set the background color to a light gray
  elem.style.backgroundColor = '#1e88e5';
});


$(document).on('click','#on-call-add', function() {
  event.preventDefault();

  var engineer_name = $('#engineer_name').val();
  var onCallOrLate = $('#onCallOrLate').val();
  var start = $('#start').val();
  var end = $('#end').val();
  var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  var add_by = $('#add_by').val();

  $.post('oncall/', {engineer_name: engineer_name, start: start, end: end, csrfmiddlewaretoken:csrfmiddlewaretoken, add_by: add_by, onCallOrLate: onCallOrLate}, success = function(data) {
               if (data != ''){
               
  $('#on-call-add').html(data).show();
               
               }
               });
  });

$(document).on('click','#on-late-add', function() {
  event.preventDefault();
  var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
  var engineer_name_L = $('#engineer_name_L').val();
  var onCallOrLate = "onLate";
  var onCallOrLate_L = $('#onCallOrLate_L').val();
  var start_L = $('#start_L').val();
  var end_L = $('#end_L').val();
  var add_by_L = $('#add_by_L').val();

  $.post('oncall/', {engineer_name_L: engineer_name_L, start_L: start_L, end_L: end_L, csrfmiddlewaretoken:csrfmiddlewaretoken, add_by_L: add_by_L, onCallOrLate_L: onCallOrLate_L, onCallOrLate: onCallOrLate}, success = function(data) {
                  if (data != ''){
                  
  $('#on-late-add').html(data).show();
                  
                  }
                  });
  });






});

