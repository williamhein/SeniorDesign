<!DOCTYPE html>
<html lang="en">
   <meta charset="UTF-8">
   <title>Smart Garden</title>
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>
   <div class="container" id="blur">
    <div class="content">
    <header>
        <h1>Medicine Lodge<br>Greenhouse Plant Stats</h1>
    </header>   
    <body>
        <center>
        <div id="waterSchedule" style="color: black;">
            <center><br>Edit Watering Schedule</center>
            <p style="font-size: 22px; color: white;">&nbsp;&nbsp;&nbsp;&nbsp;Row 1's Current Schedule:&nbsp;&nbsp;&nbsp;&nbsp;
                <span style="font-weight: lighter;">
                    <input type="number" value="5" style="height: 30px; width: 40px; font-size: 20px;"> minutes every 
                    <input type="number" value="5" style="height: 30px; width: 40px; font-size: 20px;"> hours</span>
            </p>
            <br>
            <p style="font-size: 22px; color: white;">&nbsp;&nbsp;&nbsp;&nbsp;Row 2's Current Schedule:&nbsp;&nbsp;&nbsp;&nbsp;
                <span style="font-weight: lighter;">
                    <input type="number" value="15" style="height: 30px; width: 40px; font-size: 20px;"> minutes every 
                    <input type="number" value="12" style="height: 30px; width: 40px; font-size: 20px;"> hours</span>
            </p>  
            <input onclick="toggle()" type="button" id="water" value="Save"/> <!-- saves the new watering schedule -->
        </div>
        </center>
        <form method="POST" action="index.php">
            <center><input type="submit" id="back" value="Back to the homepage"/></center> <!-- takes user back to main page -->
        </form>
        <!-- crediting icon creator -->
        <div style="bottom: 0; position: fixed;">Icons made by <a style="color: rgb(255, 178, 106);" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a style="color:rgb(255, 178, 106);" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
     </div>
    </div>
        <div id="popup">
            <input onclick="toggle()" type="image" id="exit" src="cancel.png"/>
            <center><p>New watering schedule saved!</p></center>
        </div>

            <!-- </form> -->

        <!-- <div id="changeNames">
            <center><br>Edit Row Names</center>
        </div> -->
    </body>
</html>