var lastUpdate = "";
var ajaxTimer;
ajaxTimer = this.setInterval(function (){retrieve(null, null, null, true)}, 4000);

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

  for(var i = 0; i < tempArray.length; i++)
  {
    var t = tempArray[i].time.split(/[- :]/);
    var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
    addData(myChart1,d.toString(), {x:d,y:tempArray[i].data});
  }

  for(var i = 0; i < humidityArray.length; i++)
  {
    var t = humidityArray[i].time.split(/[- :]/);
    var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
    addData(myChart1,d.toString(), {x:d,y:humidityArray[i].data});
  }
}

function addData(chart, label, data) {
  //chart.data.labels.push(label);
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



function newDate(days) {
  return moment().add(days, 'd').toDate();
}
function newDateString(days) {
  return moment().add(days, 'd').format();
}

var color = Chart.helpers.color;
var config1 = 
{
  type: 'line',
  data: {
    datasets: [{
      label: 'Greenhouse Temperature (F)',
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
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000'
          }
        }
      }],
      yAxes: [{
        display: true,
      }]
    }
  }
};

var config2 = {
  type: 'line',
  data: {
    datasets: [{
      label: 'Greenhouse Temperature (F)',
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
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000'
          }
        }
      }],
      yAxes: [{
        display: true,
      }]
    }
  }
};

function dropGraph1() {
  var ctx1 = document.getElementById('myChart1').getContext("2d");
  myChart1 = new Chart(ctx1, config1);
}

function dropGraph2() {
  var ctx2 = document.getElementById('myChart2');
  myChart2 = new Chart(ctx2, config2);
}

var temp = document.getElementById('myChart1').value;
var humidity = document.getElementById('myChart1').value;

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

function retrieve(table,starttime,endtime,auto = false) {
  
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (auto || table == "all")
        {
          var info = this.responseText.split("&");
          var hinfo = info[0].split(";");
          var tinfo = info[1].split(";");

          for (var i = 0; i < hinfo.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = hinfo[i].split("!");
            humidityArray.push(new DataPoint(rec[0],rec[1]));
            //console.log(rec[0],rec[1]);
          }
          
          for (var i = 0; i < tinfo.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = tinfo[i].split("!");
            tempArray.push(new DataPoint(rec[0],rec[1]));
            //console.log(rec[0],rec[1]);
          }
        }
        else if (table == "records_humidity")
        {
          var info = this.responseText.split(";");
          for (var i = 0; i < info.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = info[i].split("!");
            humidityArray.push(new DataPoint(rec[0],rec[1]));
            //console.log(rec[0],rec[1]);
          }
        }
        else if (table == "records_temp")
        {
          var info = this.responseText.split(";");
          for (var i = 0; i < info.length - 1; i++) //I do the minus 1 because an extra ";" is output by retrieve.php and I am too lazy to figure out a smarter way to send the data
          {
            var rec = info[i].split("!");
            tempArray.push(new DataPoint(rec[0],rec[1]));
            //console.log(rec[0],rec[1]);
          }
        }
        else if (table == "")
        {}

        updateData();
      }
  };
  if (!auto)
  { 
    lastUpdate = endtime;
    xmlhttp.open("GET", "retrieve.php?table=" + table + "&st=" + starttime + "&et=" + endtime, true);
  }
  else
  {
    var ds = moment(new Date(lastUpdate)).add(5, 's').toDate();
    var de = new Date(Date.now());
    var dss = ds.toISOString().slice(0, 19).replace('T', ' ');
    var des = de.toISOString().slice(0, 19).replace('T', ' ');
    console.log("retrieve.php?table=" + "all" + "&st=" + dss + "&et=" + des);
    xmlhttp.open("GET", "retrieve.php?table=" + "all" + "&st=" + dss + "&et=" + des, true);
  }
  xmlhttp.send();
}

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}