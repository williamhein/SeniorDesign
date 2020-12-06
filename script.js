var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 20;

var myChart1;
var myChart2;
var myChart3;
var myChart4;



window.onload = function(){
  dropGraph1();
  dropGraph2();
  dropGraph3();
  dropGraph4();
  updateData();
}

function updateData() {

}

function dropGraph1() {
  var ctx1 = document.getElementById('myChart1');
  var temps1 = [88, 78, 98, 100, 99, 88, 102];
  myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
      labels: days,
      datasets: [{
          label: 'Greenhouse Temperature (Fahrenheit)',
          data: temps1,
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

function dropGraph2() {

  var ctx2 = document.getElementById('myChart2');
  var temps2 = [60, 55, 66, 77, 56, 57, 78];
  myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
      labels: days,
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
      labels: days,
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
      labels: days,
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