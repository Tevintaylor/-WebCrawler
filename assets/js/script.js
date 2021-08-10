 var timer;
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

     var grid = $(".imageResults");
     grid.on("layoutComplete", function() {
         $(".gridItem img").css("visibility", "visible")
     })

     grid.masonry({
         // options
         itemSelector: '.gridItem',
         columnWidth: 200,
         gutter: 5,
         isInitLayout: false
     });

     $("[data-fancybox]").fancybox();
 });

 function loadImage(src, className) {
     var image = $("<img>");
     image.on("load", function() {
         $("." + className + " a").append(image);

         clearTimeout(timer);
         timer = setTimeout(function() {
             $(".imageResults").masonry();
         }, 100);
     });

     image.on("error", function() {
         $("." + className).remove();
         $.post("ajax/setBroken.php", { src: src })
     });

     image.attr("src", src);

 }

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