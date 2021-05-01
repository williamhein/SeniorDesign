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

    //$end_date = $_GET["et"];
    //$start_date = $_GET["st"];


    
?>