var d = new Date();

Date.prototype.toMysqlFormat = function() {
  return this.getFullYear() + "-" + twoDigits(1 + this.getMonth()) + "-" + twoDigits(this.getDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getMinutes()) + ":" + twoDigits(this.getSeconds());
};

d.setDate(d.getDate() - 7); // number of days to pull back from
var lastUpdate = d.toMysqlFormat();

//settings the weekdays for the y axis of the moisture graphs
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//setting default chart characteristics
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 20;

var myChart1;
var myChart2;
var myChart3;
var myChart4;
var myChart5;
var myChart6;
var myChart7;
var myChart8;
var myChart9;
var myChart10;
var myChart11;
var myChart12;
var myChart13;
var myChart14;

var chartArray = [];


//file structure for data retrieved from database to make it easier to sort
function DataPoint(time,data,location)
{
  this.time = time;
  this.data = data;
  this.location = location;

  this.equalsD = function (d)
  {
    return this.data == d.data && this.time == d.time && this.location == d.location;
  }
}
//holds data points retrieved
var tempArray = [];
var shownTempArray = 0;
var humidityArray = [];
var shownHumidityArray = 0;
var moistureArray = [];
var shownMoistureArray = 0;


window.onload = function(){
  graph1();
  graph2();
  graph3();
  graph4();
  graph5();
  graph6();
  graph7();
  graph8();
  graph9();
  graph10();
  graph11();
  graph12();
  graph13();
  graph14();

  
  chartArray["r1"] = myChart5;
  chartArray["r2"] = myChart6;
  chartArray["r3"] = myChart7;
  chartArray["r4"] = myChart8;
  chartArray["r5"] = myChart9;
  chartArray["r6"] = myChart10;
  chartArray["r7"] = myChart11;
  chartArray["r8"] = myChart12;
  chartArray["r9"] = myChart13;
  chartArray["r10"] = myChart14;
  //updateData();
  
}

function updateData() 
{
  //sort arrays by time (based on strings)
  tempArray.sort( function(a,b) {
    var nameA = a.time.toUpperCase(); // ignore upper and lowercase
    var nameB = b.time.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) 
    {
      return -1;
    }
    if (nameA > nameB) 
    {
      return 1;
    }
  });

  humidityArray.sort( function(a,b) {
    var nameA = a.time.toUpperCase(); // ignore upper and lowercase
    var nameB = b.time.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) 
    {
      return -1;
    }
    if (nameA > nameB) 
    {
      return 1;
    }
  });

  //for each type of data, cycle through their array for all data points that have not be shown yet and add them to the respective chart
  for(; shownTempArray < tempArray.length; shownTempArray++)
  {
    var t = tempArray[shownTempArray].time.split(/[- :]/);
    var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
    //console.log(tempArray[shownTempArray].location);
    if (tempArray[shownTempArray].location == "top")
      addData(myChart1,d.toString(), {x:d,y:tempArray[shownTempArray].data});
    else
      addData(myChart2,d.toString(), {x:d,y:tempArray[shownTempArray].data});
  }

  for(;shownHumidityArray < humidityArray.length; shownHumidityArray++)
  {
    var t = humidityArray[shownHumidityArray].time.split(/[- :]/);
    var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
    if (humidityArray[shownHumidityArray].location == "top")
      addData(myChart3,d.toString(), {x:d,y:humidityArray[shownHumidityArray].data});
    else
      addData(myChart4,d.toString(), {x:d,y:humidityArray[shownHumidityArray].data});
  }

  for(;shownMoistureArray < moistureArray.length; shownMoistureArray++)
  {
    var t = moistureArray[shownMoistureArray].time.split(/[- :]/);
    var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
    console.log(chartArray[moistureArray[shownMoistureArray].location]);
    addData(chartArray[moistureArray[shownMoistureArray].location],d.toString(), {x:d,y:moistureArray[shownMoistureArray].data});
  }

  if (typeof tempArray[shownTempArray-1].data !== 'undefined' && typeof humidityArray[shownHumidityArray-1].data !== 'undefined')
  {
    var gotT = false;
    var gotB = false;
    var ctt = 60;
    var ctb = 60;

    var cht = 60;
    var chb = 60;

    for (var k = shownTempArray - 1; k >= 0; k--)
    {
      if (tempArray[k].location == "top" && !gotT)
      {
        ctt = tempArray[k].data;
        gotT = true;
      }
      if (tempArray[k].location != "top" && !gotB)
      {
        ctb = tempArray[k].data;
        gotB = true;
      }
      if (gotT && gotB)
      {
        break;
      }
    }

    gotT = false;
    gotB = false;

    for (var k = shownHumidityArray - 1; k >= 0; k--)
    {
      if (humidityArray[k].location == "top" && !gotT)
      {
        cht = humidityArray[k].data;
        gotT = true;
      }
      if (humidityArray[k].location != "top" && !gotB)
      {
        chb = humidityArray[k].data;
        gotB = true;
      }
      if (gotT && gotB)
      {
        break;
      }
    }

    updateCurrentTempLabel(ctt,ctb);
    updateCurrentHumidityLabel(cht,chb);
  }
}

