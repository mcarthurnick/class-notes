var nickCredit = {
  firstName: 'Nick',
  lastName: 'McArthur',
  cardNumber: '9894 8758 9409 8739',
  expireDate: '1016',
  zipCode: '84770',
};

for (var p in nickCredit) {
  if (p === 'cardNumber') {
    console.log(nickCredit[p]);
  }
}

//this logs 9894 8758 9409 8739

//this for in loop, lists all of the property names of the nickCredit Object.
for (var propertyName in nickCredit) {
     console.log(propertyName);
}

//firstName
//lastName
//cardNumber
//cardNumber
//expireDate
//zipCode


//Nesting

var nickForm = {
     firstName: "nick",
     lastName: "mcarthur",
     withholdings: 10,
     nickCredit: {     // nesting a new object inside of nickForm
       firstName: 'Nick',
       lastName: 'McArthur',
       cardNumber: '9894 8758 9409 8739',
       expireDate: '10/16',
       zipCode: '84770'
     },    // no semicolon needed
     chargeCreditCard: function() {   //we can create an object that is a function
       console.log('charging credit card');
     }
};

nickForm.chargeCreditCard();

//display properties and values in nickForm
for (var p in nickForm) {
  if (p === 'nickCredit') {
    for (var ccProperty in nickForm[p]) {
      console.log(ccProperty + ':' + nickForm[p][ccProperty]);
    }
  }
}



delete nickForm.nickCredit;  //delete a property

// combineding 2 Objects into a new Object called combined line 75

var creditCard = {
  number: '1234 5678 9091 8984',
  name: 'Nick McArthur'
};

var person = {
  firstName: 'Nick',
  lastName: 'McArthur'
};

var combined = {};

for (var prop in creditCard) {
  combined[prop] = creditCard[prop];
}
for (var prop in person) {
  combined[prop] = person[prop];
}
console.log(combined);

//shallow copy or deep copy?    The example above is a shallow copy
