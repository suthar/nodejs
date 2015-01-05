function route(pathname, handle, response, postData) {
    console.log("About to route a request for "+pathname);
    console.log(typeof(handle[pathname]));
    if (typeof(handle[pathname]) === 'function'){
	console.log("got passed with postData "+postData);
	handle[pathname](response, postData);
    }else{
	console.log("No handler to handle such request.");
	response.write("No handler to handle such request.");
	response.end()
    }
}
exports.route = route;
