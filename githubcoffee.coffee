username = process.argv[2]

https = require("https")

options = 
	host : 'api.github.com'
	path : "/users/#{username}/repos"
	method : 'GET'
	headers: 
		'user-agent': 'omarali1'


console.log("Repos:")
request = https.request(options, (response) ->
	body = ""
	num = 0
	response.on("data", (d) ->
		body = body + d
	)
	
	response.on("end", () ->
		json = JSON.parse("#{body}")
		for j, i in json
			num += 1
			console.log("repo" + num + " : " + j.name)
		
		console.log("Total repos = " + num)

	)
)

request.end() 