//easily pushes data point onto a chart and forces an update
function addData(chart, label, data) {
  //chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}

//removes data from chart
function removeData(chart) {
  //chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}

//helper function to return string day of week
function getToday()
{
  return days[d.getDay()];  
}

//various functions to help with dates
function newDate(days) 
{
  return moment().add(days, 'd').toDate();
}

function newDateString(days) 
{
  return moment().add(days, 'd').format();
}

//setup a default config top temp
var color = Chart.helpers.color;
var config1 = {
  type: 'line',
  data: {
    datasets: [{
      label: 'Top Temperature (F)',
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "rgba(255, 99, 132, 0.8)",
      fill: false,
      lineTension: 0.1,
      data: [],
      fontSize: 17
    }],
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        ticks: {
          fontSize: 17,
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000',
          }
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 17
        }
      }]
    },
    legend: {
      onClick: null  //prevents the crossing out of the legend upon click
    }
  }
};

//setup a default config for bottom temp
var config2 = {
  type: 'line',
  data: {
    datasets: [{
      label: 'Bottom Temperature (F)',
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "rgba(255, 99, 132, 0.8)",
      fill: false,
      lineTension: 0.1,
      data: [],
    }]
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        ticks: {
          fontSize: 17,
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000',
          }
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 17
        }
      }]
    },
    legend: {
      onClick: null
    }
  }
};

//setup a default config for top humidity
var config3 = {
  type: 'line',
  data: {
    datasets: [{
      label: 'Top Humidity (%)',
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "rgba(255, 99, 132, 0.8)",
      fill: false,
      lineTension: 0.1,
      data: [],
    }]
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        ticks: {
          fontSize: 17,
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000',
          }
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 17
        }
      }]
    },
    legend: {
      onClick: null
    }
  }
};

//setup a default config for bottom humidity
var config4 = {
  type: 'line',
  data: {
    datasets: [{
      label: 'Bottom Humidity (%)',
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "rgba(255, 99, 132, 0.8)",
      fill: false,
      lineTension: 0.1,
      data: [],
    }]
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        ticks: {
          fontSize: 17,
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000',
          }
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 17
        }
      }]
    },
    legend: {
      onClick: null
    }
  }
};
function graph1() { //gets the previously entered chart info as well as the 
                    //corresponding canvas area in the index file
  var ctx1 = document.getElementById('myChart1').getContext("2d");
  myChart1 = new Chart(ctx1, config1); //populates the canvas area with the chart formed by the data
}

function graph2() {
  var ctx2 = document.getElementById('myChart2');
  myChart2 = new Chart(ctx2, config2);
}

function graph3() {
  var ctx3 = document.getElementById('myChart3');
  myChart3 = new Chart(ctx3, config3);
}

function graph4() {
  var ctx4 = document.getElementById('myChart4');
  myChart4 = new Chart(ctx4, config4);
}

var temp = document.getElementById('myChart1').value;
var humidity = document.getElementById('myChart1').value;


