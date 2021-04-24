<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8">
   <title>Smart Garden</title>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
   <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

   <link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro.min.css">
	<link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-colors.min.css">
	<link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-rtl.min.css">
	<link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-icons.min.css">

   <link rel="stylesheet" href="styles.css">
   <div class="container" id="blur">
		<div class="content">
 </head>
        <header>
            <h1>Medicine Lodge Greenhouse Plant Stats</h1>
        </header>   
        <body>
            <center>
                <div id="container"> <!-- using a container to allow the charts to display differently depending on screen size -->
                    <div id="container1">
	                    <div id="item">
		                	<a onload="graph1()" id="outer">  <!-- loads the humidity function from the js file -->
			                    <img alt="temperature graphic to represent temperature" id="temp" src="temperature.png" />
			                    <span id = "outer_text">Top Temperature: <span id = "top_temp_current_label">84</span>&#730F</span>
		                	</a>
			                <div id="graph1">
			                	<!-- displays the humidity graph -->
			                	<canvas id="myChart1" role="img" font-size="10px" aria-label="Bar Chart showing temperature for the day"></canvas>
			                </div>
			            </div>
	                    <div id="item">
			                <a onload="graph2()" id="outer"> <!-- loads the temperature function from the js file -->
			                <img alt="temperature graphic to represent temperature" id="temp" src="temperature.png" />
			                    <span id = "outer_text">Bottom Temperature: <span id = "bot_temp_current_label">84</span>&#730F</span>
			                </a>
			                <div id="graph2">
			                	<!-- displays the temperature graph -->
			                	<canvas id="myChart2" role="img" aria-label="Bar Chart showing humidity for the day"></canvas>
			                </div>
			            </div>
			            <div id="item">
			                <a onload="graph3()" id="outer"> <!-- loads the temperature function from the js file -->
			                <img alt="water droplet graphic to represent humidity" id="hum" src="humidity.png" />
			                    <span id = "outer_text">Top Humidity: <span id = "top_humidity_current_label">84</span>%</span>
			                </a>
			                <div id="graph3">
			                	<!-- displays the temperature graph -->
			                	<canvas id="myChart3" role="img" aria-label="Bar Chart showing top humidity for the day"></canvas>
			                </div>
			            </div>
	                    <div id="item">
			                <a onload="graph4()" id="outer"> <!-- loads the temperature function from the js file -->
			                <img alt="water droplet graphic to represent humidity" id="hum" src="humidity.png" />
			                    <span id = "outer_text">Bottom Humidity: <span id = "bot_humidity_current_label">84</span>%</span>
			                </a>
			                <div id="graph4">
			                	<!-- displays the temperature graph -->
			                	<canvas id="myChart4" role="img" aria-label="Bar Chart showing humidity for the day"></canvas>
			                </div>
	                    </div>
			        </div>
	            
					<select class="dropdown" id="dd">
					    <option value="" selected="selected">Select Row Number</option>
					    <option onclick="changeRowGraph(1)" value="r1">Row 1</option>
					    <option onclick="changeRowGraph(2)" value="r2">Row 2</option>
					    <option onclick="changeRowGraph(3)" value="r3">Row 3</option>
					</select>
					<div id="chartContainer"></div>

					<!--<div id="myChart">-->
					<!--  <select id="chart-selector" name="chart-selector">-->
					<!--    <option value="">Please Select An Option</option>-->
					<!--    <option value="0">0</option>-->
					<!--    <option value="1">1</option>-->   
					<!--  </select>-->				  
					<!--</div>-->

	             <!--   <div>-->
	             <!--   	<a onload="graph5()" id="plants">loads the first moisture function from the js file -->
	             <!--       <img alt="plant graphic" src="plant.png" />-->
	             <!--       <span id = "plants_text">Row 1's Moisture: <span id = "1moisture_current_label">77</span>%</span>-->
	             <!--   	</a>-->
	             <!--   	<p id="title">Average Moisture: <span id = "1avg_current_label">65</span>%</p>-->
	             <!--   	<div id="graph5">-->
	                		<!-- displays the first moisture graph -->
	             <!--   		<canvas id="myChart5"></canvas>-->
	             <!--   	</div>-->
	            	<!--</div>-->
					
		            <!--<div>-->
		            <!--    <a onload="graph6()" id="plants"> loads the second moisture function from the js file -->
		            <!--    <img alt="plant graphic" src="plant.png" />-->
		            <!--    <span id = "plants_text">Row 2's Moisture: <span id = "2moisture_current_label">88</span>%</span>-->
		            <!--    </a>-->
		            <!--    <p id="title">Average Moisture: <span id = "2avg_current_label">80</span>%</p>-->
		            <!--    <div id="graph6">-->
		                	<!-- displays the second moisture graph -->
		            <!--    	<canvas id="myChart6"></canvas>-->
		            <!--    </div>-->
		            <!--</div>-->
		        </div>
        	</center>
      </div>
      <div style="font-family: 'Quicksand', sans-serif, Arial;"> <!-- crediting the icon creator -->
      	Icons made by <a style="color: rgb(255, 178, 106);" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a style="color:rgb(255, 178, 106);" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
            <input onclick="toggle()" type="image" id="gear" src="gear.png"/> <!-- when clicked, the popup to enter admin mode pops up -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script> <!-- code for using chart. -->
            <script src="script.js"></script>

  
            <div id="popup">
            <input onclick="toggle()" type="image" id="exit" src="cancel.png"/> <!-- when clicked, the popup for admin mode disappears -->
                <center><p>You are requesting to enter <strong>admin mode</strong>.<br>Please enter the password:</p>
                <form method="POST" action="admin.php"> <!-- when the correct password is entered, the page is rerouted to admin.php -->
                    <div data-role="keypad" class="input-control password" data-length="3" data-position="bottom">
						<input type="password"  placeholder="Enter pin">
					</div>
				</form>
            	</center>
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
			$start_date = date("Y-m-d H:i:s", strtotime("-1 month"));
			$start_date2 = date("Y-m-d H:i:s", strtotime("-1 month"));
			
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
						$max_key = $row["temp"];
					}
				}
				echo '<script type="text/JavaScript">updateCurrentTempLabel("' . $max_key .'");</script>';
				
			} 
			/*
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
                        $max_key = $row["temp"];
                    }
                }
                echo '<script type="text/JavaScript">updateCurrentTempLabel("' . $max_key .'");</script>';
			}
			*/

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
						$max_key = $row["humidity"];
					}
				}
				echo '<script type="text/JavaScript">updateCurrentHumidityLabel("' . $max_key .'");</script>';
				
			} 
			else 
			{
				//echo "0 results";
			}
			//echo '<script type="text/JavaScript">retrieve("records_temp","' . $start_date .'","'. $today .'");</script>';
			//echo '<script type="text/JavaScript">retrieve("records_humidity","' . $start_date2 .'","'. $today .'");</script>';
			//echo '<script type="text/JavaScript">updateData();</script>';
		
			/*
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
                        $max_key = $row["humidity"];
                    }
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
			*/
        ?>

			<script src="https://cdn.metroui.org.ua/v4/js/metro.min.js"></script>
        </body>
</html>