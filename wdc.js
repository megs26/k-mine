

var source = $('#dog-template').html();
var template = Handlebars.compile(source);
var dogs = JSON.parse(localStorage.dogs);
var $dogs_list_container = $('#dog-list-container-element');
dogs.forEach(function(dog){
	var html = template(dog);
	$dogs_list_container.append(html);
});