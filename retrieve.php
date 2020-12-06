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

            $end_date = $_GET["et"];
            $start_date = $_GET["st"];

            $sql = "SELECT * FROM " . $_GET["table"] ." WHERE time BETWEEN '" . $start_date . "' AND '" .  $end_date . "'";
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
                    echo $row["time"] ."!". $row["data"] . ";";
                }
                
            } 
            else 
            {
                echo "0 results";
            }
?>