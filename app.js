'use strict';
//global variables
var times = ['', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];
var openLocations = [];
var hourlyTotal = ['Hourly Totals'];
var totalRow;

// Location constructor
function Location(location, minCustomer, maxCustomer, avgPerSale) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgPerSale = avgPerSale;
  this.total = [this.location];
};

//random method
Location.prototype.random = function() {
  var min = Math.ceil(this.minCustomer);
  var max = Math.floor(this.maxCustomer);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min + ' random number ' + this.location);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//cookies per hour method
Location.prototype.cookiesPerHour = function() {
  for (var i = 1; i < times.length - 1; i++) {
    var salesPerHour = Math.floor(this.random() * this.avgPerSale);
    console.log(salesPerHour + ' sales per hour ' + this.location);
    this.total.push(salesPerHour);
  };
};
//sum method
Location.prototype.sum = function() {
  var added = 0;
  this.cookiesPerHour();
  for (var j = 1; j < this.total.length; j++) {
    added += this.total[j];
  };
  console.log(added + ' sum of cookies ' + this.location);
  this.total.push(added);
};
//print method
Location.prototype.print = function() {
  this.sum();
  openLocations.push(this.total);
  console.log(openLocations);
  var tableElement = document.getElementById('location-table');
  var tableRow = document.createElement('tr');
  tableRow.setAttribute('id', this.location);
  tableElement.appendChild(tableRow);
  for (var k = 0; k < this.total.length; k++) {
    var tableRowData = document.createElement('td');
    tableRowData.textContent = this.total[k];
    tableRow.appendChild(tableRowData);
  };
};

//creates first row of table
function firstRow() {
  var timesElement = document.getElementById('times');
  for (var h = 0; h < times.length; h++) {
    var rowTimes = document.createElement('td');
    rowTimes.textContent = times[h];
    timesElement.appendChild(rowTimes);
  };
};
//form submit button
function button() {
  var formEl = document.getElementById('form');
  formEl.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    var newStore = new Location(event.target.location.value, event.target.minCustomer.value, event.target.maxCustomer.value, event.target.avgPerSale.value);
    newStore.print();
    hourlyTotal = ['Hourly Totals'];
    footer();
    var newTotalElement = document.getElementById('foot-totals');
    newTotalElement.removeChild(totalRow);
    printTotal();
  }, false);
};
//makes hourly totals in array
function footer() {
  var arrayLength = openLocations[1];
  for (var l = 1; l < arrayLength.length - 1; l++) {
    var count = 0;
    console.log('first loop: ' + l + ' loop');
    for (var m = 0; m < openLocations.length; m++) {
      count += openLocations[m][l];
      console.log('second loop: ' + m + ' loop');
      console.log(count + ' total count');
    };
    hourlyTotal.push(count);
  };
  console.log(hourlyTotal + ' array');
  // return hourlyTotal;
};
//prints total to footer row
function printTotal() {
  var totalElement = document.getElementById('foot-totals');
  totalRow = document.createElement('tr');
  totalRow.setAttribute('id', 'totals');
  totalElement.appendChild(totalRow);
  for (var m = 0; m < hourlyTotal.length; m++) {
    var totalRowData = document.createElement('td');
    totalRowData.textContent = hourlyTotal[m];
    totalRow.appendChild(totalRowData);
  };
};

//creating objects, populates sales.html
firstRow();
var firstPike = new Location('First and Pike', 23, 65, 6.3);
firstPike.print();
var seaTacAirport = new Location('SeaTac Airport', 3, 24, 1.2);
seaTacAirport.print();
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
seattleCenter.print();
var capitolHill = new Location('Capitol Hill', 20, 38, 2.3);
capitolHill.print();
var alki = new Location('Alki', 2, 16, 4.6);
alki.print();
button();
footer();
printTotal();
