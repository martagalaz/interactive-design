// Declare variables
var     randomX = 0,
        randomY = 0,
        colors = [ "black", "#9933FF", "blue", "yellow", "#FF9900", "red", "white", "#FF33CC"],
        counter = 0;


// Get content from Flickr
function launchAPI () {

  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: "single flower",
    tagmode: "any",
    format: "json",
  },
  function(data) {
    $.each(data.items, function(i,item){
      randomX = Math.floor((Math.random() * 360) + 1);
      randomY = Math.floor((Math.random() * 360) + 1);
      $("<img />").attr("src", item.media.m).addClass("draggable image-" + i).appendTo("#images").css({"left": randomX,"top": randomY }).draggable();
      if ( i == 14) return false;
    });
  });
}

launchAPI ();




// Changing background Color
$('.buttonnavcolor').click(function(){
    console.log("clicked");
    var currentColor = colors[counter % colors.length];
    $('body').css("background", currentColor);
    counter++;
});