<?php
            $servername = "localhost";
            $username = "root";
            $password = "Br@mbl3"; //ignore the fact that this is plain text
                                    //when we make users, we need to make a read only users for explicity this code

            // Create connection
            $conn = new mysqli($servername, $username, $password);

            // Check connection
            if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            }
            $conn->query("use garden_info");

            $end_date = $_GET["et"];
            $start_date = $_GET["st"];

            if ($_GET["table"] == "all")
            {
                $sql = "SELECT * FROM records_humidity WHERE time BETWEEN '" . $start_date . "' AND '" .  $end_date . "'";
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
                        echo $row["time"] ."!". $row["humidity"] ."!". $row["row_id"] . ";";
                    }
                    
                } 
                else 
                {
                    echo "0 results";
                }

                echo "&";

                $sql = "SELECT * FROM records_temp WHERE time BETWEEN '" . $start_date . "' AND '" .  $end_date . "'";
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
                        echo $row["time"] ."!". $row["temp"] ."!". $row["row_id"] . ";";
                    }
                    
                } 
                else 
                {
                    echo "0 results";
                }
            }
            else
            {

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
                            $max_key = $row["data"]; //<--
                        }

                        // the way Mireya set this row name, I can't use it generally anymore, so I will have to ask her about that
                        echo $row["time"] ."!". $row["data"] ."!". $row["row_id"] . ";"; //<--
                    }
                    
                } 
                else 
                {
                    echo "0 results";
                }
            }
?>