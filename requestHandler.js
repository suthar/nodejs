var querystring=require("querystring"),
    fs=require("fs"),
    formidable = require("formidable");

function start(response, postData){
    console.log("Start request called");
    //response.write("start request called");
    var body = 
	'<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" enctype="multipart/form-data" method="post">'+
	'<input type="file" name="upload" multiple="multiple">'+
	'<input type="submit" value="Upload file" />'+
	'</form>'+
	'</body>'+
	'</html>'
	;
    response.write(body)
    response.end()
}

function upload(response, postData){
    console.log("Upload request called");
    response.write("Upload request called\n");
    response.write("You sent: "+querystring.parse(postData).text);
    response.end()
}

function home(response){
    response.write("Its simple get request at home");
    response.end()
}

function show(response, postData){
    console.log("request Handler show get called");
    fs.readFile("/tmp/test.jpg", "binary", function(error, file){
	if (error){
	    response.writeHead(500, {"Content-Type":"text/plain"});
	    response.write(error+'\n');
	    response.end()
	}else{
	    response.writeHead(200, {"Content-Type":"image/jgp"});
	    response.write(file, "binary")
	    response.end()
	}
    })
}

exports.start=start
exports.upload=upload
exports.home=home
exports.show=show
