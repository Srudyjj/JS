//https://jsonplaceholder.typicode.com/posts
const http = new EasyHTTP();
http.get('https://jsonplaceholder.typicode.com/posts1', function(err, posts) {
	if(err) {
		console.log(err)
	} else {
		console.log(posts);
	}
});