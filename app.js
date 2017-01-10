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
    console.log(Math.floor(Math.random() * (max - min + 1)) + min + ' random number First Pike.');
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour: function() {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour + ' cookies per hour First Pike.');
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesPerHour();
    for (var indey = 0; indey < this.total.length; indey++) {
      added += this.total[indey];
      console.log(added + ' sum of cookies First Pike.');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var pikeList = document.getElementById('first-pike-list');
    for (var indez = 0; indez < this.total.length; indez++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indez] + ': ' + this.total[indez] + ' cookies.';
      pikeList.appendChild(listElement);
    };
    console.log(newAdded + ' total sum First Pike.');
    var pikeSum = document.getElementById('first-pike-sum');
    pikeSum.textContent = 'Total: ' + newAdded + ' cookies.';
    pikeSum.setAttribute('class', 'total');
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
    console.log(Math.floor(Math.random() * (max - min + 1)) + min + ' random number SeaTac.');
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour: function () {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour + ' cookies per hour SeaTac.');
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesPerHour();
    for (var indey = 0; indey < this.total.length; indey++) {
      added += this.total[indey];
      console.log(added + ' sum of cookies SeaTac.');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var airportList = document.getElementById('seatac-airport-list');
    for (var indez = 0; indez < this.total.length; indez++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indez] + ': ' + this.total[indez] + ' cookies.';
      airportList.appendChild(listElement);
    };
    console.log(newAdded + ' total sum SeaTac.');
    var seatacSum = document.getElementById('seatac-airport-sum');
    seatacSum.textContent = 'Total: ' + newAdded + ' cookies.';
    seatacSum.setAttribute('class', 'total');
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
    console.log(Math.floor(Math.random() * (max - min + 1)) + min + ' random number Sea Cent.');
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour: function () {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour + ' cookies per hour Sea Cent.');
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesPerHour();
    for (var indey = 0; indey < this.total.length; indey++) {
      added += this.total[indey];
      console.log(added + ' sum of cookies Sea Cent.');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var seattleCenterList = document.getElementById('seattle-center-list');
    for (var indez = 0; indez < this.total.length; indez++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indez] + ': ' + this.total[indez] + ' cookies.';
      seattleCenterList.appendChild(listElement);
    };
    console.log(newAdded + ' total sum Sea Cent.');
    var seattleCenterSum = document.getElementById('seattle-center-sum');
    seattleCenterSum.textContent = 'Total: ' + newAdded + ' cookies.';
    seattleCenterSum.setAttribute('class', 'total');
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
    console.log(Math.floor(Math.random() * (max - min + 1)) + min + ' random number Cap Hill.');
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour: function () {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour + ' cookies per hour Cap Hill.');
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesPerHour();
    for (var indey = 0; indey < this.total.length; indey++) {
      added += this.total[indey];
      console.log(added + ' sum of cookies Cap Hill.');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var capitolHillList = document.getElementById('capitol-hill-list');
    for (var indez = 0; indez < this.total.length; indez++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indez] + ': ' + this.total[indez] + ' cookies.';
      capitolHillList.appendChild(listElement);
    };
    console.log(newAdded + ' total sum Cap Hill.');
    var capitolHillSum = document.getElementById('capitol-hill-sum');
    capitolHillSum.textContent = 'Total: ' + newAdded + ' cookies.';
    capitolHillSum.setAttribute('class', 'total');
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
    console.log(Math.floor(Math.random() * (max - min + 1)) + min + ' random number Alki.');
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour: function () {
    for (var index = 0; index < times.length; index++) {
      var salesPerHour = Math.floor(this.random() * this.avgPerSale);
      console.log(salesPerHour + ' cookies per hour Alki.');
      this.total.push(salesPerHour);
    }
    return this.total;
  },
  sum: function() {
    var added = 0;
    this.cookiesPerHour();
    for (var indey = 0; indey < this.total.length; indey++) {
      added += this.total[indey];
      console.log(added + ' sum of cookies Alki.');
    }
    return added;
  },
  print: function() {
    var newAdded = this.sum();
    var alkiList = document.getElementById('alki-list');
    for (var indez = 0; indez < this.total.length; indez++) {
      var listElement = document.createElement('li');
      listElement.textContent = times[indez] + ': ' + this.total[indez] + ' cookies.';
      alkiList.appendChild(listElement);
    };
    console.log(newAdded + ' total Sum Alki.');
    var alkiSum = document.getElementById('alki-sum');
    alkiSum.textContent = 'Total: ' + newAdded + ' cookies.';
    alkiSum.setAttribute('class', 'total');
  },
};

firstPike.print();
seaTacAirport.print();
seattleCenter.print();
capitolHill.print();
alki.print();