$( ".dropdown" ).change(function() {
  var e = document.getElementById("dd");
  var selected = e.options[e.selectedIndex].value;

  var divArray = [];
  divArray["r1"] = "moistureChart1";
  divArray["r2"] = "moistureChart2";
  divArray["r3"] = "moistureChart3";
  divArray["r4"] = "moistureChart4";
  divArray["r5"] = "moistureChart5";
  divArray["r6"] = "moistureChart6";
  divArray["r7"] = "moistureChart7";
  divArray["r8"] = "moistureChart8";
  divArray["r9"] = "moistureChart9";
  divArray["r10"] = "moistureChart10";
  /*
  switch(selected){ 
      case 'r1':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 1's Moisture Graph</span></a><div id='graph5'><canvas id='myChart5'></canvas></div><br>";
        //graph5();
        break;
      case 'r2':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 2's Moisture Graph</span></a><div id='graph6'><canvas id='myChart6'></canvas></div><br>";
        //graph6();
        break;
      case 'r3':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 3's Moisture Graph</span></a><div id='graph7'><canvas id='myChart7'></canvas></div><br>";
        //graph7();
        break;
      case 'r4':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 4's Moisture Graph</span></a><div id='graph8'><canvas id='myChart8'></canvas></div><br>";
        //graph8();
        break;
      case 'r5':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 5's Moisture Graph</span></a><div id='graph9'><canvas id='myChart9'></canvas></div><br>";
        //graph9();
        break;
      case 'r6':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 6's Moisture Graph</span></a><div id='graph10'><canvas id='myChart10'></canvas></div><br>";
        //graph10();
        break;
      case 'r7':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 7's Moisture Graph</span></a><div id='graph11'><canvas id='myChart11'></canvas></div><br>";
        //graph11();
        break;
      case 'r8':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 8's Moisture Graph</span></a><div id='graph12'><canvas id='myChart12'></canvas></div><br>";
        //graph12();
        break;
      case 'r9':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 9's Moisture Graph</span></a><div id='graph13'><canvas id='myChart13'></canvas></div><br>";
        //graph13();
        break;
      case 'r10':
        //element.innerHTML += "<a id='plants'><img alt='plant graphic' src='plant.png'/><span id = 'plants_text'>Row 10's Moisture Graph</span></a><div id='graph14'><canvas id='myChart14'></canvas></div><br>";
        //graph14();
        break;
      default:
  }
  */
  document.getElementById(divArray[selected]).style.display = "block";
  for (var i = 1; i < 11; i++) {
    if ("moistureChart" + i != divArray[selected]) document.getElementById("moistureChart" + i).style.display = "none";
  }
  location.href = "#";
  location.href = "#moistureChart" + i;
});


function graph5() {
  var ctx5 = document.getElementById('myChart5');
  var temps5 = [60, 55, 66, 77, 56, 57, 78];
  myChart5 = new Chart(ctx5, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        ticks: {
          fontSize: 17,
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000',
          }
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 17
        }
      }]
    },
    legend: {
      onClick: null
    }
  }
  })
}

