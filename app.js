'use strict';

var times = ['', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];

//first row of table, times
var timesElement = document.getElementById('times');
for (var h = 0; h < times.length; h++) {
  var rowTimes = document.createElement('td');
  rowTimes.textContent = times[h];
  timesElement.appendChild(rowTimes);
}
// Location constructor
function Location(location, minCustomer, maxCustomer, avgPerSale) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgPerSale = avgPerSale;
  this.total = [this.location,];
};
//random method
Location.prototype.random = function(minCustomer,maxCustomer) {
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
  for (var j = 1; j < this.total.length - 1; j++) {
    added += this.total[j];
    console.log(added + ' sum of cookies ' + this.location);
  };
  this.total.push(added);
  return added;
};
//print method
Location.prototype.print = function() {
  var newAdded = this.sum();
  var tableElement = document.getElementById(this.location);
  for (var k = 0; k < this.total.length; k++) {
    var tableRow = document.createElement('td');
    tableRow.textContent = this.total[k];
    tableElement.appendChild(tableRow);
  };
};
//creating objects
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
//stretch goal
var timeTotals = ['Totals',];
var timeCount = 0;
for (var l = 1; l < times.length - 1; l++) {
  var timeSum = firstPike.total[l] + seaTacAirport.total[l] + seattleCenter.total[l] + capitolHill.total[l] + alki.total[l];
  timeTotals.push(timeSum);
  timeCount += timeTotals[l];
  console.log(timeTotals + ' timetotals');
};
timeTotals.push(timeCount);
var tableEl = document.getElementById('totals');
for (var m = 0; m < timeTotals.length; m++) {
  var timeRow = document.createElement('td');
  timeRow.textContent = timeTotals[m];
  tableEl.appendChild(timeRow);
};
