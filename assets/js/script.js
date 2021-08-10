$(document).ready(function() {
    $(".result").on("click", function() {
        console.log("i was clicked");

        var url = $(this).attr("href");
        console.log(url)

        var id = $(this).attr("data-linkId");
        console.log(id)


        if (!id) {
            alert("data-linkId attribute not specified")
        }

        increaseLinkClicks(id, url);
        //return false; PREVENTS THE LINK FROM GOING TO A PAGE WHEN CLICKED
        return false;
    });
});

function increaseLinkClicks(linkId, url) {
    $.post("ajax/updateLinkCount.php", { linkId: linkId })
        .done(function(result) {
            if (result != "") {
                alert(result);
                return;
            }
            window.location.href = url;
        });
}