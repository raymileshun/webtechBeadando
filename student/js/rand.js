
$("#randomCarButton").click(function() {
  randomCar();
  $('#carForYou').hide();

});


function randomCar() {
  $.get('/cars', function(cars) {
    var rand = cars[Math.floor(Math.random() * cars.length)];
    alert(
      "Your car is: "+
      rand.manufacturer+" "+
      rand.name
    );

  });
}



          $.each($("#imageTable .imageRef"), function (mbIndex, mbValue) {
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

              }
            });
          });