function graph6() {
  var ctx6 = document.getElementById('myChart6');
  var temps6 = [65, 50, 62, 73, 52, 50, 71];
  myChart6 = new Chart(ctx6, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function graph7() {
  var ctx7 = document.getElementById('myChart7');
  var temps7 = [65, 50, 62, 73, 52, 50, 71];
  myChart7 = new Chart(ctx7, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function graph8() {
  var ctx8 = document.getElementById('myChart8');
  var temps8 = [65, 50, 62, 73, 52, 50, 71];
  myChart8 = new Chart(ctx8, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function graph9() {
  var ctx9 = document.getElementById('myChart9');
  var temps9 = [65, 50, 62, 73, 52, 50, 71];
  myChart9 = new Chart(ctx9, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function graph10() {
  var ctx10 = document.getElementById('myChart10');
  var temps10 = [65, 50, 62, 73, 52, 50, 71];
  myChart10 = new Chart(ctx10, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function graph11() {
  var ctx11 = document.getElementById('myChart11');
  var temps11 = [65, 50, 62, 73, 52, 50, 71];
  myChart11 = new Chart(ctx11, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function graph12() {
  var ctx12 = document.getElementById('myChart12');
  var temps12 = [65, 50, 62, 73, 52, 50, 71];
  myChart12 = new Chart(ctx12, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function graph13() {
  var ctx13 = document.getElementById('myChart13');
  var temps13 = [65, 50, 62, 73, 52, 50, 71];
  myChart13 = new Chart(ctx13, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function graph14() {
  var ctx14 = document.getElementById('myChart14');
  var temps14 = [65, 50, 62, 73, 52, 50, 71];
  myChart14 = new Chart(ctx14, {
  type: 'line',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: [],
          backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(239, 149, 107, 0.2)",
              "rgba(235, 107, 239, 0.2)"
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(239, 149, 107, 1)",
              "rgba(235, 107, 239, 1)"
          ],
          borderWidth: 1
      }]
  },
  options: {
    legend: {
      onClick: null
    }
  }
  })
}

function water() {

}

function toggle() { //toggle for the admin mode
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');  //when the gear is clicked, the blur is initiated
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

//function to update label for temps and humidities
function updateCurrentTempLabel(tempT,tempB) {
  console.log(tempT,tempB);
  document.getElementById("top_temp_current_label").innerHTML = tempT;
  document.getElementById("bot_temp_current_label").innerHTML = tempB;
}

function updateCurrentHumidityLabel(humidityT,humidityB) {
  console.log(humidityT,humidityB);
  document.getElementById("top_humidity_current_label").innerHTML = humidityT;
  document.getElementById("bot_humidity_current_label").innerHTML = humidityB;
}

//AJAX function call for retrieve info based on the given table and time, selecting "all" will retrieve all table information
function retrieve(table,starttime,endtime,auto = false) {
  
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    //this portion contains all of the various splitting and storing of retrieved response text 
      if (this.readyState == 4 && this.status == 200) {
        //this condition is different from the others, since it retrieves all table information, an initial split must take place
        //to separate tables
        //tables are delimited by "&", data points are delmited by ";", and temp/humidity are delimited by "!"
        if (auto || table == "all")
        {
          var info = this.responseText.split("&");
          var hinfo = info[0].split(";");
          var tinfo = info[1].split(";");
          var minfo = info[2].split(";");

          for (var i = 0; i < hinfo.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = hinfo[i].split("!");
            var d = new DataPoint(rec[0],rec[1],rec[2]);
            if (!inArray(humidityArray,d))
              humidityArray.push(d);
          }
          
          for (var i = 0; i < tinfo.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = tinfo[i].split("!");
            var d = new DataPoint(rec[0],rec[1],rec[2]);
            //console.log(rec[0]);
            if (!inArray(tempArray,d))
              tempArray.push(d);
          }

          for (var i = 0; i < minfo.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = minfo[i].split("!");
            var d = new DataPoint(rec[0],rec[1],rec[2]);
            if (!inArray(moistureArray,d))
              moistureArray.push(d);
          }

        }
        else if (table == "records_humidity")
        {
          var info = this.responseText.split(";");
          for (var i = 0; i < info.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = info[i].split("!");
            var d = new DataPoint(rec[0],rec[1],rec[2]);
            //console.log(rec[2]);
            if (!inArray(humidityArray,d))
              humidityArray.push(d);
          }
        }
        else if (table == "records_temp")
        {
          var info = this.responseText.split(";");
          for (var i = 0; i < info.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = info[i].split("!");
            var d = new DataPoint(rec[0],rec[1],rec[2]);
            //console.log(rec[2]);
            if (!inArray(tempArray,d))
              tempArray.push(d);
          }
        }
        else if (table == "records_moisture")
        {
          var info = this.responseText.split(";");
          for (var i = 0; i < info.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = info[i].split("!");
            var d = new DataPoint(rec[0],rec[1],rec[2]);
            if (!inArray(moistureArray,d))
              moistureArray.push(d);
          }
        }
        //console.log("got here!");
        updateData();
      }
  };
  //updates the last time info was retrieved, so duplicates aren't created
  if (!auto)
  { 
    lastUpdate = endtime;
    xmlhttp.open("GET", "retrieve.php?table=" + table + "&st=" + starttime + "&et=" + endtime, true);
    console.log("retrieve.php?table=" + table + "&st=" + starttime + "&et=" + endtime);
  }
  else
  {
    var ds = new Date((new Date(lastUpdate)).getTime() + 1000);
    var de = new Date(Date.now());
    var dss = ds.toMysqlFormat();
    var des = de.toMysqlFormat();
    console.log("retrieve.php?table=" + "all" + "&st=" + dss + "&et=" + des);
    xmlhttp.open("GET", "retrieve.php?table=" + "all" + "&st=" + dss + "&et=" + des, true);
    //lastUpdate = des;
  }
  xmlhttp.send();
}

function twoDigits(d) {
  if(0 <= d && d < 10) return "0" + d.toString();
  if(-10 < d && d < 0) return "-0" + (-1*d).toString();
  return d.toString();
}



function inArray(arr, elem)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i].equalsD(elem)) return true;
  }
  return false;
}

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}


//code that needs to be run as late as possible

//handles the 4 second pulls from database
var ajaxTimer;
retrieve(null, null, null, true);
ajaxTimer = this.setInterval(function (){retrieve(null, null, null, true)}, 4000);
document.getElementById("moistureChart1").style.display = "block";