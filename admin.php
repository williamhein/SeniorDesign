<!DOCTYPE html>
<html lang="en">
   <meta charset="UTF-8">
   <title>Smart Garden</title>
   <link rel="stylesheet" href="styles.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
   <script src="adminscript.js"></script>
   <script src="jquery.knob.js"></script>
   <div class="container" id="blur">
    <div class="content">
    <header>
        <h1>Medicine Lodge<br>Greenhouse Plant Stats</h1>
    </header>   
    <body>
        <center>
        <div id="waterSchedule" style="color: black;">
            <center><br>Edit Watering Schedule</center>
            <p style="font-size: 45px; color: white;">
                <!--<span style="font-weight: lighter; line-height:20px;">-->
                    Start Time:
                    <br>
                    <span style="font-weight: lighter;font-size: 45px;">
                    <input id = "r1hs" type="text" class="dial" data-min="1" data-max="12" data-height="250px" data-fgColor="#b2db94" value="12">
                    :
                    <input id = "r1ms" type="text" class="dial" data-min="0" data-max="59" data-height="250px" data-fgColor="#b2db94" value="0">
                    <select class="dropdown" id="r1dds" style = "font-family: 'Quicksand', sans-serif, Arial; font-size: 18px">
					    <option onclick="" value="0">AM</option>
					    <option onclick="" value="12">PM</option>
					</select>
                    </span>
                <br>
                    End Time:
                    <br>
                    <span style="font-weight: lighter;font-size: 45px;">
                    <input id = "r1he" type="text" class="dial" data-min="1" data-max="12" data-height="250px" data-fgColor="#b2db94" value="12">
                    :
                    <input id = "r1me" type="text" class="dial" data-min="0" data-max="59" data-height="250px" data-fgColor="#b2db94" value="15">
                    <select class="dropdown" id="r1dde" style = "font-family: 'Quicksand', sans-serif, Arial; font-size: 18px">
					    <option onclick="" value="0">AM</option>
					    <option onclick="" value="12">PM</option>
					</select>
                    </span>
                <!--</span>-->
                <hr>
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