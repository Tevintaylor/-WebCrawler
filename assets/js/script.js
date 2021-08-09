$(document).ready(function() {
    $(".result").on("click", function() {
        console.log("i was clicked");
        //return false; PREVENTS THE LINK FROM GOING TO A PAGE WHEN CLICKED
        return false;
    });
});