$(document).ready(function() {
    $("#musicContent").hide();
    $("#peopleContent").hide();

    $("#music").click(function(){
        $("#musicContent").show();
        $("#peopleContent").hide();
    });
    
    $("#people").click(function(){
        $("#peopleContent").show();
        $("#musicContent").hide();
    });
});