$(document).ready(function() {


  $("#content").load("mainpage.html");
  // initCarButton();



  $.each($("#topnav .menuButton"), function (mbIndex, mbValue) {
    $(mbValue).click(function (event) {
      event.preventDefault();
      var page =$(this).find('a').attr("href");
      if(page==="car"){
        $("#content").load("cars.html");
        loadCars();
        $("#contactButton").hide();

      } else if(page==="manufacturer"){
        $("#content").load("manufacturers.html");
        loadManufacturers();
        $("#contactButton").hide();
      } else {
        open("index.html", "_self");
      }
    });
  });




  $("#contactButton").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#contact").offset().top
    }, 2000);

    $('.greybox-contact').css('background-color','yellow');
    setTimeout(function(){ $('.greybox-contact').css('background-color','#c9c4c3'); },2000)
  });







  function initCarButton(){
    $("#carForYou .randomCarButton").click(function() {
      randomCar();
      $('#carForYou').hide();

    });



    function randomCar() {
      $.get('/cars', function(cars) {
        var rand = cars[Math.floor(Math.random() * cars.length)];
        alert(
          "A te autód: "+
          rand.manufacturer+" "+
          rand.name
        );

      });
    }
  }







});
