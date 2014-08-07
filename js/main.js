$(function(){

  $(".content").hide("fast", function(){

    $("#myself").fadeIn(2000, function(){
      $(".controls").css({"color": "#aaa", "font-size": ".8em"});
    });
  });


  $(".controls, .control").on("click", function(event){
    event.preventDefault();
    var divName = $(this).attr("target");
    hideAllShowOne(divName);
  });

  var hideAllShowOne = function(divName) {
    $(".content").hide();
    $("#" + divName).fadeIn("slow");
  };


  $(".details-container").hide(true);
  $(".details-toggle").on("click", function(){
    var button = this;
    var target = $(this).attr("target");
    $("#"+target).slideToggle("slow", function(){
      var text = $(button).text();
      var html = "";
      if (text == "more details ...") {
        html = "hide";
      } else {
        html = "more details ...";
      }

      $(button).html(html);
    });
  });
});