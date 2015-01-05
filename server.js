var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	if (request.method == 'POST')
	    console.log("Its post Request");
	else
	    console.log("Its get Request");

	var pathname = url.parse(request.url).pathname;
	var postData = ""
	request.setEncoding("utf8");
	//Post data event when new chunk of post data arrive
	request.addListener("data", function(postDataChunk){
	    postData = postData + postDataChunk;
	    console.log("Recieved post data chunk "+postDataChunk);
	})
	//Post data event when all chunk has been arrived    
	request.addListener("end", function(){
	    route(pathname, handle, response, postData);
	})
	//route(pathname, handle, response)
    }
    http.createServer(onRequest).listen(8888);
    console.log("server started");
}
exports.start = start;
