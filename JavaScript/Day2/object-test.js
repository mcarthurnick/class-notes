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
