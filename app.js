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
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesForHour();
    for (var indez = 0; indez < this.total.length; indez++) {
      added += this.total[indez];
      console.log(added + 'added is here');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var pikeList = document.getElementById('first-pike-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey] + ' cookies.';
      console.log(pikeList);
      pikeList.appendChild(listElement);
    };
    console.log(newAdded);
    var pikeSum = document.getElementById('first-pike-sum');
    pikeSum.textContent = 'total: ' + newAdded + ' cookies.';
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
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesForHour();
    for (var indez = 0; indez < this.total.length; indez++) {
      added += this.total[indez];
      console.log(added + 'added is here');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var airportList = document.getElementById('seatac-airport-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey] + ' cookies.';
      console.log(airportList);
      airportList.appendChild(listElement);
    };
    console.log(newAdded);
    var seatacSum = document.getElementById('seatac-airport-sum');
    seatacSum.textContent = 'total: ' + newAdded + ' cookies.';
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
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesForHour();
    for (var indez = 0; indez < this.total.length; indez++) {
      added += this.total[indez];
      console.log(added + 'added is here');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var seattleCenterList = document.getElementById('seattle-center-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey] + ' cookies.';
      console.log(seattleCenterList);
      seattleCenterList.appendChild(listElement);
    };
    console.log(newAdded);
    var seattleCenterSum = document.getElementById('seattle-center-sum');
    seattleCenterSum.textContent = 'total: ' + newAdded + ' cookies.';
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
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesForHour();
    for (var indez = 0; indez < this.total.length; indez++) {
      added += this.total[indez];
      console.log(added + 'added is here');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var capitolHillList = document.getElementById('capitol-hill-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey] + ' cookies.';
      console.log(capitolHillList);
      capitolHillList.appendChild(listElement);
    };
    console.log(newAdded);
    var capitolHillSum = document.getElementById('capitol-hill-sum');
    capitolHillSum.textContent = 'total: ' + newAdded + ' cookies.';
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
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour);
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesForHour();
    for (var indez = 0; indez < this.total.length; indez++) {
      added += this.total[indez];
      console.log(added + 'added is here');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var alkiList = document.getElementById('alki-list');
    for (var indey = 0; indey < this.total.length; indey++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indey] + ': ' + this.total[indey] + ' cookies.';
      console.log(alkiList);
      alkiList.appendChild(listElement);
    };
    console.log(newAdded);
    var alkiSum = document.getElementById('alki-sum');
    alkiSum.textContent = 'total: ' + newAdded + ' cookies.';
  },
};

firstPike.print();
seaTacAirport.print();
seattleCenter.print();
capitolHill.print();
alki.print();
