<?php 

    $servername = "localhost";
    $username = "root";
    $password = "Br@mbl3"; //ignore the fact that this is plain text
                            //when we make users, we need to make a read only users for explicity this code

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) 
    {
        die("Connection failed: " . $conn->connect_error);
    }
    $conn->query("use garden_info");

    $end_date = $_GET["et"];
    $start_date = $_GET["st"];

    
    $tableInfo = [
        "records_humidity" => "humidity",
        "records_temp" => "temp",
        "records_moisture" => "moisture",
    ];
    $tableLocInfo = [
        "records_humidity" => "humidity_loc",
        "records_temp" => "temp_loc",
        "records_moisture" => "row_id",
    ];


    function echoInfo($table)
    {
        global $conn, $tableInfo, $tableLocInfo,$start_date,$end_date;

        $sql = "SELECT * FROM " . $table ." WHERE time BETWEEN '" . $start_date . "' AND '" .  $end_date . "'";
        //echo $sql;
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

                echo $row["time"] ."!". $row[$tableInfo[$table]] ."!". $row[$tableLocInfo[$table]] . ";"; 
            }
        } 
    }

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