<?php 

    function echoInfo($table)
    {

        $sql = "SELECT * FROM " . $table ." WHERE time BETWEEN '" . $start_date . "' AND '" .  $end_date . "'";
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
                    $max_key = $row[$tableInfo[table]]; 
                }

                echo $row["time"] ."!". $row[$tableInfo[table]] ."!". $row["row_id"] . ";"; 
            }
        } 
    }
    
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

    
    $tableInfo = [
        "records_temp" => "temp",
        "records_humidity" => "humidity",
        "records_moisture" => "moisture",
    ];

    if ($_GET["table"] == "all")
    {
        foreach ($tableInfo as $key => $value) 
        {
            echoInfo($key);
            echo "&";
        }
    }
    else
    {
        echoInfo($_GET["table"]);
    }

    
?>