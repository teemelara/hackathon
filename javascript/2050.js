$(document).ready(function() {
    
    $("#music").click(function(){
        $("#musicContent").show();
        $("#peopleContent").hide();
        $("#placesContent").hide();
    });
    
    $("#people").click(function(){
        $("#peopleContent").show();
        $("#musicContent").hide();
        $("#placesContent").hide();
    });
    
    $("#place").click(function(){
        $("#placesContent").show();
        $("#peopleContent").hide();
        $("#musicContent").hide();
    });
});