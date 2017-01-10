'use strict';

var times = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPike = {
  location: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgPerSale: 6.3,
  total: [],
  random: function (minCustomer,maxCustomer) {
    var min = Math.ceil(this.minCustomer);
    var max = Math.floor(this.maxCustomer);
    //console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesForHour: function() {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = this.random() * this.avgPerSale;
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  print: function() {
    this.cookiesForHour();
    var pikeList = document.getElementById('first-pike-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey];
      console.log(pikeList);
      pikeList.appendChild(listElement);
    };
  },
};

var seaTacAirport = {
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgPerSale: 1.2,
  total: [],
  random: function (minCustomer,maxCustomer) {
    var min = Math.ceil(this.minCustomer);
    var max = Math.floor(this.maxCustomer);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesForHour: function () {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = this.random() * this.avgPerSale;
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  print: function() {
    this.cookiesForHour();
    var airportList = document.getElementById('seatac-airport-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey];
      console.log(airportList);
      airportList.appendChild(listElement);
    };
  },
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgPerSale: 3.7,
  total: [],
  random: function (minCustomer,maxCustomer) {
    var min = Math.ceil(this.minCustomer);
    var max = Math.floor(this.maxCustomer);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesForHour: function () {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = this.random() * this.avgPerSale;
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  print: function() {
    this.cookiesForHour();
    var seattleCenterList = document.getElementById('seattle-center-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey];
      console.log(seattleCenterList);
      seattleCenterList.appendChild(listElement);
    };
  },
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgPerSale:2.3,
  total: [],
  random: function (minCustomer,maxCustomer) {
    var min = Math.ceil(this.minCustomer);
    var max = Math.floor(this.maxCustomer);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesForHour: function () {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = this.random() * this.avgPerSale;
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  print: function() {
    this.cookiesForHour();
    var capitolHillList = document.getElementById('capitol-hill-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey];
      console.log(capitolHillList);
      capitolHillList.appendChild(listElement);
    };
  },
};

var alki = {
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgPerSale: 4.6,
  total: [],
  random: function (minCustomer,maxCustomer) {
    var min = Math.ceil(this.minCustomer);
    var max = Math.floor(this.maxCustomer);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesForHour: function () {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = this.random() * this.avgPerSale;
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  print: function() {
    this.cookiesForHour();
    var alkiList = document.getElementById('alki-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey];
      console.log(alkiList);
      alkiList.appendChild(listElement);
    };
  },
};

firstPike.print();
seaTacAirport.print();
seattleCenter.print();
capitolHill.print();
alki.print();
