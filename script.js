var d = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 20;

var myChart1;
var myChart2;
var myChart3;
var myChart4;

function DataPoint(time,data)
{
  this.time = time;
  this.data = data;
}

var tempArray = [];
var humidityArray = [];
var moistureArray = [];


window.onload = function(){
  dropGraph1();
  dropGraph2();
  dropGraph3();
  dropGraph4();
  //updateData();
}

function updateData() 
{

  for(var i = 0; i < tempArray.length; i++)
  {
    var t = tempArray[i].time.split(/[- :]/);
    var d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
    addData(myChart1,new Date(t).toLocaleDateString(), {x:new Date(t),y:tempArray[i].data});
  }
}

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}

function removeData(chart) {
  //chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}

function getToday()
{
  return days[d.getDay()];  
}

var color = Chart.helpers.color;
var config = 
{
  type: 'line',
  data: {
    datasets: [{
      label: 'Dataset with string point data',
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      fill: false,
      data: [{
        x: newDateString(0),
        y: randomScalingFactor()
      }, {
        x: newDateString(2),
        y: randomScalingFactor()
      }, {
        x: newDateString(4),
        y: randomScalingFactor()
      }, {
        x: newDateString(5),
        y: randomScalingFactor()
      }],
    }, {
      label: 'Dataset with date object point data',
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      fill: false,
      data: [{
        x: newDate(0),
        y: randomScalingFactor()
      }, {
        x: newDate(2),
        y: randomScalingFactor()
      }, {
        x: newDate(4),
        y: randomScalingFactor()
      }, {
        x: newDate(5),
        y: randomScalingFactor()
      }]
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Time Point Data'
    },
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        ticks: {
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000'
          }
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'value'
        }
      }]
    }
  }
};


function dropGraph1() {
  var ctx1 = document.getElementById('myChart1').getContext("2d");
  myChart1 = new Chart(ctx1, config);
}

function dropGraph2() {

  var ctx2 = document.getElementById('myChart2');
  var temps2 = [60, 55, 66, 77, 56, 57, 78];
  myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Greenhouse Humidity (%)',
          data: temps2,
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

var temp = document.getElementById('myChart1').value;
var humidity = document.getElementById('myChart1').value;

var t = 85;
var h = 50;

object.onload = function(){
    temp.innerHTML += t + "&#730;";
    humidity.innerHTML += h + "%";
};



function dropGraph3() {

  var ctx3 = document.getElementById('myChart3');
  var temps3 = [60, 55, 66, 77, 56, 57, 78];
  myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: temps3,
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

function dropGraph4() {

  var ctx3 = document.getElementById('myChart4');
  var temps3 = [65, 50, 62, 73, 52, 50, 71];
  myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [...days],
      datasets: [{
          label: 'Plant Moisture (%)',
          data: temps3,
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

function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');  
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

function toggle1() {
  var blur = document.getElementById('blur1');
  blur.classList.toggle('active');  
  var popup = document.getElementById('savePopup');
  popup.classList.toggle('active');
}

function updateCurrentTempLabel(temp) {
  document.getElementById("temp_current_label").innerHTML = temp;
}

function updateCurrentHumidityLabel(humidity) {
  document.getElementById("humidity_current_label").innerHTML = humidity;
}

function retrieve(table,starttime,endtime) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var info = this.responseText.split(";"); //put info into variables
        if (table == "records_humidity")
        {
          humidityArray = [];
          for (var i = 0; i < info.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = info[i].split("!");
            humidityArray.push(new DataPoint(rec[0],rec[1]));
            //console.log(rec[0],rec[1]);
          }
        }
        else if (table == "records_temp")
        {
          tempArray = [];
          for (var i = 0; i < info.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = info[i].split("!");
            tempArray.push(new DataPoint(rec[0],rec[1]));
            //console.log(rec[0],rec[1]);
          }
        }
        else if (table == "")
        {}
      }
  };
  xmlhttp.open("GET", "retrieve.php?table=" + table + "&st=" + starttime + "&et=" + endtime, true);
  xmlhttp.send();
}

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}