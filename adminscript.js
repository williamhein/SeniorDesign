var timesArray = [];
var numOfRows = 0;
var rows = [];

window.onload = function() {
    this.addRow();
};

function toggle() { //toggle for the admin mode
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');  //when the gear is clicked, the blur is initiated
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    save();

}

function getMySQLTime(h,m,ap) {
    if (ap == "am")
        return ((h >= 0 && h <= 9) ? "0" + h : ((h == 12)? "0" : h )) + ":" + ((m >= 0 && m <= 9) ? "0" + m : m) + ":00";
    else
    {
        if (h == 12)
            return "12" + ((m >= 0 && m <= 9) ? "0" + m : m) + ":00";
        else
            return (h+12) + ":" + ((m >= 0 && m <= 9) ? "0" + m : m) + ":00";
    }
}

function addRow() {
    if (rows >= 20) return;

    rows[numOfRows] = document.createElement("div");
    rows[numOfRows].innerHTML =
   ' <div id="r'+ numOfRows + '" style="color: white;">'
   +'        <div style="text-align: left; width: 70%; color: white;">Start Time:</div>'
   +'        <br>'
   +'        <span style="font-weight: lighter; font-size: 140px; color: white;">'
   +'            <input id = "r'+ numOfRows + 'hs" type="text" class="dial" data-min="1" data-max="12" data-height="110px" data-fgColor="#b2db94" value="12">'
   +'            :'
   +'            <input id = "r'+ numOfRows + 'ms" type="text" class="dial" data-min="0" data-max="59" data-height="110px" data-fgColor="#b2db94" value="0">'
   +'            <select class="dropdown" id="r'+ numOfRows + 'dds" style = "font-family: \'Quicksand\', sans-serif, Arial; font-size: 40px">'
   +'                <option onclick="" value="0">AM</option>'
   +'                <option onclick="" value="12">PM</option>'
   +'            </select>'
   +'        </span>'
   +'    <br>'
   +'        <div style="text-align: left; width: 70%; color: white;">End Time:</div>'
   +'        <br>'
   +'        <span style="font-weight: lighter;font-size: 140px; color: white;">'
   +'            <input id = "r'+ numOfRows + 'he" type="text" class="dial" data-min="1" data-max="12" data-height="110px" data-fgColor="#b2db94" value="12">'
   +'            :'
   +'            <input id = "r'+ numOfRows + 'me" type="text" class="dial" data-min="0" data-max="59" data-height="110px" data-fgColor="#b2db94" value="15">'
   +'            <select class="dropdown" id="r'+ numOfRows + 'dde" style = "font-family: \'Quicksand\', sans-serif, Arial; font-size: 40px">'
   +'                <option onclick="" value="0">AM</option>'
   +'                <option onclick="" value="12">PM</option>'
   +'            </select>'
   +'        </span>'
   +'    <hr>'
   +'</div>';
   document.getElementById("waterSchedule").appendChild(rows[numOfRows]);

   timesArray["r"+ numOfRows + "hs"] = 12;
   timesArray["r"+ numOfRows + "ms"] = 0;
   timesArray["r"+ numOfRows + "he"] = 12;
   timesArray["r"+ numOfRows + "me"] = 15;

   numOfRows++;

   $(function() {
    $(".dial").knob({
        format : function (value) {
            return (value >= 0 && value <= 9) ? "0" + value : value ;
        },
        release : function (value) {
            timesArray[this.$.attr('id')] = value;
            console.log(timesArray[this.$.attr('id')]);
            console.log(this.$.attr('id'));
        }
    });
});
}

function subRow() {
    if (numOfRows == 1) return;
    numOfRows--;
    rows[numOfRows].innerHTML = "";
    document.getElementById("waterSchedule").removeChild(rows[numOfRows]);
    timesArray["r"+ numOfRows + "hs"] = undefined;
    timesArray["r"+ numOfRows + "ms"] = undefined;
    timesArray["r"+ numOfRows + "he"] = undefined;
    timesArray["r"+ numOfRows + "me"] = undefined;
}

$(function() {
    $(".dial").knob({
        format : function (value) {
            return (value >= 0 && value <= 9) ? "0" + value : value ;
        },
        release : function (value) {
            timesArray[this.$.attr('id')] = value;
            console.log(timesArray[this.$.attr('id')]);
        }
    });
});

function save() {
    for (var i = 0; i < numOfRows; i++)
    {
        var timeStringS = getMySQLTime(timesArray["r"+ i + "hs"],timesArray["r"+ i + "ms"], document.getElementById("r"+ numOfRows + "dds").value);
        var timeStringE = getMySQLTime(timesArray["r"+ i + "he"],timesArray["r"+ i + "me"], document.getElementById("r"+ numOfRows + "dde").value);
        console.log(timeStringS + " --> " + timeStringE);
    }
}