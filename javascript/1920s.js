/* global $ */
$(document).ready(function(){
    $("#music").hide();
    $("#people").hide();
    $("#place").hide();

    $("#musicbutton").click(function(){
        $("#music").show();
        $("#daily").hide();
        $("#people").hide();
        $("#place").hide();
    });
    $("#peoplebutton").click(function(){
        $("#people").show()
        $("#daily").hide();
        $("#music").hide();
        $("#place").hide();
    });
    $("#placebutton").click(function(){
        $("#place").show()
        $("#daily").hide();
        $("#music").hide();
        $("#people").hide();
    });
    
    $("#dailybutton").click(function(){
        $("#daily").show()
        $("#music").hide();
        $("#people").hide();
        $("#place").hide();
    });
    
});
