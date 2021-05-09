<!DOCTYPE html>
<html lang="en">
   <meta charset="UTF-8">
   <title>Smart Garden</title>
   <link rel="stylesheet" href="styles.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
   <script src="script.js"></script>
   <script src="https://cdn.metroui.org.ua/v4/js/metro.min.js"></script>

   <div class="container" id="blur">      
    <div class="content">
    <header>
        <h1>Medicine Lodge<br>Greenhouse Plant Stats</h1>
    </header>   
    <body>

    <?php
        $msg = "";
        $msg1 = "";
        if (isset($_POST['submit'])) {
            $con = new mysqli('localhost', 'root', 'Br@mbl3', 'garden_info');
            
            $password = $con->real_escape_string($_POST['password']);
            $cpassword = $con->real_escape_string($_POST['cpassword']);

            $sql = $con->query("SELECT * FROM admin WHERE id = 1;"); //1
            $data = $sql->fetch_assoc(); //2

            if ($password != $cpassword) {
                $msg = "Passwords don't match!";
            } elseif (!password_verify($_COOKIE['pass'], $data['pass'])) { //3
                $msg = "User not signed in!\n"; //4
            } else { //5
                $hash = password_hash($password, PASSWORD_BCRYPT);
                $con->query("UPDATE admin SET pass = '$hash' WHERE id = 1;");
                $msg1 = "New Password Saved!";
            }
        }
    ?> 

        <center>
        <div id="waterSchedule" style="color: black;">
            <center><br>Change Password<br>
                <br>
                <p style="color:red; font-size=25px; margin-top:0"><?php if ($msg != "") echo $msg . ""; ?></p>
                <p style="color:green; font-size=25px; margin-top:0"><?php if ($msg1 != "") echo $msg1 . ""; ?></p>
                <form method="post">
                    <input name="password" type="password" placeholder="New Password" data-role="keypad"  data-key-length="4" data-position="bottom" style="font-family: 'Quicksand', sans-serif, Arial; font-size: 20px;"><br><br>
                    <input name="cpassword" type="password" placeholder="Confirm New Password" data-role="keypad"  data-key-length="4" data-position="bottom" style="font-family: 'Quicksand', sans-serif, Arial; font-size: 20px;"><br><br>
                    <input name="submit" type="submit" value="Change Password" id="water" style="width:200px"><br>  
                </form>

<!--                 <div id="popup">
                    <input onclick="toggle()" type="image" id="exit" src="cancel.png"/>
                    <center><p id="toggleLabel">New password saved!</p></center>
                </div>      -->    
            </center>
        </div>
        </center>
        <form method="POST" action="index.php">
            <center><input type="submit" id="back" value="Back to the homepage"/></center> <!-- takes user back to main page -->
        </form>
        <!-- crediting icon creator -->
        <div style="bottom: 0; position: fixed; background-color: white; width: 100%; font-family: 'Quicksand', sans-serif, Arial;" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a style="color:rgb(255, 178, 106);" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
     </div>
    </div>

    </body>
</html>