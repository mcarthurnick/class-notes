var app = angular.module('myApp', []);

app.controller('main', function($scope) {
  $scope.returningCustomer = true;

  $scope.products = [
    {
      name: 'Laptop',
      price: '$1999.00',
      sku: '0012',
      weight: '15 lbs'
    },
    {
      name: 'Headphones',
      price: '$299.00',
      sku: '0013',
      weight: '5 lbs'
    },
    {
      name: 'Backpack',
      price: '$49.00',
      sku: '0014',
      weight: '35 lbs'
    },
    {
      name: 'Charger',
      price: '$9.00',
      sku: '0015',
      weight: '1 lbs'
    },
    {
      name: 'Software',
      price: '$2,999.00',
      sku: '0016',
      weight: '5 lbs'
    },
    {
      name: 'Monster - Red',
      price: '$2.00',
      sku: '0017',
      weight: '2 lbs'
    },
    {
      name: 'Monster - Green',
      price: '$2.00',
      sku: '0018',
      weight: '2 lbs'
    },
    {
      name: 'Monster - White',
      price: '$2.00',
      sku: '0019',
      weight: '2 lbs'
    }
  ]
})
