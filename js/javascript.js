$(document).ready(function () {
  $("#insert").click(function () {
    var value = $("#content").val();
    $("#txt").append( value +"<br><br>");
  });
});

/*
function insert () {
  var value = document.getElementById("content").value;
  document.getElementById("txt").innerHTML += value +"<br>"+"<br>";
  
*/
// PAGE 2

$(document).ready(function () {
  $("#blueviolet").click(function () {
    $("#text").css("color", "blueviolet");
  });
  $("#coral").click(function () {
    $("#text").css("color", "coral");
  });
  $("#blue").click(function () {
    $("#text").css("color", "blue");
  });
  $("#large ").click(function () {
    $("#text p").css("font-size", 20 + "px");
  });
  $("#xlarge ").click(function () {
    $("#text p").css("font-size", 25 + "px");
  });
  $("#xxlarge").click(function () {
    $("#text p").css("font-size", 35 + "px");
  });
});    

// PAGE 3

$(document).ready(function () {
    $("#cont1 p").hide();
    $("#click1").click(function () {
      $("#cont1 p").slideToggle(1000);

    })

    $("#cont2 p").hide();
    $("#click2").click(function () {
      $("#cont2 p").slideToggle(1000);

    })

    $("#cont3 p").hide();
    $("#click3").click(function () {
      $("#cont3 p").slideToggle(1000);

    })

    $("#cont4 p").hide();
    $("#click4").click(function () {
      $("#cont4 p").slideToggle(1000);

    })

});
    
      

