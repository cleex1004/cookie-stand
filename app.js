'use strict';

var times = ['', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];

var openLocations = [];
//first row of table, times
function firstRow() {
  var timesElement = document.getElementById('times');
  for (var h = 0; h < times.length; h++) {
    var rowTimes = document.createElement('td');
    rowTimes.textContent = times[h];
    timesElement.appendChild(rowTimes);
  };
};
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
//var count = 0;
Location.prototype.cookiesPerHour = function() {
  for (var i = 1; i < times.length - 1; i++) {
    var salesPerHour = Math.floor(this.random() * this.avgPerSale);
    console.log(salesPerHour + ' cookies per hour ' + this.location);
    this.total.push(salesPerHour);
    //count++;
    //console.log(count + ' this should be 14');
  };
  //console.log(this.total + ' should be array');
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
var nestedArray = [];
Location.prototype.makeArray = function() {
  nestedArray.push(this.total);
  //console.log(this.total + 'this is an array');
  //console.log(nestedArray + ' please be a nested array:)');
};

var finalArray = [];
Location.prototype.countArray = function() {
  for (var l = 1; l < this.total.length; l++) {
    for (var m = 0; m < nestedArray.length; m++) {
      var count = 0;
      count + nestedArray[m, l];
      //console.log(count + 'count');
      finalArray.push(count);
    };
  };
  //console.log(finalArray + 'final array/hourly totals');
};
//form submit button
function button() {
  var formEl = document.getElementById('form');
  formEl.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    var newStore = new Location(event.target.location.value, event.target.minCustomer.value, event.target.maxCustomer.value, event.target.avgPerSale.value);
    newStore.print();
    newStore.makeArray();
    newStore.countArray();
    console.log(newStore);
  }, false);
};
//creating objects
firstRow();
button();
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

firstPike.makeArray();
seaTacAirport.makeArray();
seattleCenter.makeArray();
capitolHill.makeArray();
alki.makeArray();
firstPike.countArray();
seaTacAirport.countArray();
seattleCenter.countArray();
capitolHill.countArray();
alki.countArray();
// stretchTotal();
//stretch goal
// function stretchTotal() {
//   var timeTotals = ['Totals',];
//   var timeCount = 0;
//   for (var l = 1; l < times.length - 1; l++) {
//     var timeSum = firstPike.total[l] + seaTacAirport.total[l] + seattleCenter.total[l] + capitolHill.total[l] + alki.total[l];
//     timeTotals.push(timeSum);
//     timeCount += timeTotals[l];
//     console.log(timeTotals + ' timetotals');
//   };
//   timeTotals.push(timeCount);
//   var totalElement = document.getElementById('foot-totals');
//   var totalRow = document.createElement('tr');
//   totalElement.appendChild(totalRow);
//   for (var m = 0; m < timeTotals.length; m++) {
//     var totalRowData = document.createElement('td');
//     totalRowData.textContent = timeTotals[m];
//     totalRow.appendChild(totalRowData);
//   };
// };
