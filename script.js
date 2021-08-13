$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Hey there</li>")
      $('li').click(function(){
        $("ul#user").children("li").first().click(function() {
          alert('hi');
        });
        $("ul#webpage").children("li").first().click(function() {
          alert('hi');
        });
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Why are you coping me?</li>")
    $('li').click(function() {
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        alert('really?');
      });
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul").prepend("<li>Cant wait for you to stop coping me</li>")
    $('li').click(function(){
      $("ul#user").children("li").first().click(function() {
        alert('bye');
      });
      $("ul#webpage").children("li").first().click(function() {
        alert('bye');
      });
    });
  });
});





