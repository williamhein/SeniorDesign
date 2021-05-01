<!DOCTYPE html>
<html lang="en">
   <meta charset="UTF-8">
   <title>Smart Garden</title>
   <link rel="stylesheet" href="styles.css">
   <script src="adminscript.js"></script>
   <div class="container" id="blur">
    <div class="content">
    <header>
        <h1>Medicine Lodge<br>Greenhouse Plant Stats</h1>
    </header>   
    <body>
        <center>
        <div id="waterSchedule" style="color: black;">
            <center><br>Edit Watering Schedule</center>
            <p style="font-size: 22px; color: white;">
                <span style="font-weight: lighter;">
                    Start Time:
                    <input type="time" id="number"  onkeydown="return false" style="height: 30px; width: 40px; font-size: 20px;"><span class="validity"></span> 
                    End Time:
                    <input type="time" id="number"  onkeydown="return false" style="height: 30px; width: 40px; font-size: 20px;">
<!-- value="5" min="1" max="30" -->
<!-- value="5" min="1" max="72" -->

                </span>
            </p>
            <input onclick="toggle()" type="submit" id="water" value="Save"/> <!-- saves the new watering schedule -->
        </div>
        </center>
        <form method="POST" action="index.php">
            <center><input type="submit" id="back" value="Back to the homepage"/></center> <!-- takes user back to main page -->
        </form>
        <!-- crediting icon creator -->
        <div style="bottom: 0; position: fixed; background-color: white; width: 100%; font-family: 'Quicksand', sans-serif, Arial;" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a style="color:rgb(255, 178, 106);" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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