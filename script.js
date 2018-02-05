function bg() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
     document.body.style.background = bgColor;
    }

bg();
var tw="";
var auth ="";

var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
function displayQuote (){
$.getJSON(url, function(data){
  tw = data.quoteText;
   $("blockquote").html(data.quoteText);
  if (data.quoteAuthor){
      $("#author").html("- "+data.quoteAuthor);
     auth = " -" +data.quoteAuthor;
  }else{
    auth = "- Anonymous";
    $("#author").html("- Anonymous");
  }
  });}

$(document).ready(function() {
  $('#basicModal').modal({ show: true});
   $("blockquote").css("color", "#4682B4");
      displayQuote ();
    $(".btn-primary").on("click", function(){
     displayQuote ();
      $(".btn-tw").addClass("tweet");
      $("body").css("background-color", bg());
       });
  });


$(".btn-tw").on("click", function(){

  window.open("https://twitter.com/intent/tweet?text="+tw+auth);
         });
