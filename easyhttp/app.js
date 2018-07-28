//https://jsonplaceholder.typicode.com/posts
//Get posts
const http = new EasyHTTP();
http.get('https://jsonplaceholder.typicode.com/posts/',(err, posts) => {
	if(err) {
		console.log(err)
	} else {
		console.log(posts);
	}
});

//Get one post(?userId=)
// http.get("https://jsonplaceholder.typicode.com/posts/6", function(err, post) {
// 	if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create POST
const data = {
	title: 'Custom Post',
	body: 'This is custom post'
};

// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post) {
// 	if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// Update post (PUT)
// http.put("https://jsonplaceholder.typicode.com/posts/6", data, function(err, post) {
// 	if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete
// http.get('https://jsonplaceholder.typicode.com/posts/100', function(err, response) {
// 	if(err) {
// 		console.log(err)
// 	} else {
// 		console.log(response);
// 	}
// });
