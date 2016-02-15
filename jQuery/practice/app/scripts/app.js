$(document).ready(function() {
  var User = {
    this.fName: firstName,
    this.lName: lastName,
    this.email: userEmail,
    this.phone: userPhone
  };

  $('#firstName').val('');
  $('#lastName').val('');
  $('#userEmail').val('');
  $('#userPhone').val('');

  $('submitForm').on('click' function() {
    $('customerList').append('<li>' + firstName + '</li>');
  })

  console.log('This is the firstName ' + fName);
  console.log('This is the this.fName ' + lName);

  //var addCustomer = function(firstName, lastName, userEmail, userPhone) {
  //    $('#firstName').val('');
  //  }

};
