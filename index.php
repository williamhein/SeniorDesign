<!DOCTYPE html>
<html lang="en">
   <meta charset="UTF-8">
   <title>Smart Garden</title>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
   <link rel="stylesheet" href="styles.css">
   <div class="container" id="blur">
        <div class="content">
        <header>
            <h1>Medicine Lodge Greenhouse Plant Stats</h1>
        </header>   
        <body>
            <center>
                <div id="container">
                    <div>
	                	<div onload="Graph1()" id="outer">  <!-- loads the humidity function from the js file -->
		                    <img alt="temperature graphic to represent temperature" id="temp" src="temperature.png" />
		                    Temperature: <span id = "temp_current_label">84</span>&#730F
	                	</div>
		                <div id="graph1">
		                	<!-- displays the humidity graph -->
		                	<canvas id="myChart1" width="350" height="175" role="img" font-size="10px" aria-label="Bar Chart showing temperature for the day"></canvas>
		                </div>
	            	</div>
		            <div>
		                <a onload="Graph2()" id="outer"> <!-- loads the temperature function from the js file -->
		                <img alt="water droplet graphic to represent humidity" id="hum" src="humidity.png" />
		                    Humidity: <span id = "humidity_current_label">84</span>%
		                </a>
		                <div id="graph2">
		                	<!-- displays the temperature graph -->
		                	<canvas id="myChart2" width="350" height="175" role="img" aria-label="Bar Chart showing humidity for the day"></canvas>
		                </div>
		            </div>
	            

	                <div>
	                	<a onload="Graph3()" id="plants"> <!-- loads the first moisture function from the js file -->
	                    <img alt="plant graphic" src="plant.png" />
	                    Row 1's Moisture: 77%
	                	</a>
	                	<p id="title">Average Moisture: 65%</p>
	                	<div id="graph3">
	                		<!-- displays the first moisture graph -->
	                		<canvas id="myChart3" width="800" height="400"></canvas>
	                	</div>
	            	</div>
		            <div>
		                <a onload="Graph4()" id="plants"> <!-- loads the second moisture function from the js file -->
		                <img alt="plant graphic" src="plant.png" />
		                    Row 2's Moisture: 88%
		                </a>
		                <p id="title">Average Moisture: 80%</p>
		                <div id="graph4">
		                	<!-- displays the second moisture graph -->
		                	<canvas id="myChart4" width="800" height="400"></canvas>
		                </div>
		            </div>
		        </div>
        	</center>

            <input onclick="toggle()" type="image" id="gear" src="gear.png"/> <!-- when clicked, the popup to enter admin mode pops up -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
            <script src="script.js"></script>
            <div> <!-- crediting the icon creator -->
            	Icons made by <a style="color: rgb(255, 178, 106);" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a style="color:rgb(255, 178, 106);" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>

            <div id="popup">
            <input onclick="toggle()" type="image" id="exit" src="cancel.png"/> <!-- when clicked, the popup for admin mode disappears -->
                <center><p style="font-size:20px">You are requesting to enter <strong>admin mode</strong>.<br>Please enter the password:</p>
                <form method="POST" action="admin.php"> <!-- when the correct password is entered, the page is rerouted to admin.php -->
                    <input type="password"><input type="submit" id="go" value="Go"/></center>
                </form>
            </div>

	        <?php
	            $servername = "localhost";
	            $username = "root";
	            $password = "Br@mbl3"; //ignore the fact that this is plain text

	            // Create connection
	            $conn = new mysqli($servername, $username, $password);

	            // Check connection
	            if ($conn->connect_error) {
	            die("Connection failed: " . $conn->connect_error);
	            }
	            $conn->query("use garden_info");
	            echo "Connected successfully";

	            $today = date("Y-m-d H:i:s");
	            $start_date = date("Y-m-d H:i:s", strtotime("-4 hours"));
	            $start_date2 = date("Y-m-d H:i:s", strtotime("-4 hours"));
	            
	            //temp

	            $sql = "SELECT * FROM records_temp WHERE time BETWEEN '" . $start_date . "' AND '" .  $today . "'";
	            $result = $conn->query($sql);

	            if ($result->num_rows > 0) 
	            {
	                // output data of each row
	                $max = strtotime("1900-1-1 12:00:00");
	                $max_key = "";
	                while($row = $result->fetch_assoc()) 
	                {
	                    if (strtotime($row["time"])>$max)
	                    {
	                        $max = strtotime($row["time"]);
	                        $max_key = $row["data"];
	                    }
	                    //echo $row["time"] . $row["data"] . "<br>";
	                }
	                echo '<script type="text/JavaScript">updateCurrentTempLabel("' . $max_key .'");</script>';
	                
	            } 
	            else 
	            {
	                //echo "0 results";
	            }

	            //humidity

	            $sql = "SELECT * FROM records_humidity WHERE time BETWEEN '" . $start_date . "' AND '" .  $today . "'";
	            $result = $conn->query($sql);

	            if ($result->num_rows > 0) 
	            {
	                // output data of each row
	                $max = strtotime("1900-1-1 12:00:00");
	                $max_key = "";
	                while($row = $result->fetch_assoc()) 
	                {
	                    if (strtotime($row["time"])>$max)
	                    {
	                        $max = strtotime($row["time"]);
	                        $max_key = $row["data"];
	                    }
	                    //echo $row["time"] . $row["data"] . "<br>";
	                }
	                echo '<script type="text/JavaScript">updateCurrentHumidityLabel("' . $max_key .'");</script>';
	                
	            } 
	            else 
	            {
	                //echo "0 results";
	            }
	            echo '<script type="text/JavaScript">retrieve("records_temp","' . $start_date .'","'. $today .'");</script>';
	            echo '<script type="text/JavaScript">retrieve("records_humidity","' . $start_date2 .'","'. $today .'");</script>';
	            //echo '<script type="text/JavaScript">updateData();</script>';
	        ?>

        </body>
</html>