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

    $sql = $con->query("SELECT * FROM admin WHERE id = 1;");
    $data = $sql->fetch_assoc();

    if ($type == "save" && isset($_COOKIE["pass"]) && password_verify($_COOKIE["pass"], $data['pass']))
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
    }
    else
    {
        echo "User not signed in.";
    }
    
?>