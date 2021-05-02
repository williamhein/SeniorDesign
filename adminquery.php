<?php 

    $servername = "localhost";
    $username = "root";
    $password = "Br@mbl3";
                        

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) 
    {
        die("Connection failed: " . $conn->connect_error);
    }
    $conn->query("use garden_info");

    $type = $_GET["type"];

    if ($type == "save")
    {
        $times = explode(";",$_GET["times"]);
        $sql = "TRUNCATE TABLE watering_intervals";
        $result = $conn->query($sql);

        foreach ($times as $time) 
        {
            $splitString = explode(",",$time);
            $sql = "INSERT INTO `watering_intervals` (`start_time`, `end_time`) VALUES (TIME('". $splitString[0] . "'), TIME('". $splitString[1] . "'))";
            $result = $conn->query($sql);
        }
        echo "New watering schedule saved!";
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
                    $max_key = $row[$tableInfo[table]]; 
                }

                echo $row["time"] ."!". $row[$tableInfo[$table]] ."!". $row[$tableLocInfo[$table]] . ";"; 
            }
        }
        */

    }
    //DELETE * FROM watering_intervals
    //INSERT INTO `watering_intervals` (`start_time`, `end_time`) VALUES (TIME('03:15:00'), TIME('03:20:00'));
    
?>