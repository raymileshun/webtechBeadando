function loadCars() {


  $.get('/manufacturerNames', function(names) {
    $("#manufacturerSelector").empty();
    for(var man of names) {
      $('#manufacturerSelector').append('<option>' + man + "</option>");
    }
  });

  $.get('/cars', function(cars) {
    $("#carContainer").empty();
    // $("#carContainer").append(loadCarTemplate(cars));

    var table= $("<table></table>");
    $("#carContainer").append(table);
    $("#carContainer").find("table").append("<tr><th>Car name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Year of making</th><th>Available</th><th>Horsepower</th></tr>");
    for(var car of cars){
      $("#carContainer").find("table").append(loadCarTemplate(car));
    }


              $('#carForm').on('submit', function(e) {
                e.preventDefault();
                $.ajax(
                  {
                    url: '/addCar',
                    type: "post",
                    data: $('#carForm').serialize(),
                    success: function(data) {
                      alert("Car added!");
                      loadCars();
                    },
                    error: function() {
                      alert("Something went wrong!");
                    }
                  });
                });

    });

  }


  function getManufacturerData(name) {
    document.cookie = "name=" + name;
    $("#carContainer").empty();
    $.get('/manufacturer', function(cars) {
      $("#carContainer").append("<table></table>");
      $("#carContainer").find("table").append("<tr><th>Car name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Year of making</th><th>Available</th><th>Horsepower</th></tr>");
      for(var man of cars){
        $("#carContainer").find("table").append(loadCarTemplate(man));
      }
    });

  }






  // function loadCarTemplate(objects){
  //    function template(obj){return "<tr onclick="+"getManufacturerData('"+obj.manufacturer+"')"+"><td>" + obj.name + "</td><td>" +
  //       obj.consumption + "</td><td>" +
  //       obj.color + "</td><td>" +
  //       obj.manufacturer + "</td><td>" +
  //       obj.year + "</td><td>" +
  //       obj.available + "</td><td>" +
  //       obj.horsepower +
  //       "</td></tr>";
  //     }
  //
  //   var table= '<table><tr><th>Car name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Year of making</th><th>Available</th><th>Horsepower</th></tr>';
  //   for(var ob of objects){
  //     table= table+template(ob);
  //   }
  //   table=table+"</table>"
  //   return table;
  // }



  function loadCarTemplate(obj){

    var template= $("<tr onclick="+"getManufacturerData('"+obj.manufacturer+"')"+"><td>" + obj.name + "</td><td>" +
    obj.consumption + "</td><td>" +
    obj.color + "</td><td>" +
    obj.manufacturer + "</td><td>" +
    obj.year + "</td><td>" +
    obj.available + "</td><td>" +
    obj.horsepower +
    "</td></tr>");
    return template;

  }
