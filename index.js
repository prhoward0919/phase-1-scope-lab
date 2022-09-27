// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
   
}

function setBestCustomer() {
    return globalThis.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'karen';

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'bob';
}