var timesArray = [];

function toggle() { //toggle for the admin mode
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');  //when the gear is clicked, the blur is initiated
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

/*
function fillTime() {
    timesArray = [];
    timesArray[];
}
*/


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
