var username = process.argv[2];

var https = require("https");

var options = {
	host : 'api.github.com',
	path : '/users/' + username.toString('utf8') + '/repos',
	method : 'GET',
	headers: {'user-agent': 'omarali1'}
} ;

console.log("Repos:");
var request = https.request(options, function(response){
	var body = "";
	var num = 0;
	response.on("data", function(d){
		body += d;
	});

	response.on("end", function(){
		var json = JSON.parse(body.toString("utf8"));
		json.forEach(function(j){
			num += 1;
			console.log("repo" + num + " : " + j.name);
		});
		
		console.log("Total repos = " + num);

	});
});

request.end();