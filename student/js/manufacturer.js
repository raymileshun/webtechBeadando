


function loadManufacturers() {


	return $.get('/manufacturers', function(manufacturers) {
		$("#manufacturerContainer").empty();

		$("#manufacturerContainer").append("<table></table>");
		$("#manufacturerContainer").find("table").append("<tr><th>Manufacturer name</th><th>Country</th><th>Founded in</th></tr>");
		for(var man of manufacturers){
			$("#manufacturerContainer").find("table").append(loadManufacturerTemplate(man));
		}




							$('#manufacturerForm').on('submit', function(e) {
								e.preventDefault();
								$.ajax(
									{
										url: '/addManufacturers',
										type: "post",
										data: $('#manufacturerForm').serialize(),
										success: function(data) {
											alert("Manufacturer added!");
											loadManufacturers();
										},
										error: function() {
											alert("Something went wrong!");
										}
									});
								});

		});

	}

	function loadManufacturerTemplate(object){
		var template=$("<tr><td>" + object.name + "</td><td>" +
		object.country + "</td><td>" +
		object.founded +
		"</td></tr>");
		return template;
	}
