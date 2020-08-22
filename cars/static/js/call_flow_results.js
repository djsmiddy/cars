var item = document.querySelectorAll("#list li")

for(var i = 0; i < item.length; i++){
  item[i].onclick = function(){
    console.log("Input from call Flow Search")
    var csrfmiddlewaretoken = $('#csrfmiddlewaretoken').val();
    var returnedCustomer = $('#returnedCustomer').val();
  
    $.ajax({
      url: '/searchCF/',
      type: 'POST',
  
      data: {
        returnedCustomer: returnedCustomer,
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
  }
}
