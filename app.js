'use strict';
//global variables
var times = ['', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];
var openLocations = [];
var finalArray = [];
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
    console.log(salesPerHour + ' cookies per hour ' + this.location);
    this.total.push(salesPerHour);
  };
  return this.total;
};
//sum method
Location.prototype.sum = function() {
  var added = 0;
  this.cookiesPerHour();
  for (var j = 1; j < this.total.length; j++) {
    added += this.total[j];
    console.log(added + ' sum of cookies ' + this.location);
  };
  this.total.push(added);
  return added;
};
//print method
Location.prototype.print = function() {
  var newAdded = this.sum();
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
//testing please work! ;)
var hourlyTotal = ['Hourly Totals'];
function footer() {
  var arrayLength = openLocations[1];
  for (var l = 1; l < arrayLength.length - 1; l++) {
    var count = 0;
    console.log('first loop' + l);
    for (var m = 0; m < openLocations.length; m++) {
      count += openLocations[m][l];
      console.log(count + 'count');
      console.log('second loop' + m);
    };
    hourlyTotal.push(count);
  };
  console.log(hourlyTotal + 'array/hourly totals');
};
//first row of table, times
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
    openLocations.push(newStore.total);
    //
  }, false);
};
//creating objects
firstRow();
var firstPike = new Location('First and Pike', 23, 65, 6.3);
firstPike.print();
openLocations.push(firstPike.total);
var seaTacAirport = new Location('SeaTac Airport', 3, 24, 1.2);
seaTacAirport.print();
openLocations.push(seaTacAirport.total);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
seattleCenter.print();
openLocations.push(seattleCenter.total);
var capitolHill = new Location('Capitol Hill', 20, 38, 2.3);
capitolHill.print();
openLocations.push(capitolHill.total);
var alki = new Location('Alki', 2, 16, 4.6);
alki.print();
openLocations.push(alki.total);
button();
footer();
printTotal();

function printTotal() {
  var totalElement = document.getElementById('foot-totals');
  var totalRow = document.createElement('tr');
  totalElement.appendChild(totalRow);
  for (var m = 0; m < hourlyTotal.length; m++) {
    var totalRowData = document.createElement('td');
    totalRowData.textContent = hourlyTotal[m];
    totalRow.appendChild(totalRowData);
  };
};
